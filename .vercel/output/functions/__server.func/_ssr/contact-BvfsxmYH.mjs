import { r as reactExports, V as jsxRuntimeExports } from "./server-BjxjqOci.mjs";
import { S as SiteLayout, M as MapPin, P as Phone, C as Clock, B as Button, b as Mail, d as cn, c as createLucideIcon, e as cva, f as createSlot } from "./SiteLayout-B5vXlI2A.mjs";
import { C as CircleCheck } from "./circle-check-DN305L-6.mjs";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-DfGtb05Y.mjs";
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[/* @__PURE__ */ Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        props.onMouseDown?.(event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root = Label$1;
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
function ContactPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-20 sm:py-24 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-[var(--gradient-soft)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/40 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand", children: "Get in touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight", children: "Book an appointment or visit our clinic" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: "We're here to help. Call us, drop in during clinic hours, or send us a message and we'll get back to you." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ContactCard, { icon: MapPin, title: "Visit us", children: [
          "First Floor, Chisthiya Heights, 102, Jail Rd S,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "near Habib Hospital, Dongri,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Mumbai, Maharashtra 400009"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ContactCard, { icon: Phone, title: "Call us", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:09920881426", className: "text-brand hover:underline font-medium", children: "099208 81426" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: "Emergency by appointment" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { icon: Clock, title: "Clinic hours", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            "Morning: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "1:00 PM – 4:00 PM" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            "Evening: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "8:00 PM – 10:00 PM" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: "Open Monday to Sunday" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-soft)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Clinic location", src: "https://www.google.com/maps?q=Chisthiya+Heights,+Jail+Road+South,+Dongri,+Mumbai&output=embed", width: "100%", height: "280", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", className: "w-full" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold", children: "Send us a message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "We'll respond within one working day." }),
        submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl bg-brand-soft/50 border border-brand/20 p-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-10 w-10 text-brand mx-auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-lg font-semibold", children: "Thank you!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Your message has been noted. For urgent matters, please call us directly." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-6 space-y-4", onSubmit: (e) => {
          e.preventDefault();
          setSubmitted(true);
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: "Full name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "name", required: true, className: "mt-1.5 rounded-xl h-11", placeholder: "Your name" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "phone", type: "tel", required: true, className: "mt-1.5 rounded-xl h-11", placeholder: "+91" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", className: "mt-1.5 rounded-xl h-11", placeholder: "you@example.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "message", children: "How can we help?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "message", required: true, className: "mt-1.5 rounded-xl min-h-32", placeholder: "Briefly describe your concern or preferred appointment time..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", size: "lg", className: "w-full rounded-full bg-brand hover:bg-brand/90 text-brand-foreground h-12", children: [
            "Send message ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "ml-2 h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground text-center flex items-center justify-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3 w-3" }),
            " We respect your privacy. No spam, ever."
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
function ContactCard({
  icon: Icon,
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] flex gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-foreground/80 leading-relaxed", children })
    ] })
  ] });
}
export {
  ContactPage as component
};
