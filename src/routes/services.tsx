import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  HeartPulse, Activity, Stethoscope, ShieldPlus, Droplets, Thermometer,
  Brain, Pill, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Multi Speciality Care & Emergency, Mumbai" },
      { name: "description", content: "Internal medicine, cardiology, diabetology, infectious & tropical medicine, sexual medicine and emergency care — all under one roof in Dongri, Mumbai." },
      { property: "og:title", content: "Services — Dr. Mukadam Multi Speciality Clinic" },
      { property: "og:description", content: "Comprehensive multi-speciality medical services in Mumbai." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Stethoscope,
    title: "Internal Medicine",
    desc: "Comprehensive evaluation, diagnosis and management of adult diseases — from routine to complex.",
    items: ["General health check-ups", "Chronic disease management", "Preventive screening"],
  },
  {
    icon: HeartPulse,
    title: "Clinical Cardiology",
    desc: "Diagnosis & treatment of heart-related conditions including hypertension and lifestyle cardiology.",
    items: ["Hypertension management", "ECG & cardiac evaluation", "Preventive cardiology"],
  },
  {
    icon: Droplets,
    title: "Diabetology",
    desc: "Expert management of diabetes and related metabolic disorders with personalised plans.",
    items: ["Type 1 & Type 2 diabetes", "Insulin & medication tuning", "Metabolic disorders"],
  },
  {
    icon: Thermometer,
    title: "Infectious & Tropical Medicine",
    desc: "Specialised treatment of malaria, dengue, typhoid and other tropical infections.",
    items: ["Malaria & dengue", "Typhoid & gastroenteritis", "Travel medicine"],
  },
  {
    icon: Activity,
    title: "Sexual Medicine",
    desc: "Confidential, non-judgemental and advanced treatment for sexual health concerns.",
    items: ["Men's & women's health", "Hormonal evaluation", "Counselling support"],
  },
  {
    icon: Brain,
    title: "Kidney & Cerebrovascular",
    desc: "Care for kidney disorders and cerebrovascular conditions, with tertiary referral coordination.",
    items: ["Kidney function evaluation", "Stroke risk assessment", "Specialist referrals"],
  },
  {
    icon: ShieldPlus,
    title: "Emergency Care Centre",
    desc: "Equipped to handle urgent medical situations with rapid assessment and stabilisation.",
    items: ["Emergency assessment", "Stabilisation & triage", "Hospital coordination"],
  },
  {
    icon: Pill,
    title: "General Consultation",
    desc: "Routine check-ups, primary care services and second opinions for the entire family.",
    items: ["Family medicine", "Second opinions", "Prescriptions & follow-ups"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[var(--gradient-soft)]" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/40 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand">
            Our Services
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Comprehensive medical care, all under one roof
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From routine consultations to specialty care across multiple disciplines and round-the-clock
            emergency support — our clinic is equipped for every step of your health journey.
          </p>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative rounded-3xl border border-border bg-card p-7 hover:border-brand/30 hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand/70 text-brand-foreground shadow-[var(--shadow-soft)]">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <SectionHeading
              eyebrow="Ready when you are"
              title="Book a consultation today"
              description="Same-day appointments often available. For emergencies, please call us directly."
            />
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-brand hover:bg-brand/90 text-brand-foreground h-12 px-6">
                <Link to="/contact">Book Appointment <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-12 px-6 border-brand/30 text-brand hover:bg-brand-soft/40 hover:text-brand">
                <a href="tel:09920881426">Call 099208 81426</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
