import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 max-w-sm">
            <Link href="/" className="flex items-center mb-4">
              <span className="self-center text-2xl font-black whitespace-nowrap text-blue-600 dark:text-blue-500 tracking-tighter">
            MASSIVE<span className="text-neutral-900 text-yellow-400">INFRATECH</span>
          </span>
            </Link>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              A trusted name in infrastructure and industrial construction since 2015, delivering excellence in power plant and EPC projects across India.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-neutral-900 uppercase dark:text-white">Quick Links</h2>
              <ul className="text-neutral-500 dark:text-neutral-400 font-medium space-y-4">
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/services" className="hover:underline">Our Services</Link></li>
                <li><Link href="/compliance" className="hover:underline">Compliance</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-neutral-900 uppercase dark:text-white">Contact Us</h2>
              <ul className="text-neutral-500 dark:text-neutral-400 font-medium space-y-4">
                <li className="flex items-start gap-2 text-sm">
                  <MapPin size={18} className="shrink-0 mt-0.5" />
                  <span>Near Lanco Power Project Gate No-3, Dibulganj, Anpara, Sonbhadra, Uttar Pradesh – 231225</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Phone size={18} />
                  <span>+91 95990 39554 <br/> +91 90262 81554</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Mail size={18} />
                  <span>massivepower.info@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-neutral-200 sm:mx-auto dark:border-neutral-800 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-neutral-500 sm:text-center dark:text-neutral-400">
            © 2026 Massive Infratech Private Limited. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-4 text-sm text-neutral-500 dark:text-neutral-400">
             <span>GST Registered</span>
             <span>ISO Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  )
}