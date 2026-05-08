import { createFileRoute, Link } from "@tanstack/react-router";
import {
  HeartPulse, Activity, Stethoscope, ShieldPlus, Droplets, Thermometer,
  GraduationCap, Award, Star, ArrowRight, Phone, MapPin, Clock, Quote,
  CheckCircle2,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-clinic.jpg";

export const Route = createFileRoute("/")(
  {
    head: () => ({
      meta: [
        { title: "Dr. Abdul Shakoor Mukadam — Multi Speciality Clinic, Mumbai" },
        {
          name: "description",
          content:
            "Trusted multi-speciality care & 24/7 emergency services in Dongri, Mumbai. Led by Dr. Abdul Shakoor Mukadam (MBBS, MD, Harvard CROM 360) with 20+ years of experience.",
        },
        { property: "og:title", content: "Dr. Abdul Shakoor Mukadam — Multi Speciality Clinic" },
        { property: "og:description", content: "20+ years of trusted multi-speciality medical care in Mumbai." },
      ],
    }),
    component: Index,
  }
);

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
  { value: "4", label: "Intl. Memberships" },
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
          <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-brand/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-mint/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 lg:pt-16 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/80 px-3 py-1.5 text-xs font-medium text-brand shadow-sm">
                <Award className="h-3.5 w-3.5 shrink-0" />
                Harvard Medical School Certified
              </div>
              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground leading-[1.1]">
                Trusted multi-speciality care in the{" "}
                <span className="bg-gradient-to-r from-brand to-mint bg-clip-text text-transparent italic">
                  heart of Mumbai
                </span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Led by Dr. Abdul Shakoor Mukadam (MBBS, MD) — over 20 years across
                internal medicine, cardiology, diabetology and emergency care.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-brand hover:bg-brand/90 text-brand-foreground shadow-[var(--shadow-elegant)] h-12 px-6">
                  <Link to="/contact">
                    Book Appointment <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full h-12 px-6 bg-transparent border-brand/40 text-brand hover:bg-brand-soft/60 hover:text-brand">
                  <a href="tel:09920881426">
                    <Phone className="mr-2 h-4 w-4" /> Emergency Call
                  </a>
                </Button>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-2xl sm:text-3xl font-semibold text-foreground">{s.value}</div>
                    <div className="text-[11px] sm:text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-4 lg:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand/20 to-mint/20 rounded-[2rem] blur-2xl opacity-60" />
              <div className="relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-[var(--shadow-elegant)] border border-white/40">
                <img
                  src={heroImg}
                  alt="Modern medical clinic interior"
                  width={1536}
                  height={1024}
                  className="w-full h-[220px] sm:h-[340px] lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Specialties"
            title="Comprehensive care, under one roof"
            description="From routine consultations to complex specialty care and emergencies — equipped for every step."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {specialties.map((s) => (
              <div
                key={s.title}
                className="group relative rounded-2xl sm:rounded-3xl border border-border bg-card p-5 sm:p-7 hover:border-brand/30 hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-soft/0 to-brand-soft/40 opacity-0 group-hover:opacity-100 rounded-2xl sm:rounded-3xl transition" />
                <div className="relative">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand/70 text-brand-foreground shadow-[var(--shadow-soft)]">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg sm:text-xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <Link
                    to="/services"
                    className="mt-4 inline-flex items-center text-sm font-medium text-brand gap-1 transition-all hover:gap-2"
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
      <section className="py-16 sm:py-24 bg-gradient-to-b from-secondary/40 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2 max-w-xs mx-auto w-full lg:max-w-none">
              <div className="relative aspect-[4/5] rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br from-brand to-mint p-1 shadow-[var(--shadow-elegant)]">
                <div className="h-full w-full rounded-[1.35rem] sm:rounded-[1.85rem] bg-card flex flex-col items-center justify-center p-6 sm:p-8">
                  <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-gradient-to-br from-brand to-mint flex items-center justify-center text-brand-foreground font-display text-3xl sm:text-4xl font-semibold shadow-inner">
                    AM
                  </div>
                  <div className="mt-5 text-center">
                    <div className="font-display text-lg sm:text-2xl font-semibold">Dr. Abdul Shakoor</div>
                    <div className="font-display text-lg sm:text-2xl font-semibold">Mukadam</div>
                    <div className="text-sm text-muted-foreground mt-2">MBBS, MD · Medical Director</div>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-soft/60 px-3 py-1.5 text-xs font-medium text-brand">
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
                description="Dr. Mukadam is a multifaceted physician with international training, dedicated to compassionate, evidence-based care."
              />
              <ul className="mt-6 grid sm:grid-cols-2 gap-2 sm:gap-3">
                {credentials.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{c}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6 rounded-full bg-foreground hover:bg-foreground/90 text-background h-11 px-6">
                <Link to="/doctor">View full profile <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Patient Stories"
            title="What our patients say"
            description="Trusted by thousands across Mumbai with consistently strong ratings."
          />
          <div className="mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="relative rounded-2xl sm:rounded-3xl border border-border bg-card p-5 sm:p-7 shadow-[var(--shadow-soft)]"
              >
                <Quote className="absolute top-5 right-5 h-7 w-7 text-brand/15" />
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm sm:text-base text-foreground/90 leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-4 text-sm font-medium text-muted-foreground">
                  — {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] bg-foreground text-background p-6 sm:p-10 md:p-16 shadow-[var(--shadow-elegant)]">
            <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-brand/30 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-mint/20 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-10 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">
                  Ready to take the next step toward better health?
                </h2>
                <p className="mt-3 text-background/80 leading-relaxed">
                  Book a consultation or call us directly — we're here when you need us.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-background text-foreground hover:bg-background/90 h-12 px-6">
                    <Link to="/contact">Book Appointment</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-12 px-6 bg-transparent border-background/40 text-background hover:bg-background/15 hover:text-background">
                    <a href="tel:09920881426" className="flex items-center">
                      <Phone className="mr-2 h-4 w-4" /> 099208 81426
                    </a>
                  </Button>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-4 rounded-2xl bg-background/10 border border-background/20 p-4">
                  <MapPin className="h-5 w-5 text-mint shrink-0 mt-0.5" />
                  <div className="text-sm text-background font-medium leading-relaxed">
                    First Floor, Chisthiya Heights, 102, Jail Rd S, near Habib Hospital, Dongri, Mumbai 400009
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl bg-background/10 border border-background/20 p-4">
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
