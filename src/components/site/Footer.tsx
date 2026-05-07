import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Stethoscope, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-foreground text-background">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-mint text-brand-foreground">
                <Stethoscope className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-base font-semibold">Dr. A. S. Mukadam</div>
                <div className="text-[11px] uppercase tracking-widest text-background/60">
                  Multi Speciality Clinic
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              Trusted multi-speciality care &amp; emergency services in the heart of Mumbai for over 20 years.
            </p>
            <div className="mt-4 text-xs text-background/50">
              Reg. No. 2019/4/22191
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/90">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              <li><Link to="/" className="hover:text-background transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-background transition">About</Link></li>
              <li><Link to="/doctor" className="hover:text-background transition">Our Doctor</Link></li>
              <li><Link to="/services" className="hover:text-background transition">Services</Link></li>
              <li><Link to="/contact" className="hover:text-background transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/90">Visit Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-background/70">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-mint" />
                <span>First Floor, Chisthiya Heights, 102, Jail Rd S, near Habib Hospital, Dongri, Mumbai 400009</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-mint" />
                <a href="tel:09920881426" className="hover:text-background">099208 81426</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/90">Hours</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              <li className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 shrink-0 text-mint" /><span>Morning: 1:00 PM – 4:00 PM</span></li>
              <li className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 shrink-0 text-mint" /><span>Evening: 8:00 PM – 10:00 PM</span></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-mint" /><span>Emergency by appointment</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col sm:flex-row gap-3 justify-between text-xs text-background/50">
          <div>© {new Date().getFullYear()} Dr. Abdul Shakoor Mukadam Multi Speciality Clinic. All rights reserved.</div>
          <div>Crafted with care for our patients.</div>
        </div>
      </div>
    </footer>
  );
}