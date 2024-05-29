import React from 'react';
import ProjectCard from "./ProjectCard";


const projectsData = [
  {
    id: 1,
    title: "Cafe de altura",
    description: "Coffee Ecommerce shop",
    image: "/projects/Project_1.png",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id: 2,
    title: "Actors Api",
    description: "Sorting, Adding and Removing",
    image: "/projects/Actors.png",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id: 3,
    title: "Countries Api",
    description: "",
    image: "/projects/Countries.png",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  }
]

const ProjectsSection = () => {
  return (
    <>
      <h2 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <button className='rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer'>All</button>
        <button className='rounded-full border-2 border-blue-500 hover:border-blue-300 px-6 py-3 text-xl cursor-pointer'>Web</button>
      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectsData.map((project) => 
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