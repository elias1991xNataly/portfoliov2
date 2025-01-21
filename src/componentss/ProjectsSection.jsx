"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

// Tags a incluir: Vue, Nuxt, Next, React, Angular, Astro, Docker,

const projectsData = [
  {
    id: 1,
    title: "Cafe de altura",
    description: "Coffee Ecommerce shop",
    image: "/projects/Project_1.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/elias1991xNataly/HighAltitudeCoffee",
    previewUrl: "https://cafedealturaeas.netlify.app",
    //React
  },
  {
    id: 2,
    title: "Actors Api",
    description: "Sorting, Adding and Removing",
    image: "/projects/Actors.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/elias1991xNataly/2oproyectoReacteas",
    previewUrl: "https://contactseas.netlify.app/",
    //React
  },
  {
    id: 3,
    title: "Countries Api",
    description: "",
    image: "/projects/Countries.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/elias1991xNataly/3erproyectoreact",
    previewUrl: "https://wiki-countrieseas.netlify.app/",
    //React
  },
  {
    id: 4,
    title: "1st Exercise Of Smart Contract",
    description:
      "Smart contract with the functionality of adding tasks and assigning difficulty to it",
    image: "/smartcontracts/1erejercicio.png",
    tag: ["All", "SCnt"],
    gitUrl: "https://codeshare.io/J7Q3lR",
    previewUrl: "",
    //React
  },
  {
    id: 5,
    title: "Natacion Muchos Peces",
    description:
      "Static WebPage for one of my clients. They are professionals with 11 years of experience in teaching swimming to kids in ages between 2 and 6. ",
    image: "/projects/NatacionMuchosPeces.png",
    tag: ["All", "NextJs"],
    gitUrl: "https://github.com/elias1991xNataly/muchospecesnextjs",
    previewUrl:
      "https://muchospecesnextjs-kd9527aof-elias-projects-4c76079e.vercel.app",
  },
  // NextJS
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const [isClient, setIsClient] = useState(false);
  console.log("🚀 ~ ProjectsSection ~ isClient:", isClient);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="text-white grid grid-cols-3 justify-center items-center gap-2 py-6">
        <ProjectTag
          name="All"
          isSelected={tag === "All"}
          onClick={handleTagChange}
        />
        <ProjectTag
          name="React"
          isSelected={tag === "React"}
          onClick={handleTagChange}
        />
        <ProjectTag
          name="NextJs"
          isSelected={tag === "NextJs"}
          onClick={handleTagChange}
        />
        <ProjectTag
          name="SCnt"
          isSelected={tag === "SCnt"}
          onClick={handleTagChange}
        />
        <ProjectTag
          name="VueJs"
          isSelected={tag === "VueJs"}
          onClick={handleTagChange}
        />
        <ProjectTag
          name="AngularJs"
          isSelected={tag === "AngularJs"}
          onClick={handleTagChange}
        />
        <ProjectTag
          name="Dapps"
          isSelected={tag === "Dapps"}
          onClick={handleTagChange}
        />
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            transition={{ duration: 0.3, delay: index * 0.4 }}
            ref={ref}
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
