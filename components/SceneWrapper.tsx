"use client"

import dynamic from "next/dynamic"

// Dynamically import the Scene component with SSR disabled
const Scene = dynamic(() => import("@/components/Scene"), { 
  ssr: false 
})

export default function SceneWrapper() {
  return <Scene />
}