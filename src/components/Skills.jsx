import React from 'react'

const Skills = () => {
    const skillsList = [
        // { name: 'HTML', level: 'Expert' },
        // { name: 'CSS', level: 'Expert' },
        // { name: 'JavaScript', level: 'Advanced' },
        // { name: 'React', level: 'Intermediate' },
        // { name: 'Tailwind CSS', level: 'Advanced' },
        // { name: 'Bootstrap', level: 'Advanced' },
        // { name: 'Node.js', level: 'Intermediate' },
        // { name: 'Express.js', level: 'Advanced' },
        // { name: 'MongoDB', level: 'Intermediate' },
        // { name: 'SQL', level: 'Basics' }
        { name: 'Git / Github' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
        { name: 'React' },
        { name: 'Tailwind CSS' },
        { name: 'Bootstrap' },
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'MongoDB' },
        { name: 'SQL ( Basics )', level: 'Basics' }
    ];

    return (
        <section id="skills" className="pt-24 pb-32" >
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">My Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 ">
                    {skillsList.map((skill, index) => (
                        <div
                            key={index}
                            className="cursor-pointer bg-gray-800 p-4 rounded-lg text-center hover:scale-105 transition-transform"
                        >
                            <div className="text-blue-400 text-xl font-semibold mb-2">{skill.name}</div>
                            {/* <div className="text-gray-400">{skill.level}</div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills