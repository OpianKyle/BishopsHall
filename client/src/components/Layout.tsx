import { Link } from "wouter";
import { useState } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed w-full z-50 flex justify-center px-4 py-8">
        <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-full px-12 py-4">
          <div className="flex items-center gap-12">
            <Link href="/">
              <a className="text-2xl font-serif">Skydance Villa</a>
            </Link>
            <div className="hidden md:flex gap-8">
              <Link href="/">
                <a className="text-sm hover:text-primary transition-colors">Home</a>
              </Link>
              <Link href="/villa">
                <a className="text-sm hover:text-primary transition-colors">Villa</a>
              </Link>
              <Link href="/location">
                <a className="text-sm hover:text-primary transition-colors">Location</a>
              </Link>
              <Link href="/things-to-do">
                <a className="text-sm hover:text-primary transition-colors">Things To Do</a>
              </Link>
              <Link href="/events">
                <a className="text-sm hover:text-primary transition-colors">Events</a>
              </Link>
              <Link href="/safaris">
                <a className="text-sm hover:text-primary transition-colors">Safaris</a>
              </Link>
              <Link href="/gallery">
                <a className="text-sm hover:text-primary transition-colors">Gallery</a>
              </Link>
              <Link href="/contact">
                <a className="text-sm hover:text-primary transition-colors">Contact</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl mb-4">Skydance Villa</h3>
              <p className="text-sm text-muted-foreground">
                Experience luxury living at its finest in Cape Town's most prestigious location.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground">
                Email: booking@skydancevilla.co.za
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">
                © 2024 Skydance Villa<br />
                Website by <a href="https://wildweb.co.za" target="_blank" className="hover:text-primary">WildWeb</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}