import { Link } from "wouter";
import { useState } from "react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed w-full z-50 flex justify-center px-4 py-8">
        <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-full px-12 py-4">
          <div className="flex items-center gap-12">
            <span className="text-2xl font-serif">Bishops Hall</span>
            <div className="hidden md:flex gap-8">
              <span className="text-sm text-muted-foreground">Home</span>
              <span className="text-sm text-muted-foreground">Villa</span>
              <span className="text-sm text-muted-foreground">Location</span>
              <span className="text-sm text-muted-foreground">Things To Do</span>
              <span className="text-sm text-muted-foreground">Events</span>
              <span className="text-sm text-muted-foreground">Safaris</span>
              <span className="text-sm text-muted-foreground">Gallery</span>
              <span className="text-sm text-muted-foreground">Contact</span>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              <p>© 2024 All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}