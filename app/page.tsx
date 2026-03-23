"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { motion, Variants } from "framer-motion"
import { 
  ArrowRight, ShieldCheck, Wrench, Users, CheckCircle, 
  Factory, HardHat, Zap, Flame, Droplets, Target, Eye, 
  Award, BarChart3, Clock, Scale
} from "lucide-react"

// Dynamically import the 3D background wrapper to avoid SSR hydration issues
const SceneWrapper = dynamic(() => import('@/components/SceneWrapper'), { 
  ssr: false,
  loading: () => <div className="fixed inset-0 w-full h-full -z-10 bg-transparent" />
})

// Added Variants type to fix the build error
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15 } 
  }
}

export default function Home() {
  return (
    <div className="relative w-full min-h-screen selection:bg-blue-600 selection:text-white overflow-hidden">
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000 ease-in opacity-100">
        <SceneWrapper />
      </div>
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-4 pt-24 pb-12">
        <div className="max-w-[100rem] mx-auto text-center z-10 w-full relative">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/70 dark:bg-black/40 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full flex flex-col items-center"
          >
            <motion.h1 variants={fadeUp} className="text-[12vw] sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[9rem] leading-[0.85] font-black tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-br from-blue-700 via-blue-500 to-yellow-500 dark:from-blue-400 dark:via-blue-300 dark:to-yellow-400 drop-shadow-lg w-full text-center relative z-10 py-2 will-change-transform">
              TO BEAR ANYTHING.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-2xl text-neutral-800 dark:text-neutral-200 mb-12 text-balance max-w-4xl font-semibold leading-relaxed drop-shadow-md relative z-10 will-change-transform">
              A trusted name in infrastructure and industrial construction, delivering excellence in power plant projects, structural fabrication, and EPC solutions across India since 2015.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative z-10 w-full sm:w-auto px-4 will-change-transform">
              <Link href="/about" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-lg font-black text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all hover:scale-105 shadow-xl shadow-blue-600/30">
                Go To Know Us <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/services" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-neutral-900 dark:text-white bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-white/40 dark:border-neutral-700 hover:bg-white/90 dark:hover:bg-neutral-800/90 rounded-full transition-all shadow-lg">
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR PROMISE */}
      {/* Changed negative margins to positive margins to pre-render before scrolling into view */}
      <section className="py-32 bg-blue-600 text-white relative z-20 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1672380135241-c024f7fbfa13?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
        
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "200px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto px-4 text-center will-change-transform"
        >
          <motion.div variants={fadeUp}>
            <div className="inline-block p-4 rounded-3xl bg-white/10 backdrop-blur-md mb-8">
              <Award className="w-12 h-12 text-yellow-400" />
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight">
              "To provide you with real value, outstanding service, and exceptional performance regardless of the size or complexity of your project."
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 font-bold uppercase tracking-widest">
              — The Massive Promise
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. STATS SECTION */}
      <section className="py-24 bg-white/40 dark:bg-neutral-950/40 relative z-20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "200px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {[
              { icon: CheckCircle, value: "10+", label: "Years Experience" },
              { icon: Wrench, value: "50+", label: "Industrial Projects" },
              { icon: ShieldCheck, value: "100%", label: "Safety Record" },
              { icon: Users, value: "200+", label: "Skilled Workers" }
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeUp} className="p-8 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg rounded-[2rem] shadow-xl border border-white/50 dark:border-neutral-800 text-center group hover:-translate-y-3 transition-transform duration-500 will-change-transform">
                <div className="w-20 h-20 mx-auto bg-blue-50 dark:bg-blue-900/30 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  <stat.icon className="w-10 h-10 text-blue-600 dark:text-blue-400 group-hover:text-white" />
                </div>
                <h3 className="text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white mb-3 tracking-tighter">{stat.value}</h3>
                <p className="font-bold text-neutral-600 dark:text-neutral-400 text-lg uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-32 bg-neutral-50/70 dark:bg-neutral-900/70 relative z-20 backdrop-blur-xl border-y border-white/50 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "200px" }}
            variants={staggerContainer}
            className="text-center mb-20 will-change-transform"
          >
            <motion.h2 variants={fadeUp} className="text-blue-600 dark:text-blue-400 font-black tracking-widest uppercase mb-4 text-sm md:text-base">Why Choose Us</motion.h2>
            <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-black text-neutral-900 dark:text-white tracking-tight leading-tight">
              Advantages of Hiring <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Massive Infratech.</span>
            </motion.h3>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "200px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {[
              { title: "Top-Notch Equipment", desc: "Access to the industry's best fabrication and construction machinery." },
              { title: "Professional Engineers", desc: "Guided by highly qualified structural and mechanical experts." },
              { title: "Welding Specialists", desc: "Elite team of certified structural and pipe welders." },
              { title: "R Stamp Holder", desc: "Certified and authorized for critical boiler and vessel repairs." },
              { title: "Individualized Service", desc: "Customized execution strategies tailored to your exact project scope." },
              { title: "Low Overhead", desc: "Efficient operational processes ensuring highly competitive pricing." }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white/90 dark:bg-neutral-950/90 backdrop-blur-lg border border-white/50 dark:border-neutral-800 p-8 md:p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 group will-change-transform">
                <div className="flex gap-6 items-start">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-2xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <CheckCircle className="text-blue-600 dark:text-blue-400 group-hover:text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-2xl text-neutral-900 dark:text-white mb-3">{item.title}</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed text-lg">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. CORE VALUES */}
      <section className="py-32 relative z-20 bg-white/40 dark:bg-neutral-950/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4">
           <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "200px" }}
            variants={staggerContainer}
            className="text-center mb-20 will-change-transform"
          >
            <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-black text-neutral-900 dark:text-white tracking-tight">Our Core Values</motion.h3>
            <motion.p variants={fadeUp} className="text-neutral-700 dark:text-neutral-300 mt-6 text-xl md:text-2xl font-medium max-w-3xl mx-auto">The unyielding principles that guide every massive project and professional relationship we build.</motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "200px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeUp} className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-lg rounded-[3rem] p-12 border border-white/50 dark:border-neutral-800 shadow-2xl text-center will-change-transform">
              <div className="w-24 h-24 mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-8">
                <Scale className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-3xl font-black mb-6 text-neutral-900 dark:text-white tracking-wide">Integrity</h4>
              <p className="text-neutral-600 dark:text-neutral-400 font-medium text-lg leading-relaxed">We maintain transparency and honesty in all our operations, ensuring compliance with all MCA and GST regulations.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-blue-600 dark:bg-blue-700 backdrop-blur-lg rounded-[3rem] p-12 shadow-2xl text-center text-white transform lg:-translate-y-8 border border-blue-400/30 will-change-transform">
              <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-8 backdrop-blur-md">
                <ShieldCheck className="w-12 h-12 text-yellow-300" />
              </div>
              <h4 className="text-3xl font-black mb-6 tracking-wide">Safety First</h4>
              <p className="text-blue-100 font-medium text-lg leading-relaxed">Zero-tolerance policy towards safety hazards. Our unmatched safety record ensures minimal incidents on every site.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-lg rounded-[3rem] p-12 border border-white/50 dark:border-neutral-800 shadow-2xl text-center will-change-transform">
              <div className="w-24 h-24 mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-8">
                <Clock className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-3xl font-black mb-6 text-neutral-900 dark:text-white tracking-wide">Commitment</h4>
              <p className="text-neutral-600 dark:text-neutral-400 font-medium text-lg leading-relaxed">Total commitment to time and quality has earned MASSIVE INFRATECH a highly dependable and respected reputation.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. MISSION & VISION */}
      <section className="py-24 relative z-20 bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-xl border-y border-white/30 dark:border-neutral-800">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "200px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 lg:gap-12"
        >
          <motion.div variants={fadeUp} className="bg-yellow-400 dark:bg-yellow-500 text-neutral-900 rounded-[3rem] p-12 lg:p-16 shadow-2xl overflow-hidden relative will-change-transform">
            <div className="absolute top-0 right-0 p-8 opacity-20"><Eye size={120} /></div>
            <h3 className="text-5xl lg:text-6xl font-black mb-10 tracking-tight relative z-10">Our Vision</h3>
            <p className="text-2xl font-black leading-tight mb-8 relative z-10">
              To become the most respected and prominent service company in our industry - known for our dedication to excellence in everything we do.
            </p>
            <p className="font-bold text-lg leading-relaxed relative z-10 opacity-90">
              To have the industry's best lineup of professional team players who are dedicated to safety, quality and take pride in all their achievements big and small.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-neutral-900 dark:bg-black text-white rounded-[3rem] p-12 lg:p-16 shadow-2xl overflow-hidden relative border border-neutral-800 will-change-transform">
            <div className="absolute top-0 right-0 p-8 opacity-10"><Target size={120} className="text-blue-500" /></div>
            <h3 className="text-5xl lg:text-6xl font-black mb-10 tracking-tight relative z-10">Our Mission</h3>
            <p className="text-2xl font-bold leading-tight mb-8 relative z-10">
              To bring the industry a new standard of quality, craftsmanship, safety, and technical support at a competitive price, while making customer satisfaction our top priority.
            </p>
            <p className="text-neutral-400 font-medium text-lg leading-relaxed relative z-10">
              To foster a work environment supporting professional development, individual proficiency, and team integrity.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 7. INDUSTRIES SERVED */}
      <section className="py-32 bg-white/60 dark:bg-neutral-950/60 relative z-20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "200px" }}
            variants={staggerContainer}
            className="text-center mb-20 will-change-transform"
          >
            <motion.h2 variants={fadeUp} className="text-blue-600 dark:text-blue-400 font-black tracking-widest uppercase mb-4 text-sm md:text-base">Industries We Serve</motion.h2>
            <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-black text-neutral-900 dark:text-white tracking-tight">Diversified Construction Excellence.</motion.h3>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "200px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {[
              { icon: Zap, title: "Thermal Power", desc: "Specialized in structural steel, boiler, TG, ducting, and piping." },
              { icon: Flame, title: "Refineries", desc: "Heavy mechanical execution for massive refinery infrastructure." },
              { icon: HardHat, title: "Steel Plants", desc: "Fabrication and erection of heavy metal industry components." },
              { icon: Droplets, title: "Irrigation", desc: "Large scale civil infrastructure and water management projects." }
            ].map((industry, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-lg border border-white/50 dark:border-neutral-800 p-8 rounded-[2rem] hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-2xl transition-all duration-500 group shadow-lg text-center lg:text-left will-change-transform">
                <div className="w-20 h-20 mx-auto lg:mx-0 bg-neutral-50 dark:bg-neutral-950 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <industry.icon size={36} className="text-blue-600 dark:text-blue-400 group-hover:text-white" />
                </div>
                <h4 className="text-2xl font-black mb-4 text-neutral-900 dark:text-white">{industry.title}</h4>
                <p className="text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">{industry.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-32 bg-blue-600 text-white relative z-20 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "200px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto px-4 relative z-10 text-center will-change-transform"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter uppercase">Build The Future.</h2>
            <p className="text-xl md:text-3xl text-blue-100 mb-12 font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Partner with Massive Infratech for unparalleled safety, precision, and delivery on your next major infrastructure project.
            </p>
            <div>
              <Link href="/contact" className="inline-flex items-center justify-center px-12 py-6 text-xl md:text-2xl font-black text-blue-600 bg-white hover:bg-yellow-400 hover:text-neutral-900 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl border-4 border-transparent hover:border-white/50">
                Get In Touch With Us <ArrowRight className="ml-3" size={28} />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}