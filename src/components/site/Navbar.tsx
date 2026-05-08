import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, Stethoscope, X, ArrowRight } from "lucide-react";
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
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Use native <dialog> to open/close — it auto-escapes all stacking contexts
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }
  }, [open]);

  // Close on backdrop click or Escape
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => setOpen(false);
    const onCancel = (e: Event) => { e.preventDefault(); setOpen(false); };
    dialog.addEventListener("close", onClose);
    dialog.addEventListener("cancel", onCancel);
    return () => {
      dialog.removeEventListener("close", onClose);
      dialog.removeEventListener("cancel", onCancel);
    };
  }, []);

  return (
    <>
      {/* ─── TOP NAVBAR ─── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white border-b border-gray-100 shadow-sm py-2"
            : "bg-white/90 border-b border-transparent py-3"
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
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white shadow-sm hover:bg-gray-50 transition-colors"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-haspopup="dialog"
            >
              <Menu className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {/* ─── MOBILE MENU using native <dialog> ─── */}
      {/* The native dialog element renders in the top-layer — above ALL stacking contexts */}
      <style>{`
        dialog#mobile-nav {
          padding: 0;
          margin: 0;
          border: none;
          outline: none;
          background: transparent;
          width: 100vw;
          max-width: 100vw;
          height: 100dvh;
          max-height: 100dvh;
        }
        dialog#mobile-nav::backdrop {
          background: rgba(0, 0, 0, 0.45);
        }
        dialog#mobile-nav[open] {
          display: flex;
        }
      `}</style>

      <dialog
        id="mobile-nav"
        ref={dialogRef}
        onClick={(e) => {
          // Close when clicking the backdrop area (outside the panel)
          if (e.target === dialogRef.current) setOpen(false);
        }}
      >
        {/* Slide-in panel */}
        <div
          style={{
            width: "100%",
            maxWidth: 360,
            height: "100%",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            boxShadow: "2px 0 24px rgba(0,0,0,0.15)",
            transform: open ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.28s cubic-bezier(0.4, 0, 0.2, 1)",
            overflowY: "auto",
          }}
        >
          {/* Panel header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              borderBottom: "1px solid #e8eeed",
              backgroundColor: "#ffffff",
              flexShrink: 0,
            }}
          >
            <Link
              to="/"
              onClick={() => setOpen(false)}
              style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #2d7d72, #3da392)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Stethoscope style={{ width: 18, height: 18, color: "#fff" }} />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1a2e2c", lineHeight: 1.2 }}>
                  Dr. Mukadam
                </div>
                <div style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b8f8a", marginTop: 2 }}>
                  Multi Speciality Clinic
                </div>
              </div>
            </Link>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                border: "1px solid #e8eeed",
                backgroundColor: "#f5f9f8",
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
          <nav style={{ padding: "20px 12px 0", flex: 1 }}>
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeProps={{
                  style: {
                    backgroundColor: "#e6f4f1",
                    color: "#2d7d72",
                    fontWeight: 700,
                  },
                }}
                activeOptions={{ exact: l.to === "/" }}
                style={{
                  display: "block",
                  padding: "15px 18px",
                  borderRadius: 14,
                  marginBottom: 4,
                  fontSize: 17,
                  fontWeight: 500,
                  color: "#2a3d3b",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  transition: "background-color 0.15s",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Bottom CTAs */}
          <div
            style={{
              padding: "20px 20px 36px",
              borderTop: "1px solid #e8eeed",
              backgroundColor: "#ffffff",
              flexShrink: 0,
            }}
          >
            <a
              href="tel:09920881426"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "14px 20px",
                borderRadius: 14,
                backgroundColor: "#edf7f5",
                border: "1px solid #b8ddd8",
                color: "#2d7d72",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
                marginBottom: 10,
              }}
            >
              <Phone style={{ width: 17, height: 17 }} />
              099208 81426
            </a>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "14px 20px",
                borderRadius: 14,
                background: "linear-gradient(135deg, #2d7d72, #3da392)",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(45,125,114,0.4)",
              }}
            >
              Book Appointment
              <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
}
