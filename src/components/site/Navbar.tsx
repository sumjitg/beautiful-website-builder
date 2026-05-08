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
    const onScroll = () => {
      // Very sensitive scroll detection
      setScrolled(window.scrollY > 5);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white border-b border-border shadow-sm py-2"
            : "bg-white/80 backdrop-blur-md py-4", // Light background even at top
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group sm:gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-brand/20 blur-lg rounded-full group-hover:bg-brand/30 transition" />
                <div className="relative flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand to-brand/70 text-brand-foreground shadow-md">
                  <Stethoscope className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
              </div>
              <div className="leading-tight min-w-0">
                <div className="font-display text-sm sm:text-base font-semibold text-foreground">
                  Dr. Mukadam
                </div>
                <div className="hidden sm:block text-[9px] sm:text-[11px] uppercase tracking-widest text-muted-foreground">
                  Multi Speciality Clinic
                </div>
              </div>
            </Link>

            {/* DESKTOP NAV */}
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
              <Button asChild className="rounded-full bg-brand hover:bg-brand/90 text-brand-foreground shadow-sm">
                <Link to="/contact">Book Appointment</Link>
              </Button>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              className="lg:hidden p-2 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* FULL SCREEN MOBILE MENU */}
      <div
        className={cn(
          "fixed inset-0 z-[100] h-[100dvh] w-screen bg-white lg:hidden transition-[transform,opacity] duration-300 ease-in-out",
          open ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none",
        )}
      >
        <div className="flex flex-col h-full bg-white overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-border bg-white">
            <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand/70 text-brand-foreground shadow-md">
                <Stethoscope className="h-4 w-4" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-sm font-semibold text-foreground">
                  Dr. Mukadam
                </div>
                <div className="text-[9px] uppercase tracking-widest text-muted-foreground">
                  Multi Speciality Clinic
                </div>
              </div>
            </Link>
            <button
              className="p-2 rounded-xl bg-muted/50 hover:bg-muted"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-8 px-4 space-y-8 bg-white">
            <nav className="flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-6 py-4 rounded-2xl text-xl font-medium text-foreground/80 hover:bg-muted transition-all active:scale-[0.98]"
                  activeProps={{ className: "text-brand bg-brand-soft/60 font-bold" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="pt-8 border-t border-border space-y-4">
              <a
                href="tel:09920881426"
                className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-brand-soft/40 border border-brand/20 text-brand font-bold text-lg"
              >
                <Phone className="h-5 w-5" />
                099208 81426
              </a>
              <Button asChild className="w-full h-14 rounded-2xl bg-brand hover:bg-brand/90 text-brand-foreground shadow-xl text-lg font-semibold">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
