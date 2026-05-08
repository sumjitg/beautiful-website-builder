import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import doctorIcon from "@/assets/favicon-doctor.png";

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

  // Lock body scroll + add class to <html> for CSS targeting
  useEffect(() => {
    if (open) {
      document.documentElement.classList.add("menu-open");
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.classList.remove("menu-open");
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.classList.remove("menu-open");
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* ─── TOP NAVBAR ─── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-white border-b border-gray-100 shadow-sm py-2"
            : "bg-white/90 border-b border-transparent py-3"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="relative overflow-hidden rounded-xl shadow-md ring-1 ring-brand/10">
                <img
                  src={doctorIcon}
                  alt="Dr. Abdul Shakoor Mukadam"
                  width={40}
                  height={40}
                  className="h-9 w-9 sm:h-10 sm:w-10 object-cover object-top"
                />
              </div>
              <div className="leading-tight">
                <div className="font-display text-sm sm:text-base font-semibold text-foreground">Dr. Mukadam</div>
                <div className="hidden sm:block text-[10px] uppercase tracking-widest text-muted-foreground">Multi Speciality Clinic</div>
              </div>
            </Link>

            {/* Desktop nav */}
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

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:09920881426" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-brand transition">
                <Phone className="h-4 w-4" />
                099208 81426
              </a>
              <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-full bg-brand hover:bg-brand/90 text-brand-foreground text-sm font-medium px-5 py-2.5 shadow-sm transition">
                Book Appointment
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white shadow-sm"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {/* ─── MOBILE MENU OVERLAY ─── */}
      {/* Backdrop — dim layer */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className="lg:hidden"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9990,
          backgroundColor: "rgba(0,0,0,0.5)",
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          transition: "opacity 0.25s ease, visibility 0.25s ease",
          // Isolation ensures this can't be clipped by any ancestor
          isolation: "isolate",
        }}
      />

      {/* Menu panel — slides from left */}
      <div
        role="navigation"
        aria-label="Mobile navigation"
        className="lg:hidden"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: "min(85vw, 340px)",
          zIndex: 9999,
          // Hard-coded non-variable colors — avoids all oklch/CSS-var rendering issues
          backgroundColor: "#ffffff",
          color: "#1a2e2c",
          display: "flex",
          flexDirection: "column",
          boxShadow: "4px 0 30px rgba(0,0,0,0.2)",
          transform: open ? "translate3d(0,0,0)" : "translate3d(-100%,0,0)",
          transition: "transform 0.28s cubic-bezier(0.4,0,0.2,1)",
          // Force a new compositing layer — prevents parent blend modes from bleeding through
          willChange: "transform",
          isolation: "isolate",
          contain: "layout style paint",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch" as any,
          // Belt-and-suspenders: guarantee white bg survives any filter/blend from ancestors
          backdropFilter: "none",
          WebkitBackdropFilter: "none" as any,
        }}
      >
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid #e4eeed", flexShrink: 0, backgroundColor: "#ffffff" }}>
          <Link to="/" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <img
              src={doctorIcon}
              alt="Dr. Abdul Shakoor Mukadam"
              width={40}
              height={40}
              style={{ width: 40, height: 40, borderRadius: 12, objectFit: "cover", objectPosition: "top", flexShrink: 0 }}
            />
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#1a2e2c", lineHeight: 1.3 }}>Dr. Mukadam</div>
              <div style={{ fontSize: 9, letterSpacing: "0.13em", textTransform: "uppercase", color: "#5a8a85", marginTop: 2 }}>Multi Speciality Clinic</div>
            </div>
          </Link>
          <button onClick={() => setOpen(false)} aria-label="Close menu" style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid #ddecea", backgroundColor: "#f3f9f8", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <X style={{ width: 18, height: 18, color: "#1a2e2c" }} />
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ padding: "18px 10px", flex: 1 }}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeProps={{ style: { backgroundColor: "#e4f5f1", color: "#2d7d72", fontWeight: 700 } }}
              activeOptions={{ exact: l.to === "/" }}
              style={{ display: "block", padding: "14px 16px", borderRadius: 12, marginBottom: 4, fontSize: 17, fontWeight: 500, color: "#243330", textDecoration: "none" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA buttons */}
        <div style={{ padding: "16px 18px 40px", borderTop: "1px solid #e4eeed", flexShrink: 0, backgroundColor: "#ffffff" }}>
          <a href="tel:09920881426" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 9, padding: "13px 18px", borderRadius: 12, backgroundColor: "#eaf7f4", border: "1px solid #aed8d2", color: "#2d7d72", fontWeight: 600, fontSize: 15, textDecoration: "none", marginBottom: 10 }}>
            <Phone style={{ width: 16, height: 16 }} />
            099208 81426
          </a>
          <Link to="/contact" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px 18px", borderRadius: 12, background: "linear-gradient(135deg,#2d7d72,#3da392)", color: "#fff", fontWeight: 600, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 16px rgba(45,125,114,0.38)" }}>
            Book Appointment <ArrowRight style={{ width: 16, height: 16 }} />
          </Link>
        </div>
      </div>
    </>
  );
}
