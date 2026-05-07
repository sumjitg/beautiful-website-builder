
## Goal
Create a polished, trust-inspiring multi-page website for **Dr. Abdul Shakoor Mukadam – Multi Speciality Clinic & Emergency Care Centre** (Dongri, Mumbai), using all info from the uploaded research report.

## Design Direction
- **Style:** Modern medical / premium healthcare — clean, calm, professional. Inspired by top-tier clinic sites (Mayo, Apollo, Cleveland Clinic) but warmer.
- **Palette:** Medical teal/blue primary (`oklch` trust-blue) + soft mint accent + warm white background + deep navy text. Subtle gradients and soft shadows.
- **Typography:** Serif display for headings (e.g. Playfair / Fraunces) + clean sans (Inter) for body — gives a refined, doctorly feel.
- **Components:** Glass cards, gradient hero, animated stat counters, smooth section reveals, rounded-2xl cards with soft shadow-elegant tokens, lucide medical icons (Stethoscope, HeartPulse, Activity, Syringe, ShieldPlus).
- All colors via semantic tokens in `src/styles.css` (oklch).

## Pages (TanStack Start file routes)
1. `routes/index.tsx` — **Home**
   - Hero: clinic name, tagline ("20+ years of trusted multi-speciality care in the heart of Mumbai"), CTAs (Book Appointment, Emergency Call), Harvard certification badge.
   - Trust strip: 20+ yrs experience · Harvard Certified · 5★ Google · Emergency Care.
   - Specialties grid (6 cards: Internal Medicine, Cardiology, Diabetology, Infectious & Tropical, Sexual Medicine, Emergency Care).
   - About-doctor preview with photo placeholder + credentials.
   - Testimonials carousel (Google/Justdial highlights).
   - CTA band → Contact.
2. `routes/about.tsx` — Clinic story, mission, facilities, why-choose-us.
3. `routes/doctor.tsx` — Full Dr. Mukadam profile: education (MBBS, MD, Harvard CROM 360), memberships (American College of Physicians, Royal College London, DM FRSTM, MDFCIM, DTMH Liverpool), roles, speaking engagements.
4. `routes/services.tsx` — Detailed cards for each specialty + Emergency Care Centre + General Consultation.
5. `routes/contact.tsx` — Address, phone (tel: link), hours, embedded Google Map iframe (Dongri address), contact form (frontend only, mailto/disabled submit for now).

Shared:
- `components/site/Navbar.tsx` (sticky, translucent on scroll, logo mark + clinic name + nav + "Book Now" button + emergency phone).
- `components/site/Footer.tsx` (address, hours, quick links, social).
- `components/site/SectionHeading.tsx`, `SpecialtyCard`, `StatCard`, `TestimonialCard`, `CredentialBadge`.
- Each route sets unique `head()` SEO (title, description, og tags).

## Content (from report)
- Address: First Floor, Chisthiya Heights, 102, Jail Rd S, near Habib Hospital, Dongri, Mumbai 400009.
- Phone: 099208 81426.
- Hours: shown as "Morning 1:00–4:00 PM · Evening 8:00–10:00 PM · Emergency by appointment" (matches the signboard photo, more reliable than directory listings).
- Registration No.: 2019/4/22191.
- Tagline pulled from signboard: "Multi-Speciality Clinic & Emergency Care Centre".

## Assets
- Use lucide-react icons throughout.
- Generate 1 hero image (premium quality): warm, modern clinic interior / doctor stethoscope close-up.
- Optional: small generated medical-pattern background.
- No real photo of doctor — use elegant initials avatar / silhouette card with credentials badge.

## Out of scope (this pass)
- Real appointment booking backend (button can link to `tel:` and contact page).
- CMS / Lovable Cloud (not needed for static info site).
- Multi-language.

## Technical notes
- Tailwind v4 tokens added to `src/styles.css`: `--brand`, `--brand-foreground`, `--brand-soft`, `--accent-mint`, `--gradient-hero`, `--shadow-elegant`, `--shadow-soft`.
- Add Google Fonts via `head().links` in `__root.tsx`.
- Replace placeholder in `routes/index.tsx`.
- All new files compile against strict TS; create files before importing.
