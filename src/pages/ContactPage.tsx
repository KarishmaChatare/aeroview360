import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { MessageCircle, Mail, Phone, MapPin, Send, Clock } from "lucide-react";

/* ─── Schema ──────────────────────────────────────────────────────────────*/
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Tell us more about your project"),
});
type FormData = z.infer<typeof schema>;

/* ─── Page header ────────────────────────────────────────────────────────*/
function PageHeader() {
  return (
    <section className="relative pt-40 pb-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(27,174,232,0.08)_0%,transparent_65%)] pointer-events-none" />
      <div className="container mx-auto px-5 md:px-8 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-5 block"
        >
          Get in Touch
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-[1.04]"
        >
          Ready to Map{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Your Next Project?
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          Tell us about your site and timeline. We'll have a detailed proposal
          ready within 24 hours.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── Contact details ────────────────────────────────────────────────────*/
const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 90224 34694", sub: "Mon – Sat, 9am – 7pm" },
  { icon: Mail, label: "Email", value: "aeroview360world@gmail.com", sub: "Response within 2 hours" },
  { icon: MapPin, label: "Location", value: "Pune, Maharashtra", sub: "India" },
  { icon: Clock, label: "Turnaround", value: "24–48 Hours", sub: "Proposal delivery" },
];

/* ─── Contact page body ──────────────────────────────────────────────────*/
function ContactBody() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" },
  });

  function onSubmit(_data: FormData) { }

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_80%,rgba(27,174,232,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">

          {/* ── Left sidebar ── */}
          <div className="lg:col-span-2 space-y-5">
            {/* Info cards */}
            <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5 font-semibold">{label}</p>
                    <p className="text-sm font-bold text-white">{value}</p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">{sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/919022434694"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold text-sm hover:bg-[#25D366]/15 hover:border-[#25D366]/45 transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </motion.a>

            {/* Quick note */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-primary/6 border border-primary/15 rounded-2xl p-5"
            >
              <p className="text-sm text-primary font-bold mb-1">📍 Based in Pune</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We operate across Maharashtra and can mobilise to any location
                in India within 48 hours for urgent surveys.
              </p>
            </motion.div>
          </div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 bg-card border border-border rounded-2xl p-8"
          >
            <h2 className="text-xl font-black text-white mb-1">Send Your Project Brief</h2>
            <p className="text-sm text-muted-foreground mb-7">We'll respond within 24 hours with a detailed proposal.</p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground text-[10px] uppercase tracking-wider font-bold">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field}
                          className="bg-background border-border text-white placeholder:text-muted-foreground/40 focus:border-primary/50 transition-colors h-11" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground text-[10px] uppercase tracking-wider font-bold">Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="+91 xxxxx xxxxx" {...field}
                          className="bg-background border-border text-white placeholder:text-muted-foreground/40 focus:border-primary/50 transition-colors h-11" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground text-[10px] uppercase tracking-wider font-bold">Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@company.com" {...field}
                        className="bg-background border-border text-white placeholder:text-muted-foreground/40 focus:border-primary/50 transition-colors h-11" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="service" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground text-[10px] uppercase tracking-wider font-bold">Service Required</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-background border-border text-white focus:border-primary/50 transition-colors h-11">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-card border-border text-white">
                        <SelectItem value="drone-survey">Drone Survey</SelectItem>
                        <SelectItem value="gis-mapping">GIS Mapping</SelectItem>
                        <SelectItem value="3d-modelling">3D Modelling</SelectItem>
                        <SelectItem value="construction-monitoring">Construction Monitoring</SelectItem>
                        <SelectItem value="land-survey">Land Survey</SelectItem>
                        <SelectItem value="infrastructure-mapping">Infrastructure Mapping</SelectItem>
                        <SelectItem value="other">Other / Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground text-[10px] uppercase tracking-wider font-bold">Project Details</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your site location, area, scope, and timeline..."
                        rows={5}
                        {...field}
                        className="bg-background border-border text-white placeholder:text-muted-foreground/40 focus:border-primary/50 resize-none transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-xl text-sm shadow-[0_0_20px_rgba(27,174,232,0.2)] hover:shadow-[0_0_32px_rgba(27,174,232,0.38)] transition-shadow duration-300"
                  >
                    Send Project Brief
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-2"
                    >
                      <Send className="h-4 w-4" />
                    </motion.span>
                  </Button>
                </motion.div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader />
      <ContactBody />
    </>
  );
}
