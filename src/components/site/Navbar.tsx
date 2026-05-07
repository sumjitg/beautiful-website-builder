import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, Stethoscope, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/doctor", label: "Doctor" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border shadow-[0_4px_20px_-12px_rgba(0,0,0,0.1)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2 group sm:gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-brand/20 blur-lg rounded-full group-hover:bg-brand/30 transition" />
              <div className="relative flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand to-brand/70 text-brand-foreground shadow-[var(--shadow-elegant)]">
                <Stethoscope className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-display text-sm sm:text-base font-semibold text-foreground">
                Dr. Mukadam
              </div>
              <div className="hidden xs:block text-[9px] sm:text-[11px] uppercase tracking-widest text-muted-foreground">
                Multi Speciality Clinic
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition rounded-full hover:bg-muted"
                activeProps={{ className: "text-brand bg-brand-soft/60" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:09920881426"
              className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-brand transition"
            >
              <Phone className="h-4 w-4" />
              099208 81426
            </a>
            <Button asChild className="rounded-full bg-brand hover:bg-brand/90 text-brand-foreground shadow-[var(--shadow-soft)]">
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 space-y-1 border-t border-border pt-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-foreground/80 hover:bg-muted"
                activeProps={{ className: "text-brand bg-brand-soft/60" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:09920881426"
              className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-brand"
            >
              <Phone className="h-4 w-4" /> 099208 81426
            </a>
            <Button asChild className="w-full rounded-full bg-brand hover:bg-brand/90 text-brand-foreground">
              <Link to="/contact" onClick={() => setOpen(false)}>Book Appointment</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}