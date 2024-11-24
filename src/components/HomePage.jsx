import React from 'react'
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
// import Projects from './Projects.jsx';
import Projects from './projects_/Projects'
import Skills from './Skills';
import { Link } from 'react-router-dom'
import Footer from './Footer';

const HomePage = () => {

    //  download cv func ->

    const handleDownload = () => {
        const fileUrl = "https://drive.google.com/file/d/1raquVajpFbrYWRB3s40J_uUpbLqZqTt_/view?usp=sharing"; // Replace with your file URL
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "https://drive.google.com/file/d/1raquVajpFbrYWRB3s40J_uUpbLqZqTt_/view?usp=sharing"; // Optional: set the file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }



    return (
        <>
            {/* Home Section */}
            <section id="home" className="min-h-screen flex items-center justify-center p-8">
                <div className="max-w-5xl mx-auto flex items-center space-x-12">
                    <div className="w-1/3">
                        <img
                            src="https://i.imgur.com/nsW47eb.jpg"
                            alt="Profile"
                            className="rounded-full border-4 border-blue-400 shadow-xl"
                        />
                    </div>
                    <div className="w-2/3">
                        <h1 className="text-4xl font-bold mb-4 text-blue-400">Hello, I'm Keshav Tiwari</h1>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            A passionate MERN stack developer with a love for building innovative and scalable web applications.
                            i'm fresher, I specialize in creating efficient, responsive, and user-friendly solutions
                            that solve real-world problems. My expertise lies in full-stack development, focusing on React,
                            Node.js, and MongoDB technologies.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                to="#"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
                                onClick={handleDownload}
                            >
                                Download CV
                            </Link>
                            <Link
                                to="contact"
                                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg transition"
                            >
                                Contact Me
                            </Link>
                        </div>
                        <div className="mt-8 flex space-x-4">
                            <a href="https://github.com/keshavtiwari001" className="hover:text-blue-400"><Github size={24} /></a>
                            <a href="https://www.linkedin.com/in/keshav-tiwari-5786b3224/" className="hover:text-blue-400"><Linkedin size={24} /></a>
                            <a href="mailto:keshavtiwari.dev@gmail.com" className="hover:text-blue-400"><Mail size={24} /></a>
                        </div>
                    </div>
                </div>
            </section>

            <Projects />
            <Skills />
        </>
    )
}

export default HomePage