"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Users, HardHat, ShieldCheck, Wrench, CheckCircle2, ArrowRight } from "lucide-react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}

const specializedRoles = [
  "Certified Structural Welders",
  "High-Pressure Pipe Fitters",
  "Heavy Machinery Operators",
  "Site Supervisors & Foremen",
  "Quality Control Inspectors",
  "Safety & Compliance Officers"
]

export default function Manpower() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-neutral-950 selection:bg-blue-600 selection:text-white flex flex-col">
      
      {/* 1. HERO SECTION (BLUE) */}
      <section className="relative w-full bg-blue-600 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden shrink-0">
        {/* Subtle background overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/50 text-yellow-300 font-bold text-sm mb-6 backdrop-blur-md border border-blue-400/50">
              <Users size={18} />
              <span>Professional Workforce Solutions</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight uppercase leading-tight">
              We Build <br />
              <span className="text-yellow-400">Excellence.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-blue-100 font-medium mb-10 max-w-xl mx-auto lg:mx-0 text-lg md:text-xl leading-relaxed">
              Providing project-based, multi-disciplined manpower and workforce solutions to diverse industrial sectors across the nation.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/contact" className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-neutral-900 font-black py-4 px-8 rounded-full transition-all hover:scale-105 shadow-xl shadow-yellow-400/20 text-center flex items-center justify-center">
                Hire Our Team <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/compliance" className="w-full sm:w-auto bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-full transition-all text-center">
                View Certifications
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:block relative h-[600px] w-full"
          >
            <Image 
              src="https://plus.unsplash.com/premium_photo-1663054541741-0276bdf1808b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=1000"
              alt="Professional Construction Worker"
              fill
              className="object-cover object-center rounded-[3rem] shadow-2xl"
              priority
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-neutral-900 p-6 rounded-3xl shadow-xl border border-neutral-100 dark:border-neutral-800 flex items-center gap-4">
              <div className="bg-yellow-400 p-3 rounded-2xl text-neutral-900">
                <ShieldCheck size={32} />
              </div>
              <div>
                <p className="font-black text-2xl text-neutral-900 dark:text-white">100%</p>
                <p className="text-sm font-bold text-neutral-500">Certified Experts</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW & ABSTRACT GRID */}
      <section className="py-24 max-w-7xl mx-auto px-4 flex-grow w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white mb-8 tracking-tight">
              Precision Output Requires <span className="text-blue-600 dark:text-blue-500">Specialized Minds.</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-6 text-neutral-600 dark:text-neutral-400 font-medium text-lg leading-relaxed">
              <p>
                With increasing complexity in today's industry and specific demands changing from project to project, it is of the utmost importance to work with specialized professionals. Hiring MASSIVE'S manpower services ensures that each task in your project is executed by an adequately qualified and certified workforce.
              </p>
              <p>
                Our professional staff represents all of our core principles and has been a single most important factor in making Massive the industry leader it is today. With our highly skilled personnel to supervise, coordinate, weld, or complete many other specialized tasks, you can efficiently and seamlessly complete even the most demanding projects.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 grid sm:grid-cols-2 gap-4">
              {specializedRoles.map((role, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" size={20} />
                  <span className="font-bold text-neutral-800 dark:text-neutral-200">{role}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Abstract Image Grid - Fully Responsive */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full hidden md:block"
          >
             <div className="absolute top-0 right-0 w-3/4 h-[70%] rounded-[3rem] rounded-bl-none overflow-hidden shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000" alt="Industrial Welding" fill className="object-cover" />
             </div>
             <div className="absolute bottom-10 left-0 w-3/5 h-[45%] rounded-[2rem] rounded-tr-none overflow-hidden border-8 border-white dark:border-neutral-950 shadow-2xl z-10">
                <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000" alt="Construction Planning" fill className="object-cover" />
             </div>
             <div className="absolute bottom-0 right-10 w-2/5 h-[35%] rounded-[1.5rem] rounded-tl-none overflow-hidden border-8 border-white dark:border-neutral-950 shadow-2xl z-20">
                <Image src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1000" alt="Heavy Machinery Operator" fill className="object-cover" />
             </div>
          </motion.div>
        </div>

        {/* 3. INTERACTIVE GALLERY STRIPS */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-black text-neutral-900 dark:text-white uppercase tracking-wider">Our Crew In Action</h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-3 h-[600px] md:h-[500px] w-full overflow-hidden rounded-3xl"
        >
          {[
            { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800", label: "Structural Engineering" },
            { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800", label: "Precision Welding" },
            { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800", label: "Project Management" },
            { src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800", label: "Heavy Lifting" },
            { src: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800", label: "Quality Assurance" }
          ].map((item, i) => (
            <div 
              key={i}
              className="group relative flex-1 md:hover:flex-[2] transition-all duration-700 ease-in-out cursor-pointer overflow-hidden rounded-2xl md:rounded-none first:rounded-t-3xl md:first:rounded-l-3xl md:first:rounded-tr-none last:rounded-b-3xl md:last:rounded-r-3xl md:last:rounded-bl-none"
            >
              <Image 
                src={item.src} 
                alt={item.label} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-6 left-6 right-6 translate-y-4 md:translate-y-8 group-hover:translate-y-0 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mb-3 hidden md:flex">
                  <HardHat size={20} className="text-white" />
                </div>
                <h4 className="text-white font-bold text-lg md:text-xl whitespace-nowrap">{item.label}</h4>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 4. YELLOW CTA BANNER (Flush to bottom) */}
      <section className="w-full bg-[#FFD700] py-20 md:py-24 relative overflow-hidden mt-auto shrink-0">
        {/* Subtle background overlay to give it some depth */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div className="mb-6 bg-white/20 p-4 rounded-full backdrop-blur-sm">
            <Users size={48} className="text-neutral-900" strokeWidth={2.5} />
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-neutral-900 mb-6 tracking-tight">
            Ready to deploy certified experts?
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-800 mb-10 max-w-2xl font-bold leading-relaxed">
            Equip your next massive project with an industry-leading workforce trained for precision and safety.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[#1A61FF] text-white hover:bg-neutral-900 rounded-full font-black text-lg md:text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Hire Our Team
          </Link>
        </div>
      </section>

    </div>
  )
}