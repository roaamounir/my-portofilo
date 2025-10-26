import React from "react";

const SKILLS = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "Angular",
  "Bootstrap",
  "Tailwind CSS",
  "MUI",
  "Sass",
  "jQuery",
  "Git",
  "Fundamentals",
];

function SkillBar({ name }) {
  return (
    <div
      className="group relative flex flex-col gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5B67B] transition-transform duration-300 hover:scale-105"
      tabIndex={0}
      aria-label={name}
    >
      <div className="flex items-center gap-3">
        <span className="text-[#C2C5AA] font-semibold text-lg group-hover:text-[#C5B67B] transition-colors duration-300">
          {name}
        </span>
        <span
          className="ml-2 w-3 h-3 rounded-full bg-[#C5B67B] opacity-0 group-hover:opacity-100 group-focus:opacity-100 animate-pulse transition-opacity duration-500"
          aria-hidden="true"
        ></span>
      </div>
      <div className="w-full h-1 bg-[#1E232E] rounded overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-[#C5B67B] to-[#FFD700] animate-[pulse_2s_infinite]"></div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-20 bg-[#414833] px-4 md:px-10"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="skills-heading"
          className="text-4xl font-bold text-center text-white mb-12"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {SKILLS.map((name, idx) => (
            <SkillBar key={name} name={name} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
