import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../Projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 my-10 ">
      <Link to="/projects" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to Projects</Link>
      <div className="bg-slate-800 rounded-lg shadow-md overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-600 mb-6">{project.description}</p>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Technologies Used:</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">
              View on GitHub
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

