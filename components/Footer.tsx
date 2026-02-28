"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Heart, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white/80 dark:bg-neutral-950/80 backdrop-blur-2xl border-t border-neutral-200 dark:border-neutral-800/50">
      
      {/* This style block creates the static dot mask that punches holes in our text.
        It is responsive, creating denser grains on smaller screens. 
      */}
      <style dangerouslySetInnerHTML={{__html: `
        .dot-mask {
          -webkit-mask-image: radial-gradient(circle, white 2px, transparent 2px);
          mask-image: radial-gradient(circle, white 2px, transparent 2px);
          -webkit-mask-size: 4px 4px;
          mask-size: 4px 4px;
        }
        @media (min-width: 768px) {
          .dot-mask {
            -webkit-mask-size: 6px 6px;
            mask-size: 6px 6px;
          }
        }
        @media (min-width: 1024px) {
          .dot-mask {
            -webkit-mask-size: 8px 8px;
            mask-size: 8px 8px;
          }
        }
      `}} />

      {/* Breathing Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center pointer-events-none z-0 select-none overflow-hidden opacity-40 dark:opacity-30">
        
        {/* MASSIVE Text */}
        <motion.span 
          animate={{ backgroundPosition: ["200% center", "-200% center"] }}
          transition={{ repeat: Infinity, repeatType: "reverse", ease: "easeInOut", duration: 12 }}
          className="text-[18vw] font-black leading-[0.8] tracking-tighter whitespace-nowrap bg-clip-text text-transparent bg-[length:200%_auto] dot-mask bg-gradient-to-r from-blue-900/10 via-blue-500/100 to-blue-900/10 dark:from-neutral-600/10 dark:via-white dark:to-neutral-600/10"
        >
          MASSIVE
        </motion.span>
        
        {/* INFRATECH Text */}
        <motion.span 
          animate={{ backgroundPosition: ["-200% center", "200% center"] }}
          transition={{ repeat: Infinity, repeatType: "reverse", ease: "easeInOut", duration: 12 }}
          className="text-[18vw] font-black leading-[0.8] tracking-tighter whitespace-nowrap ml-[20vw] bg-clip-text text-transparent bg-[length:200%_auto] dot-mask bg-gradient-to-r from-blue-900/10 via-blue-500/100 to-blue-900/10 dark:from-neutral-600/10 dark:via-white dark:to-neutral-600/10"
        >
          INFRATECH
        </motion.span>

      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center mb-6">
              <span className="text-3xl font-black whitespace-nowrap text-blue-600 dark:text-blue-500 tracking-tighter">
                MASSIVE<span className="text-neutral-900 text-yellow-400">INFRATECH</span>
              </span>
            </Link>
            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm mb-8 font-medium">
              A trusted name in infrastructure and industrial construction since 2015, delivering excellence in power plant and EPC projects across India.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <Link href="#" className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/50 dark:hover:text-blue-400 transition-all border border-transparent dark:border-neutral-800 hover:scale-110">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/50 dark:hover:text-blue-400 transition-all border border-transparent dark:border-neutral-800 hover:scale-110">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/50 dark:hover:text-blue-400 transition-all border border-transparent dark:border-neutral-800 hover:scale-110">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/50 dark:hover:text-blue-400 transition-all border border-transparent dark:border-neutral-800 hover:scale-110">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-sm font-black text-neutral-900 uppercase dark:text-white tracking-widest">Company</h2>
            <ul className="text-neutral-500 dark:text-neutral-400 font-medium space-y-4">
              <li><Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Our Team</Link></li>
              <li><Link href="/compliance" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Compliance</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="lg:col-span-3">
            <h2 className="mb-6 text-sm font-black text-neutral-900 uppercase dark:text-white tracking-widest">Our Solutions</h2>
            <ul className="text-neutral-500 dark:text-neutral-400 font-medium space-y-4">
              <li><Link href="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Engineering Services</Link></li>
              <li><Link href="/tools" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Tools & Machinery</Link></li>
              <li><Link href="/manpower" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Manpower Supply</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h2 className="mb-6 text-sm font-black text-neutral-900 uppercase dark:text-white tracking-widest">Reach Out</h2>
            <ul className="text-neutral-500 dark:text-neutral-400 font-medium space-y-5">
              <li className="flex items-start gap-3 text-sm group">
                <div className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                  <MapPin size={16} className="text-blue-600 dark:text-blue-400" />
                </div>
                <span className="mt-1 leading-relaxed">Near Lanco Power Project Gate No-3, Dibulganj, Anpara, Sonbhadra, UP – 231225</span>
              </li>
              <li className="flex items-center gap-3 text-sm group">
                <div className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                  <Phone size={16} className="text-blue-600 dark:text-blue-400" />
                </div>
                <span className="leading-relaxed">+91 95990 39554 <br/> +91 90262 81554</span>
              </li>
              <li className="flex items-center gap-3 text-sm group">
                <div className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                  <Mail size={16} className="text-blue-600 dark:text-blue-400" />
                </div>
                <span>massivepower.info@gmail.com</span>
              </li>
            </ul>
          </div>
          
        </div>

        <hr className="my-8 border-neutral-200 dark:border-neutral-800/80" />
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Massive Infratech Private Limited.
          </span>
          
          <div className="flex items-center gap-1.5 text-sm font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900/50 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>by</span>
            <Link href="https://zetaailabs.com" target="_blank" rel="noopener noreferrer" className="font-bold text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Zeta AI Labs
            </Link>
          </div>

          <div className="flex gap-3 text-xs font-bold text-neutral-500 dark:text-neutral-500 uppercase tracking-widest">
             <span className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-900 rounded-md">GST Reg.</span>
             <span className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-900 rounded-md">ISO 9001</span>
          </div>
        </div>
      </div>
    </footer>
  )
}