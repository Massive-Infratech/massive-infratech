"use client"

import { notFound, useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { CheckCircle2, ArrowLeft, Briefcase } from "lucide-react"
import { services } from "@/lib/services"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}

export default function ServiceDetail() {
  const params = useParams()
  const slug = params?.slug as string

  if (!slug) return null

  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="w-full min-h-screen bg-white dark:bg-neutral-950 selection:bg-blue-600 selection:text-white flex flex-col">
      
      <section className="relative w-full bg-blue-600 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 mb-8">
          <Link 
            href="/services" 
            className="inline-flex items-center text-yellow-400 font-bold hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Services
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/50 text-yellow-300 rounded-2xl mb-8 backdrop-blur-md border border-blue-400/50">
              <service.icon size={32} />
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight uppercase tracking-tight">
              {service.title}
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl text-blue-100 font-medium mb-8 leading-relaxed">
              {service.description}
            </motion.p>
            
            <motion.div variants={fadeUp}>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-black text-neutral-900 bg-yellow-400 hover:bg-yellow-500 rounded-full transition-all hover:scale-105 shadow-xl shadow-yellow-400/20"
              >
                Request a Consultation
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
              src={service.image} 
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-overlay"></div>
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
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-neutral-900 dark:text-white uppercase tracking-tight">Service Overview</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium text-lg">
                {service.content}
              </p>
            </div>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-900 p-8 md:p-10 rounded-[2rem] border border-neutral-100 dark:border-neutral-800 h-fit shadow-lg">
            <h3 className="text-2xl font-black mb-8 text-neutral-900 dark:text-white uppercase tracking-tight border-b border-neutral-200 dark:border-neutral-800 pb-4">Key Deliverables</h3>
            <ul className="space-y-5">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" size={24} />
                  <span className="font-bold text-neutral-800 dark:text-neutral-200 leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      <section className="w-full bg-[#FFD700] py-20 md:py-24 relative overflow-hidden mt-auto shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div className="mb-6 bg-white/20 p-4 rounded-full backdrop-blur-sm">
            <Briefcase size={48} className="text-neutral-900" strokeWidth={2.5} />
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-neutral-900 mb-6 tracking-tight">
            Need this specific service?
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-800 mb-10 max-w-2xl font-bold leading-relaxed">
            Our certified professionals are ready to integrate specialized solutions seamlessly into your workflow.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[#1A61FF] text-white hover:bg-neutral-900 rounded-full font-black text-lg md:text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Hire Our Experts
          </Link>
        </div>
      </section>

    </div>
  )
}