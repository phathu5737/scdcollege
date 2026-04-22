import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo light />
            <p className="mt-4 max-w-md text-sm text-white/60">
              SCD College — accredited skills development for South Africa's next generation of professionals. Industry-aligned, career-focused, future-ready.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /><a href="tel:0829492552">082 949 2552</a></li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /><a href="mailto:info@scdcollege.co.za">info@scdcollege.co.za</a></li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" />South Africa</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Shakoleng Competency Development College. All rights reserved.</p>
          <p>MICT SETA Accredited · QCTO Aligned</p>
        </div>
      </div>
    </footer>
  );
}