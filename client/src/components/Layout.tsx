import { Link } from "wouter";
import { useState } from "react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#ECF0F1]">
      <nav className="fixed w-full z-50 flex justify-center px-4 py-8">
        <div className="bg-[#BDC3C7]/80 backdrop-blur-sm shadow-lg rounded-full px-12 py-4">
          <div className="flex items-center gap-12">
            <span className="text-2xl font-serif text-[#2C3E50]">Bishops Hall</span>
            <div className="hidden md:flex gap-8">
              <span className="text-sm text-[#34495E]">Home</span>
              <span className="text-sm text-[#34495E]">Villa</span>
              <span className="text-sm text-[#34495E]">Location</span>
              <span className="text-sm text-[#34495E]">Things To Do</span>
              <span className="text-sm text-[#34495E]">Events</span>
              <span className="text-sm text-[#34495E]">Safaris</span>
              <span className="text-sm text-[#34495E]">Gallery</span>
              <span className="text-sm text-[#34495E]">Contact</span>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="bg-[#7F8C8D]/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-8">
              <a href="#" className="text-[#7F8C8D] hover:text-[#2C3E50] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#7F8C8D] hover:text-[#2C3E50] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#7F8C8D] hover:text-[#2C3E50] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#7F8C8D] hover:text-[#2C3E50] transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="text-center text-sm text-[#7F8C8D]">
              <p>© 2024 All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}