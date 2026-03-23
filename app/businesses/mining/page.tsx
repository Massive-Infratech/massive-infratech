"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  Pickaxe, Mountain, Truck, ArrowRight, HardHat, Activity, 
  Settings, CheckCircle2, Globe, MapPin, ShieldCheck, 
  Zap, Layers, MoveRight, Flame, Leaf, Drill,
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

export default function Mining() {
  return (
    <div className="w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 selection:bg-blue-600 selection:text-white flex flex-col overflow-hidden">
      
      <section className="relative w-full bg-blue-600 pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-700/90 via-blue-600/80 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/50 backdrop-blur-md border border-blue-400/50 text-yellow-300 font-bold text-sm mb-8 shadow-xl">
              <Pickaxe size={18} />
              <span className="uppercase tracking-wide">Resource Extraction Infrastructure</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-[1.1] tracking-tight uppercase">
              Mining <br/>
              <span className="text-yellow-400">
                Operations
              </span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl">
              Heavy earthmoving, massive material handling systems, and rugged infrastructure built for continuous high-volume extraction across India and international frontiers.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-black text-neutral-900 bg-yellow-400 hover:bg-yellow-300 rounded-full transition-all hover:-translate-y-1 shadow-xl shadow-yellow-400/20">
                Plan Excavation
              </Link>
              <Link href="#footprint" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-500/30 hover:bg-blue-500/50 border border-blue-400/30 rounded-full transition-all backdrop-blur-sm">
                View Global Reach
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden" animate="visible" variants={slideInRight}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative h-[450px] lg:h-[550px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 group">
              <Image 
                src="https://images.unsplash.com/photo-1586161148512-64a1b3dac527?auto=format&fit=crop&q=80&w=1000" 
                alt="Heavy Earthmoving" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 via-transparent to-transparent mix-blend-multiply"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md p-5 rounded-3xl border border-white/20 dark:border-neutral-700/50 shadow-xl flex items-center justify-between">
                <div>
                  <h3 className="font-black text-xl text-neutral-900 dark:text-white mb-1">High Yield</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium text-sm">Continuous Extraction Systems</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-neutral-900 shrink-0">
                  <Activity size={24} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-20 -mt-12 lg:-mt-20 max-w-7xl mx-auto px-4 w-full">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
        >
          {[
            { value: "250M+", label: "Cubic Meters Excavated", icon: Mountain },
            { value: "50km+", label: "Conveyor Systems Laid", icon: Layers },
            { value: "500+", label: "Heavy Fleet Assets", icon: Truck },
            { value: "Zero", label: "Lost Time Incidents", icon: ShieldCheck }
          ].map((stat, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-white dark:bg-neutral-900 rounded-3xl p-6 lg:p-8 shadow-2xl shadow-blue-900/10 border border-neutral-100 dark:border-neutral-800 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-6 border border-blue-100 dark:border-blue-800/50 group-hover:scale-110 transition-transform">
                <stat.icon size={28} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-neutral-900 dark:text-white mb-2">{stat.value}</h3>
              <p className="font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider text-[10px] lg:text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-4 w-full">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-blue-600 dark:text-blue-500 font-bold tracking-wider uppercase mb-3 text-sm flex items-center justify-center gap-2">
            <Settings size={16} /> The Extraction Value Chain
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white mb-6 tracking-tight">From Ore to Plant</h3>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
            We provide the complete heavy engineering backbone required for relentless mining operations. Our integrated approach ensures massive volumes of material are extracted, processed, and transported without interruption.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute left-[50%] top-10 bottom-10 w-1 bg-gradient-to-b from-blue-200 via-yellow-400 to-blue-200 dark:from-blue-900 dark:via-yellow-600 dark:to-blue-900 -translate-x-1/2 rounded-full"></div>

          <div className="space-y-16 md:space-y-24">
            {[
              { 
                step: "01",
                title: "Site Clearing & Overburden Removal", 
                desc: "Rapid mobilization of our massive fleet of 50-ton excavators, dozers, and articulated dumpers to strip topsoil and overburden, exposing the mineral seam safely and efficiently.", 
                icon: HardHat, 
                alignment: "left",
                img: "https://images.unsplash.com/photo-1769240627842-1a3bd858695c?auto=format&fit=crop&q=80&w=800"
              },
              { 
                step: "02",
                title: "Deep Pit Excavation & Drilling", 
                desc: "Executing complex benching and high-wall stabilization for deep open-cast mines. We implement advanced blasting techniques and continuous load-and-haul operations.", 
                icon: Mountain, 
                alignment: "right",
                img: "https://images.unsplash.com/photo-1652303518314-e1196ef221f6?auto=format&fit=crop&q=80&w=800"
              },
              { 
                step: "03",
                title: "Bulk Material Handling", 
                desc: "Structural erection and mechanical commissioning of massive overland conveyor networks, stacker-reclaimers, and rapid loading silos to move thousands of tons per hour.", 
                icon: Truck, 
                alignment: "left",
                img: "https://images.unsplash.com/photo-1758750521402-2d3956c2f75b?auto=format&fit=crop&q=80&w=800"
              },
              { 
                step: "04",
                title: "Beneficiation & Washing Plants", 
                desc: "Turnkey civil and structural development of high-capacity crushing, screening, and wet-processing washeries for coal, iron ore, and bauxite refinement.", 
                icon: Activity, 
                alignment: "right",
                img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
              }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                className={`flex flex-col md:flex-row items-center gap-8 lg:gap-16 ${step.alignment === 'right' ? 'md:flex-row-reverse' : ''}`}
              >
                <motion.div variants={step.alignment === 'left' ? slideInLeft : slideInRight} className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                  <div className={`flex items-center gap-4 mb-4 justify-center ${step.alignment === 'left' ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span className="text-6xl font-black text-neutral-100 dark:text-neutral-800/50">{step.step}</span>
                  </div>
                  <h4 className={`text-2xl lg:text-3xl font-black text-neutral-900 dark:text-white mb-4 ${step.alignment === 'left' ? 'md:text-right' : 'md:text-left'}`}>{step.title}</h4>
                  <p className={`text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed text-lg ${step.alignment === 'left' ? 'md:text-right' : 'md:text-left'}`}>{step.desc}</p>
                </motion.div>
                
                <div className="hidden md:flex absolute left-[50%] -translate-x-1/2 w-16 h-16 bg-white dark:bg-neutral-950 border-4 border-yellow-400 dark:border-yellow-600 rounded-full items-center justify-center shadow-xl z-10">
                  <step.icon size={24} className="text-blue-600 dark:text-blue-400" />
                </div>

                <motion.div variants={scaleIn} className="w-full md:w-1/2 flex justify-center">
                  <div className="w-full max-w-lg h-[300px] bg-neutral-100 dark:bg-neutral-900 rounded-[2.5rem] shadow-xl overflow-hidden relative group">
                    <Image src={step.img} alt={step.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent"></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-neutral-900 dark:bg-black w-full text-white relative overflow-hidden border-y border-neutral-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=2000')] opacity-5 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          
          <div className="mb-20 grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">The Heavy <br/><span className="text-yellow-400">Equipment Arsenal</span></h2>
              <p className="text-lg text-neutral-400 font-medium leading-relaxed max-w-xl">
                We own, operate, and meticulously maintain a vast fleet of specialized mining equipment, ensuring we are never reliant on third-party rentals or availability.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Link href="/contact" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-black text-lg group">
                Request Fleet Specs <MoveRight className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "Mass Excavators", 
                desc: "Ranging from 30 to 85 tons, equipped with heavy-duty rock buckets for tearing through hard geological strata.",
                icon: Pickaxe
              },
              { 
                title: "Articulated Dumpers", 
                desc: "High-capacity off-highway trucks designed to haul massive payloads across steep gradients and muddy pit bottoms.",
                icon: Truck
              },
              { 
                title: "Mobile Crushing Units", 
                desc: "Track-mounted primary jaw crushers that can be deployed directly at the blast face to minimize hauling costs.",
                icon: Settings
              }
            ].map((cap, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-neutral-800/40 hover:bg-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 p-8 rounded-[2rem] transition-colors group"
              >
                <div className="w-14 h-14 bg-neutral-800 rounded-2xl flex items-center justify-center mb-6 text-yellow-400 group-hover:scale-110 group-hover:bg-yellow-500 group-hover:text-neutral-900 transition-all shadow-inner">
                  <cap.icon size={28} />
                </div>
                <h4 className="text-xl font-black text-white mb-4">{cap.title}</h4>
                <p className="text-neutral-400 font-medium leading-relaxed text-sm">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="footprint" className="py-24 lg:py-32 bg-white dark:bg-neutral-950 w-full overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-neutral-900 dark:text-white">Geographic Contributions</h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-medium text-lg">Delivering unyielding infrastructure across the vast mineral belts of the Indian subcontinent and highly demanding international territories.</p>
          </div>

          <div className="space-y-16">
            {/* Domestic Block */}
            <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-[3rem] p-8 lg:p-16 border border-neutral-200 dark:border-neutral-800 shadow-xl">
              <div className="flex items-center gap-4 mb-10 border-b border-neutral-200 dark:border-neutral-800 pb-6">
                <MapPin className="text-blue-600 dark:text-blue-400" size={40} />
                <h3 className="text-3xl lg:text-4xl font-black text-neutral-900 dark:text-white">Domestic Dominance (India)</h3>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                  <div className="h-64 relative rounded-3xl overflow-hidden mb-6 shadow-lg">
                    <Image src="https://images.unsplash.com/photo-1620920015693-980524203ad5?auto=format&fit=crop&q=80&w=800" alt="Odisha Iron Ore" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4"><span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Odisha</span></div>
                  </div>
                  <h4 className="text-xl font-black text-neutral-900 dark:text-white mb-3">Iron Ore Overland Conveyor</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm font-medium leading-relaxed">Erected a massive 12km continuous conveyor system traversing steep gradients and thick forests to connect the primary mine pit directly to the railway siding.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="group">
                  <div className="h-64 relative rounded-3xl overflow-hidden mb-6 shadow-lg">
                    <Image src="https://images.unsplash.com/photo-1600363503477-a8d1d6d57dfc?auto=format&fit=crop&q=80&w=800" alt="Jharkhand Coal" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4"><span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Jharkhand</span></div>
                  </div>
                  <h4 className="text-xl font-black text-neutral-900 dark:text-white mb-3">Mega Coal Washery Setup</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm font-medium leading-relaxed">Turnkey mechanical installation of a 5 MTPA coal washery plant. Erected heavy rotary breakers, dense media cyclones, and complex structural networks.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="group">
                  <div className="h-64 relative rounded-3xl overflow-hidden mb-6 shadow-lg">
                    <Image src="https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&q=80&w=800" alt="Chhattisgarh Open Cast" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4"><span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Chhattisgarh</span></div>
                  </div>
                  <h4 className="text-xl font-black text-neutral-900 dark:text-white mb-3">Open-Cast Overburden Removal</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm font-medium leading-relaxed">Deployed an exclusive fleet of heavy earthmovers for continuous 24/7 overburden stripping, exposing fresh coal seams and ensuring target extraction rates.</p>
                </motion.div>
              </div>
            </div>

            {/* International Block */}
            <div className="bg-neutral-900 dark:bg-black rounded-[3rem] p-8 lg:p-16 border border-neutral-800 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000')] opacity-10 mix-blend-luminosity"></div>
              <div className="relative z-10 flex items-center gap-4 mb-10 border-b border-neutral-800 pb-6">
                <Globe className="text-yellow-400" size={40} />
                <h3 className="text-3xl lg:text-4xl font-black text-white">Global Frontiers</h3>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8 relative z-10">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                  <div className="h-64 relative rounded-3xl overflow-hidden mb-6 shadow-lg border border-neutral-700">
                    <Image src="https://plus.unsplash.com/premium_photo-1661963968707-cf062e54725b?auto=format&fit=crop&q=80&w=800" alt="Africa Copper Mine" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
                    <div className="absolute bottom-4 left-4"><span className="bg-yellow-500 text-neutral-900 text-xs font-bold px-3 py-1 rounded-full">Sub-Saharan Africa</span></div>
                  </div>
                  <h4 className="text-xl font-black text-white mb-3">Copper Beneficiation Plant</h4>
                  <p className="text-neutral-400 text-sm font-medium leading-relaxed">Complete civil and structural development of a massive processing plant in isolated terrain, handling international logistics and establishing expat camps.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="group">
                  <div className="h-64 relative rounded-3xl overflow-hidden mb-6 shadow-lg border border-neutral-700">
                    <Image src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800" alt="Middle East Quarry" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
                    <div className="absolute bottom-4 left-4"><span className="bg-yellow-500 text-neutral-900 text-xs font-bold px-3 py-1 rounded-full">Middle East</span></div>
                  </div>
                  <h4 className="text-xl font-black text-white mb-3">Aggregate Quarry & Export Port</h4>
                  <p className="text-neutral-400 text-sm font-medium leading-relaxed">Designed and erected heavy-duty crushing units and automated bulk material handling conveyor systems connecting the quarry directly to global export ships.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="group">
                  <div className="h-64 relative rounded-3xl overflow-hidden mb-6 shadow-lg border border-neutral-700">
                    <Image src="https://images.unsplash.com/photo-1622645636770-11fbf0611463?auto=format&fit=crop&q=80&w=800" alt="SE Asia Coal" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
                    <div className="absolute bottom-4 left-4"><span className="bg-yellow-500 text-neutral-900 text-xs font-bold px-3 py-1 rounded-full">Southeast Asia</span></div>
                  </div>
                  <h4 className="text-xl font-black text-white mb-3">Coal Handling Terminal</h4>
                  <p className="text-neutral-400 text-sm font-medium leading-relaxed">Execution of structural frameworks for massive storage silos and reclaimers, strictly adhering to international FIDIC contracts and environmental codes.</p>
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/30 w-full overflow-hidden border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold text-sm mb-6 border border-green-200 dark:border-green-800">
              <Leaf size={18} /> Ecological Responsibility
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-neutral-900 dark:text-white">Sustainable Mining & Reclamation</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed mb-8">
              Extraction must be balanced with environmental preservation. We employ rigorous dust suppression technologies, advanced water management systems, and strictly adhere to post-extraction land reclamation protocols.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 font-bold text-lg"><CheckCircle2 className="text-green-500" size={24}/> Automated Dust Suppression Spray Networks</li>
              <li className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 font-bold text-lg"><CheckCircle2 className="text-green-500" size={24}/> Pit Water De-watering & Safe Discharge</li>
              <li className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 font-bold text-lg"><CheckCircle2 className="text-green-500" size={24}/> Topsoil Preservation & Ecological Reclamation</li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="w-full md:w-1/2 relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800"
          >
            <Image src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1000" alt="Environmental Reclamation" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent mix-blend-multiply"></div>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-[#FFD700] py-24 relative overflow-hidden mt-auto shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
            className="mb-8 bg-white/30 p-5 rounded-full backdrop-blur-md shadow-lg"
          >
            <Pickaxe size={56} className="text-neutral-900" strokeWidth={2} />
          </motion.div>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-neutral-900 mb-6 tracking-tight leading-[1.1]"
          >
            Operating in <br/> tough terrain?
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-neutral-900/80 mb-12 max-w-2xl font-bold leading-relaxed"
          >
            Our mining infrastructure teams bring the resilience and heavy equipment required to keep your yields high and downtime low.
          </motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-neutral-900 text-white hover:bg-blue-600 rounded-full font-black text-lg md:text-xl transition-all duration-300 shadow-2xl hover:shadow-blue-600/50 hover:-translate-y-2">
              Mobilize Our Fleet
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}