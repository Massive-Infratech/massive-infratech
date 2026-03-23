"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import { 
  CheckCircle2, Building2, HardHat, ShieldCheck, 
  Users, Award, Wrench, Factory, Target 
} from "lucide-react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}

export default function About() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-neutral-950 selection:bg-blue-600 selection:text-white flex flex-col">
      
      <section className="relative w-full bg-blue-600 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1663090226912-511b20a3f8a3?q=80&w=3540&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/50 text-yellow-300 font-bold text-sm mb-6 backdrop-blur-md border border-blue-400/50">
              <Building2 size={18} />
              <span>Established 2015</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-white leading-tight uppercase tracking-tight">
              Building The Future of <br className="hidden lg:block" />
              <span className="text-yellow-400">Industrial Infrastructure</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-blue-100 mb-6 text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
              MASSIVE INFRATECH PRIVATE LIMITED was incorporated in 2015. The establishment and growth of the organization stand as one of the leading construction companies specialized to undertake power plant and all heavy steel-related construction work.
            </motion.p>
            
            <motion.p variants={fadeUp} className="text-blue-200 mb-10 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              The environment at MASSIVE INFRATECH is built to accept challenges and always be at the call of the customer to serve and satisfy them. We pride ourselves on executing complex engineering tasks with precision and unyielding dedication.
            </motion.p>
            
            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "Top-Notch Fabrication Equipment", 
                "Professional Engineers & Detailers", 
                "Welding Specialists", 
                "Individualized Service"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-blue-700/30 backdrop-blur-sm border border-blue-500/30 transition-colors hover:border-yellow-400/50">
                  <CheckCircle2 className="text-yellow-400 shrink-0" size={20} />
                  <span className="font-bold text-white text-sm md:text-base">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 relative w-full"
          >
            <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1663090226912-511b20a3f8a3?q=80&w=3540&auto=format&fit=crop')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 via-blue-900/20 to-transparent mix-blend-multiply"></div>
              
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md p-6 rounded-3xl border border-white/20 dark:border-neutral-700/50 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-yellow-400 flex items-center justify-center text-neutral-900 shrink-0 shadow-inner">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-lg sm:text-xl text-neutral-900 dark:text-white mb-1">Our Commitment</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 font-medium text-sm sm:text-base">Delivering excellence on every deadline.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-neutral-50 dark:bg-neutral-900/30 border-y border-neutral-200 dark:border-neutral-800 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
          >
            {[
              { icon: ShieldCheck, stat: "100%", label: "Safety Record" },
              { icon: Factory, stat: "50+", label: "Heavy Projects" },
              { icon: Users, stat: "200+", label: "Expert Personnel" },
              { icon: Award, stat: "10+", label: "Years Experience" }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="text-center group">
                <div className="w-16 h-16 mx-auto bg-white dark:bg-neutral-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-neutral-100 dark:border-neutral-700 group-hover:-translate-y-2 transition-transform duration-300">
                  <item.icon size={32} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 dark:text-white mb-2">{item.stat}</h3>
                <p className="text-sm md:text-base font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wide">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 w-full flex-grow">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase mb-3 text-sm">Core Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white mb-6">Our Engineering Profile</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-medium">
            Our profile is well established in key areas of industrial and power plant infrastructure, ensuring robust and scalable solutions.
          </p>
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { 
              title: "Structural Steel", 
              desc: "Heavy fabrication and erection of structural frameworks for industrial sites.",
              img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800"
            },
            { 
              title: "Boiler Installation", 
              desc: "Expert handling, assembly, and maintenance of high-pressure boiler systems.",
              img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800"
            },
            { 
              title: "Turbine Generator", 
              desc: "Precision alignment and installation of TG sets for power industries.",
              img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800"
            },
            { 
              title: "Ducting & Piping", 
              desc: "Comprehensive solutions for industrial ducting and high-pressure piping networks.",
              img: "https://plus.unsplash.com/premium_photo-1661577094877-725f859aff3e?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=800"
            }
          ].map((service, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUp}
              className="group bg-white dark:bg-neutral-900 rounded-[2rem] shadow-lg border border-neutral-100 dark:border-neutral-800 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="w-full h-48 overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url(${service.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                  <Wrench className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h4 className="text-xl md:text-2xl font-black text-neutral-900 dark:text-white mb-3">{service.title}</h4>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium text-sm md:text-base flex-grow">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="w-full bg-[#FFD700] py-20 md:py-24 relative overflow-hidden mt-auto shrink-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div className="mb-6 bg-white/20 p-4 rounded-full backdrop-blur-sm">
            <Building2 size={48} className="text-neutral-900" strokeWidth={2.5} />
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-neutral-900 mb-6 tracking-tight">
            Ready to start your next massive project?
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-800 mb-10 max-w-2xl font-bold leading-relaxed">
            Join forces with an industry leader equipped to handle your most demanding construction requirements.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[#1A61FF] text-white hover:bg-neutral-900 rounded-full font-black text-lg md:text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Contact Our Team
          </Link>
        </div>
      </section>

    </div>
  )
}