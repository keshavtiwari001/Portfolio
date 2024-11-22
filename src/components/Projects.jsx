import React from 'react'
import project from './Projects.json'
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Projects = () => {
    return (
        <>
            {/* Projects Section */}
            <section id="projects" className="bg-gray-800 py-16">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-8 text-blue-400 text-center">My Projects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.map((project, index) => (
                            <div
                                key={index}
                                className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition-transform"
                            >
                                <h3 className="text-xl font-bold mb-2 text-blue-300">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map(tech => (
                                        <span
                                            key={tech}
                                            className="bg-gray-700 text-xs px-2 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.githubLink}
                                    className="text-blue-400 hover:underline flex items-center"
                                >
                                    <Github size={16} className="mr-2" /> View Project
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects