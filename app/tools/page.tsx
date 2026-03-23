"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Wrench, Settings2, Truck } from "lucide-react"
import { toolsData } from "@/lib/tools"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

export default function Tools() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-neutral-950 selection:bg-blue-600 selection:text-white flex flex-col">
      
      <section className="relative w-full bg-blue-600 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/50 text-yellow-300 font-bold text-sm mb-6 backdrop-blur-md border border-blue-400/50">
              <Settings2 size={18} />
              <span>Heavy Duty Equipment</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight uppercase leading-tight">
              Tools & <span className="text-yellow-400">Machinery</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-blue-100 font-medium max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Comprehensive infrastructure solutions powered by an industry-leading fleet of high-performance machinery, ready to tackle the most demanding projects.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 w-full flex-grow">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {toolsData.map((tool, index) => (
            <Link href={`/tools/${tool.slug}`} key={index}>
              <motion.div 
                variants={itemVariants}
                className="group bg-white dark:bg-neutral-900 rounded-[2rem] overflow-hidden shadow-lg border border-neutral-100 dark:border-neutral-800 hover:shadow-2xl transition-all duration-300 h-full flex flex-col hover:-translate-y-2"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={tool.image} 
                    alt={tool.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                  <div className="absolute bottom-6 left-6 z-20 flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-400 text-neutral-900 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <tool.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-wide uppercase">
                      {tool.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-grow font-medium leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 mt-auto flex justify-between items-center">
                    <span className="text-sm font-bold text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full">
                      {tool.inventory.length} Assets Listed
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 font-black inline-flex items-center group-hover:translate-x-2 transition-transform uppercase text-sm tracking-wider">
                      View Fleet →
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>

      <section className="w-full bg-[#FFD700] py-20 md:py-24 relative overflow-hidden mt-auto shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div className="mb-6 bg-white/20 p-4 rounded-full backdrop-blur-sm">
            <Truck size={48} className="text-neutral-900" strokeWidth={2.5} />
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-neutral-900 mb-6 tracking-tight">
            Need heavy-duty firepower?
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-800 mb-10 max-w-2xl font-bold leading-relaxed">
            Equip your site with our massive fleet of maintained, high-performance industrial machinery.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[#1A61FF] text-white hover:bg-neutral-900 rounded-full font-black text-lg md:text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Inquire About Equipment
          </Link>
        </div>
      </section>

    </div>
  )
}