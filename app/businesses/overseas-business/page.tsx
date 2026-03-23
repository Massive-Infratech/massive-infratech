"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  Globe, Activity, Filter, Waves, ArrowRight, 
  Map, RefreshCw, ShieldCheck, CheckCircle2, 
  Factory, MoveRight, Plane, Anchor, Ship,
  Briefcase, Construction, HardHat, Container
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

export default function OverseasBusiness() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-neutral-950 selection:bg-blue-600 selection:text-white flex flex-col overflow-hidden">
      
      <section className="relative w-full bg-blue-600 pt-32 pb-24 lg:pt-48 lg:pb-32 shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-700/90 via-blue-600/80 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/50 backdrop-blur-md border border-blue-400/50 text-yellow-300 font-bold text-sm mb-8 shadow-xl">
              <Globe size={18} />
              <span className="uppercase tracking-wide">Global Infrastructure Systems</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-[1.1] tracking-tight uppercase">
              Overseas <br/>
              <span className="text-yellow-400">
                Operations
              </span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl">
              Exporting our heavy engineering excellence to international markets. We specialize in building massive infrastructure in different countries, navigating complex logistics, and deploying world-class Indian engineering talent globally.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-black text-neutral-900 bg-yellow-400 hover:bg-yellow-300 rounded-full transition-all hover:-translate-y-1 shadow-xl shadow-yellow-400/20">
                Discuss Global Projects
              </Link>
              <Link href="#lifecycle" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-500/30 hover:bg-blue-500/50 border border-blue-400/30 rounded-full transition-all backdrop-blur-sm">
                Explore Int'l Reach
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden" animate="visible" variants={slideInRight}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative h-[450px] lg:h-[550px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 group">
              <Image 
                src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&q=80&w=1000" 
                alt="International Construction" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 via-transparent to-transparent mix-blend-multiply"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md p-5 rounded-3xl border border-white/20 dark:border-neutral-700/50 shadow-xl flex items-center justify-between">
                <div>
                  <h3 className="font-black text-xl text-neutral-900 dark:text-white mb-1">FIDIC Code</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium text-sm">International contract compliance</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <Briefcase size={24} />
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
            { value: "15+", label: "Countries Operated", icon: Map },
            { value: "100K+", label: "Tons Exported", icon: Ship },
            { value: "Global", label: "Supply Chain", icon: Globe },
            { value: "ISO", label: "Global Standards", icon: ShieldCheck }
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
            <Globe size={16} /> Complete Execution Lifecycle
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white mb-6 tracking-tight">End-to-End Overseas Delivery</h3>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
            Executing projects abroad requires more than engineering. We manage the entire cross-border lifecycle, from adapting to foreign building codes to deploying entire self-sustaining worker camps.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-1 bg-gradient-to-b from-blue-100 via-blue-200 to-neutral-100 dark:from-blue-900/30 dark:via-blue-900/30 dark:to-neutral-900 -translate-x-1/2 rounded-full"></div>

          <div className="space-y-12 md:space-y-24">
            {[
              { 
                title: "Project Localization & Engineering", 
                desc: "Adapting Indian engineering designs to perfectly align with foreign statutory codes (like Eurocodes or IBC) and local municipal laws, ensuring rapid international approvals.", 
                icon: Map, alignment: "left" 
              },
              { 
                title: "Global Procurement & Shipping", 
                desc: "Mobilizing break-bulk cargo vessels, navigating international customs, and shipping massive prefabricated heavy steel and machinery safely across oceans.", 
                icon: Ship, alignment: "right" 
              },
              { 
                title: "Expatriate Deployment & Camps", 
                desc: "Securing foreign work visas, flying in certified Indian engineering talent, and establishing secure, self-sustaining remote base camps for our labor force.", 
                icon: Plane, alignment: "left" 
              },
              { 
                title: "Joint Venture Integration", 
                desc: "Partnering seamlessly with local overseas contractors to blend our heavy infrastructure capabilities with their regional material and resource networks.", 
                icon: Briefcase, alignment: "right" 
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000')] opacity-5 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          
          <div className="mb-20 grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Core Infrastructure <br/><span className="text-blue-400">Capabilities</span></h2>
              <p className="text-lg text-neutral-400 font-medium leading-relaxed max-w-xl">
                Bringing world-class Indian engineering capability to complex environments, from the deserts of the Middle East to the remote terrains of Africa.
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
                title: "Desalination & Power", 
                desc: "Executing heavy structural steel and massive concrete works for mega desalination and thermal power plants across the MENA region.",
                icon: Factory
              },
              { 
                title: "Mining & Minerals", 
                desc: "Turnkey mechanical setup of high-capacity crushing, screening, and mineral washing plants in remote African terrains.",
                icon: HardHat
              },
              { 
                title: "Heavy Civil Earthworks", 
                desc: "Massive site preparation, land leveling, and deep piling works for foreign industrial corridors and SEZ developments.",
                icon: Construction
              },
              { 
                title: "Cross-Country Pipelines", 
                desc: "Deploying specialized orbital welding teams abroad to lay extensive water and petrochemical distribution networks.",
                icon: Activity
              },
              { 
                title: "Port Infrastructure", 
                desc: "Constructing breakwaters, heavy-duty container yards, and automated bulk material handling conveyor systems at global ports.",
                icon: Anchor
              },
              { 
                title: "Industrial Plant Setup", 
                desc: "End-to-end erection of pre-engineered buildings (PEBs) and heavy fabrication for overseas manufacturing facilities.",
                icon: Briefcase
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
              <ShieldCheck size={18} /> Global Standards
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-neutral-900 dark:text-white">International Compliance</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed mb-8">
              Operating in foreign jurisdictions requires flawless legal and technical compliance. We strictly adhere to global frameworks, ensuring smooth, penalty-free execution for foreign governments and private clients.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 font-bold text-lg"><CheckCircle2 className="text-yellow-500" size={24}/> FIDIC Contract Execution</li>
              <li className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 font-bold text-lg"><CheckCircle2 className="text-yellow-500" size={24}/> IBC and Eurocode Structural Alignment</li>
              <li className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 font-bold text-lg"><CheckCircle2 className="text-yellow-500" size={24}/> International Labor Organization (ILO) Standards</li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="w-full md:w-1/2 relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800"
          >
            <Image src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1000" alt="Global Compliance" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent mix-blend-multiply"></div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-neutral-950 w-full overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-neutral-900 dark:text-white">Logistics & Fleet</h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-medium text-lg">We own and deploy specialized containerized equipment, allowing us to rapidly establish engineering bases anywhere in the world.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            {[
              { title: "Exported Heavy Machinery", desc: "Shipping our own fleets of cranes, excavators, and automated welding rigs to ensure we are never delayed by local equipment shortages.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
              { title: "Containerized Work Camps", desc: "Deploying modular, fully-equipped accommodation, mess halls, and site offices to support hundreds of expat workers instantly.", img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800" },
              { title: "Mobile Tooling Units", desc: "Shipping entirely self-sufficient workshop containers filled with precision calibration, machining, and NDT testing tools.", img: "https://images.unsplash.com/photo-1666618090858-fbcee636bd3e?auto=format&fit=crop&q=80&w=800" }
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
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-neutral-900 dark:text-white">International Track Record</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium max-w-2xl">
              Bringing massive infrastructure mandates to life across borders, overcoming extreme climates and logistical hurdles.
            </p>
          </div>

          <div className="space-y-20 lg:space-y-32">
            {[
              { 
                name: "Middle East Mega Desalination Setup", 
                scope: "Heavy Fabrication & Erection Export",
                details: "Fabricated over 8,000 MT of specialized structural steel in our Indian facilities, shipped via break-bulk cargo, and deployed an elite 150-man erection team to the UAE. The project was executed under severe desert temperatures, maintaining strict ISO compliance throughout.",
                image: "https://plus.unsplash.com/premium_photo-1661948694105-a80f9720ff37?auto=format&fit=crop&q=80&w=1200" 
              },
              { 
                name: "African Mining Infrastructure", 
                scope: "Remote Turnkey Development",
                details: "Spearheaded the complete civil and structural development of a massive mineral processing plant in remote Sub-Saharan Africa. We handled the entire international logistics chain, establishing a self-sustaining expat camp and executing heavy earthworks in highly isolated terrain.",
                image: "https://images.unsplash.com/photo-1651672397008-01d088f4a9f6?auto=format&fit=crop&q=80&w=1200" 
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
                    International Case Study
                  </div>
                  <h4 className="text-3xl lg:text-4xl font-black mb-6 text-neutral-900 dark:text-white leading-tight">{project.name}</h4>
                  <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">{project.scope}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed mb-8 text-lg">
                    {project.details}
                  </p>
                  <Link href="/contact" className="inline-flex items-center w-fit text-neutral-900 dark:text-white font-black group pb-1 border-b-2 border-yellow-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
                    Review Global Portfolios <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform text-blue-600" size={20} />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FFD700] py-24 relative overflow-hidden mt-auto shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
            className="mb-8 bg-white/30 p-5 rounded-full backdrop-blur-md shadow-lg"
          >
            <Globe size={56} className="text-neutral-900" strokeWidth={2} />
          </motion.div>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-neutral-900 mb-6 tracking-tight leading-[1.1]"
          >
            Expanding your <br/> global footprint?
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-neutral-900/80 mb-12 max-w-2xl font-bold leading-relaxed"
          >
            Partner with a robust Indian infrastructure firm capable of executing massive international mandates seamlessly across borders.
          </motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-neutral-900 text-white hover:bg-blue-600 rounded-full font-black text-lg md:text-xl transition-all duration-300 shadow-2xl hover:shadow-blue-600/50 hover:-translate-y-2">
              Discuss Overseas Ventures
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}