import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import doctorImg from "@/assets/doctor-profile.png";
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
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[var(--gradient-soft)]" />
        <div className="absolute -top-20 -left-20 h-[400px] w-[400px] rounded-full bg-mint/15 blur-3xl -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Doctor card */}
            <div className="lg:col-span-2 max-w-[280px] mx-auto w-full lg:max-w-none">
              <div className="relative aspect-[4/5] rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br from-brand to-mint p-1 shadow-[var(--shadow-elegant)]">
                <div className="h-full w-full rounded-[1.35rem] sm:rounded-[1.85rem] bg-card flex flex-col p-4 sm:p-5">
                  <div className="w-full overflow-hidden rounded-[1.2rem] sm:rounded-[1.5rem] border border-white/60 shadow-[var(--shadow-soft)]">
                    <img
                      src={doctorImg}
                      alt="Portrait of Dr. Abdul Shakoor Mukadam"
                      width={818}
                      height={593}
                      className="h-[260px] sm:h-[320px] w-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-5 text-center">
                    <div className="font-display text-xl sm:text-2xl font-semibold">Dr. Abdul Shakoor</div>
                    <div className="font-display text-xl sm:text-2xl font-semibold">Mukadam</div>
                    <div className="text-sm text-muted-foreground mt-2">Medical Director</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero text */}
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/40 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand">
                Meet your doctor
              </div>
              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                A multi-specialty physician with{" "}
                <span className="bg-gradient-to-r from-brand to-mint bg-clip-text text-transparent italic">global training</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Dr. Abdul Shakoor Mukadam is a highly experienced medical professional with over 20 years
                of clinical practice across internal medicine, cardiology, diabetology, infectious &amp; tropical
                medicine and sexual medicine — Medical Director of the Multi Speciality Clinic in Dongri, Mumbai.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-brand hover:bg-brand/90 text-brand-foreground h-12 px-6">
                  <Link to="/contact">Book a consultation <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full h-12 px-6 border-brand/30 text-brand hover:bg-brand-soft/40 hover:text-brand">
                  <Link to="/services">View services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Education */}
          <div className="rounded-2xl sm:rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold">Education</h2>
            </div>
            <ul className="mt-5 space-y-4">
              {education.map((e) => (
                <li key={e.title} className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="h-2 w-2 mt-2 rounded-full bg-brand shrink-0" />
                  <div>
                    <div className="font-medium text-foreground text-sm sm:text-base">{e.title}</div>
                    <div className="text-sm text-muted-foreground">{e.subtitle}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5 sm:space-y-6">
            {/* Memberships */}
            <div className="rounded-2xl sm:rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <Globe2 className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold">Memberships &amp; Roles</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {memberships.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialties */}
            <div className="rounded-2xl sm:rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold">Specialties</h2>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
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

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl border border-border bg-gradient-to-br from-brand-soft/40 to-mint/20 p-6 sm:p-10 lg:p-12">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
                <Mic className="h-5 w-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold">Speaker &amp; Educator</h2>
            </div>
            <p className="mt-5 text-foreground/80 leading-relaxed text-sm sm:text-base">
              Dr. Mukadam is an active contributor to medical education and public health awareness, frequently
              speaking on critical health topics such as <strong>Hypertension, Diabetes</strong> and{" "}
              <strong>Heart Health</strong> — including national initiatives like
              <em> "India First, Heart First"</em>.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium text-brand border border-brand/20">
              <Award className="h-4 w-4" /> Featured speaker on national health platforms
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
