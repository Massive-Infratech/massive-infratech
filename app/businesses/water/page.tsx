"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  Droplets, Activity, Filter, Waves, ArrowRight, 
  Droplet, RefreshCw, ShieldCheck, CheckCircle2, 
  Factory, MoveRight, ThermometerSun, Anchor, 
  Zap, Settings, Map,
  BarChart3
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
}

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

export default function WaterInfrastructure() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-neutral-950 selection:bg-blue-600 selection:text-white flex flex-col overflow-hidden">
      
      <section className="relative w-full bg-blue-600 pt-32 pb-24 lg:pt-48 lg:pb-32 shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519388331181-426c4897de5c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-700/90 via-blue-600/80 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/50 backdrop-blur-md border border-blue-400/50 text-yellow-300 font-bold text-sm mb-8 shadow-xl">
              <Droplets size={18} />
              <span className="uppercase tracking-wide">Fluid Engineering Systems</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-[1.1] tracking-tight uppercase">
              Water <br/>
              <span className="text-yellow-400">
                Infrastructure
              </span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl">
              Engineering sustainable, high-capacity water treatment plants, massive desalination facilities, and cross-country pipeline networks to secure vital resources for modern industry.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-black text-neutral-900 bg-yellow-400 hover:bg-yellow-300 rounded-full transition-all hover:-translate-y-1 shadow-xl shadow-yellow-400/20">
                Discuss Fluid Solutions
              </Link>
              <Link href="#lifecycle" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-500/30 hover:bg-blue-500/50 border border-blue-400/30 rounded-full transition-all backdrop-blur-sm">
                Explore Treatment Cycle
              </Link>
            </motion.div>
          </motion.div>

      <motion.div 
            initial="hidden" animate="visible" variants={slideInRight}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[450px] lg:h-[550px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 group">
              <Image 
                src="https://plus.unsplash.com/premium_photo-1764702451666-19477b42695f?auto=format&fit=crop&q=80&w=1000" 
                alt="Industrial Maintenance" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 via-transparent to-transparent mix-blend-multiply"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md p-5 rounded-3xl border border-white/20 dark:border-neutral-700/50 shadow-xl flex items-center justify-between">
                <div>
                  <h3 className="font-black text-xl text-neutral-900 dark:text-white mb-1">ZLD</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium text-sm">Zero Liquid Discharge</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <BarChart3 size={24} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-20 -mt-10 lg:-mt-20 max-w-7xl mx-auto px-4 w-full">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} 
          className="grid md:grid-cols-4 gap-4 lg:gap-6"
        >
          {[
            { value: "500+", label: "MLD Treated Daily", icon: Activity },
            { value: "100%", label: "Zero Liquid Discharge", icon: RefreshCw },
            { value: "250km", label: "Pipelines Laid", icon: Waves },
            { value: "ISO", label: "Environmental Standard", icon: ShieldCheck }
          ].map((stat, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-white dark:bg-neutral-900 rounded-3xl p-6 lg:p-8 shadow-xl shadow-blue-900/5 border border-neutral-100 dark:border-neutral-800 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
              <stat.icon size={32} className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl lg:text-4xl font-black text-neutral-900 dark:text-white mb-2">{stat.value}</h3>
              <p className="font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="lifecycle" className="py-24 lg:py-32 max-w-7xl mx-auto px-4 w-full">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-blue-600 dark:text-blue-500 font-bold tracking-wider uppercase mb-3 text-sm flex items-center justify-center gap-2">
            <Filter size={16} /> Complete Fluid Lifecycle
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white mb-6 tracking-tight">End-to-End Water Management</h3>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
            We engineer robust infrastructure covering every stage of the industrial water cycle, ensuring sustainability, high throughput, and strict regulatory adherence.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-1 bg-gradient-to-b from-blue-100 via-blue-200 to-neutral-100 dark:from-blue-900/30 dark:via-blue-900/30 dark:to-neutral-900 -translate-x-1/2 rounded-full"></div>

          <div className="space-y-12 md:space-y-24">
            {[
              { 
                title: "Raw Water Intake & Pumping", 
                desc: "Design and construction of massive intake wells, jack wells, and high-capacity vertical turbine pumping stations drawing from rivers, reservoirs, or the sea.", 
                icon: Droplet, alignment: "left" 
              },
              { 
                title: "Advanced Treatment & Filtration", 
                desc: "Civil and mechanical setup of Clariflocculators, rapid gravity sand filters, and massive Reverse Osmosis (RO) blocks for industrial grade purification.", 
                icon: Filter, alignment: "right" 
              },
              { 
                title: "Cross-Country Transmission", 
                desc: "Trenching, laying, welding, and hydro-testing of large-diameter MS (Mild Steel) and DI pipeline networks spanning hundreds of kilometers across rugged terrains.", 
                icon: Waves, alignment: "left" 
              },
              { 
                title: "Effluent Treatment & ZLD", 
                desc: "Biological and chemical treatment of highly toxic industrial waste. Implementing Multi-Effect Evaporators (MEE) to achieve true Zero Liquid Discharge.", 
                icon: RefreshCw, alignment: "right" 
              }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                className={`flex flex-col md:flex-row items-center gap-8 ${step.alignment === 'right' ? 'md:flex-row-reverse' : ''}`}
              >
                <motion.div variants={step.alignment === 'left' ? slideInLeft : slideInRight} className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-12 text-center md:text-left">
                  <h4 className="text-2xl lg:text-3xl font-black text-neutral-900 dark:text-white mb-4">{step.title}</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed text-lg">{step.desc}</p>
                </motion.div>
                
                <div className="hidden md:flex absolute left-[50%] -translate-x-1/2 w-16 h-16 bg-white dark:bg-neutral-950 border-4 border-blue-400 dark:border-blue-600 rounded-full items-center justify-center shadow-xl z-10">
                  <step.icon size={24} className="text-blue-600 dark:text-blue-400" />
                </div>

                <motion.div variants={scaleIn} className="w-full md:w-1/2 flex justify-center px-4 md:px-12">
                  <div className="w-full max-w-sm aspect-video bg-neutral-50 dark:bg-neutral-900/50 rounded-[2rem] border border-neutral-200 dark:border-neutral-800 shadow-inner flex items-center justify-center p-8 relative overflow-hidden group hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <step.icon size={80} className="text-neutral-200 dark:text-neutral-800 group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-500" strokeWidth={1} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-neutral-900 dark:bg-black w-full text-white relative overflow-hidden border-y border-neutral-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519388331181-426c4897de5c?auto=format&fit=crop&q=80&w=2000')] opacity-5 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          
          <div className="mb-20 grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Core Infrastructure <br/><span className="text-blue-400">Capabilities</span></h2>
              <p className="text-lg text-neutral-400 font-medium leading-relaxed max-w-xl">
                We handle the heavy civil and complex mechanical execution required to build massive water processing plants from the ground up.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Link href="/contact" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-black text-lg group">
                Request a Consultation <MoveRight className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Effluent Treatment (ETP/STP)", 
                desc: "Construction of advanced biological and chemical treatment plants. Includes deep excavation for aeration tanks, clarifiers, and thickeners.",
                icon: Factory
              },
              { 
                title: "Desalination Facilities", 
                desc: "Heavy civil setup for massive Reverse Osmosis (RO) plants to combat freshwater scarcity, including highly specialized corrosion-resistant concrete work.",
                icon: Waves
              },
              { 
                title: "High-Capacity Pumping", 
                desc: "Installation of massive pump houses, surge protection vessels, and integration of complex manifold piping architectures.",
                icon: Activity
              },
              { 
                title: "Cross-Country Piping", 
                desc: "Heavy equipment trenching, laying, precision orbital welding, and wrapping/coating of large-diameter distribution networks.",
                icon: Droplets
              },
              { 
                title: "ZLD System Integration", 
                desc: "Mechanical erection of Agitated Thin Film Dryers (ATFD) and evaporators to recover 99% of process water and eliminate environmental discharge.",
                icon: RefreshCw
              },
              { 
                title: "Water Storage Reservoirs", 
                desc: "Casting of massive ground-level and overhead reinforced concrete water storage tanks (GLSR/ESR) with flawless waterproofing.",
                icon: ShieldCheck
              }
            ].map((cap, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-neutral-800/40 hover:bg-blue-900/20 backdrop-blur-sm border border-neutral-700/50 hover:border-blue-500/50 p-8 rounded-[2rem] transition-colors group"
              >
                <div className="w-14 h-14 bg-neutral-800 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                  <cap.icon size={28} />
                </div>
                <h4 className="text-xl font-black text-white mb-4">{cap.title}</h4>
                <p className="text-neutral-400 font-medium leading-relaxed text-sm">{cap.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/30 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-sm mb-6 border border-blue-200 dark:border-blue-800">
              <ShieldCheck size={18} /> Regulatory Compliance
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-neutral-900 dark:text-white">Environmental Stewardship</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed mb-8">
              Industrial progress must not come at the expense of our natural water bodies. We strictly adhere to Central Pollution Control Board (CPCB) guidelines, specializing in systems that recycle, recover, and reuse industrial effluent.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 font-bold text-lg"><CheckCircle2 className="text-yellow-500" size={24}/> Elimination of toxic environmental discharge</li>
              <li className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 font-bold text-lg"><CheckCircle2 className="text-yellow-500" size={24}/> Maximized water recycling (up to 95% recovery)</li>
              <li className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 font-bold text-lg"><CheckCircle2 className="text-yellow-500" size={24}/> Energy-optimized pumping and filtration solutions</li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="w-full md:w-1/2 relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800"
          >
            <Image src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" alt="Clean Water Management" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent mix-blend-multiply"></div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-neutral-950 w-full overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-neutral-900 dark:text-white">Technology & Machinery</h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-medium text-lg">We own and deploy highly specialized equipment required for massive fluid engineering projects.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            {[
              { title: "Orbital Welding Systems", desc: "Automated welding rigs ensuring perfect, defect-free joints across hundreds of kilometers of cross-country steel piping.", img: "https://images.unsplash.com/photo-1688138276772-987d4b62318c?auto=format&fit=crop&q=80&w=800" },
              { title: "Heavy Trenching Fleet", desc: "Specialized deep-trenching excavators and rock breakers for rapidly laying large-diameter underground distribution networks.", img: "https://images.unsplash.com/photo-1758978448392-05ce1322adf6?auto=format&fit=crop&q=80&w=800" },
              { title: "Mobile Testing Labs", desc: "On-site hydrostatic testing equipment and NDT (Non-Destructive Testing) labs to verify pipeline integrity instantly.", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" }
            ].map((tech, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group relative rounded-[2rem] overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-lg h-[400px]"
              >
                <Image src={tech.img} alt={tech.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-2xl font-black text-white mb-2">{tech.title}</h4>
                  <p className="text-neutral-300 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-900/30 w-full border-y border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-neutral-900 dark:text-white">Monumental Projects</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium max-w-2xl">
              Securing critical water resources for heavy industry and entire municipalities through massive engineering efforts.
            </p>
          </div>

          <div className="space-y-20 lg:space-y-32">
            {[
              { 
                name: "Mega Zero Liquid Discharge (ZLD) Facility", 
                scope: "Textile & Dyeing Industrial Hub",
                details: "Constructed a state-of-the-art 50 MLD ZLD plant for a highly polluting textile hub. We executed the complete civil foundation, massive aeration tanks, and the mechanical erection of the Multi-Effect Evaporators, successfully recovering 95% of process water.",
                image: "https://plus.unsplash.com/premium_photo-1764695669373-cbe9cb0800f3?auto=format&fit=crop&q=80&w=1200" 
              },
              { 
                name: "Cross-Country Raw Water Aqueduct", 
                scope: "Thermal Power Plant Supply Line",
                details: "Successfully trenched, laid, and hydro-tested a 45km large-diameter steel pipeline traversing difficult rocky terrains. Included the construction of two massive booster pumping stations, delivered 2 months ahead of schedule.",
                image: "https://images.unsplash.com/photo-1579619674707-04c497948292?auto=format&fit=crop&q=80&w=1200" 
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
                  <div className={`absolute -bottom-6 ${idx % 2 !== 0 ? '-left-6' : '-right-6'} bg-yellow-400 w-32 h-32 rounded-full -z-10 blur-3xl opacity-30`}></div>
                </motion.div>
                
                <motion.div variants={fadeUp} className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 w-fit border border-blue-200 dark:border-blue-800">
                    Fluid Engineering Case Study
                  </div>
                  <h4 className="text-3xl lg:text-4xl font-black mb-6 text-neutral-900 dark:text-white leading-tight">{project.name}</h4>
                  <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">{project.scope}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed mb-8 text-lg">
                    {project.details}
                  </p>
                  <Link href="/contact" className="inline-flex items-center w-fit text-neutral-900 dark:text-white font-black group pb-1 border-b-2 border-yellow-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
                    Review Project Blueprints <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform text-blue-600" size={20} />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FFD700] py-24 relative overflow-hidden mt-auto shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519388331181-426c4897de5c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
            className="mb-8 bg-white/30 p-5 rounded-full backdrop-blur-md shadow-lg"
          >
            <Droplets size={56} className="text-neutral-900" strokeWidth={2} />
          </motion.div>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-neutral-900 mb-6 tracking-tight leading-[1.1]"
          >
            Need to manage <br/> massive fluid flow?
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-neutral-900/80 mb-12 max-w-2xl font-bold leading-relaxed"
          >
            From deep raw intake to zero liquid discharge, partner with us to engineer a complete, robust, and sustainable water infrastructure.
          </motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-neutral-900 text-white hover:bg-blue-600 rounded-full font-black text-lg md:text-xl transition-all duration-300 shadow-2xl hover:shadow-blue-600/50 hover:-translate-y-2">
              Consult Fluid Engineers
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}