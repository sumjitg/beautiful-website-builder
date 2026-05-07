import { V as jsxRuntimeExports } from "./server-BjxjqOci.mjs";
import { L as Link } from "./router-DfGtb05Y.mjs";
import { S as SiteLayout, B as Button, a as Stethoscope, c as createLucideIcon } from "./SiteLayout-B5vXlI2A.mjs";
import { A as ArrowRight } from "./arrow-right-BzX1RqHa.mjs";
import { G as GraduationCap, A as Award } from "./graduation-cap-BfzS1xBB.mjs";
import { C as CircleCheck } from "./circle-check-DN305L-6.mjs";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
  [
    "path",
    {
      d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
      key: "1tzkfa"
    }
  ],
  ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", key: "14pb5j" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const Earth = createLucideIcon("earth", __iconNode$1);
const __iconNode = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
];
const Mic = createLucideIcon("mic", __iconNode);
const education = [{
  title: "MBBS",
  subtitle: "Bachelor of Medicine, Bachelor of Surgery"
}, {
  title: "MD — General Medicine",
  subtitle: "Doctor of Medicine"
}, {
  title: "Harvard CROM 360",
  subtitle: "Harvard Medical School (Mumbai program)"
}, {
  title: "DM, FRSTM",
  subtitle: "London, UK"
}, {
  title: "M.D.F.C.I.M",
  subtitle: "Mumbai"
}, {
  title: "DTMH",
  subtitle: "Diploma in Tropical Medicine & Hygiene — Liverpool"
}];
const memberships = ["Member, American College of Physicians (USA)", "Member, Royal College of Physicians, London (UK)", "Hon. Visiting Professor — University of Philippines", "Consultant Hon. Physician — Balaji Hospital, South Mumbai, Byculla", "Consultant Physician — Jain Diagnostic Centre & Poly Clinic"];
const specialties = ["Internal Medicine", "Clinical Cardiology", "Diabetology & Metabolic Disorders", "Infectious & Tropical Medicine", "Sexual Medicine", "Kidney & Cerebrovascular Diseases"];
function DoctorPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-20 sm:py-28 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-[var(--gradient-soft)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -left-20 h-[400px] w-[400px] rounded-full bg-mint/15 blur-3xl -z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-brand to-mint p-1 shadow-[var(--shadow-elegant)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full w-full rounded-[1.85rem] bg-card flex flex-col items-center justify-center p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-36 w-36 rounded-full bg-gradient-to-br from-brand to-mint flex items-center justify-center text-brand-foreground font-display text-5xl font-semibold shadow-inner", children: "AM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-semibold", children: "Dr. Abdul Shakoor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-semibold", children: "Mukadam" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-2", children: "Medical Director" })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/40 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand", children: "Meet your doctor" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight", children: [
            "A multi-specialty physician with",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-brand to-mint bg-clip-text text-transparent italic", children: "global training" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: "Dr. Abdul Shakoor Mukadam is a highly experienced medical professional with over 20 years of clinical practice. He is recognised across internal medicine, cardiology, diabetology, infectious & tropical medicine and sexual medicine — and serves as Medical Director of the Multi Speciality Clinic in Dongri, Mumbai." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "rounded-full bg-brand hover:bg-brand/90 text-brand-foreground h-12 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
              "Book a consultation ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "lg", className: "rounded-full h-12 px-6 border-brand/30 text-brand hover:bg-brand-soft/40 hover:text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: "View services" }) })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold", children: "Education" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-4", children: education.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 mt-2 rounded-full bg-brand shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground", children: e.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: e.subtitle })
          ] })
        ] }, e.title)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold", children: "Memberships & Roles" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: memberships.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-brand mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: m })
          ] }, m)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold", children: "Specialties" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: specialties.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-brand-soft/60 text-brand px-3 py-1.5 text-sm font-medium", children: s }, s)) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-gradient-to-br from-brand-soft/40 to-mint/20 p-8 sm:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-brand-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold", children: "Speaker & Educator" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-foreground/80 leading-relaxed", children: [
        "Dr. Mukadam is an active contributor to medical education and public health awareness, frequently speaking on critical health topics such as ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Hypertension, Diabetes" }),
        " and",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Heart Health" }),
        " — including national initiatives like",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: ' "India First, Heart First"' }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium text-brand border border-brand/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-4 w-4" }),
        " Featured speaker on national health platforms"
      ] })
    ] }) }) })
  ] });
}
export {
  DoctorPage as component
};
