import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {  Github, Star } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { images } from "./images";
export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "Developed an admin dashboard for an e-commerce platform using React, TypeScript, and Redux Toolkit (RTK) on the frontend, and built the backend using Node.js, Express, and MongoDB.",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "TypeScript",
        "Redux Toolkit",
      ],
      category: "fullstack",
      img: images.ecommerce,
      github: "https://github.com/EbrahimShoeib1999",
      live: "https://example.com",
      featured: true,
      stars: 234,
    },
    {
      title: "Saifi Stable",
      description:
        "Saifi Stable is a horse stable management system based in Jordan. I was responsible for the backend development and for managing the development team. The project was built using Node.js and MongoDB.",
      tech: ["React", "TypeScript", "Socket.io", "Node.js", "MongoDB"],
      category: "fullstack",
      // img: images.saifi,
            github: "https://github.com/EbrahimShoeib1999",

      live: "https://example.com",
      featured: true,
      stars: 189,
    },
    {
      title: "Codex",
      description:
        "Built a website and admin dashboard for a client to showcase and promote their personal skills, using the MERN stack (MongoDB, Express, React, Node.js) along with Redux Toolkit (RTK) and TypeScript.",
      tech: ["Next.js", "Express", "PostgreSQL", "Chart.js", "Tailwind"],
      category: "frontend",
      img: images.codex,
      github: "https://github.com/EbrahimShoeib1999",

      live: "https://example.com",
      featured: false,
      stars: 156,
    },
    {
      title: "Faria ",
      description:"Faria is a real estate and blockchain-based web platform developed using React and JavaScript.My role focused on designing and developing the frontend interface, ensuring a responsive and user-friendly experience.",   
        tech: ["React", "OpenWeather API", "Mapbox", "Tailwind CSS"],
      category: "frontend",
      img: images.Faria,
      github: "https://github.com/EbrahimShoeib1999",
      live: "https://example.com",
      featured: false,
      stars: 92,
    },
    {
      title: "Bubbley Social Media App",
      description:
        "Bubbley is a social media application for divers, developed using React and Node.js.My role was focused on backend development, including API design, database management, and server-side logic",
      tech: ["React", "Node.js", "postgreSQL", "Express", "Socket.io","rtk"],
      category: "fullstack",
      img: images.Wadi,
      github: "https://github.com/EbrahimShoeib1999",
      live: "https://example.com",
      featured: true,
      stars: 278,
    },
    {
      title: "Work Space",
      description:
        "orkSpace is a web platform and admin dashboard for managing warehouses, buffet services, time tracking, and analytics.My role included backend development and contributing to parts of the frontend, using the MERN stack along with PostgreSQL for database management.",
      tech: ["React", "Socket.io", "Node.js", "Redis", "MongoDB"],
      category: "fullstack",
      github: "https://github.com/EbrahimShoeib1999",
      live: "https://example.com",
      featured: false,
      stars: 312,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
      ? projects.filter((p) => p.featured)
      : projects.filter((p) => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="max-w-7xl mx-auto">
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
          <h2 className="mb-4 text-white">Featured Projects</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in full-stack
            development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <Tabs value={filter} onValueChange={setFilter} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} layout>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className="flex flex-col  p-6 h-full hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group border-border hover:border-primary/50 relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10 flex-1">
                    <div className=" items-start justify-between mb-3">
                      <div>
                        <img src={project.img} />
                      </div>
                      <div >
                        <h1 className="text-primary">{project.title}</h1>
                      </div>

                      {project.featured && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-primary/20 text-primary border-primary/30 shadow-[0_0_10px_rgba(163,230,53,0.3)]"
                          >
                            <Star className="w-3 h-3 mr-1 fill-primary" />
                            Featured
                          </Badge>
                        </motion.div>
                      )}
                    </div>

                    <p className="text-white/70 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs text-white/80 border-white/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-primary mb-4">
                      <Star className="w-4 h-4" />
                      <span className="text-xs">{project.stars} stars</span>
                    </div>
                  </div>

                  <div className="relative z-10 flex gap-3 mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group-hover:border-primary/50"
                      asChild
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </motion.a>
                    </Button>
                    {/* <Button size="sm" className="flex-1 shadow-[0_0_15px_rgba(163,230,53,0.3)]" asChild>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live
                      </motion.a>
                    </Button> */}
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}