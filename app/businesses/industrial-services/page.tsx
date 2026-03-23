"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  Wrench, Clock, Activity, Settings, ArrowRight, 
  ShieldAlert, Zap, Search, PenTool, BarChart3, 
  CheckCircle2, Gauge, ThermometerSun,
  ShieldCheck
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

export default function IndustrialServices() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-neutral-950 selection:bg-blue-600 selection:text-white flex flex-col">
      <section className="relative w-full bg-blue-600 pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-600/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/50 text-yellow-300 font-bold text-sm mb-8 backdrop-blur-md border border-blue-400/50 shadow-lg">
              <Activity size={18} />
              <span className="uppercase tracking-wide">Plant Optimization & Care</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-[1.1] tracking-tight uppercase">
              Industrial <br/>
              <span className="text-yellow-400">
                Services & Support
              </span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl">
              Comprehensive maintenance, rapid retrofitting, and operational support designed to maximize plant efficiency, extend machinery lifecycle, and permanently eliminate unplanned downtime.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-black text-neutral-900 bg-yellow-400 hover:bg-yellow-300 rounded-full transition-all hover:scale-105 shadow-xl shadow-yellow-400/20">
                Request Emergency Team
              </Link>
              <Link href="#solutions" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-500/30 hover:bg-blue-500/50 border border-blue-400/30 rounded-full transition-all backdrop-blur-sm">
                Explore Solutions
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden" animate="visible" variants={slideInRight}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[450px] lg:h-[550px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 group">
              <Image 
                src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=1000" 
                alt="Industrial Maintenance" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 via-transparent to-transparent mix-blend-multiply"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md p-5 rounded-3xl border border-white/20 dark:border-neutral-700/50 shadow-xl flex items-center justify-between">
                <div>
                  <h3 className="font-black text-xl text-neutral-900 dark:text-white mb-1">99.9% Uptime</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium text-sm">Guaranteed by our AMC division</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <BarChart3 size={24} />
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
            { icon: Clock, value: "24/7", label: "Emergency Response", desc: "Rapid mobilization team always on standby." },
            { icon: Tool, value: "200+", label: "Skilled Technicians", desc: "Certified for high-risk industrial environments." },
            { icon: Zap, value: "Fast", label: "Turnaround Time", desc: "Minimizing revenue loss during breakdowns." }
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

      <section id="solutions" className="py-24 lg:py-32 max-w-7xl mx-auto px-4 w-full">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-blue-600 dark:text-blue-500 font-bold tracking-wider uppercase mb-3 text-sm flex items-center gap-2">
            <Settings size={16} /> Maintenance Solutions
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white mb-6 tracking-tight">Comprehensive Asset Management</h3>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
            From predictive analysis to full-scale plant overhauls, our specialized divisions ensure your heavy rotary and static machinery operates at peak performance.
          </p>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={fadeUp} className="md:col-span-2 bg-neutral-900 dark:bg-neutral-950 p-8 lg:p-10 rounded-[2.5rem] border border-neutral-800 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:rotate-12">
              <ShieldAlert size={160} />
            </div>
            <ShieldAlert className="text-yellow-400 mb-6 relative z-10" size={48} strokeWidth={1.5} />
            <h4 className="text-3xl font-black mb-4 relative z-10">Shutdown & Turnaround Execution</h4>
            <p className="text-neutral-400 leading-relaxed font-medium mb-8 max-w-xl relative z-10 text-lg">
              Rapid mobilization of expert crews to execute high-pressure plant overhauls within strict timeframes. We manage the entire lifecycle from pre-shutdown planning to post-startup performance testing.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 relative z-10">
              {['Boiler internal inspections', 'Heat exchanger retubing', 'Valve overhaul & testing', 'Catalyst replacement'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <CheckCircle2 size={18} className="text-blue-400 shrink-0" />
                  <span className="text-sm font-bold text-neutral-200">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-blue-50 dark:bg-blue-900/20 p-8 lg:p-10 rounded-[2.5rem] border border-blue-100 dark:border-blue-800/50 hover:border-blue-300 transition-colors flex flex-col justify-between">
            <div>
              <Gauge className="text-blue-600 dark:text-blue-400 mb-6" size={48} strokeWidth={1.5} />
              <h4 className="text-2xl font-black text-neutral-900 dark:text-white mb-4">Dynamic Balancing & Alignment</h4>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                Laser precision alignment and advanced vibration analysis for heavy turbines, generators, and industrial pumps to prevent catastrophic bearing failures.
              </p>
            </div>
            <Link href="/contact" className="mt-8 text-blue-600 dark:text-blue-400 font-bold inline-flex items-center group">
              Request Assessment <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-neutral-50 dark:bg-neutral-900/50 p-8 lg:p-10 rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800 group hover:shadow-lg transition-all">
            <ThermometerSun className="text-yellow-500 mb-6" size={40} strokeWidth={1.5} />
            <h4 className="text-xl font-black text-neutral-900 dark:text-white mb-4">Condition Monitoring</h4>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium text-sm">
              Continuous health tracking using thermal imaging, acoustic emission, and oil analysis to catch anomalies before they become major faults.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-2 relative rounded-[2.5rem] overflow-hidden min-h-[350px] border border-neutral-200 dark:border-neutral-800 group">
            <Image 
              src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1200" 
              alt="Asset Integrity" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/95 via-neutral-900/70 to-transparent"></div>
            <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-center max-w-xl">
              <Search className="text-blue-400 mb-6" size={48} strokeWidth={1.5} />
              <h4 className="text-3xl font-black text-white mb-4">Asset Integrity Management (NDT)</h4>
              <p className="text-neutral-300 leading-relaxed font-medium mb-6">
                Advanced Non-Destructive Testing (NDT) including ultrasonic, radiographic, and magnetic particle inspections for pressure vessels, boilers, and critical piping networks.
              </p>
              <Link href="/services" className="inline-flex items-center justify-center px-6 py-3 text-sm font-black text-neutral-900 bg-white hover:bg-neutral-200 rounded-full transition-all w-fit">
                Learn About NDT Services
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/30 w-full overflow-hidden relative border-y border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-neutral-900 dark:text-white">Our Diagnostic Approach</h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-medium text-lg">We don't just fix symptoms; we engineer permanent solutions through a rigorous, data-driven diagnostic framework.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 lg:gap-10">
            {[
              { step: "01", title: "Assessment", desc: "Thorough visual and technological inspection of the affected machinery.", icon: Search },
              { step: "02", title: "Analysis", desc: "Root cause identification using vibration and metallurgical data.", icon: Activity },
              { step: "03", title: "Intervention", desc: "Precision repair, component replacement, and laser alignment.", icon: PenTool },
              { step: "04", title: "Validation", desc: "Rigorous load testing and commissioning to guarantee performance.", icon: ShieldCheck }
            ].map((phase, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-100 dark:border-neutral-800 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="absolute -top-6 left-8 w-12 h-12 bg-blue-600 text-white font-black rounded-xl flex items-center justify-center shadow-lg">
                  {phase.step}
                </div>
                <phase.icon size={32} className="text-neutral-300 dark:text-neutral-700 mb-6 mt-4" />
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
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-neutral-900 dark:text-white">Critical Interventions</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium max-w-2xl">
              Restoring and optimizing high-value assets across rigorous industrial sectors under impossible deadlines.
            </p>
          </div>

          <div className="space-y-20 lg:space-y-32">
            {[
              { 
                name: "Boiler Overhaul & Pressure Parts Replacement", 
                scope: "Major 500MW Thermal Unit Shutdown",
                details: "Executed a complete replacement of critical pressure parts and water wall panels. Completed the overhaul 4 days ahead of the scheduled 30-day shutdown, ensuring zero leakage during the high-pressure hydro-test.",
                image: "https://plus.unsplash.com/premium_photo-1661811696984-e16d3d9f4ec2?auto=format&fit=crop&q=80&w=2000" 
              },
              { 
                name: "Turbine Generator Alignment & Repair", 
                scope: "Emergency Breakdown Recovery",
                details: "Responded to a catastrophic bearing failure. Our team performed in-situ journal machining, white metal bearing replacement, and corrected critical misalignments, reducing vibrations by 80% and restoring full load capacity.",
                image: "https://plus.unsplash.com/premium_photo-1661963536116-543d5014d872?auto=format&fit=crop&q=80&w=2000" 
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
                  <div className={`absolute -bottom-6 ${idx % 2 !== 0 ? '-left-6' : '-right-6'} bg-blue-500 w-32 h-32 rounded-full -z-10 blur-3xl opacity-30`}></div>
                </motion.div>
                
                <motion.div variants={fadeUp} className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 w-fit border border-blue-100 dark:border-blue-800">
                    Case Study
                  </div>
                  <h4 className="text-3xl lg:text-4xl font-black mb-6 text-neutral-900 dark:text-white leading-tight">{project.name}</h4>
                  <p className="text-xl font-bold text-yellow-500 mb-4">{project.scope}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed mb-8 text-lg">
                    {project.details}
                  </p>
                  <Link href="/contact" className="inline-flex items-center w-fit text-neutral-900 dark:text-white font-black group pb-1 border-b-2 border-neutral-300 dark:border-neutral-700 hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
                    Discuss Similar Issues <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform text-blue-600 dark:text-blue-400" size={20} />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FFD700] py-24 relative overflow-hidden mt-auto shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
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
            Experiencing <br/> Unplanned Downtime?
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-neutral-900/80 mb-12 max-w-2xl font-bold leading-relaxed"
          >
            Deploy our certified technicians immediately to troubleshoot, repair, and permanently optimize your industrial machinery.
          </motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-neutral-900 text-white hover:bg-blue-600 rounded-full font-black text-lg md:text-xl transition-all duration-300 shadow-2xl hover:shadow-blue-600/50 hover:-translate-y-2">
              Dispatch a Maintenance Team
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function Tool(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}