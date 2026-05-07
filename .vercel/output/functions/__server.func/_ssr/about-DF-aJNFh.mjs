import { V as jsxRuntimeExports } from "./server-BjxjqOci.mjs";
import { L as Link } from "./router-DfGtb05Y.mjs";
import { S as SiteLayout, C as Clock, B as Button, c as createLucideIcon } from "./SiteLayout-B5vXlI2A.mjs";
import { S as SectionHeading } from "./SectionHeading-XxGUAvFH.mjs";
import { A as ArrowRight } from "./arrow-right-BzX1RqHa.mjs";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  [
    "path",
    {
      d: "M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",
      key: "17lmqv"
    }
  ]
];
const HeartHandshake = createLucideIcon("heart-handshake", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode);
const values = [{
  icon: ShieldCheck,
  title: "Trusted Care",
  desc: "Backed by 20+ years of experience and international training, every diagnosis is rooted in evidence."
}, {
  icon: HeartHandshake,
  title: "Patient First",
  desc: "We listen first. Every consultation is unhurried, personal and respectful."
}, {
  icon: Sparkles,
  title: "Modern Medicine",
  desc: "Latest treatment protocols across cardiology, diabetology and tropical medicine."
}, {
  icon: Clock,
  title: "Always Available",
  desc: "Twice-daily clinics plus emergency care by appointment for life's urgent moments."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-20 sm:py-28 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-[var(--gradient-soft)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-brand/10 blur-3xl -z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/40 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand", children: "About the Clinic" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight", children: "Two decades of trusted, multi-speciality medical care in Mumbai" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: "Located in the heart of Dongri, Dr. Abdul Shakoor Mukadam Multi Speciality Clinic & Emergency Care Centre brings together international expertise, modern protocols and a deeply personal approach to medicine — all under one roof." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { align: "left", eyebrow: "Our Mission", title: "Accessible specialty care, delivered with compassion", description: "From routine consultations to complex specialty care across cardiology, diabetology, internal medicine, infectious diseases and emergency care — we are dedicated to being a single, trusted point of medical contact for our community." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed", children: "Our team is led by Dr. Abdul Shakoor Mukadam — a Harvard-certified physician with memberships in the American College of Physicians (USA) and the Royal College of Physicians, London (UK). We combine global standards with a warm, personal bedside manner." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-gradient-to-br from-brand/20 to-mint/20 rounded-[2rem] blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-[2rem] bg-card border border-border p-8 shadow-[var(--shadow-soft)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Registration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl mt-1", children: "2019/4/22191" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Established" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl mt-1", children: "20+ Years of Practice" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Location" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base mt-1 leading-relaxed", children: "Chisthiya Heights, Dongri, Mumbai 400009" })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "What we stand for", title: "The values that guide every consultation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: values.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-6 hover:shadow-[var(--shadow-elegant)] transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-semibold", children: v.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: v.desc })
      ] }, v.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "rounded-full bg-brand hover:bg-brand/90 text-brand-foreground h-12 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", children: [
        "Explore our services ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
      ] }) }) })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
