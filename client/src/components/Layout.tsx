import { Link } from "wouter";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link href="/">
              <a className="text-2xl font-serif">Luxury Estates</a>
            </Link>
            <div className="hidden md:flex gap-8">
              <Link href="/">
                <a className="text-sm hover:text-primary transition-colors">Home</a>
              </Link>
              <Link href="/properties">
                <a className="text-sm hover:text-primary transition-colors">Properties</a>
              </Link>
              <Link href="/location">
                <a className="text-sm hover:text-primary transition-colors">Location</a>
              </Link>
              <Link href="/amenities">
                <a className="text-sm hover:text-primary transition-colors">Amenities</a>
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
              <h3 className="font-serif text-xl mb-4">Luxury Estates</h3>
              <p className="text-sm text-muted-foreground">
                Discover extraordinary properties in the world's most sought-after locations.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground">
                Email: info@luxuryestates.com<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary">Instagram</a>
                <a href="#" className="text-muted-foreground hover:text-primary">Facebook</a>
                <a href="#" className="text-muted-foreground hover:text-primary">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}