"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Cafe de altura",
    description: "Coffee Ecommerce shop",
    image: "/projects/Project_1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/elias1991xNataly/HighAltitudeCoffee",
    previewUrl: "https://cafedealturaeas.netlify.app"
  },
  {
    id: 2,
    title: "Actors Api",
    description: "Sorting, Adding and Removing",
    image: "/projects/Actors.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/elias1991xNataly/2oproyectoReacteas",
    previewUrl: "https://contactseas.netlify.app/"
  },
  {
    id: 3,
    title: "Countries Api",
    description: "",
    image: "/projects/Countries.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/elias1991xNataly/3erproyectoreact",
    previewUrl: "https://wiki-countrieseas.netlify.app/"
  },
  {
    id: 4,
    title: "1st Exercise Of Smart Contract",
    description: "Smart contract with the functionality of adding tasks and assigning difficulty to it",
    image: "/smartcontracts/1erejercicio.png",
    tag: ["All", "SmartContracts"],
    gitUrl: "https://codeshare.io/J7Q3lR",
    previewUrl: ""

  }
  ,
  {
    id: 5,
    title: "Natacion Muchos Peces",
    description: "Static WebPage for one of my clients. They are professionals with 11 years of experience in teaching swimming to kids in ages between 2 and 6. ",
    image: "/projects/NatacionMuchosPeces.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/elias1991xNataly/muchospecesnextjs",
    previewUrl: "https://muchospecesnextjs-kd9527aof-elias-projects-4c76079e.vercel.app"
  }
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

    ;
  return (
    <section>
      <h2 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag
          name="All"
          isSelected={tag === "All"}
          onClick={handleTagChange}
        />
        <ProjectTag
          name="Web"
          isSelected={tag === "Web"}
          onClick={handleTagChange}
        />
        <ProjectTag
          name="SmartContracts"
          isSelected={tag === "SmartContracts"}
          onClick={handleTagChange}
        />
      </div>
      <ul className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) =>
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
        )}
      </ul>
    </section>
  )
}

export default ProjectsSection;