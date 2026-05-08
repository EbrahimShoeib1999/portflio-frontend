import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MapPin, Phone, Send, Terminal } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";

const easing = [0.16, 1, 0.3, 1] as [number, number, number, number];

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);
      const response = await fetch("https://formspree.io/f/xgvpovvz", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (response.ok) {
        toast.success(t('contact.success'));
        reset();
      } else {
        toast.error(t('contact.error'));
      }
    } catch (error) {
      console.error(error);
      toast.error(t('contact.networkError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, title: "Email", value: "ibrahimshoeib@gmail.com", href: "mailto:ibrahimshoeib@gmail.com" },
    { icon: Phone, title: t('contact.phone'), value: "+20 1271138683", href: "tel:+201271138683" },
    { icon: MapPin, title: t('contact.location'), value: t('contact.locationValue'), href: "https://www.google.com/maps/place/New+Damietta,+Egypt" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easing } },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-card overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 start-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: easing }}
          className="text-center mb-16"
        >
          <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-muted border border-border flex items-center justify-center">
            <Terminal className="w-7 h-7 text-primary" />
          </div>
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="rounded-[1.5rem] bg-background border border-border p-5 group hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5">
                      <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-muted flex items-center justify-center text-muted-foreground group-hover:text-primary transition-all border border-border group-hover:border-primary/20">
                        <Icon size={22} />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-[10px] text-primary font-bold mb-1 tracking-widest uppercase">{item.title}</h4>
                        <p className="text-foreground font-semibold group-hover:text-primary transition-colors text-sm sm:text-base truncate">{item.value}</p>
                      </div>
                    </a>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRTL ? -20 : 20 }}
            transition={{ duration: 0.7, delay: 0.15, ease: easing }}
            className="lg:col-span-8"
          >
            <Card className="rounded-[2rem] border border-border bg-background/50 backdrop-blur-xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 end-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <Label htmlFor="name" className="text-foreground/70 font-semibold text-sm">{t('contact.name')}</Label>
                    <Input
                      id="name"
                      placeholder={t('contact.namePlaceholder')}
                      {...register("name")}
                      className={`bg-muted/50 border-border focus:border-primary/50 text-foreground placeholder:text-muted-foreground h-12 rounded-xl transition-all ${errors.name ? 'border-red-500/50' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="email" className="text-foreground/70 font-semibold text-sm">{t('contact.email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register("email")}
                      className={`bg-muted/50 border-border focus:border-primary/50 text-foreground placeholder:text-muted-foreground h-12 rounded-xl transition-all ${errors.email ? 'border-red-500/50' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2.5">
                  <Label htmlFor="message" className="text-foreground/70 font-semibold text-sm">{t('contact.message')}</Label>
                  <Textarea
                    id="message"
                    placeholder={t('contact.messagePlaceholder')}
                    rows={5}
                    {...register("message")}
                    className={`bg-muted/50 border-border focus:border-primary/50 text-foreground placeholder:text-muted-foreground rounded-xl resize-none transition-all ${errors.message ? 'border-red-500/50' : ''}`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/20 transition-all rounded-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('contact.transmitting') : t('contact.send')}
                  {!isSubmitting && <Send className={`${isRTL ? 'me-2 rotate-180' : 'ms-2'} h-4 w-4`} />}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
