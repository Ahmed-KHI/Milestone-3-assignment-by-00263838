import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Github } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-orange-600 text-stone-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div>
           <Link href={'/'}><Image src={'/blog-logo.png'} alt='logo' width={150} height={150} className='hover:animate-bounce'/></Link>
            <p className="mt-2">Exploring ideas, one post at a time.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-stone-700 cursor-grab">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-stone-700">About</Link></li>
              <li><Link href="/contact" className="hover:text-stone-700">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-stone-700">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-stone-700">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-stone-700 cursor-grab">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className='text-blue-800'><Facebook size={24} /></a>
              <a href="#" className='text-teal-800'><Twitter size={24} /></a>
              <a href="#" className='text-fuchsia-800'><Instagram size={24} /></a>
              <a href="#" className='text-stone-800'><Github size={24} /></a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4 cursor-cell">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-orange-400"
              />
              <Button type="submit" className="w-full bg-stone-200 text-orange-600">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-stone-200 text-center">
          <p>&copy; {new Date().getFullYear()} Dynamic Blog. All rights reserved, (00263838)</p>
        </div>
      </div>
    </footer>
  )
}