import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Building2, Laptop, Wrench, MonitorSmartphone, Globe, Users2, ArrowRight, CheckCircle2 } from "lucide-react";
import corporateImg from "@/assets/corporate.jpg";
import itImg from "@/assets/it-training.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Training Services — Corporate & Professional Development | SCD College" },
      { name: "description", content: "SETA-accredited corporate training and professional development. IT support, end-user computing, technical support — on-site, online or hybrid." },
      { property: "og:title", content: "Training Services | SCD College" },
      { property: "og:description", content: "Accredited corporate training and IT skills development in South Africa." },
    ],
  }),
  component: ServicesPage,
});

const corporate = [
  { icon: Building2, t: "On-site Training", d: "We bring our facilitators to your workplace." },
  { icon: Globe, t: "Online Learning", d: "Flexible virtual classrooms for distributed teams." },
  { icon: Users2, t: "Hybrid Programmes", d: "The best of both — blended for impact." },
];

const dev = [
  { icon: Wrench, t: "IT Support Training", d: "Hands-on technical support fundamentals through advanced troubleshooting." },
  { icon: Laptop, t: "End User Computing", d: "Master the digital skills every modern workplace expects." },
  { icon: MonitorSmartphone, t: "Technical Support", d: "FETC NQF 4 — a career foundation in technical support services." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="absolute inset-0 opacity-30 [background:var(--gradient-hero)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">Services</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">Training built for <span className="text-primary">real-world</span> outcomes.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">From individual learners to enterprise teams — accredited programmes that deliver measurable results.</p>
        </div>
      </section>

      {/* Corporate */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img src={corporateImg} alt="Corporate training session" loading="lazy" width={1280} height={896} className="rounded-2xl shadow-[var(--shadow-card)]" />
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">For Business</span>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Corporate Training</h2>
            <p className="mt-4 text-muted-foreground">SETA-accredited training programmes that upskill your workforce, satisfy B-BBEE skills development requirements, and drive performance.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {corporate.map((c) => (
                <div key={c.t} className="rounded-xl border border-border bg-card p-4">
                  <c.icon className="h-5 w-5 text-primary" />
                  <p className="mt-2 text-sm font-bold">{c.t}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{c.d}</p>
                </div>
              ))}
            </div>
            <Button asChild variant="hero" size="lg" className="mt-8"><Link to="/contact">Get a Quote <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="lg:order-2">
              <img src={itImg} alt="IT support technician at work" loading="lazy" width={1280} height={896} className="rounded-2xl shadow-[var(--shadow-card)]" />
            </div>
            <div className="lg:order-1">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">For Individuals</span>
              <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Professional Development</h2>
              <p className="mt-4 text-muted-foreground">Career-focused qualifications that open doors. Whether you're starting out or stepping up, our programmes meet you where you are.</p>
              <div className="mt-6 space-y-3">
                {dev.map((d) => (
                  <div key={d.t} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"><d.icon className="h-6 w-6" /></div>
                    <div>
                      <p className="font-bold">{d.t}</p>
                      <p className="text-sm text-muted-foreground">{d.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild variant="hero" size="lg" className="mt-8"><Link to="/contact">Book Training <ArrowRight className="h-4 w-4" /></Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Why SCD College</span>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">A partner you can trust.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {["MICT SETA Accredited", "Industry-Aligned Curriculum", "Expert Facilitators", "Flexible Delivery"].map((f) => (
            <div key={f} className="rounded-xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]">
              <CheckCircle2 className="mx-auto h-8 w-8 text-primary" />
              <p className="mt-3 font-bold">{f}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
}