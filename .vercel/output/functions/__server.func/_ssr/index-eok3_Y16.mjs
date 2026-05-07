import { V as jsxRuntimeExports } from "./server-BjxjqOci.mjs";
import { L as Link } from "./router-DfGtb05Y.mjs";
import { S as SiteLayout, B as Button, P as Phone, a as Stethoscope, M as MapPin, C as Clock, c as createLucideIcon } from "./SiteLayout-B5vXlI2A.mjs";
import { S as SectionHeading } from "./SectionHeading-XxGUAvFH.mjs";
import { A as Award, G as GraduationCap } from "./graduation-cap-BfzS1xBB.mjs";
import { A as ArrowRight } from "./arrow-right-BzX1RqHa.mjs";
import { H as HeartPulse, D as Droplets, T as Thermometer, A as Activity, S as ShieldPlus } from "./thermometer-OEci3Tk5.mjs";
import { C as CircleCheck } from "./circle-check-DN305L-6.mjs";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
const heroImg = "/assets/hero-clinic-BOfhMTn-.jpg";
const specialties = [{
  icon: Stethoscope,
  title: "Internal Medicine",
  desc: "Comprehensive evaluation and care for adult diseases."
}, {
  icon: HeartPulse,
  title: "Clinical Cardiology",
  desc: "Hypertension, heart conditions and preventive cardiology."
}, {
  icon: Droplets,
  title: "Diabetology",
  desc: "Expert management of diabetes & metabolic disorders."
}, {
  icon: Thermometer,
  title: "Infectious & Tropical",
  desc: "Malaria, dengue and tropical disease specialists."
}, {
  icon: Activity,
  title: "Sexual Medicine",
  desc: "Confidential, advanced treatment for sexual health."
}, {
  icon: ShieldPlus,
  title: "Emergency Care",
  desc: "Round-the-clock emergency care by appointment."
}];
const stats = [{
  value: "20+",
  label: "Years of Practice"
}, {
  value: "5.0★",
  label: "Google Rating"
}, {
  value: "4",
  label: "International Memberships"
}, {
  value: "1000s",
  label: "Patients Treated"
}];
const credentials = ["MBBS, MD (General Medicine)", "Harvard Medical School — CROM 360", "DM, FRSTM (London, UK)", "M.D.F.C.I.M (Mumbai)", "DTMH (Liverpool)", "Member, American College of Physicians (USA)", "Member, Royal College of Physicians, London (UK)"];
const testimonials = [{
  quote: "Amazing doctor with high skills. Excellent for medical services.",
  author: "Google Review",
  rating: 5
}, {
  quote: "Patients appreciate the advanced treatments and professional care.",
  author: "Justdial",
  rating: 4
}, {
  quote: "Good treatment and prescribed the best medicine.",
  author: "Sulekha",
  rating: 5
}];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[var(--gradient-soft)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-brand/10 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-mint/20 blur-3xl" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/70 backdrop-blur px-3 py-1.5 text-xs font-medium text-brand shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-3.5 w-3.5" }),
            "Harvard Medical School Certified"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.05]", children: [
            "Trusted multi-speciality care in the",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-brand to-mint bg-clip-text text-transparent italic", children: "heart of Mumbai" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed", children: "Led by Dr. Abdul Shakoor Mukadam (MBBS, MD) — over 20 years of experience across internal medicine, cardiology, diabetology and emergency care." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "rounded-full bg-brand hover:bg-brand/90 text-brand-foreground shadow-[var(--shadow-elegant)] h-12 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
              "Book Appointment ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "lg", className: "rounded-full h-12 px-6 border-brand/30 text-brand hover:bg-brand-soft/40 hover:text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:09920881426", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mr-2 h-4 w-4" }),
              " Emergency Call"
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-lg", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl sm:text-3xl font-semibold text-foreground", children: s.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: s.label })
          ] }, s.label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-gradient-to-br from-brand/30 to-mint/30 rounded-[2rem] blur-2xl opacity-60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-elegant)] border border-white/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Modern medical clinic interior with stethoscope on wooden desk", width: 1536, height: 1024, className: "w-full h-[420px] sm:h-[520px] object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -left-4 sm:-left-8 max-w-xs rounded-2xl bg-card border border-border shadow-[var(--shadow-soft)] p-4 backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-gold text-gold" }, i)),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold ml-1", children: "5.0" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5 leading-relaxed", children: '"Amazing doctor with high skills. Excellent medical services."' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground/70 mt-2", children: "— Google Review" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:block absolute -top-4 -right-4 rounded-2xl bg-card border border-border shadow-[var(--shadow-soft)] p-3 backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 rounded-full bg-emerald-500 animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: "Open Today" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground mt-1", children: "1–4 PM · 8–10 PM" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Our Specialties", title: "Comprehensive care, under one roof", description: "From routine consultations to complex specialty care and emergencies — we are equipped to support you at every step." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: specialties.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative rounded-3xl border border-border bg-card p-7 hover:border-brand/30 hover:shadow-[var(--shadow-elegant)] transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-brand-soft/0 to-brand-soft/40 opacity-0 group-hover:opacity-100 rounded-3xl transition" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand/70 text-brand-foreground shadow-[var(--shadow-soft)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-semibold text-foreground", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: s.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "mt-5 inline-flex items-center text-sm font-medium text-brand hover:gap-2 gap-1 transition-all", children: [
            "Learn more ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
          ] })
        ] })
      ] }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 sm:py-28 bg-gradient-to-b from-secondary/40 to-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-brand to-mint p-1 shadow-[var(--shadow-elegant)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full w-full rounded-[1.85rem] bg-card flex flex-col items-center justify-center p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-32 w-32 rounded-full bg-gradient-to-br from-brand to-mint flex items-center justify-center text-brand-foreground font-display text-4xl font-semibold shadow-inner", children: "AM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-semibold", children: "Dr. Abdul Shakoor" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-semibold", children: "Mukadam" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-2", children: "MBBS, MD · Medical Director" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-2 rounded-full bg-brand-soft/60 px-3 py-1.5 text-xs font-medium text-brand", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-3.5 w-3.5" }),
          "Harvard CROM 360"
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { align: "left", eyebrow: "Meet your doctor", title: "20+ years of medical excellence", description: "Dr. Mukadam is a multifaceted physician with international training, dedicated to delivering compassionate, evidence-based care to the Mumbai community." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 grid sm:grid-cols-2 gap-3", children: credentials.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-brand shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: c })
        ] }, c)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-8 rounded-full bg-foreground hover:bg-foreground/90 text-background h-11 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/doctor", children: [
          "View full profile ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
        ] }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Patient Stories", title: "What our patients say", description: "Trusted by thousands across Mumbai with consistently strong ratings on Google, Justdial and Sulekha." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid md:grid-cols-3 gap-6", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "relative rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute top-5 right-5 h-8 w-8 text-brand/15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: [...Array(t.rating)].map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-gold text-gold" }, j)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-4 text-base text-foreground/90 leading-relaxed", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-5 text-sm font-medium text-muted-foreground", children: [
          "— ",
          t.author
        ] })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2.5rem] bg-foreground text-background p-10 sm:p-16 shadow-[var(--shadow-elegant)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-mint/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid md:grid-cols-2 gap-10 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-semibold leading-tight", children: "Ready to take the next step toward better health?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-background/70 leading-relaxed", children: "Book a consultation or call us directly — we're here when you need us." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "rounded-full bg-background text-foreground hover:bg-background/90 h-12 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Book Appointment" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "rounded-full h-12 px-6 border-background/30 text-background hover:bg-background/10 hover:text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:09920881426", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mr-2 h-4 w-4" }),
              " 099208 81426"
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 rounded-2xl bg-background/5 backdrop-blur border border-background/10 p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-mint shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-background/80 leading-relaxed", children: "First Floor, Chisthiya Heights, 102, Jail Rd S, near Habib Hospital, Dongri, Mumbai 400009" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 rounded-2xl bg-background/5 backdrop-blur border border-background/10 p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-mint shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-background/80 leading-relaxed", children: [
              "Morning 1:00 – 4:00 PM · Evening 8:00 – 10:00 PM",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Emergency by appointment"
            ] })
          ] })
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  Index as component
};
