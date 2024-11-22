import React, { useState } from 'react'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import axios from 'axios'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('Please fill in all fields');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('YOUR_BACKEND_API_URL/submit-contact', formData);
            setStatus('Message sent successfully!');
            // Reset form after successful submission
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('Failed to send message. Please try again.');
            console.error('Submission error:', error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <section id="contact" className="py-16 bg-gray-900  ">
            <div className="max-w-5xl mx-auto px-4 flex flex-col items-center my-10">
                <div className="mb-12 w-64 h-64">
                    <img
                        src="https://i.imgur.com/nsW47eb.jpg"
                        alt="Profile"
                        className="rounded-full border-4 border-blue-400 shadow-xl w-full h-full object-cover"
                    />
                </div>

                <div className="w-full max-w-lg text-center flex flex-col justify-center items-center ">
                    <h2 className="text-3xl font-bold mb-8 text-blue-400">Contact Me</h2>
                    <div className="w-60 space-y-6 flex flex-nowrap flex-col items-start ">
                        <div className="flex items-center justify-center space-x-4">
                            <Github className="text-blue-400" size={24} />
                            <a
                                href="https://github.com/keshavtiwari001"
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
                                href="https://www.linkedin.com/in/keshav-tiwari-5786b3224/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-400 transition-colors"
                            >
                                LinkedIn Profile
                            </a>
                        </div>

                        <div className="flex items-center justify-center space-x-4">
                            <Phone className="text-blue-400" size={24} />
                            <a
                                href="tel:+91-9602443271"
                                className="text-white hover:text-blue-400 transition-colors"
                            >
                                +91-960 244 3271
                            </a>
                        </div>


                        <div className="flex items-center justify-center space-x-4">
                            <Mail className="text-blue-400" size={24} />
                            <a
                                href="mailto:keshavtiwari.dev@example.com"
                                className="text-white hover:text-blue-400 transition-colors"
                            >
                                keshavtiwari.dev@gmail.com
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            {/* ---------------------------------------------------------------------- */}
            {/* Form */}
            {/* ---------------------------------------------------------------------- */}

            <div className="min-h-screen flex items-center justify-center p-4 my-10">
                <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 shadow-md rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center mb-6 text-slate-600">
                        Get into touch
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 ">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="text-blue-950 w-full px-3 py-2 border bg-slate-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="text-blue-950 w-full px-3 py-2 border bg-slate-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="text-blue-950 w-full px-3 py-2 border bg-slate-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your message..."
                            ></textarea>
                        </div>

                        {status && (
                            <div className={`p-3 rounded ${status.includes('successfully')
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                                }`}>
                                {status}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-slate-800 text-white py-2 rounded-md hover:bg-slate-900 transition-colors 
                       disabled:bg-blue-300 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact