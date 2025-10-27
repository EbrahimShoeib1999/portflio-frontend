import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { toast } from "sonner";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔹 Updated to use Formspree endpoint
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xgvpovvz", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget as HTMLFormElement),
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error — please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ibrahimshoeib@gmail.com",
      href: "mailto:ibrahimshoeib@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+20 1271138683",
      href: "tel:+201271138683",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Egypt, New Damietta",
      href: "https://www.google.com/maps/place/New+Damietta,+Egypt",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-4 shadow-[0_0_10px_rgba(163,230,53,0.5)]"
          />
          <h2 className="mb-4 text-white text-3xl font-semibold">Get In Touch</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <motion.a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="p-6 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:border-primary/50 group">
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{ rotate: 5 }}
                          className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors group-hover:shadow-[0_0_20px_rgba(163,230,53,0.3)]"
                        >
                          <Icon className="text-primary" size={20} />
                        </motion.div>
                        <div>
                          <h4 className="mb-1 text-white">{item.title}</h4>
                          <p className="text-white/70 group-hover:text-white transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.a>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 hover:shadow-xl hover:shadow-primary/20 transition-shadow duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="mt-2 resize-none"
                  />
                </div>

                <div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="mr-2"
                          >
                            ⏳
                          </motion.div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </motion.div>
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
