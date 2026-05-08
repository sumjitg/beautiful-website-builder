import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book Appointment — Dr. Mukadam Clinic, Mumbai" },
      { name: "description", content: "Visit Dr. Mukadam Multi Speciality Clinic at Chisthiya Heights, Dongri, Mumbai 400009. Call 099208 81426 to book an appointment." },
      { property: "og:title", content: "Contact — Dr. Mukadam Multi Speciality Clinic" },
      { property: "og:description", content: "Book an appointment or visit our clinic in Dongri, Mumbai." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[var(--gradient-soft)]" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/40 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand">
            Get in touch
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Book an appointment or visit our clinic
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We're here to help. Call us, drop in during clinic hours, or send us a message and we'll get back to you.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-10">
          <div className="space-y-5">
            <ContactCard icon={MapPin} title="Visit us">
              First Floor, Chisthiya Heights, 102, Jail Rd S,<br />
              near Habib Hospital, Dongri,<br />
              Mumbai, Maharashtra 400009
            </ContactCard>
            <ContactCard icon={Phone} title="Call us">
              <a href="tel:09920881426" className="text-brand hover:underline font-medium">099208 81426</a>
              <div className="text-sm text-muted-foreground mt-1">Emergency by appointment</div>
            </ContactCard>
            <ContactCard icon={Clock} title="Clinic hours">
              <div className="space-y-1">
                <div>Morning: <span className="font-medium text-foreground">1:00 PM – 4:00 PM</span></div>
                <div>Evening: <span className="font-medium text-foreground">8:00 PM – 10:00 PM</span></div>
                <div className="text-sm text-muted-foreground mt-1">Open Monday to Sunday</div>
              </div>
            </ContactCard>

            <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-soft)]">
              <iframe
                title="Clinic location"
                src="https://www.google.com/maps?q=Chisthiya+Heights,+Jail+Road+South,+Dongri,+Mumbai&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[240px] sm:h-[280px] w-full"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-elegant)]">
            <h2 className="text-2xl font-semibold">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">We'll respond within one working day.</p>

            {submitted ? (
              <div className="mt-8 rounded-2xl bg-brand-soft/50 border border-brand/20 p-6 text-center">
                <CheckCircle2 className="h-10 w-10 text-brand mx-auto" />
                <h3 className="mt-3 text-lg font-semibold">Thank you!</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your message has been noted. For urgent matters, please call us directly.
                </p>
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" required className="mt-1.5 rounded-xl h-11" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" required className="mt-1.5 rounded-xl h-11" placeholder="+91" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" className="mt-1.5 rounded-xl h-11" placeholder="you@example.com" />
                </div>
                <div>
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea id="message" required className="mt-1.5 rounded-xl min-h-32" placeholder="Briefly describe your concern or preferred appointment time..." />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full bg-brand hover:bg-brand/90 text-brand-foreground h-12">
                  Send message <Send className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
                  <Mail className="h-3 w-3" /> We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] flex flex-col sm:flex-row gap-4">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold">{title}</h3>
        <div className="mt-1 text-foreground/80 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
