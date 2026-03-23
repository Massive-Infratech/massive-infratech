import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact <span className="text-blue-600">Us</span></h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400">Ready to discuss your next project? Reach out to us and let&apos;s build something extraordinary together.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center shrink-0">
              <MapPin className="text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Corporate Office</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Near Lanco Power Project Gate No-3, Dibulganj, Anpara<br/>Sonbhadra, Uttar Pradesh – 231225 </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center shrink-0">
              <Phone className="text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone Numbers</h3>
              <p className="text-neutral-600 dark:text-neutral-400">+91 95990 39554<br/>+91 90262 81554 </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center shrink-0">
              <Mail className="text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email Address</h3>
              <p className="text-neutral-600 dark:text-neutral-400">massivepower.info@gmail.com </p>
            </div>
          </div>
        </div>

        <form className="bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-lg border border-neutral-100 dark:border-neutral-800 space-y-6">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input type="text" className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="Your full name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input type="email" className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="your@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="Tell us about your project or inquiry..."></textarea>
          </div>
          <button type="button" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}