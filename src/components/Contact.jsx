import React from 'react'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-gray-900">
            <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
                <div className="mb-12 w-64 h-64">
                    <img
                        src="https://i.imgur.com/nsW47eb.jpg"
                        alt="Profile"
                        className="rounded-full border-4 border-blue-400 shadow-xl w-full h-full object-cover"
                    />
                </div>

                <div className="w-full max-w-lg text-center">
                    <h2 className="text-3xl font-bold mb-8 text-blue-400">Contact Me</h2>
                    <div className="space-y-6">
                        <div className="flex items-center justify-center space-x-4">
                            <Mail className="text-blue-400" size={24} />
                            <a
                                href="mailto:keshavtiwari@example.com"
                                className="text-white hover:text-blue-400 transition-colors"
                            >
                                keshavtiwari@example.com
                            </a>
                        </div>
                        <div className="flex items-center justify-center space-x-4">
                            <Phone className="text-blue-400" size={24} />
                            <a
                                href="tel:+1234567890"
                                className="text-white hover:text-blue-400 transition-colors"
                            >
                                +123 456 7890
                            </a>
                        </div>
                        <div className="flex items-center justify-center space-x-4">
                            <Github className="text-blue-400" size={24} />
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-400 transition-colors"
                            >
                                GitHub Profile
                            </a>
                        </div>
                        <div className="flex items-center justify-center space-x-4">
                            <Linkedin className="text-blue-400" size={24} />
                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-400 transition-colors"
                            >
                                LinkedIn Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact