import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4 flex justify-center">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        {/* <p className="text-gray-600 mb-4">{project.description}</p> */}
        <div className="flex flex-wrap gap-2">
          {/* {project.technologies.map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {tech}
            </span>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

