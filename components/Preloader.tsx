"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useProgress } from "@react-three/drei"

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [minTimePassed, setMinTimePassed] = useState(false)
  
  // Track 3D loading state without tying it directly to the visual bar width
  const { progress, active } = useProgress()
  const hasStartedLoading = useRef(false)

  // If a 3D Canvas mounts and starts loading assets, mark it as true
  if (active) {
    hasStartedLoading.current = true
  }

  useEffect(() => {
    // Lock scrolling while the preloader is active
    document.body.style.overflow = "hidden"
    
    // 1. Ensure the preloader stays visible for at least 2.5 seconds 
    // so the user sees the smooth loading bar animation finish.
    const minTimer = setTimeout(() => {
      setMinTimePassed(true)
    }, 2500)
    
    // 2. Hard fallback just in case something stalls (max 6 seconds)
    const fallbackTimer = setTimeout(() => {
      setLoading(false)
      document.body.style.overflow = "unset"
    }, 6000)

    return () => {
      clearTimeout(minTimer)
      clearTimeout(fallbackTimer)
      document.body.style.overflow = "unset"
    }
  }, [])

  useEffect(() => {
    // Don't do anything until the smooth 2.5s animation is done
    if (!minTimePassed) return

    if (!hasStartedLoading.current) {
      // SCENARIO A: No 3D scene is on this page (e.g., About, Services)
      // We can safely dismiss the preloader immediately.
      setLoading(false)
      document.body.style.overflow = "unset"
    } else if (progress === 100 && !active) {
      // SCENARIO B: A 3D scene is on this page (e.g., Home)
      // Wait for it to hit 100% and finish compiling before dismissing.
      setLoading(false)
      document.body.style.overflow = "unset"
    }
  }, [minTimePassed, progress, active])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-white dark:bg-neutral-950"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="self-center mb-4 text-4xl font-black whitespace-nowrap text-blue-600 dark:text-blue-500 tracking-tighter">
              MASSIVE<span className="text-neutral-900 text-yellow-400">INFRATECH</span>
            </h1>
            <div className="w-48 h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full mx-auto overflow-hidden">
              <motion.div
                // The smooth, independent visual animation you liked
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
                className="h-full bg-blue-600 dark:bg-blue-500"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}