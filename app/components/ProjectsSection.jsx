import React from "react";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Omnifood Website",
    description: "Project 2 description",
    image: "/images/projects/omnifood.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Inifinity Scroll",
    description: "Project 3 description",
    image: "/images/projects/infinite-scroll.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Student Frontend Api",
    description: "Project 4 description",
    image: "/images/projects/student-frontend.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Recipe React App",
    description: "Project 5 description",
    image: "/images/projects/recipe-react.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
        My Projects
        </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
