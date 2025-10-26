import { Github, Linkedin, Mail, ArrowDown, Download, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import img from "../assets/ibrahim.jpg"
export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/EbrahimShoeib1999', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ibrahim-shoeib-9b1339246', label: 'LinkedIn' },
    { icon: Mail, href: 'https://mail.google.com/mail/u/1', label: 'Email' },
    { icon: Phone, href: 'https://wa.me/201271138683', label: 'WhatsApp' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
         <motion.div
  whileHover={{ scale: 1.08, rotate: 2 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="w-32 h-32 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-primary via-chart-2 to-chart-3 shadow-[0_0_30px_rgba(163,230,53,0.3)]"
>
  <div className="w-full h-full rounded-full overflow-hidden">
    <motion.img
      src={img}
      alt="Ibrahim Shoeib"
      className="w-full h-full object-cover rounded-full"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    />
  </div>
</motion.div>


          <motion.div variants={itemVariants}>
            <h1 className="mb-4 text-white drop-shadow-[0_0_40px_rgba(163,230,53,0.3)]">
              Eng  : Ibrahim Shoeib
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4 shadow-[0_0_15px_rgba(163,230,53,0.2)]">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
              <span className="text-primary">Available for freelance work</span>
            </div>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-primary mb-6 drop-shadow-[0_0_20px_rgba(163,230,53,0.5)]">
            MERN Stack Specialist
          </motion.h2>

          <motion.p variants={itemVariants} className="text-white/80 max-w-2xl mx-auto mb-8">
          I ’m Ibrahim Shoeib, a passionate Web Developer with over 2 years of experience specializing in the MERN stack.
I build scalable, high-performance web applications using TypeScript, PostgreSQL, Sequelize, MongoDB, Mongoose, Redux Toolkit, Node.js, and Express.

In addition to my development work, I have led a full programming team and managed multiple projects as a Team Leader and Project Manager, ensuring efficient workflow, clean architecture, and on-time delivery.

As a freelancer, I’m always eager to learn new technologies and deliver innovative, user-focused digital
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <Button
            size="lg"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            asChild
          >
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              View Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </motion.button>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            asChild
          >
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Contact Me
            </motion.button>
          </Button>
          <Button variant="outline" size="lg" asChild>
  <motion.a
    href="/Ibrahim_Shoeib_CV.pdf"
    download="Ibrahim_Shoeib_CV.pdf"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Download className="mr-2 h-4 w-4" />
    Resume
  </motion.a>
</Button>

{/* <motion.a
  href="/Ibrahim_Shoeib_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Download className="mr-2 h-4 w-4" />
  View Resume
</motion.a> */}

        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 flex items-center justify-center transition-all group"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <Icon size={20} className="text-white/60 group-hover:text-primary transition-colors" />
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
