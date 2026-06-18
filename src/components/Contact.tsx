import { type FormEvent, useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { Glass } from "./Glass";
import { sendContactInquiry } from "@/lib/api/contact.functions";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const location = String(formData.get("location") ?? "").trim();
    const scope = String(formData.get("scope") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      toast.error("Please add your name, email, and project details.");
      return;
    }

    try {
      setIsSubmitting(true);

      const payload = {
        name,
        email,
        phone,
        location,
        scope,
        message,
      };

      await sendContactInquiry({
        data: payload,
      });

      toast.success("Inquiry sent successfully. We'll be in touch soon.");
      form.reset();
    } catch (error) {
      const messageText =
        error instanceof Error ? error.message : "Unknown error";

      if (messageText.includes("MAIL_SERVICE_NOT_CONFIGURED")) {
        toast.error(
          "Inquiry sending is not configured yet. Add the backend mail credentials to enable this form.",
        );
        return;
      }

      console.error(error);
      toast.error("We couldn't send your inquiry right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <Glass
          variant="strong"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-5 sm:p-8 md:p-14 grid lg:grid-cols-12 gap-8 lg:gap-12 relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-primary/30 blur-[120px] pointer-events-none" />

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 relative">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent/60" />
              <span className="text-xs uppercase tracking-[0.3em] text-accent">
                Begin
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-[0.95] mb-8">
              Tell us about{" "}
              <span className="italic text-gradient">your land.</span>
            </h2>

            <p className="text-foreground/70 leading-relaxed mb-10">
              We accept a small number of new commissions each season. Share a
              few details and a partner will reach out within 48 hours to
              arrange a private consultation.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: MapPin,
                  label: "Company",
                  value: "SeasonsLandscapers",
                },
                {
                  icon: Phone,
                  label: "Direct",
                  value: "+91 821-7777927",
                  href: "tel:+918217777927",
                },
                {
                  icon: Mail,
                  label: "Inquiries",
                  value: "seasonslandscapersinfo@gmail.com",
                  href: "mailto:seasonslandscapersinfo@gmail.com",
                },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl glass grid place-items-center shrink-0">
                    <c.icon
                      className="w-4 h-4 text-accent"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-foreground/55">
                      {c.label}
                    </div>

                    {"href" in c ? (
                      <a
                        href={c.href}
                        className="break-all text-sm hover:text-accent transition-colors"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <div className="break-all text-sm">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Glass className="mt-10 p-6">
              <div className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
                Quick contact
              </div>

              <p className="text-sm leading-relaxed text-foreground/70">
                Call us directly or send your project details by email. We will
                get back to you with the next steps.
              </p>
            </Glass>

            <Glass className="mt-6 overflow-hidden p-2">
              <div className="relative h-64 overflow-hidden rounded-2xl">
                <iframe
                  title="Seasons Landscapers location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3897.7090628313763!2d76.6105628!3d12.3353587!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7b003b6adb23%3A0x893567e04285d5f5!2sSeasons%20Landscapers!5e0!3m2!1sen!2sin!4v1778851262830!5m2!1sen!2sin"
                  className="h-full w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="pointer-events-none absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
            </Glass>
          </div>

          {/* RIGHT COLUMN */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full"
          >
            {[
              {
                id: "name",
                label: "Your name",
                type: "text",
                span: "sm:col-span-1",
              },
              {
                id: "email",
                label: "Email",
                type: "email",
                span: "sm:col-span-1",
              },
              {
                id: "phone",
                label: "Phone",
                type: "tel",
                span: "sm:col-span-1",
              },
              {
                id: "location",
                label: "Project location",
                type: "text",
                span: "sm:col-span-1",
              },
            ].map((f) => (
              <div key={f.id} className={f.span}>
                <label
                  htmlFor={f.id}
                  className="text-[10px] uppercase tracking-[0.25em] text-foreground/55 block mb-2"
                >
                  {f.label}
                </label>

                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  required={f.id === "name" || f.id === "email"}
                  className="w-full min-w-0 glass rounded-2xl px-4 py-4 text-sm bg-white/5 border border-white/10 focus:border-accent/60 focus:outline-none focus:bg-white/8 transition-all"
                />
              </div>
            ))}

            <div className="sm:col-span-2">
              <label
                htmlFor="scope"
                className="text-[10px] uppercase tracking-[0.25em] text-foreground/55 block mb-2"
              >
                Scope of work
              </label>

              <select
                id="scope"
                name="scope"
                className="w-full min-w-0 glass rounded-2xl px-4 py-4 text-sm bg-white/5 border border-white/10 focus:border-accent/60 focus:outline-none"
              >
                {[
                  "Full estate design",
                  "Garden refresh",
                  "Outdoor living build",
                  "Maintenance only",
                  "Just exploring",
                ].map((o) => (
                  <option key={o} className="bg-[#1a2a22]">
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="text-[10px] uppercase tracking-[0.25em] text-foreground/55 block mb-2"
              >
                Tell us about your vision
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full min-w-0 glass rounded-2xl px-4 py-4 text-sm bg-white/5 border border-white/10 focus:border-accent/60 focus:outline-none resize-none"
              />
            </div>

            <div className="sm:col-span-2 flex items-center justify-between flex-wrap gap-4 pt-4">
              <p className="text-xs text-foreground/55 max-w-xs">
                Your inquiry is reviewed personally by a founding partner.
              </p>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex w-full sm:w-auto justify-center items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-medium hover:shadow-[0_0_50px_-5px_oklch(0.7_0.1_152)] transition-all"
              >
                {isSubmitting ? "Sending..." : "Send inquiry"}

                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>
            </div>
          </form>
        </Glass>
      </div>
    </section>
  );
}
