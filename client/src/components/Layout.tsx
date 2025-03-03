import { Link } from "wouter";
import { MdRealEstateAgent } from "react-icons/md";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 text-2xl font-semibold text-primary">
              <MdRealEstateAgent />
              <span>Luxury Estates</span>
            </a>
          </Link>
          <div className="flex gap-6">
            <Link href="/search">
              <a className="text-muted-foreground hover:text-primary transition-colors">
                Search
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          © 2024 Luxury Estates. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
