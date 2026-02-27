"use client"

import { notFound, useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { ArrowLeft, Settings2, ShieldCheck, Wrench } from "lucide-react"
import { toolsData } from "@/lib/tools"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}

export default function ToolDetail() {
  const params = useParams()
  const slug = params?.slug as string

  if (!slug) return null

  const toolCategory = toolsData.find((t) => t.slug === slug)

  if (!toolCategory) {
    notFound()
  }

  return (
    <div className="w-full min-h-screen bg-white dark:bg-neutral-950 selection:bg-blue-600 selection:text-white flex flex-col">
      
      <section className="relative w-full bg-blue-600 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 mb-8">
          <Link 
            href="/tools" 
            className="inline-flex items-center text-yellow-400 font-bold hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Machinery
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/50 text-yellow-300 rounded-2xl mb-8 backdrop-blur-md border border-blue-400/50">
              <toolCategory.icon size={32} />
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight uppercase tracking-tight">
              {toolCategory.title}
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl text-blue-100 font-medium mb-8 leading-relaxed">
              {toolCategory.description}
            </motion.p>
            
            <motion.div variants={fadeUp}>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-black text-neutral-900 bg-yellow-400 hover:bg-yellow-500 rounded-full transition-all hover:scale-105 shadow-xl shadow-yellow-400/20"
              >
                Inquire About Equipment
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10"
          >
            <Image 
              src={toolCategory.image} 
              alt={toolCategory.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-overlay"></div>
            
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white dark:bg-neutral-900 p-5 rounded-3xl shadow-xl border border-neutral-100 dark:border-neutral-800 flex items-center gap-4">
              <div className="bg-yellow-400 p-3 rounded-2xl text-neutral-900">
                <ShieldCheck size={28} />
              </div>
              <div>
                <p className="font-black text-xl text-neutral-900 dark:text-white">Maintained</p>
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Ready for Site</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 w-full flex-grow">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-3 gap-12"
        >
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-neutral-900 dark:text-white uppercase tracking-tight">Fleet Overview</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium text-lg">
                {toolCategory.content}
              </p>
            </div>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-900 p-8 md:p-10 rounded-[2rem] border border-neutral-100 dark:border-neutral-800 h-fit shadow-lg">
            <h3 className="text-2xl font-black mb-8 text-neutral-900 dark:text-white flex items-center gap-3 uppercase tracking-tight border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <Settings2 className="text-blue-600 dark:text-blue-400 shrink-0" />
              Inventory Status
            </h3>
            <ul className="space-y-4">
              {toolCategory.inventory.map((item, idx) => {
                const [name, qty] = item.split(" - ")
                return (
                  <li key={idx} className="flex flex-col p-4 bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-100 dark:border-neutral-800 hover:border-blue-200 dark:hover:border-blue-900/50 transition-colors">
                    <span className="font-black text-neutral-800 dark:text-neutral-200">{name}</span>
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400 mt-1 flex items-center gap-1">
                       <span className="w-2 h-2 rounded-full bg-blue-600 inline-block"></span> 
                       {qty}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </motion.div>
      </section>

      <section className="w-full bg-[#FFD700] py-20 md:py-24 relative overflow-hidden mt-auto shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div className="mb-6 bg-white/20 p-4 rounded-full backdrop-blur-sm">
            <Wrench size={48} className="text-neutral-900" strokeWidth={2.5} />
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-neutral-900 mb-6 tracking-tight">
            Ready to secure this equipment?
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-800 mb-10 max-w-2xl font-bold leading-relaxed">
            Reserve your machinery today and ensure your massive project is built with the best tools in the industry.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[#1A61FF] text-white hover:bg-neutral-900 rounded-full font-black text-lg md:text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Check Availability
          </Link>
        </div>
      </section>

    </div>
  )
}