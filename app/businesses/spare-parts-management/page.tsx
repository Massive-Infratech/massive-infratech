"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  Settings, Cog, Truck, Box, ArrowRight, 
  CheckCircle2, RotateCcw, PenTool, Timer, 
  ShieldCheck, BarChart3, Database
} from "lucide-react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
}

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

export default function SparePartsManagement() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-neutral-950 selection:bg-blue-600 selection:text-white flex flex-col overflow-hidden">
      
      {/* 1. Consistent Hero Section */}
      <section className="relative w-full bg-blue-600 pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1537726235470-8504e3beef77?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-600/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/50 backdrop-blur-md border border-blue-400/50 text-yellow-300 font-bold text-sm mb-8 shadow-xl">
              <Settings size={18} />
              <span className="uppercase tracking-wide">Precision Engineering</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-[1.1] tracking-tight uppercase">
              Spare Parts <br/>
              <span className="text-yellow-400">
                & Workshop
              </span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl">
              Advanced CNC machining, heavy equipment refurbishment, and strategic inventory management designed to completely eliminate procurement delays and extend asset life.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-black text-neutral-900 bg-yellow-400 hover:bg-yellow-300 rounded-full transition-all hover:scale-105 shadow-xl shadow-yellow-400/20">
                Source a Component
              </Link>
              <Link href="#capabilities" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-500/30 hover:bg-blue-500/50 border border-blue-400/30 rounded-full transition-all backdrop-blur-sm">
                View Workshop Specs
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden" animate="visible" variants={slideInRight}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative h-[450px] lg:h-[550px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 group">
              <Image 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Workshop Precision" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 via-transparent to-transparent mix-blend-multiply"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md p-5 rounded-3xl border border-white/20 dark:border-neutral-700/50 shadow-xl flex items-center justify-between">
                <div>
                  <h3 className="font-black text-xl text-neutral-900 dark:text-white mb-1">Sub-Micron</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium text-sm">Machining Tolerances</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-neutral-900 shrink-0">
                  <Cog size={24} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="relative z-20 -mt-10 lg:-mt-20 max-w-7xl mx-auto px-4 w-full">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} 
          className="grid md:grid-cols-4 gap-4 lg:gap-6"
        >
          {[
            { value: "50K+", label: "Parts Inventoried", icon: Box },
            { value: "10+", label: "Multi-Axis CNCs", icon: PenTool },
            { value: "24hr", label: "Emergency Dispatch", icon: Truck },
            { value: "Zero", label: "Procurement Lag", icon: Timer }
          ].map((stat, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-white dark:bg-neutral-900 rounded-3xl p-6 lg:p-8 shadow-xl shadow-blue-900/5 border border-neutral-100 dark:border-neutral-800 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
              <stat.icon size={32} className="text-blue-600 dark:text-blue-400 mb-4 group-hover:rotate-90 transition-transform duration-500" />
              <h3 className="text-3xl lg:text-4xl font-black text-neutral-900 dark:text-white mb-2">{stat.value}</h3>
              <p className="font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Unique Animated Marquee */}
      <div className="w-full bg-neutral-900 dark:bg-black py-6 mt-12 overflow-hidden flex whitespace-nowrap border-y border-neutral-800">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex gap-12 text-neutral-600 dark:text-neutral-500 font-black text-2xl lg:text-3xl uppercase tracking-widest items-center"
        >
          <span>Advanced Machining</span> <span className="text-yellow-500">•</span>
          <span>Asset Refurbishment</span> <span className="text-yellow-500">•</span>
          <span>Reverse Engineering</span> <span className="text-yellow-500">•</span>
          <span>Vendor Managed Inventory</span> <span className="text-yellow-500">•</span>
          <span>Advanced Machining</span> <span className="text-yellow-500">•</span>
          <span>Asset Refurbishment</span> <span className="text-yellow-500">•</span>
          <span>Reverse Engineering</span> <span className="text-yellow-500">•</span>
          <span>Vendor Managed Inventory</span> <span className="text-yellow-500">•</span>
        </motion.div>
      </div>

      {/* 4. Zig-Zag Feature Showcase */}
      <section id="capabilities" className="py-24 lg:py-32 max-w-7xl mx-auto px-4 w-full">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-blue-600 dark:text-blue-500 font-bold tracking-wider uppercase mb-3 text-sm flex items-center justify-center gap-2">
            <Settings size={16} /> Engineering Capabilities
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white mb-6 tracking-tight">State-of-the-Art Workshop</h3>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
            We operate highly advanced facilities equipped to fabricate, completely repair, or reverse-engineer critical components that original manufacturers no longer support.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {/* Feature 1: Machining */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
          >
            <motion.div variants={fadeUp} className="w-full lg:w-1/2">
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 rounded-2xl flex items-center justify-center mb-6">
                <PenTool className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-neutral-900 dark:text-white mb-6">Custom CNC Machining</h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed mb-8">
                Utilizing multi-axis CNC lathes and milling centers, we fabricate highly complex, specialized machinery components with sub-micron precision. This is essential for replacing obsolete parts that are causing line stoppages.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 font-bold text-lg">
                  <CheckCircle2 className="text-blue-500" size={24}/> Reverse Engineering of Obsolete Parts
                </li>
                <li className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 font-bold text-lg">
                  <CheckCircle2 className="text-blue-500" size={24}/> Rapid Prototyping & CAD/CAM Design
                </li>
                <li className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 font-bold text-lg">
                  <CheckCircle2 className="text-blue-500" size={24}/> High-Tolerance Heavy Milling
                </li>
              </ul>
            </motion.div>
            <motion.div variants={scaleIn} className="w-full lg:w-1/2 h-[450px] relative rounded-[3rem] overflow-hidden shadow-2xl border border-neutral-100 dark:border-neutral-800 group">
              <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" alt="CNC Machining" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
          </motion.div>

          {/* Feature 2: Refurbishment */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center"
          >
            <motion.div variants={fadeUp} className="w-full lg:w-1/2">
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 rounded-2xl flex items-center justify-center mb-6">
                <RotateCcw className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-neutral-900 dark:text-white mb-6">Heavy Equipment Refurbishment</h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed mb-8">
                Why wait months for a replacement when you can restore? We offer complete teardown, sandblasting, dynamic balancing, and rebuilding of massive industrial valves, multi-stage pumps, and gearboxes to "like-new" OEM standards.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 font-bold text-lg">
                  <CheckCircle2 className="text-blue-500" size={24}/> Complete Teardown & Anti-Corrosion Coating
                </li>
                <li className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 font-bold text-lg">
                  <CheckCircle2 className="text-blue-500" size={24}/> Rotary Equipment Dynamic Balancing
                </li>
                <li className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 font-bold text-lg">
                  <CheckCircle2 className="text-blue-500" size={24}/> Rigorous Hydro-testing & Certification
                </li>
              </ul>
            </motion.div>
            <motion.div variants={scaleIn} className="w-full lg:w-1/2 h-[450px] relative rounded-[3rem] overflow-hidden shadow-2xl border border-neutral-100 dark:border-neutral-800 group">
              <Image src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200" alt="Equipment Refurbishment" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Full Width Glassmorphism Logistics Panel */}
      <section className="relative w-full py-32 mt-12 bg-neutral-900">
        <div className="absolute inset-0 h-full w-full">
          <Image src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" alt="Inventory Warehouse" fill className="object-cover" />
          <div className="absolute inset-0 bg-neutral-900/80 mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Strategic <br/><span className="text-blue-400">Supply Chain</span>
            </h2>
            <p className="text-xl text-neutral-300 font-medium leading-relaxed mb-10">
              Vendor Managed Inventory (VMI) solutions ensure your critical spares are stocked, tested, and ready prior to planned shutdowns, cutting procurement lag to absolutely zero.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
                <Box className="text-yellow-400" size={32} />
                <span className="text-white font-bold text-lg">Just-In-Time</span>
              </div>
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
                <Truck className="text-yellow-400" size={32} />
                <span className="text-white font-bold text-lg">Express Logistics</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="w-full md:w-1/2 bg-white/10 backdrop-blur-xl border border-white/20 p-8 lg:p-12 rounded-[3rem] shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-8 border-b border-white/20 pb-6">
              <Database className="text-blue-400" size={32} />
              <h3 className="text-2xl font-black text-white">Inventory Operations</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
                <span className="text-neutral-300 font-medium">Digital Cataloging</span>
                <span className="bg-blue-500/30 text-blue-300 border border-blue-400/30 text-xs font-bold px-3 py-1 rounded-full">Active Monitoring</span>
              </div>
              <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
                <span className="text-neutral-300 font-medium">Redundancy Elimination</span>
                <span className="text-white font-black text-xl">30% Reduction</span>
              </div>
              <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
                <span className="text-neutral-300 font-medium">Quality Assurance</span>
                <span className="text-yellow-400 font-black text-xl flex items-center gap-2"><ShieldCheck size={20}/> 100% Tested</span>
              </div>
            </div>
            <Link href="/contact" className="mt-10 w-full inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-2xl transition-colors shadow-lg hover:-translate-y-1">
              Audit Your Inventory Systems
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. Lifespan Extended Metric Cards */}
      <section className="py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-900/30 w-full border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-neutral-900 dark:text-white">Lifespan Extended</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium max-w-2xl mx-auto">
              Real, quantifiable results from our workshop, demonstrating the immense financial and operational power of precise refurbishment over costly OEM replacement.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {[
              { 
                title: "100MW Turbine Rotor Refurbishment", 
                metric: "$1.2M Saved",
                metricLabel: "Versus OEM Replacement Cost",
                desc: "Successfully reverse-engineered and machined heavily damaged turbine blades. We rebalanced the entire 12-ton rotor assembly and restored a 100MW generator in just 14 days, saving months of lead time.",
                img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800" 
              },
              { 
                title: "Petrochemical Valve Fleet Overhaul", 
                metric: "10+ Years",
                metricLabel: "Extended Hardware Lifecycle",
                desc: "Conducted complete teardown, specialized internal coating, and high-pressure hydro-testing of 45 massive gate valves during a turnaround, entirely eliminating the need for expensive new imports.",
                img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" 
              }
            ].map((study, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }}
                className="bg-white dark:bg-neutral-900 rounded-[3rem] overflow-hidden shadow-2xl border border-neutral-100 dark:border-neutral-800 flex flex-col group"
              >
                <div className="h-[300px] relative w-full overflow-hidden">
                  <Image src={study.img} alt={study.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 flex flex-col">
                    <span className="text-blue-400 font-bold uppercase tracking-wider text-sm mb-1">{study.metricLabel}</span>
                    <span className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">{study.metric}</span>
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col flex-grow">
                  <h4 className="text-2xl lg:text-3xl font-black text-neutral-900 dark:text-white mb-6">{study.title}</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed mb-8 flex-grow text-lg">{study.desc}</p>
                  <Link href="/contact" className="inline-flex items-center text-neutral-900 dark:text-white font-black group w-fit pb-1 border-b-2 border-yellow-400 hover:text-blue-600 hover:border-blue-600 transition-colors">
                    Request Fabrication Details <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform text-blue-600" size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Consistent Footer CTA */}
      <section className="w-full bg-[#FFD700] py-24 relative overflow-hidden mt-auto shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1537726235470-8504e3beef77?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
            className="mb-8 bg-white/30 p-5 rounded-full backdrop-blur-md shadow-lg"
          >
            <CheckCircle2 size={56} className="text-neutral-900" strokeWidth={2} />
          </motion.div>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-neutral-900 mb-6 tracking-tight leading-[1.1]"
          >
            Missing a critical <br/> component?
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-neutral-900/80 mb-12 max-w-2xl font-bold leading-relaxed"
          >
            Our workshop can source, fabricate, or refurbish exactly what you need to get back online.
          </motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-neutral-900 text-white hover:bg-blue-600 rounded-full font-black text-lg md:text-xl transition-all duration-300 shadow-2xl hover:shadow-blue-600/50 hover:-translate-y-2">
              Send Part Specifications
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}