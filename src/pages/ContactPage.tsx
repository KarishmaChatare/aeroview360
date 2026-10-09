import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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
import {
  MessageCircle, Mail, Phone, MapPin, Send, Clock,
  CheckCircle2, AlertCircle, Loader2, RotateCcw,
} from "lucide-react";
import { sendContactEmail } from "@/lib/emailjs";

/* ─── Schema ──────────────────────────────────────────────────────────────*/
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(10, "Enter a valid phone number (minimum 10 digits)"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please describe your project (minimum 10 characters)"),
});
type FormData = z.infer<typeof schema>;

const serviceLabels: Record<string, string> = {
  "drone-survey": "Drone Survey",
  "gis-mapping": "GIS Mapping",
  "3d-modelling": "3D Modelling",
  "construction-monitoring": "Construction Monitoring",
  "land-survey": "Land Survey",
  "infrastructure-mapping": "Infrastructure Mapping",
  "other": "Geospatial Services",
};

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

  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSimulated, setIsSimulated] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" },
  });

  async function onSubmit(data: FormData) {
    setSubmissionStatus("loading");
    setErrorMessage("");

    try {
      const result = await sendContactEmail(data);
      setSubmittedData(data);
      setIsSimulated(Boolean(result.simulated));
      setSubmissionStatus("success");
      form.reset();
    } catch (error: any) {
      setSubmissionStatus("error");
      setErrorMessage(
        error?.message || "Failed to submit request. Please try again or chat with us on WhatsApp."
      );
    }
  }

  function handleReset() {
    setSubmissionStatus("idle");
    setErrorMessage("");
    setSubmittedData(null);
    form.reset();
  }

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

          {/* ── Right: form or success state ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 bg-card border border-border rounded-2xl p-8 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {submissionStatus === "success" ? (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45 }}
                  className="py-6 text-center space-y-6"
                >
                  {/* Success Icon */}
                  <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-[#22C55E]/15 animate-ping opacity-50" />
                    <div className="relative w-20 h-20 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/40 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                      <CheckCircle2 className="w-10 h-10 text-[#22C55E]" />
                    </div>
                  </div>

                  {/* Heading & description */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#22C55E] block mb-2">
                      Brief Sent Successfully
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                      Thank You, {submittedData?.name}!
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto leading-relaxed">
                      We have received your project inquiry for{" "}
                      <span className="text-primary font-semibold">
                        {serviceLabels[submittedData?.service || ""] || "Geospatial Services"}
                      </span>
                      . Our team is analyzing your requirements and will deliver a proposal within 24 hours.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-background/80 border border-border/80 rounded-xl p-4 text-left max-w-md mx-auto text-xs space-y-2">
                    <div className="flex justify-between py-1 border-b border-border/40">
                      <span className="text-muted-foreground">Contact Email:</span>
                      <span className="text-white font-medium">{submittedData?.email}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border/40">
                      <span className="text-muted-foreground">Phone Number:</span>
                      <span className="text-white font-medium">{submittedData?.phone}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">Response Turnaround:</span>
                      <span className="text-primary font-semibold">24–48 Hours</span>
                    </div>
                  </div>

                  {/* Simulated notice if in dev mode without keys */}
                  {isSimulated && (
                    <div className="bg-primary/10 border border-primary/25 rounded-lg p-3 max-w-md mx-auto text-[11px] text-primary leading-relaxed">
                      ⚡ <strong>Testing mode:</strong> EmailJS configuration template is set up. Add your live Service & Template IDs in <code className="bg-background px-1 py-0.5 rounded text-white">.env</code> to deliver straight to your inbox.
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      className="w-full sm:w-auto h-11 px-6 rounded-xl border-border hover:border-primary/40 text-white hover:bg-card text-xs font-semibold gap-2"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Send Another Brief
                    </Button>
                    <a
                      href={`https://wa.me/919022434694?text=${encodeURIComponent(
                        `Hi Aeroview360, I just submitted a proposal request for ${
                          serviceLabels[submittedData?.service || ""] || "Geospatial Services"
                        }.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-block"
                    >
                      <Button className="w-full sm:w-auto h-11 px-6 rounded-xl bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold text-xs shadow-[0_0_20px_rgba(37,211,102,0.3)] gap-2">
                        <MessageCircle className="w-4 h-4" />
                        Chat on WhatsApp
                      </Button>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className="text-xl font-black text-white mb-1">Send Your Project Brief</h2>
                  <p className="text-sm text-muted-foreground mb-7">We'll respond within 24 hours with a detailed proposal.</p>

                  {/* Error banner if submission failed */}
                  {submissionStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-5 p-4 rounded-xl bg-destructive/10 border border-destructive/30 flex items-start gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <p className="font-bold text-destructive">Submission Failed</p>
                        <p className="text-muted-foreground mt-0.5 leading-relaxed">{errorMessage}</p>
                        <p className="text-muted-foreground mt-1">
                          You can also reach us directly at{" "}
                          <a href="mailto:aeroview360world@gmail.com" className="text-primary underline">
                            aeroview360world@gmail.com
                          </a>{" "}
                          or on WhatsApp.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField control={form.control} name="name" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-muted-foreground text-[10px] uppercase tracking-wider font-bold">Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your full name"
                                disabled={submissionStatus === "loading"}
                                {...field}
                                className="bg-background border-border text-white placeholder:text-muted-foreground/40 focus:border-primary/50 transition-colors h-11"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-muted-foreground text-[10px] uppercase tracking-wider font-bold">Phone</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="+91 xxxxx xxxxx"
                                disabled={submissionStatus === "loading"}
                                {...field}
                                className="bg-background border-border text-white placeholder:text-muted-foreground/40 focus:border-primary/50 transition-colors h-11"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground text-[10px] uppercase tracking-wider font-bold">Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="you@company.com"
                              disabled={submissionStatus === "loading"}
                              {...field}
                              className="bg-background border-border text-white placeholder:text-muted-foreground/40 focus:border-primary/50 transition-colors h-11"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="service" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground text-[10px] uppercase tracking-wider font-bold">Service Required</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            disabled={submissionStatus === "loading"}
                          >
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
                              disabled={submissionStatus === "loading"}
                              {...field}
                              className="bg-background border-border text-white placeholder:text-muted-foreground/40 focus:border-primary/50 resize-none transition-colors"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <motion.div whileHover={submissionStatus === "loading" ? {} : { scale: 1.01 }} whileTap={submissionStatus === "loading" ? {} : { scale: 0.99 }}>
                        <Button
                          type="submit"
                          size="lg"
                          disabled={submissionStatus === "loading"}
                          className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-xl text-sm shadow-[0_0_20px_rgba(27,174,232,0.2)] hover:shadow-[0_0_32px_rgba(27,174,232,0.38)] transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed"
                        >
                          {submissionStatus === "loading" ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin mr-2" />
                              Sending Project Brief...
                            </>
                          ) : (
                            <>
                              Send Project Brief
                              <motion.span
                                animate={{ x: [0, 3, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="ml-2"
                              >
                                <Send className="h-4 w-4" />
                              </motion.span>
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </Form>
                </motion.div>
              )}
            </AnimatePresence>
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
