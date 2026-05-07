import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Mic, Stethoscope, CheckCircle2, ArrowRight, Globe2 } from "lucide-react";

export const Route = createFileRoute("/doctor")({
  head: () => ({
    meta: [
      { title: "Dr. Abdul Shakoor Mukadam — Profile, Credentials & Specialties" },
      { name: "description", content: "Meet Dr. Abdul Shakoor Mukadam — MBBS, MD, Harvard CROM 360, with memberships at the American College of Physicians and Royal College of Physicians, London." },
      { property: "og:title", content: "Dr. Abdul Shakoor Mukadam — Medical Director" },
      { property: "og:description", content: "20+ years of medical practice. Internationally trained physician based in Mumbai." },
    ],
  }),
  component: DoctorPage,
});

const education = [
  { title: "MBBS", subtitle: "Bachelor of Medicine, Bachelor of Surgery" },
  { title: "MD — General Medicine", subtitle: "Doctor of Medicine" },
  { title: "Harvard CROM 360", subtitle: "Harvard Medical School (Mumbai program)" },
  { title: "DM, FRSTM", subtitle: "London, UK" },
  { title: "M.D.F.C.I.M", subtitle: "Mumbai" },
  { title: "DTMH", subtitle: "Diploma in Tropical Medicine & Hygiene — Liverpool" },
];

const memberships = [
  "Member, American College of Physicians (USA)",
  "Member, Royal College of Physicians, London (UK)",
  "Hon. Visiting Professor — University of Philippines",
  "Consultant Hon. Physician — Balaji Hospital, South Mumbai, Byculla",
  "Consultant Physician — Jain Diagnostic Centre & Poly Clinic",
];

const specialties = [
  "Internal Medicine",
  "Clinical Cardiology",
  "Diabetology & Metabolic Disorders",
  "Infectious & Tropical Medicine",
  "Sexual Medicine",
  "Kidney & Cerebrovascular Diseases",
];

function DoctorPage() {
  return (
    <SiteLayout>
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[var(--gradient-soft)]" />
        <div className="absolute -top-20 -left-20 h-[400px] w-[400px] rounded-full bg-mint/15 blur-3xl -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="relative aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-brand to-mint p-1 shadow-[var(--shadow-elegant)]">
                <div className="h-full w-full rounded-[1.85rem] bg-card flex flex-col items-center justify-center p-8">
                  <div className="h-36 w-36 rounded-full bg-gradient-to-br from-brand to-mint flex items-center justify-center text-brand-foreground font-display text-5xl font-semibold shadow-inner">
                    AM
                  </div>
                  <div className="mt-6 text-center">
                    <div className="font-display text-2xl font-semibold">Dr. Abdul Shakoor</div>
                    <div className="font-display text-2xl font-semibold">Mukadam</div>
                    <div className="text-sm text-muted-foreground mt-2">Medical Director</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/40 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand">
                Meet your doctor
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                A multi-specialty physician with{" "}
                <span className="bg-gradient-to-r from-brand to-mint bg-clip-text text-transparent italic">global training</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Dr. Abdul Shakoor Mukadam is a highly experienced medical professional with over 20 years
                of clinical practice. He is recognised across internal medicine, cardiology, diabetology,
                infectious & tropical medicine and sexual medicine — and serves as Medical Director of the
                Multi Speciality Clinic in Dongri, Mumbai.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full bg-brand hover:bg-brand/90 text-brand-foreground h-12 px-6">
                  <Link to="/contact">Book a consultation <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-6 border-brand/30 text-brand hover:bg-brand-soft/40 hover:text-brand">
                  <Link to="/services">View services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold">Education</h2>
            </div>
            <ul className="mt-6 space-y-4">
              {education.map((e) => (
                <li key={e.title} className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="h-2 w-2 mt-2 rounded-full bg-brand shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">{e.title}</div>
                    <div className="text-sm text-muted-foreground">{e.subtitle}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <Globe2 className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-semibold">Memberships & Roles</h2>
              </div>
              <ul className="mt-6 space-y-3">
                {memberships.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-semibold">Specialties</h2>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {specialties.map((s) => (
                  <span key={s} className="rounded-full bg-brand-soft/60 text-brand px-3 py-1.5 text-sm font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-brand-soft/40 to-mint/20 p-8 sm:p-12">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
                <Mic className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold">Speaker & Educator</h2>
            </div>
            <p className="mt-5 text-foreground/80 leading-relaxed">
              Dr. Mukadam is an active contributor to medical education and public health awareness, frequently
              speaking on critical health topics such as <strong>Hypertension, Diabetes</strong> and{" "}
              <strong>Heart Health</strong> — including national initiatives like
              <em> "India First, Heart First"</em>.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium text-brand border border-brand/20">
              <Award className="h-4 w-4" /> Featured speaker on national health platforms
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}