import { V as jsxRuntimeExports } from "./server-BjxjqOci.mjs";
import { d as cn } from "./SiteLayout-B5vXlI2A.mjs";
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      ),
      children: [
        eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/40 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-brand" }),
          eyebrow
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground", children: title }),
        description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed", children: description })
      ]
    }
  );
}
export {
  SectionHeading as S
};
