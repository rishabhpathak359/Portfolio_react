import React from 'react';

const Skills = () => {
    return (
        <div id='skills' className="w-full text-white text-4xl mt-11 px-4">
            <div className="max-w-screen-xl relative flex flex-col items-center mx-auto">
                <h2 className="text-3xl font-semibold pb-8">Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* Skill items */}
                    <div className="flex items-center justify-center p-4 bg-purple-500 rounded-lg bg-opacity-50 m-8 ">
                        <img className='w-28' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" height="20" alt="Java logo" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-purple-500 rounded-lg bg-opacity-50 m-8">
                        <img className='w-28' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" height="20" alt="C++ logo" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-purple-500 rounded-lg bg-opacity-50 m-8">
                        <img className='w-28' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="20" alt="HTML5 logo" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-purple-500 rounded-lg bg-opacity-50 m-8">
                        <img className='w-28' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="20" alt="CSS3 logo" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-purple-500 rounded-lg bg-opacity-50 m-8">
                        <img className='w-28' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" height="20" alt="Tailwind CSS logo" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-purple-500 rounded-lg bg-opacity-50 m-8">
                        <img className='w-28' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="20" alt="JavaScript logo" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-purple-500 rounded-lg bg-opacity-50 m-8">
                        <img className='w-28' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="20" alt="Node.js logo" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-purple-500 rounded-lg bg-opacity-50 m-8">
                        <img className='w-28' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="20" alt="NPM logo" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-purple-500 rounded-lg bg-opacity-50 m-8">
                        <img className='w-28' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="20" alt="React logo" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-purple-500 rounded-lg bg-opacity-50 m-8">
                        <img className='w-28' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" height="20" alt="Babel logo" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-purple-500 rounded-lg bg-opacity-50 m-8">
                        <img className='w-28' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="20" alt="Git logo" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-purple-500 rounded-lg bg-opacity-50 m-8">
                        <img className='w-28' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" height="20" alt="Jest logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
