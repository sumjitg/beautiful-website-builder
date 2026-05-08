import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { ShieldCheck, HeartHandshake, Sparkles, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dr. Mukadam Multi Speciality Clinic, Mumbai" },
      { name: "description", content: "A multi-speciality clinic & emergency care centre in Dongri, Mumbai, dedicated to compassionate, evidence-based medicine for over two decades." },
      { property: "og:title", content: "About — Dr. Mukadam Multi Speciality Clinic" },
      { property: "og:description", content: "Compassionate, evidence-based medicine in the heart of Mumbai." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Trusted Care", desc: "Backed by 20+ years of experience and international training, every diagnosis is rooted in evidence." },
  { icon: HeartHandshake, title: "Patient First", desc: "We listen first. Every consultation is unhurried, personal and respectful." },
  { icon: Sparkles, title: "Modern Medicine", desc: "Latest treatment protocols across cardiology, diabetology and tropical medicine." },
  { icon: Clock, title: "Always Available", desc: "Twice-daily clinics plus emergency care by appointment for life's urgent moments." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[var(--gradient-soft)]" />
        <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-brand/10 blur-3xl -z-10" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/40 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand">
            About the Clinic
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
            Two decades of trusted, multi-speciality medical care in Mumbai
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Located in the heart of Dongri, Dr. Abdul Shakoor Mukadam Multi Speciality Clinic & Emergency
            Care Centre brings together international expertise, modern protocols and a deeply personal
            approach to medicine — all under one roof.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Mission"
              title="Accessible specialty care, delivered with compassion"
              description="From routine consultations to complex specialty care across cardiology, diabetology, internal medicine, infectious diseases and emergency care — we are dedicated to being a single, trusted point of medical contact for our community."
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our team is led by Dr. Abdul Shakoor Mukadam — a Harvard-certified physician with memberships
              in the American College of Physicians (USA) and the Royal College of Physicians, London (UK).
              We combine global standards with a warm, personal bedside manner.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand/20 to-mint/20 rounded-[2rem] blur-2xl" />
            <div className="relative rounded-[2rem] bg-card border border-border p-8 shadow-[var(--shadow-soft)]">
              <div className="space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Registration</div>
                  <div className="font-display text-2xl mt-1">2019/4/22191</div>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Established</div>
                  <div className="font-display text-2xl mt-1">20+ Years of Practice</div>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Location</div>
                  <div className="text-base mt-1 leading-relaxed">Chisthiya Heights, Dongri, Mumbai 400009</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we stand for"
            title="The values that guide every consultation"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl border border-border bg-card p-6 hover:shadow-[var(--shadow-elegant)] transition">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="rounded-full bg-brand hover:bg-brand/90 text-brand-foreground h-12 px-6">
              <Link to="/services">Explore our services <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
