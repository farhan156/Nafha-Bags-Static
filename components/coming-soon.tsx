"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Mail, Send, Instagram, Facebook, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export default function ComingSoon() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this to your backend
    console.log("Email submitted:", email)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setEmail("")
  }

  return (
    <main className="min-h-screen bg-red-600 flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Column - Logo and Legacy (now white background) */}
        <div className="w-full md:w-1/2 bg-white p-8 flex flex-col items-center justify-between">
          <div className="w-full flex justify-center">
            <div className="relative h-24 w-24">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-z90CrIyMlpoe6gaypicsVrvWaBPvG5.png"
                alt="Nafha Bags Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="my-8 flex justify-center">
            <div className="relative h-48 w-48 md:h-64 md:w-64">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/26-QFJG8yULW9X2HwUmnpPiL3cvR6Ajau.png"
                alt="26 Years of Legacy"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="text-gray-800 text-center">
            <h2 className="text-xl font-bold mb-2 text-red-600">Visit Our Store</h2>
            <div className="flex flex-wrap items-center justify-center gap-1 text-center mb-1 px-2">
  <MapPin className="h-4 w-4 text-red-600" />
  <p className="text-sm break-words max-w-xs">220/3, Bope Road, Piyadigama, Gintota, Galle</p>
</div>

            <div className="flex items-center justify-center mb-1">
              <Phone className="h-4 w-4 mr-2 text-red-600" />
              <p className="text-sm">091 2223630</p>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-4 w-4 mr-2 text-red-600" />
              <p className="text-sm">nafhabags@gmail.com</p>
            </div>

            <div className="mt-4">
              <a
                href="https://maps.app.goo.gl/hBqkp9jmWQ18LqLNA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-red-600 text-white px-4 py-2 text-sm font-medium hover:bg-red-700 transition-colors"
              >
                <MapPin className="mr-2 h-4 w-4" />
                View on Map
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Coming Soon and Form (now red background) */}
        <div className="w-full md:w-1/2 p-8 bg-red-600">
          <div className="h-full flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Website is Coming Soon</h1>
            <p className="text-white/90 mb-6">
              We're crafting a new online experience for you. In the meantime, visit our physical store to explore our
              premium bags designed with 26 years of expertise and passion.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-white">Get Notified When We Launch</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 border-2 border-white/20 bg-red-500/20 text-white placeholder:text-white/60 focus:border-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="bg-white hover:bg-gray-100 text-red-600 font-medium">
                  Notify Me <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <div
                className={cn(
                  "mt-2 text-sm transition-opacity duration-300",
                  isSubmitted ? "opacity-100 text-white" : "opacity-0",
                )}
              >
                Thanks! We'll keep you updated.
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Connect With Us</h3>
              <div className="flex space-x-3">
                <a
                  href="https://www.instagram.com/nb_factoryoutlet?igsh=MW9haTk4bHd3dGxyag=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-red-600 hover:bg-gray-100 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61555681541214&mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-red-600 hover:bg-gray-100 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@nbfactoryoutlet?_t=ZS-8v4NjY08sWl&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-red-600 hover:bg-gray-100 transition-colors"
                >
                  <TikTokIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// Custom TikTok icon since it's not available in lucide-react
function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  )
}

