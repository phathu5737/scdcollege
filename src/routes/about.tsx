import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Users, Layers, Briefcase, Heart, GraduationCap, CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import ctaImg from "@/assets/cta.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SCD College — Accredited Skills Development in South Africa" },
      { name: "description", content: "Learn about SCD College — an MICT SETA accredited training provider delivering NQF 3 and NQF 4 programmes with mentorship, work placements and real-world experience." },
      { property: "og:title", content: "About SCD College" },
      { property: "og:description", content: "MICT SETA accredited training provider in South Africa." },
    ],
  }),
  component: AboutPage,
});

const approach = [
  { icon: BookOpen, title: "Great Teaching & Learning", text: "Curriculum designed by industry experts and delivered by experienced facilitators." },
  { icon: Users, title: "Great Student Experiences", text: "A learning culture built on respect, support, and student success." },
  { icon: Layers, title: "Cross-disciplinary Learning", text: "Programmes that blend technical, professional, and life-long learning skills." },
  { icon: Heart, title: "Integrated Support", text: "Mentorship, coaching, and academic support throughout your journey." },
];

const experience = [
  { icon: Briefcase, title: "Work Placements", text: "Real workplace exposure with our employer network." },
  { icon: Users, title: "Mentorship", text: "One-on-one guidance from working professionals." },
  { icon: GraduationCap, title: "Real-World Experience", text: "Project-based learning that mirrors the workplace." },
];

const accreditations = [
  "National Certificate: End User Computing — NQF 3",
  "National Certificate: Support Systems — NQF 4",
  "FETC: Technical Support — NQF 4",
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="absolute inset-0 opacity-30 [background:var(--gradient-hero)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">About Us</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            Building careers through <span className="text-primary">accredited</span> skills development.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            SCD College — Shakoleng Competency Development College — is an accredited training provider delivering career-ready learning across South Africa.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <img src={aboutImg} alt="SCD College instructor mentoring learners" loading="lazy" width={1280} height={896} className="rounded-2xl shadow-[var(--shadow-card)]" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">Who We Are</h2>
            <p className="mt-4 text-muted-foreground">
              SCD College equips South Africans with the skills they need to thrive in modern workplaces. Through accredited learning, mentorship and real-world experience, we prepare learners to lead in the digital economy.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Vision</h3>
                <p className="mt-2 text-sm text-foreground">To be South Africa's most trusted partner in skills development and career transformation.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Mission</h3>
                <p className="mt-2 text-sm text-foreground">To deliver quality, accredited training that empowers learners and strengthens organisations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Approach</span>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Designed around the learner.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((a) => (
              <div key={a.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"><a.icon className="h-6 w-6" /></div>
                <h3 className="mt-4 text-lg font-bold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Student Experience</span>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">More than a qualification.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {experience.map((e) => (
            <div key={e.title} className="rounded-2xl bg-ink p-8 text-ink-foreground">
              <e.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-bold">{e.title}</h3>
              <p className="mt-2 text-sm text-white/70">{e.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accreditation */}
      <section className="bg-ink py-20 text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Accreditation</span>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">MICT SETA Accredited Programmes</h2>
            <p className="mt-4 text-white/70">Our qualifications are recognised on the National Qualifications Framework, giving you credentials that employers trust.</p>
            <ul className="mt-6 space-y-3">
              {accreditations.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm">
                  <Award className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" size="xl" className="mt-8">
              <Link to="/contact">Speak to an Advisor</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["MICT SETA", "QCTO Aligned", "NQF Registered", "Career Focused"].map((b) => (
              <div key={b} className="flex flex-col items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-6">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <p className="font-bold">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src={ctaImg} alt="SCD College graduate" loading="lazy" width={1280} height={896} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center text-ink-foreground sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold md:text-5xl">Ready to start your journey?</h2>
          <p className="mt-4 text-white/70">Talk to our admissions team and find the programme that's right for you.</p>
          <Button asChild variant="hero" size="xl" className="mt-8"><Link to="/contact">Get Started</Link></Button>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
}