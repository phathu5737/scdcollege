import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Award, Users, Laptop, Briefcase, GraduationCap,
  Building2, Star, CheckCircle2, ShieldCheck, Globe,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import corporateImg from "@/assets/corporate.jpg";
import itImg from "@/assets/it-training.jpg";
import ctaImg from "@/assets/cta.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SCD College — Accredited Skills Development & Training in South Africa" },
      { name: "description", content: "MICT SETA accredited training South Africa. End User Computing NQF 3, Technical Support NQF 4 & corporate skills development. Get started today." },
      { property: "og:title", content: "SCD College — Empowering Your Future Through Skills Development" },
      { property: "og:description", content: "Accredited courses, expert trainers, real-world experience. SCD College — South Africa's career-focused training partner." },
    ],
  }),
  component: HomePage,
});

const benefits = [
  { icon: GraduationCap, title: "Industry-Aligned Education", text: "Curriculum built with employers, designed for the workplace." },
  { icon: Users, title: "Expert Trainers & Mentors", text: "Learn from working professionals who've done it." },
  { icon: Globe, title: "Flexible Online & In-Person", text: "Train how it suits you — virtual, on-site, or hybrid." },
  { icon: Briefcase, title: "Real-World Work Experience", text: "Work placements that turn skills into careers." },
];

const services = [
  { icon: Building2, title: "Corporate Training", text: "SETA-accredited team upskilling — on-site, online, or hybrid.", img: corporateImg },
  { icon: Laptop, title: "Professional Development", text: "IT support, end-user computing, technical support qualifications.", img: itImg },
];

const testimonials = [
  { name: "Thabo M.", role: "IT Support Technician", text: "SCD College gave me real skills, real mentors, and a real job. The work placement changed my life." },
  { name: "Lerato S.", role: "Operations Manager", text: "We trained 30 staff with SCD. Professional, accredited, and our team is genuinely more capable." },
  { name: "Sipho N.", role: "Graduate", text: "The trainers cared. The content was current. I felt ready for the workplace from day one." },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="absolute inset-0">
          <img src={heroImg} alt="South African students learning at SCD College" width={1920} height={1080} className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:py-32 lg:px-8">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" /> MICT SETA Accredited
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] md:text-6xl lg:text-7xl">
              Empowering Your Future Through <span className="text-primary">Skills Development</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              Accredited learning, expert mentorship, and quality systems to help you grow, learn, and lead in the modern workplace.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl"><Link to="/contact">Get Started <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild size="xl" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white hover:text-ink"><Link to="/contact">Contact Us</Link></Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/60">
              <div className="flex items-center gap-2"><Award className="h-4 w-4 text-primary" /> NQF 3 & 4 Programmes</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Career-focused</div>
              <div className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> Mentorship included</div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Why Choose Us</span>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Built to launch careers.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-primary">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <img src={aboutImg} alt="SCD College facilitator with learners" loading="lazy" width={1280} height={896} className="rounded-2xl shadow-[var(--shadow-card)]" />
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">About SCD College</span>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">An accredited training provider focused on career-ready skills.</h2>
            <p className="mt-4 text-muted-foreground">Shakoleng Competency Development College equips learners and organisations across South Africa with the skills they need to thrive — through MICT SETA accredited programmes, expert facilitation, and real workplace experience.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["MICT SETA Accredited", "NQF Registered", "QCTO Aligned", "Industry Network"].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm font-semibold"><CheckCircle2 className="h-4 w-4 text-primary" />{b}</div>
              ))}
            </div>
            <Button asChild variant="hero" size="lg" className="mt-8"><Link to="/about">Learn More <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Services</span>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Training that delivers outcomes.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Link key={s.title} to="/services" className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={1280} height={896} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground"><s.icon className="h-5 w-5" /></div>
                <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ink py-20 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Trusted By Learners & Employers</span>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Real stories. Real results.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm text-white/80">"{t.text}"</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA WITH LEAD CAPTURE */}
      <section className="relative overflow-hidden">
        <img src={ctaImg} alt="" loading="lazy" width={1280} height={896} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 text-ink-foreground sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Start Today</span>
            <h2 className="mt-2 text-3xl font-extrabold md:text-5xl">Start your journey today.</h2>
            <p className="mt-4 max-w-md text-white/70">Speak to an SCD College advisor about programmes, corporate training, or work placements. We'll get back to you within one business day.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl"><Link to="/contact">Enroll Now</Link></Button>
              <Button asChild size="xl" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white hover:text-ink"><Link to="/services">View Services</Link></Button>
            </div>
          </div>
          <QuickLead />
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
}

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(20),
});

function QuickLead() {
  const [f, setF] = useState({ name: "", email: "", phone: "" });
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const r = leadSchema.safeParse(f);
    if (!r.success) { toast.error("Please complete all fields correctly."); return; }
    try {
      const list = JSON.parse(localStorage.getItem("scd_leads") || "[]");
      list.push({ ...r.data, source: "home-cta", at: new Date().toISOString() });
      localStorage.setItem("scd_leads", JSON.stringify(list));
    } catch {}
    setDone(true);
    toast.success("Thanks! We'll be in touch.");
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-background/95 p-6 text-foreground shadow-2xl backdrop-blur sm:p-8">
      <Toaster />
      <h3 className="text-xl font-extrabold">Request a callback</h3>
      <p className="mt-1 text-sm text-muted-foreground">Quick — under 30 seconds.</p>
      {done ? (
        <div className="mt-6 flex flex-col items-center gap-3 rounded-xl bg-primary/5 p-6 text-center">
          <CheckCircle2 className="h-8 w-8 text-primary" />
          <p className="font-bold">You're on our list.</p>
          <p className="text-sm text-muted-foreground">An advisor will reach out shortly.</p>
        </div>
      ) : (
        <form onSubmit={submit} className="mt-6 space-y-4">
          <div>
            <Label htmlFor="lname">Name</Label>
            <Input id="lname" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} placeholder="Your full name" className="mt-2" maxLength={100} />
          </div>
          <div>
            <Label htmlFor="lemail">Email</Label>
            <Input id="lemail" type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} placeholder="you@example.com" className="mt-2" maxLength={255} />
          </div>
          <div>
            <Label htmlFor="lphone">Phone</Label>
            <Input id="lphone" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} placeholder="082 000 0000" className="mt-2" maxLength={20} />
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full">Get Started</Button>
        </form>
      )}
    </div>
  );
}
