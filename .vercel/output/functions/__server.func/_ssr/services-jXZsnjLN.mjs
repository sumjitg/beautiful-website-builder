import { V as jsxRuntimeExports } from "./server-BjxjqOci.mjs";
import { L as Link } from "./router-DfGtb05Y.mjs";
import { S as SiteLayout, a as Stethoscope, B as Button, c as createLucideIcon } from "./SiteLayout-B5vXlI2A.mjs";
import { S as SectionHeading } from "./SectionHeading-XxGUAvFH.mjs";
import { H as HeartPulse, D as Droplets, T as Thermometer, A as Activity, S as ShieldPlus } from "./thermometer-OEci3Tk5.mjs";
import { A as ArrowRight } from "./arrow-right-BzX1RqHa.mjs";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M12 18V5", key: "adv99a" }],
  ["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" }],
  ["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" }],
  ["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }],
  ["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }],
  ["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517", key: "1gq6am" }],
  ["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }],
  ["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }]
];
const Brain = createLucideIcon("brain", __iconNode$1);
const __iconNode = [
  [
    "path",
    { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z", key: "wa1lgi" }
  ],
  ["path", { d: "m8.5 8.5 7 7", key: "rvfmvr" }]
];
const Pill = createLucideIcon("pill", __iconNode);
const services = [{
  icon: Stethoscope,
  title: "Internal Medicine",
  desc: "Comprehensive evaluation, diagnosis and management of adult diseases — from routine to complex.",
  items: ["General health check-ups", "Chronic disease management", "Preventive screening"]
}, {
  icon: HeartPulse,
  title: "Clinical Cardiology",
  desc: "Diagnosis & treatment of heart-related conditions including hypertension and lifestyle cardiology.",
  items: ["Hypertension management", "ECG & cardiac evaluation", "Preventive cardiology"]
}, {
  icon: Droplets,
  title: "Diabetology",
  desc: "Expert management of diabetes and related metabolic disorders with personalised plans.",
  items: ["Type 1 & Type 2 diabetes", "Insulin & medication tuning", "Metabolic disorders"]
}, {
  icon: Thermometer,
  title: "Infectious & Tropical Medicine",
  desc: "Specialised treatment of malaria, dengue, typhoid and other tropical infections.",
  items: ["Malaria & dengue", "Typhoid & gastroenteritis", "Travel medicine"]
}, {
  icon: Activity,
  title: "Sexual Medicine",
  desc: "Confidential, non-judgemental and advanced treatment for sexual health concerns.",
  items: ["Men's & women's health", "Hormonal evaluation", "Counselling support"]
}, {
  icon: Brain,
  title: "Kidney & Cerebrovascular",
  desc: "Care for kidney disorders and cerebrovascular conditions, with tertiary referral coordination.",
  items: ["Kidney function evaluation", "Stroke risk assessment", "Specialist referrals"]
}, {
  icon: ShieldPlus,
  title: "Emergency Care Centre",
  desc: "Equipped to handle urgent medical situations with rapid assessment and stabilisation.",
  items: ["Emergency assessment", "Stabilisation & triage", "Hospital coordination"]
}, {
  icon: Pill,
  title: "General Consultation",
  desc: "Routine check-ups, primary care services and second opinions for the entire family.",
  items: ["Family medicine", "Second opinions", "Prescriptions & follow-ups"]
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-20 sm:py-28 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-[var(--gradient-soft)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/40 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand", children: "Our Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight", children: "Comprehensive medical care, all under one roof" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: "From routine consultations to specialty care across multiple disciplines and round-the-clock emergency support — our clinic is equipped for every step of your health journey." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-20 sm:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative rounded-3xl border border-border bg-card p-7 hover:border-brand/30 hover:shadow-[var(--shadow-elegant)] transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand/70 text-brand-foreground shadow-[var(--shadow-soft)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-semibold", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2", children: s.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-brand" }),
          it
        ] }, it)) })
      ] }, s.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Ready when you are", title: "Book a consultation today", description: "Same-day appointments often available. For emergencies, please call us directly." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "rounded-full bg-brand hover:bg-brand/90 text-brand-foreground h-12 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
            "Book Appointment ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "rounded-full h-12 px-6 border-brand/30 text-brand hover:bg-brand-soft/40 hover:text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:09920881426", children: "Call 099208 81426" }) })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  ServicesPage as component
};
