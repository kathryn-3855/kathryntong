"use client"
import { Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ContactBar() {
  return (
    <div className="bg-primary text-primary-foreground py-3 px-4 mb-6 rounded-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 flex-wrap text-sm font-medium">
        <a href="tel:+16265903560" className="flex items-center gap-2 hover:opacity-80 transition">
          <Phone className="w-4 h-4" />
          <span className="font-bold">(626) 590-3560</span>
        </a>
        <a href="mailto:Kathryn@KathrynTong.com" className="flex items-center gap-2 hover:opacity-80 transition">
          <Mail className="w-4 h-4" />
          <span className="font-bold">Kathryn@KathrynTong.com</span>
        </a>
        <a 
          href="https://wa.me/16265903560" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
        <Link href="/contact?quote=true" className="flex items-center gap-2 hover:opacity-80 transition border-l border-primary-foreground/30 pl-6">
          <span>Request A Quote</span>
        </Link>
      </div>
    </div>
  )
}

