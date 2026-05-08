import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, Phone, Stethoscope, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/doctor", label: "Doctor" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

/** Mobile drawer rendered via React Portal directly on document.body.
 *  This completely escapes all CSS stacking contexts (overflow-clip, transform,
 *  backdrop-filter, etc.) that would otherwise trap fixed positioning. */
function MobileMenuPortal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Only render in browser
  if (typeof document === "undefined") return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          background: "rgba(0,0,0,0.35)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.25s ease",
        }}
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: "100%",
          maxWidth: "340px",
          zIndex: 9999,
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          boxShadow: "4px 0 32px rgba(0,0,0,0.12)",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.28s cubic-bezier(0.4, 0, 0.2, 1)",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 20px",
            borderBottom: "1px solid #e8f0ef",
            background: "#ffffff",
          }}
        >
          <Link
            to="/"
            onClick={onClose}
            style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                background: "linear-gradient(135deg, #2d7d72 0%, #3da392 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Stethoscope style={{ width: 18, height: 18, color: "#fff" }} />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, color: "#1a2e2c", lineHeight: 1.2 }}>
                Dr. Mukadam
              </div>
              <div style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b8f8a", marginTop: 2 }}>
                Multi Speciality Clinic
              </div>
            </div>
          </Link>

          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              border: "1px solid #e8f0ef",
              background: "#f5f9f8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <X style={{ width: 18, height: 18, color: "#1a2e2c" }} />
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ padding: "24px 12px 0", flex: 1 }}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={onClose}
              activeProps={{
                style: {
                  color: "#2d7d72",
                  background: "#e8f5f2",
                  fontWeight: 700,
                },
              }}
              activeOptions={{ exact: l.to === "/" }}
              style={{
                display: "block",
                padding: "14px 16px",
                borderRadius: 14,
                marginBottom: 4,
                fontSize: 18,
                fontWeight: 500,
                color: "#2a3d3b",
                textDecoration: "none",
                transition: "background 0.15s",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Bottom CTAs */}
        <div style={{ padding: "24px 20px 32px", borderTop: "1px solid #e8f0ef", marginTop: "auto" }}>
          <a
            href="tel:09920881426"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              padding: "14px 20px",
              borderRadius: 16,
              background: "#edf7f5",
              border: "1px solid #b8ddd8",
              color: "#2d7d72",
              fontWeight: 600,
              fontSize: 16,
              textDecoration: "none",
              marginBottom: 12,
            }}
          >
            <Phone style={{ width: 18, height: 18 }} />
            099208 81426
          </a>

          <Link
            to="/contact"
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "14px 20px",
              borderRadius: 16,
              background: "linear-gradient(135deg, #2d7d72 0%, #3da392 100%)",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: 16,
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(45,125,114,0.35)",
            }}
          >
            Book Appointment
            <ArrowRight style={{ width: 16, height: 16 }} />
          </Link>
        </div>
      </div>
    </>,
    document.body
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/98 border-b border-border shadow-sm py-2 backdrop-blur-sm"
            : "bg-white/80 border-b border-transparent py-3 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <div className="absolute inset-0 bg-brand/20 blur-md rounded-full group-hover:bg-brand/30 transition" />
                <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand/70 text-brand-foreground shadow-md">
                  <Stethoscope className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
              </div>
              <div className="leading-tight">
                <div className="font-display text-sm sm:text-base font-semibold text-foreground">
                  Dr. Mukadam
                </div>
                <div className="hidden sm:block text-[10px] uppercase tracking-widest text-muted-foreground">
                  Multi Speciality Clinic
                </div>
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
              <a
                href="tel:09920881426"
                className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-brand transition"
              >
                <Phone className="h-4 w-4" />
                099208 81426
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-brand hover:bg-brand/90 text-brand-foreground text-sm font-medium px-5 py-2.5 shadow-sm transition"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-white shadow-sm hover:bg-muted transition-colors"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <Menu className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* Portal-based mobile menu — renders on document.body, escapes all stacking contexts */}
      <MobileMenuPortal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
