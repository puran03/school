import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ArrowRight } from "lucide-react";
import logo from "@assets/Logo_1771731524628.jpeg";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t-4 border-secondary pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-secondary bg-white p-1">
                <img src={logo} alt="Anantam Gurukul Logo" className="object-cover w-full h-full rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white leading-none">Anantam Gurukul</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Fostering infinite possibilities through holistic education. We nurture minds, build character, and shape the leaders of tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4 text-primary-foreground/80">
              <li>
                <Link href="/about">
                  <a className="hover:text-secondary transition-colors flex items-center group">
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-secondary" />
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/academics">
                  <a className="hover:text-secondary transition-colors flex items-center group">
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-secondary" />
                    Academics
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/admissions">
                  <a className="hover:text-secondary transition-colors flex items-center group">
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-secondary" />
                    Admissions
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/facilities">
                  <a className="hover:text-secondary transition-colors flex items-center group">
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-secondary" />
                    Facilities
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-secondary transition-colors flex items-center group">
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-secondary" />
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-xl font-semibold mb-6 text-white">Contact Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/20 p-3 rounded-lg text-secondary mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="text-primary-foreground/80 text-sm leading-relaxed">
                    <strong>Campus Address:</strong><br />
                    Survey no 253/229/2/2<br />
                    Chainpura Road (Opposite Magnus College)<br />
                    Bilkis Ganj, Sehore<br />
                    Pin: 46111
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/20 p-3 rounded-lg text-secondary mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="text-primary-foreground/80 text-sm mt-2">
                    <a href="tel:8087177890" className="hover:text-white transition-colors">+91 8087177890</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/20 p-3 rounded-lg text-secondary mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="text-primary-foreground/80 text-sm mt-2">
                    <a href="mailto:info@anantamgrukulam.com" className="hover:text-white transition-colors">info@anantamgrukulam.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Anantam Gurukul. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}