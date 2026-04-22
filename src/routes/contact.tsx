import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(20),
  message: z.string().trim().min(5, "Tell us a bit more").max(1000),
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SCD College — Speak to an Advisor" },
      { name: "description", content: "Get in touch with SCD College. Call 082 949 2552 or email info@scdcollege.co.za to enquire about training programmes." },
      { property: "og:title", content: "Contact SCD College" },
      { property: "og:description", content: "Talk to our admissions team about accredited training in South Africa." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    try {
      const list = JSON.parse(localStorage.getItem("scd_leads") || "[]");
      list.push({ ...result.data, source: "contact-form", at: new Date().toISOString() });
      localStorage.setItem("scd_leads", JSON.stringify(list));
    } catch {}
    setSent(true);
    toast.success("Thank you! We'll be in touch shortly.");
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Toaster />

      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="absolute inset-0 opacity-30 [background:var(--gradient-hero)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">Contact</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">Let's talk about your future.</h1>
          <p className="mt-4 max-w-2xl text-white/70">Our team typically responds within one business day.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold">Get in touch</h2>
            <p className="mt-2 text-muted-foreground">Reach out by phone, email, or use the form — whichever works best for you.</p>
            <div className="mt-8 space-y-5">
              <a href="tel:0829492552" className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition hover:border-primary">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Phone className="h-5 w-5" /></div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Phone</p>
                  <p className="mt-1 font-bold">082 949 2552</p>
                </div>
              </a>
              <a href="mailto:info@scdcollege.co.za" className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition hover:border-primary">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Mail className="h-5 w-5" /></div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</p>
                  <p className="mt-1 font-bold">info@scdcollege.co.za</p>
                </div>
              </a>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Location</p>
                  <p className="mt-1 font-bold">South Africa</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-12 text-center shadow-[var(--shadow-card)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary"><CheckCircle2 className="h-8 w-8" /></div>
                <h3 className="mt-4 text-2xl font-extrabold">Thank you!</h3>
                <p className="mt-2 max-w-md text-muted-foreground">Your message is on its way. A member of the SCD College admissions team will reach out shortly.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Dlamini" className="mt-2" maxLength={100} />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="082 000 0000" className="mt-2" maxLength={20} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="mt-2" maxLength={255} />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your training needs…" className="mt-2 min-h-32" maxLength={1000} />
                </div>
                <Button type="submit" variant="hero" size="xl" className="w-full">Send Enquiry</Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
}