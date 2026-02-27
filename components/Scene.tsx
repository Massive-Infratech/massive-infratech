"use client"

import { useRef, useEffect, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Float, MeshDistortMaterial, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme } from 'next-themes'

useGLTF.preload('/construction_helmet.glb')
useGLTF.preload('/drilling_machine.glb')
useGLTF.preload('/rench.glb')
useGLTF.preload('/hammer.glb')
useGLTF.preload('/spanner.glb')

function GLTFModel({ path, scale = 1, color = null }: { path: string, scale?: number, color?: string | null }) {
  const { scene } = useGLTF(path)
  
  const clone = useMemo(() => {
    const clonedScene = scene.clone()
    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh
        if (mesh.material) {
          mesh.material = (mesh.material as THREE.Material).clone()
          const mat = mesh.material as THREE.MeshStandardMaterial
          mat.metalness = 0.5
          mat.roughness = 0.5
          mat.envMapIntensity = 1.0 
          if (color) {
            mat.color = new THREE.Color(color)
          }
        }
      }
    })
    return clonedScene
  }, [scene, color])

  return <primitive object={clone} scale={scale} />
}

function FloatingTool({ position, rotation, speed, scale = 1, modelPath, color = null }: any) {
  const ref = useRef<THREE.Group>(null)
  
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += speed * delta * 0.5
      ref.current.rotation.y += speed * delta * 0.75
    }
  })

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position} rotation={rotation} ref={ref}>
        <GLTFModel path={modelPath} scale={scale} color={color} />
      </group>
    </Float>
  )
}

function ParticleSpheres({ color }: { color: string }) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const count = 200 
  
  useEffect(() => {
    if (!meshRef.current) return
    const dummy = new THREE.Object3D()
    for (let i = 0; i < count; i++) {
      dummy.position.set(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 15
      )
      const scale = Math.random() * 0.03 + 0.01 
      dummy.scale.set(scale, scale, scale)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  }, [count])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial 
        color={new THREE.Color(color)} 
        emissive={new THREE.Color(color)} 
        emissiveIntensity={2} 
        toneMapped={false} 
        transparent 
        opacity={0.6} 
      />
    </instancedMesh>
  )
}

function InteractiveComplexGeometry() {
  const groupRef = useRef<THREE.Group>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const { resolvedTheme } = useTheme()
  
  // Grab the viewport dimensions from the Three.js camera
  const { viewport } = useThree()
  
  // Calculate responsive scale: 
  // At standard desktop sizes (viewport.width ~15), scale is 1.
  // On mobile (viewport.width ~4-5), scale smoothly shrinks down to ~0.4.
  const responsiveScale = Math.min(1, viewport.width / 10)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state, delta) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime()
      const targetX = mouse.current.y * 0.5
      const targetY = mouse.current.x * 0.5
      
      groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetX + Math.sin(time * 0.2) * 0.1, 4, delta)
      groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetY + time * 0.1, 4, delta)
    }
  })

  const isDark = resolvedTheme === 'dark'
  const primaryColor = isDark ? '#3b82f6' : '#94a3b8'   
  const secondaryColor = isDark ? '#1e3a8a' : '#e2e8f0' 

  return (
    <group ref={groupRef}>
      {/* Particles are kept OUTSIDE the responsiveScale group so they always fill the full screen width/height */}
      <ParticleSpheres color={primaryColor} />

      {/* The central globe and tools dynamically scale based on the screen size */}
      <group scale={responsiveScale}>
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
          <mesh>
            <icosahedronGeometry args={[3.5, 2]} />
            <meshStandardMaterial color={primaryColor} wireframe={true} transparent opacity={isDark ? 0.3 : 0.15} wireframeLinewidth={2} />
          </mesh>
          
          <mesh>
             <icosahedronGeometry args={[2.5, 16]} />
             <MeshDistortMaterial color={secondaryColor} distort={0.4} speed={2} roughness={0.1} metalness={0.9} transparent opacity={isDark ? 0.8 : 0.5} />
          </mesh>
        </Float>

        <FloatingTool position={[3.5, 2, -1.5]} rotation={[0.5, 0.2, 0]} speed={0.2} scale={2.5} modelPath="/construction_helmet.glb" color="#eab308" />
        <FloatingTool position={[-3.5, -0.5, 1]} rotation={[-0.5, 0.8, 0.5]} speed={0.2} scale={5.0} modelPath="/drilling_machine.glb" />
        <FloatingTool position={[2, -2.5, 2]} rotation={[0.1, 0.5, 1]} speed={0.2} scale={-0.010} modelPath="/rench.glb" />
        <FloatingTool position={[-2, 3, 1]} rotation={[0.4, -0.3, 0.2]} speed={0.2} scale={1.5} modelPath="/hammer.glb" />
        <FloatingTool position={[-1, -3.5, -1.5]} rotation={[-0.2, 0.6, -0.4]} speed={0.2} scale={0.05} modelPath="/spanner.glb" />
      </group>
    </group>
  )
}

function SceneLighting() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <>
      <ambientLight intensity={isDark ? 0.6 : 1.0} />
      <directionalLight position={[10, 10, 5]} intensity={isDark ? 2.5 : 1.5} castShadow={false} />
      <directionalLight position={[-10, -10, -5]} intensity={isDark ? 0.8 : 0.4} castShadow={false} />
    </>
  )
}

export default function Scene() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 opacity-80 dark:opacity-60 pointer-events-none bg-transparent">
      <Canvas 
        camera={{ position: [0, 0, 9], fov: 50 }}
        gl={{ powerPreference: "high-performance", antialias: false, alpha: true }}
        dpr={1} 
        onCreated={({ gl, scene, camera }) => {
          gl.compile(scene, camera)
        }}
      >
        <SceneLighting />
        <Suspense fallback={null}>
          <InteractiveComplexGeometry />
          <Environment preset="city" resolution={256} />
        </Suspense>
      </Canvas>
    </div>
  )
}