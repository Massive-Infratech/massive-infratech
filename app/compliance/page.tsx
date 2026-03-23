"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FileText, ShieldCheck, FileSignature, Building, Stamp, CheckCircle2 } from "lucide-react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}

const registrations = [
  {
    title: "Certificate Of Incorporation",
    icon: Building,
    image: "https://plus.unsplash.com/premium_photo-1661549683908-b11e9855c469?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=800",
    details: [
      { label: "CIN", value: "U45400UP2015PTC070554" },
      { label: "Incorporation Date", value: "07 May 2015" },
      { label: "Issued by", value: "Ministry of Corporate Affairs" }
    ]
  },
  {
    title: "GST Registration",
    icon: FileSignature,
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=800",
    details: [
      { label: "GSTIN", value: "09AAJCM7566R2ZA" },
      { label: "Type", value: "Regular" },
      { label: "Valid From", value: "03/03/2015" }
    ]
  },
  {
    title: "PAN Registration",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800",
    details: [
      { label: "PAN NO", value: "AAJCM7566R" },
      { label: "Department", value: "Income Tax Department" },
      { label: "Government", value: "Government of India" }
    ]
  },
  {
    title: "MCA Compliance",
    icon: Stamp,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800",
    details: [
      { label: "ROC", value: "Uttar Pradesh" },
      { label: "Status", value: "Stamp Duty Paid" },
      { label: "Identity", value: "Corporate Verified" }
    ]
  }
]

export default function Compliance() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-neutral-950 selection:bg-blue-600 selection:text-white flex flex-col">
      
      <section className="relative w-full bg-blue-600 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/50 text-yellow-300 font-bold text-sm mb-6 backdrop-blur-md border border-blue-400/50">
              <ShieldCheck size={18} />
              <span>100% Verified & Compliant</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight uppercase leading-tight">
              Certifications <span className="text-yellow-400">& Registrations</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-blue-100 font-medium max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              All statutory registrations and legal compliances are meticulously maintained, strictly adhering to the regulatory frameworks of the Government of India.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mt-10">
              <span className="bg-blue-700/50 backdrop-blur-md border border-blue-500/50 text-white text-sm font-bold px-6 py-3 rounded-full flex items-center gap-2">
                <CheckCircle2 size={18} className="text-yellow-400" /> Incorporated Since 2015
              </span>
              <span className="bg-blue-700/50 backdrop-blur-md border border-blue-500/50 text-white text-sm font-bold px-6 py-3 rounded-full flex items-center gap-2">
                <CheckCircle2 size={18} className="text-yellow-400" /> GST Registered
              </span>
              <span className="bg-blue-700/50 backdrop-blur-md border border-blue-500/50 text-white text-sm font-bold px-6 py-3 rounded-full flex items-center gap-2">
                <CheckCircle2 size={18} className="text-yellow-400" /> MCA Approved
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 w-full flex-grow">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10"
        >
          {registrations.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group bg-white dark:bg-neutral-900 rounded-[2rem] overflow-hidden shadow-xl border border-neutral-100 dark:border-neutral-800 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col sm:flex-row"
            >
              <div className="relative w-full sm:w-2/5 h-56 sm:h-auto overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white dark:bg-neutral-900 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
              </div>

              <div className="p-8 w-full sm:w-3/5 flex flex-col justify-center">
                <h2 className="text-2xl font-black text-neutral-900 dark:text-white mb-6 tracking-wide leading-tight">
                  {item.title}
                </h2>
                
                <div className="space-y-4">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="flex flex-col gap-1 border-b border-neutral-100 dark:border-neutral-800/50 last:border-0 pb-3 last:pb-0">
                      <span className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                        {detail.label}
                      </span>
                      <span className="text-sm font-black text-neutral-800 dark:text-neutral-200">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="w-full bg-[#FFD700] py-20 md:py-24 relative overflow-hidden mt-auto shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div className="mb-6 bg-white/20 p-4 rounded-full backdrop-blur-sm">
            <Stamp size={48} className="text-neutral-900" strokeWidth={2.5} />
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-neutral-900 mb-6 tracking-tight">
            Require official documentation?
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-800 mb-10 max-w-2xl font-bold leading-relaxed">
            Contact our administrative team for detailed compliance reports and official certification copies.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[#1A61FF] text-white hover:bg-neutral-900 rounded-full font-black text-lg md:text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Request Documents
          </Link>
        </div>
      </section>

    </div>
  )
}