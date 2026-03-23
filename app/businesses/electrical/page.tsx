"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  Zap, Cable, Power, ShieldCheck, ArrowRight, 
  Lightbulb, Activity, Target, Server, CheckCircle2 
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

export default function Electrical() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-neutral-950 selection:bg-blue-600 selection:text-white flex flex-col">
      <section className="relative w-full bg-blue-600 pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-600/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/50 text-yellow-300 font-bold text-sm mb-8 backdrop-blur-md border border-blue-400/50 shadow-lg">
              <Zap size={18} />
              <span className="uppercase tracking-wide">High-Voltage Infrastructure</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-[1.1] tracking-tight uppercase">
              Electrical <br/>
              <span className="text-yellow-400">
                Engineering
              </span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl">
              Turnkey high-voltage installations, robust substations, and comprehensive industrial electrical networks designed to safely power massive, energy-intensive operations.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-black text-neutral-900 bg-yellow-400 hover:bg-yellow-300 rounded-full transition-all hover:scale-105 shadow-xl shadow-yellow-400/20">
                Discuss Power Needs
              </Link>
              <Link href="#capabilities" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-500/30 hover:bg-blue-500/50 border border-blue-400/30 rounded-full transition-all backdrop-blur-sm">
                Explore Grid Solutions
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden" animate="visible" variants={slideInRight}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[450px] lg:h-[550px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 group">
              <Image 
                src="https://plus.unsplash.com/premium_photo-1764702288851-aabac8f8070f?auto=format&fit=crop&q=80&w=1000" 
                alt="Electrical Infrastructure" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 via-transparent to-transparent mix-blend-multiply"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md p-5 rounded-3xl border border-white/20 dark:border-neutral-700/50 shadow-xl flex items-center justify-between">
                <div>
                  <h3 className="font-black text-xl text-neutral-900 dark:text-white mb-1">CEIG Approved</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium text-sm">Strict adherence to electrical inspectorate standards</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-neutral-900 shrink-0">
                  <ShieldCheck size={24} />
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
            { icon: Power, value: "400kV+", label: "High Voltage Capacity", desc: "Expertise in EHT switchyards." },
            { icon: Cable, value: "500km+", label: "Cabling Networks Laid", desc: "HT/LT & control cables." },
            { icon: Activity, value: "100+", label: "Substations Built", desc: "Turnkey testing & commissioning." }
          ].map((stat, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-white dark:bg-neutral-900 rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-neutral-100 dark:border-neutral-800 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <stat.icon size={28} />
              </div>
              <h3 className="text-4xl font-black text-neutral-900 dark:text-white mb-2">{stat.value}</h3>
              <p className="font-black text-neutral-800 dark:text-neutral-200 uppercase tracking-wide text-sm mb-3">{stat.label}</p>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm font-medium">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="capabilities" className="py-24 lg:py-32 max-w-7xl mx-auto px-4 w-full">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-blue-600 dark:text-blue-500 font-bold tracking-wider uppercase mb-3 text-sm flex items-center gap-2">
            <Target size={16} /> Power Core Capabilities
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white mb-6 tracking-tight">Precision Electrical Engineering</h3>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
            Delivering stable, fault-resistant power distribution for energy-intensive industrial operations through advanced engineering and flawless execution.
          </p>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={fadeUp} className="md:col-span-2 bg-neutral-900 dark:bg-neutral-950 p-8 lg:p-10 rounded-[2.5rem] border border-neutral-800 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
              <Power size={160} />
            </div>
            <Power className="text-yellow-400 mb-6 relative z-10" size={48} strokeWidth={1.5} />
            <h4 className="text-3xl font-black mb-4 relative z-10">Substation & Switchyard Construction</h4>
            <p className="text-neutral-400 leading-relaxed font-medium mb-8 max-w-xl relative z-10 text-lg">
              Turnkey design, erection, testing, and commissioning of indoor and outdoor electrical substations ranging from 33kV to 400kV, ensuring massive power throughput with zero bottlenecking.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 relative z-10">
              {['Power Transformer Erection', 'SF6 Circuit Breakers', 'Busbar & Isolator Setup', 'Relay Panel Configuration'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <CheckCircle2 size={18} className="text-blue-400 shrink-0" />
                  <span className="text-sm font-bold text-neutral-200">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-blue-50 dark:bg-blue-900/20 p-8 lg:p-10 rounded-[2.5rem] border border-blue-100 dark:border-blue-800/50 hover:border-blue-300 transition-colors flex flex-col justify-between">
            <div>
              <Server className="text-blue-600 dark:text-blue-400 mb-6" size={48} strokeWidth={1.5} />
              <h4 className="text-2xl font-black text-neutral-900 dark:text-white mb-4">Plant Automation & MCC</h4>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                Integration of Motor Control Centers (MCC), complex PLC/SCADA control panels, and synchronized VFD installations for precise heavy machinery operation.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-neutral-50 dark:bg-neutral-900/50 p-8 lg:p-10 rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800 group hover:shadow-lg transition-all">
            <ShieldCheck className="text-yellow-500 mb-6" size={40} strokeWidth={1.5} />
            <h4 className="text-xl font-black text-neutral-900 dark:text-white mb-4">Grounding & Protection</h4>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium text-sm">
              Engineered copper/GI earthing grids and advanced lightning protection shielding to protect highly sensitive machinery and personnel from critical electrical faults.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-2 relative rounded-[2.5rem] overflow-hidden min-h-[350px] border border-neutral-200 dark:border-neutral-800 group">
            <Image 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200" 
              alt="Cable Networks" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/95 via-neutral-900/70 to-transparent"></div>
            <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-center max-w-xl">
              <Cable className="text-blue-400 mb-6" size={48} strokeWidth={1.5} />
              <h4 className="text-3xl font-black text-white mb-4">HT/LT Cable Networks & Trays</h4>
              <p className="text-neutral-300 leading-relaxed font-medium mb-6">
                Extensive overhead and underground cable laying, structural tray fabrication, high-precision jointing, and termination for extreme industrial environments.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/30 w-full overflow-hidden relative border-y border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-neutral-900 dark:text-white">The Power Flow Methodology</h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-medium text-lg">Systematic execution from load calculation to final CEIG inspection ensures a seamless grid activation.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 lg:gap-10 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-200 dark:bg-blue-900/50 -translate-y-1/2 z-0"></div>
            
            {[
              { step: "01", title: "Design & Routing", desc: "Load flow analysis and optimal cable routing design.", icon: Lightbulb },
              { step: "02", title: "Procurement", desc: "Sourcing certified HT/LT panels and heavy transformers.", icon: ShieldCheck },
              { step: "03", title: "Installation", desc: "Rigging, tray erection, and precision cable termination.", icon: Cable },
              { step: "04", title: "Commissioning", desc: "Relay testing, IR checks, and statutory safety clearance.", icon: Power }
            ].map((phase, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-100 dark:border-neutral-800 shadow-lg hover:-translate-y-2 transition-transform duration-300 text-center"
              >
                <div className="mx-auto w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-xl mb-6 relative z-10">
                  <phase.icon size={28} />
                </div>
                <h4 className="text-xl font-black text-neutral-900 dark:text-white mb-3">{phase.title}</h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm font-medium leading-relaxed">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white dark:bg-neutral-950 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-neutral-900 dark:text-white">Electrification Projects</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium max-w-2xl">
              Powering the heavy industries that drive the economy with flawless high-voltage infrastructure.
            </p>
          </div>

          <div className="space-y-20 lg:space-y-32">
            {[
              { 
                name: "Mega Steel Plant Electrification", 
                scope: "220kV Primary Substation & HT Networks",
                details: "End-to-end installation of a 220kV switchyard and integration of multiple synchronous high-voltage motors for the heavy rolling mills. The project involved laying over 120km of armored cabling and massive busduct installations.",
                image: "https://images.unsplash.com/photo-1761414500570-0b835cdcf3c8?auto=format&fit=crop&q=80&w=1200" 
              },
              { 
                name: "Petrochemical Refinery Control Hub", 
                scope: "Hazardous Zone Automation",
                details: "Successfully engineered and installed explosion-proof PLC panels and highly sensitive control cabling across highly volatile 'Zone 1' hazardous areas. Passed stringent international safety and electrical inspections on the first attempt.",
                image: "https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?auto=format&fit=crop&q=80&w=1200" 
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
                  <div className={`absolute -bottom-6 ${idx % 2 !== 0 ? '-left-6' : '-right-6'} bg-blue-500 w-32 h-32 rounded-full -z-10 blur-3xl opacity-20`}></div>
                </motion.div>
                
                <motion.div variants={fadeUp} className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 w-fit border border-blue-100 dark:border-blue-800">
                    Grid Case Study
                  </div>
                  <h4 className="text-3xl lg:text-4xl font-black mb-6 text-neutral-900 dark:text-white leading-tight">{project.name}</h4>
                  <p className="text-xl font-bold text-yellow-500 mb-4">{project.scope}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed mb-8 text-lg">
                    {project.details}
                  </p>
                  <Link href="/contact" className="inline-flex items-center w-fit text-neutral-900 dark:text-white font-black group pb-1 border-b-2 border-yellow-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
                    Review Circuit Diagrams <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform text-blue-600 dark:text-blue-400" size={20} />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FFD700] py-24 relative overflow-hidden mt-auto shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
            className="mb-8 bg-white/30 p-5 rounded-full backdrop-blur-md shadow-lg"
          >
            <Zap size={56} className="text-neutral-900" strokeWidth={2} />
          </motion.div>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-neutral-900 mb-6 tracking-tight leading-[1.1]"
          >
            Require massive <br/> electrical power?
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-neutral-900/80 mb-12 max-w-2xl font-bold leading-relaxed"
          >
            Our electrical engineers ensure your heavy machinery gets the stable, continuous power grid it demands.
          </motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-neutral-900 text-white hover:bg-blue-600 rounded-full font-black text-lg md:text-xl transition-all duration-300 shadow-2xl hover:shadow-blue-600/50 hover:-translate-y-2">
              Connect With Grid Engineers
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}