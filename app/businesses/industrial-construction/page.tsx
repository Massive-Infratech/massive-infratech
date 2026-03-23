"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  Factory, HardHat, Target, Construction, ArrowRight, 
  ShieldCheck, Building2, Ruler, Cog, CheckCircle2 
} from "lucide-react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
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

export default function IndustrialConstruction() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-neutral-950 selection:bg-blue-600 selection:text-white flex flex-col">
      <section className="relative w-full bg-blue-600 pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/50 text-yellow-300 font-bold text-sm mb-8 backdrop-blur-md border border-blue-400/50">
              <Factory size={18} />
              <span className="uppercase tracking-wide">Heavy Infrastructure</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-[1.1] tracking-tight uppercase">
              Constructing <br/>
              <span className="text-yellow-400">
                Industrial Giants
              </span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl">
              End-to-end execution of large-scale industrial setups, heavy fabrication, and infrastructure facilities engineered for maximum operational stability and extreme load conditions.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-black text-neutral-900 bg-yellow-400 hover:bg-yellow-300 rounded-full transition-all hover:scale-105 shadow-xl shadow-yellow-400/20">
                Discuss Your Facility
              </Link>
              <Link href="#projects" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-500/30 hover:bg-blue-500/50 border border-blue-400/30 rounded-full transition-all backdrop-blur-sm">
                View Past Projects
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden" animate="visible" variants={scaleIn}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 group">
              <Image 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop" 
                alt="Industrial Construction" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-overlay"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md p-6 rounded-3xl border border-white/20 dark:border-neutral-700/50 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-neutral-900 shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-lg text-neutral-900 dark:text-white mb-1">ISO 9001:2015</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 font-medium text-sm">Certified Quality Management Systems</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-20 -mt-12 max-w-7xl mx-auto px-4 w-full">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} 
          className="grid md:grid-cols-3 gap-4 lg:gap-8"
        >
          {[
            { value: "500K+", label: "Tons of Steel Erected", desc: "Across national & international sites." },
            { value: "100%", label: "Safety Compliance", desc: "Zero fatal incidents in 10 years." },
            { value: "15+", label: "Mega Plants Delivered", desc: "Fully commissioned and operational." }
          ].map((stat, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-white dark:bg-neutral-900 rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-neutral-100 dark:border-neutral-800 flex flex-col items-center text-center">
              <h3 className="text-4xl lg:text-5xl font-black text-neutral-900 dark:text-white mb-2">{stat.value}</h3>
              <p className="font-black text-blue-600 dark:text-blue-500 uppercase tracking-wide text-sm mb-3">{stat.label}</p>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm font-medium">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-4 w-full">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-blue-600 dark:text-blue-500 font-bold tracking-wider uppercase mb-3 text-sm flex items-center gap-2">
            <Target size={16} /> Our Core Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white mb-6 tracking-tight">Engineered for Scale and Durability</h3>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
            We specialize in heavy structural frameworks and complex industrial bases, ensuring your manufacturing plant, refinery, or warehouse withstands extreme operational stress.
          </p>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={fadeUp} className="md:col-span-2 bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-[2rem] border border-neutral-200 dark:border-neutral-800 group hover:bg-blue-50 dark:hover:bg-neutral-900 transition-colors">
            <Building2 className="text-blue-600 dark:text-blue-400 mb-6" size={48} strokeWidth={1.5} />
            <h4 className="text-2xl font-black text-neutral-900 dark:text-white mb-4">Pre-Engineered Buildings (PEB)</h4>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium mb-6 max-w-xl">
              Rapid deployment of highly scalable industrial warehouses and factory sheds. Utilizing advanced PEB technology allows us to drastically reduce construction time while maintaining absolute structural integrity.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Custom structural design', 'Rapid site assembly', 'Weather-resistant cladding', 'High tensile strength'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-bold text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 size={16} className="text-yellow-500" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-neutral-900 dark:bg-neutral-950 p-8 rounded-[2rem] border border-neutral-800 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity group-hover:rotate-12 duration-500">
              <Construction size={120} />
            </div>
            <Construction className="text-yellow-400 mb-6 relative z-10" size={48} strokeWidth={1.5} />
            <h4 className="text-2xl font-black mb-4 relative z-10">Heavy Structural Steel</h4>
            <p className="text-neutral-400 leading-relaxed font-medium relative z-10">
              Precision fabrication and complex erection of massive steel frameworks for multi-level industrial processing plants, bridges, and high-load platforms.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-[2rem] border border-neutral-200 dark:border-neutral-800 hover:border-blue-300 dark:hover:border-blue-900/50 transition-colors">
            <HardHat className="text-blue-600 dark:text-blue-400 mb-6" size={48} strokeWidth={1.5} />
            <h4 className="text-xl font-black text-neutral-900 dark:text-white mb-4">Turnkey Setup</h4>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium text-sm">
              Comprehensive management from initial topographical surveying and foundation casting to final structural commissioning and handover.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-2 relative rounded-[2rem] overflow-hidden min-h-[300px] border border-neutral-200 dark:border-neutral-800 group">
            <Image 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop" 
              alt="Industrial Flooring" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/60 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-center max-w-lg">
              <Ruler className="text-yellow-400 mb-6" size={48} strokeWidth={1.5} />
              <h4 className="text-2xl font-black text-white mb-4">Industrial Grade Flooring</h4>
              <p className="text-neutral-300 leading-relaxed font-medium">
                High-tolerance, chemical-resistant concrete flooring and specialized machine foundations designed strictly to withstand heavy continuous machinery vibration.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/30 w-full overflow-hidden relative border-y border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-neutral-900 dark:text-white">Execution Methodology</h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-medium text-lg">A systematic, phased approach ensures zero delays and absolute precision on every site we mobilize.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-200 dark:bg-blue-900/50 -translate-y-1/2 z-0"></div>
            
            {[
              { step: "01", title: "Site Survey & Planning", icon: Target },
              { step: "02", title: "Material Fabrication", icon: Cog },
              { step: "03", title: "Heavy Erection", icon: Construction },
              { step: "04", title: "Testing & Handover", icon: ShieldCheck }
            ].map((phase, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-white dark:bg-neutral-900 border-4 border-blue-500 dark:border-blue-700 flex items-center justify-center mb-6 shadow-xl relative">
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-yellow-400 text-neutral-900 font-black flex items-center justify-center text-sm">{phase.step}</span>
                  <phase.icon size={32} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-black text-neutral-900 dark:text-white mb-2">{phase.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 lg:py-32 bg-white dark:bg-neutral-950 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-neutral-900 dark:text-white">Landmark Contributions</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium max-w-2xl">
              Our proven track record involves deploying critical infrastructure for some of the largest national and private sector giants.
            </p>
          </div>

          <div className="space-y-20 lg:space-y-32">
            {[
              { 
                name: "Thermal Power Plant Expansion", 
                scope: "Complete structural execution for a 1000MW power unit.",
                details: "Erection of 10,000 MT structural steel, massive boiler casing installation, and sub-millimeter heavy equipment alignment. The project required continuous 24/7 crane operation and specialized high-altitude welding teams.",
                image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1000&auto=format&fit=crop" 
              },
              { 
                name: "Heavy Cement Manufacturing Facility", 
                scope: "Turnkey structural and civil integration.",
                details: "End-to-end civil foundation works, towering slip-form silo construction, and the precise erection of heavy rotary kiln structures. Delivered entirely incident-free within a highly compressed 14-month timeframe.",
                image: "https://images.unsplash.com/photo-1546185058-592ead754d27?q=80&w=1000&auto=format&fit=crop" 
              }

            ].map((project, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <motion.div variants={scaleIn} className="w-full lg:w-1/2 relative">
                  <div className="relative h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-neutral-100 dark:border-neutral-800 group">
                    <Image src={project.image} alt={project.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className={`absolute -bottom-6 ${idx % 2 !== 0 ? '-left-6' : '-right-6'} bg-yellow-400 w-32 h-32 rounded-full -z-10 blur-2xl opacity-50`}></div>
                </motion.div>
                
                <motion.div variants={fadeUp} className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-xs font-bold uppercase tracking-wider mb-6 w-fit border border-neutral-200 dark:border-neutral-700">
                    Completed Project
                  </div>
                  <h4 className="text-3xl lg:text-4xl font-black mb-6 text-neutral-900 dark:text-white leading-tight">{project.name}</h4>
                  <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">{project.scope}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed mb-8 text-lg">
                    {project.details}
                  </p>
                  <Link href="/contact" className="inline-flex items-center w-fit text-neutral-900 dark:text-white font-black group pb-1 border-b-2 border-yellow-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
                    Inquire About Similar Scale <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FFD700] py-24 relative overflow-hidden mt-auto shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
            className="mb-8 bg-white/30 p-5 rounded-full backdrop-blur-md shadow-lg"
          >
            <Target size={56} className="text-neutral-900" strokeWidth={2} />
          </motion.div>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-neutral-900 mb-6 tracking-tight leading-[1.1]"
          >
            Ready to build <br/> at massive scale?
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-neutral-900/80 mb-12 max-w-2xl font-bold leading-relaxed"
          >
            Partner with MASSIVE INFRATECH for unyielding structural integrity and guaranteed on-time project delivery.
          </motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-neutral-900 text-white hover:bg-blue-600 rounded-full font-black text-lg md:text-xl transition-all duration-300 shadow-2xl hover:shadow-blue-600/50 hover:-translate-y-2">
              Start Your Infrastructure Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}