"use client";
import React, { useState } from 'react';
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";


const projectsData = [
  {
    id: 1,
    title: "Cafe de altura",
    description: "Coffee Ecommerce shop",
    image: "/projects/Project_1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "Actors Api",
    description: "Sorting, Adding and Removing",
    image: "/projects/Actors.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "Countries Api",
    description: "",
    image: "/projects/Countries.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  }
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  )


  ;
  return (
    <>
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
      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project) =>
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />)}
      </div>
    </>
  )
}

export default ProjectsSection;