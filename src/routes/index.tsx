import { createFileRoute, Link } from "@tanstack/react-router";
import {
  HeartPulse,
  Activity,
  Stethoscope,
  ShieldPlus,
  Droplets,
  Thermometer,
  GraduationCap,
  Award,
  Star,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  Quote,
  CheckCircle2,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-clinic.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Abdul Shakoor Mukadam — Multi Speciality Clinic, Mumbai" },
      {
        name: "description",
        content:
          "Trusted multi-speciality care & 24/7 emergency services in Dongri, Mumbai. Led by Dr. Abdul Shakoor Mukadam (MBBS, MD, Harvard CROM 360) with 20+ years of experience.",
      },
      { property: "og:title", content: "Dr. Abdul Shakoor Mukadam — Multi Speciality Clinic" },
      {
        property: "og:description",
        content: "20+ years of trusted multi-speciality medical care in Mumbai.",
      },
    ],
  }),
  component: Index,
});

const specialties = [
  { icon: Stethoscope, title: "Internal Medicine", desc: "Comprehensive evaluation and care for adult diseases." },
  { icon: HeartPulse, title: "Clinical Cardiology", desc: "Hypertension, heart conditions and preventive cardiology." },
  { icon: Droplets, title: "Diabetology", desc: "Expert management of diabetes & metabolic disorders." },
  { icon: Thermometer, title: "Infectious & Tropical", desc: "Malaria, dengue and tropical disease specialists." },
  { icon: Activity, title: "Sexual Medicine", desc: "Confidential, advanced treatment for sexual health." },
  { icon: ShieldPlus, title: "Emergency Care", desc: "Round-the-clock emergency care by appointment." },
];

const stats = [
  { value: "20+", label: "Years of Practice" },
  { value: "5.0★", label: "Google Rating" },
  { value: "4", label: "International Memberships" },
  { value: "1000s", label: "Patients Treated" },
];

const credentials = [
  "MBBS, MD (General Medicine)",
  "Harvard Medical School — CROM 360",
  "DM, FRSTM (London, UK)",
  "M.D.F.C.I.M (Mumbai)",
  "DTMH (Liverpool)",
  "Member, American College of Physicians (USA)",
  "Member, Royal College of Physicians, London (UK)",
];

const testimonials = [
  { quote: "Amazing doctor with high skills. Excellent for medical services.", author: "Google Review", rating: 5 },
  { quote: "Patients appreciate the advanced treatments and professional care.", author: "Justdial", rating: 4 },
  { quote: "Good treatment and prescribed the best medicine.", author: "Sulekha", rating: 5 },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[var(--gradient-soft)]" />
          <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-brand/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-mint/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-20 lg:pt-20 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/70 backdrop-blur px-3 py-1.5 text-xs font-medium text-brand shadow-sm">
                <Award className="h-3.5 w-3.5" />
                Harvard Medical School Certified
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.05]">
                Trusted multi-speciality care in the{" "}
                <span className="bg-gradient-to-r from-brand to-mint bg-clip-text text-transparent italic">
                  heart of Mumbai
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Led by Dr. Abdul Shakoor Mukadam (MBBS, MD) — over 20 years of experience across
                internal medicine, cardiology, diabetology and emergency care.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full bg-brand hover:bg-brand/90 text-brand-foreground shadow-[var(--shadow-elegant)] h-12 px-6">
                  <Link to="/contact">
                    Book Appointment <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-6 border-brand/30 text-brand hover:bg-brand-soft/40 hover:text-brand">
                  <a href="tel:09920881426">
                    <Phone className="mr-2 h-4 w-4" /> Emergency Call
                  </a>
                </Button>
              </div>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-lg">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-2xl sm:text-3xl font-semibold text-foreground">{s.value}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-12 lg:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand/30 to-mint/30 rounded-[2rem] blur-2xl opacity-60" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-elegant)] border border-white/40">
                <img
                  src={heroImg}
                  alt="Modern medical clinic interior with stethoscope on wooden desk"
                  width={1536}
                  height={1024}
                  className="w-full h-[300px] xs:h-[400px] sm:h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              </div>

              {/* Badges - Hidden on very small screens to avoid 'messy' layout */}
              <div className="hidden xs:block absolute -bottom-6 -left-4 sm:-left-8 max-w-[200px] sm:max-w-xs rounded-2xl bg-card border border-border shadow-[var(--shadow-soft)] p-3 sm:p-4 backdrop-blur">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-gold text-gold" />
                  ))}
                  <span className="text-xs sm:text-sm font-semibold ml-1">5.0</span>
                </div>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 sm:mt-1.5 leading-relaxed">
                  "Amazing doctor with high skills. Excellent medical services."
                </p>
                <div className="text-[9px] sm:text-[11px] text-muted-foreground/70 mt-1.5 sm:mt-2">— Google Review</div>
              </div>

              <div className="hidden md:block absolute -top-4 -right-4 rounded-2xl bg-card border border-border shadow-[var(--shadow-soft)] p-3 backdrop-blur">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-medium">Open Today</span>
                </div>
                <div className="text-[11px] text-muted-foreground mt-1">1–4 PM · 8–10 PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Specialties"
            title="Comprehensive care, under one roof"
            description="From routine consultations to complex specialty care and emergencies — we are equipped to support you at every step."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {specialties.map((s) => (
              <div
                key={s.title}
                className="group relative rounded-3xl border border-border bg-card p-7 hover:border-brand/30 hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-soft/0 to-brand-soft/40 opacity-0 group-hover:opacity-100 rounded-3xl transition" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand/70 text-brand-foreground shadow-[var(--shadow-soft)]">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <Link
                    to="/services"
                    className="mt-5 inline-flex items-center text-sm font-medium text-brand hover:gap-2 gap-1 transition-all"
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTOR PREVIEW */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-secondary/40 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="relative aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-brand to-mint p-1 shadow-[var(--shadow-elegant)]">
                <div className="h-full w-full rounded-[1.85rem] bg-card flex flex-col items-center justify-center p-8">
                  <div className="h-32 w-32 rounded-full bg-gradient-to-br from-brand to-mint flex items-center justify-center text-brand-foreground font-display text-4xl font-semibold shadow-inner">
                    AM
                  </div>
                  <div className="mt-6 text-center">
                    <div className="font-display text-2xl font-semibold">Dr. Abdul Shakoor</div>
                    <div className="font-display text-2xl font-semibold">Mukadam</div>
                    <div className="text-sm text-muted-foreground mt-2">MBBS, MD · Medical Director</div>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-soft/60 px-3 py-1.5 text-xs font-medium text-brand">
                    <GraduationCap className="h-3.5 w-3.5" />
                    Harvard CROM 360
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <SectionHeading
                align="left"
                eyebrow="Meet your doctor"
                title="20+ years of medical excellence"
                description="Dr. Mukadam is a multifaceted physician with international training, dedicated to delivering compassionate, evidence-based care to the Mumbai community."
              />
              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {credentials.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{c}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 rounded-full bg-foreground hover:bg-foreground/90 text-background h-11 px-6">
                <Link to="/doctor">View full profile <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Patient Stories"
            title="What our patients say"
            description="Trusted by thousands across Mumbai with consistently strong ratings on Google, Justdial and Sulekha."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="relative rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]"
              >
                <Quote className="absolute top-5 right-5 h-8 w-8 text-brand/15" />
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mt-4 text-base text-foreground/90 leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 text-sm font-medium text-muted-foreground">
                  — {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground text-background p-10 sm:p-16 shadow-[var(--shadow-elegant)]">
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-mint/20 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                  Ready to take the next step toward better health?
                </h2>
                <p className="mt-4 text-background/90 leading-relaxed">
                  Book a consultation or call us directly — we're here when you need us.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-full bg-background text-foreground hover:bg-background/90 h-12 px-6">
                    <Link to="/contact">Book Appointment</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-6 border-background/30 text-background hover:bg-background/20 hover:text-background transition-all">
                    <a href="tel:09920881426" className="flex items-center">
                      <Phone className="mr-2 h-4 w-4" /> 099208 81426
                    </a>
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-2xl bg-background/10 backdrop-blur border border-background/20 p-5">
                  <MapPin className="h-5 w-5 text-mint shrink-0 mt-0.5" />
                  <div className="text-sm text-background font-medium leading-relaxed">
                    First Floor, Chisthiya Heights, 102, Jail Rd S, near Habib Hospital, Dongri, Mumbai 400009
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl bg-background/10 backdrop-blur border border-background/20 p-5">
                  <Clock className="h-5 w-5 text-mint shrink-0 mt-0.5" />
                  <div className="text-sm text-background font-medium leading-relaxed">
                    Morning 1:00 – 4:00 PM · Evening 8:00 – 10:00 PM<br />
                    Emergency by appointment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
