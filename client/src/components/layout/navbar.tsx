import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@assets/Logo_1771731524628.jpeg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/academics", label: "Academics" },
    { href: "/admissions", label: "Admissions" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="hidden md:flex bg-primary text-primary-foreground py-2 text-xs font-medium px-4 md:px-8 justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="h-3 w-3 text-secondary" />
            <span>+91 8087177890</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-3 w-3 text-secondary" />
            <span>info@anantamgrukulam.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="h-3 w-3 text-secondary" />
          <span>Bilkis Ganj, Sehore</span>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center space-x-3 group">
            <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-secondary group-hover:scale-105 transition-transform duration-300">
              <img src={logo} alt="Anantam Gurukul Logo" className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-primary leading-none">Anantam Gurukul</span>
              <span className="text-[10px] tracking-widest uppercase text-muted-foreground font-semibold mt-1">Infinite Possibilities</span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className={`text-sm font-medium transition-colors hover:text-secondary ${location === link.href ? 'text-secondary' : 'text-foreground/80'}`}>
                {link.label}
              </a>
            </Link>
          ))}
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md transition-all hover:-translate-y-0.5">
            Enroll Now
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col px-4 py-6 space-y-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a 
                  className={`text-lg font-medium py-2 border-b border-border/50 ${location === link.href ? 'text-secondary' : 'text-foreground'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-4">
              <div className="flex items-center space-x-3 text-muted-foreground text-sm">
                <Phone className="h-4 w-4" />
                <span>+91 8087177890</span>
              </div>
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Enroll Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}