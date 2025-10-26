function Skills() {
  const skills = [
    { name: "HTML5", level: "100%" },
    { name: "CSS3", level: "100%" },
    { name: "JavaScript", level: "90%" },
    { name: "React", level: "80%" },
    { name: "Bootstrap", level: "95%" },
    { name: "TailWindCss", level: "90%" },
    { name: "jQuery", level: "80%" },
    { name: "Git", level: "80%" },
  ];

  return (
    <section id="skills" className="w-full py-20 bg-[#414833] px-30">
      <div className="container mx-auto">
        <h2
          className="text-4xl font-bold text-center text-white mb-4 relative pb-10"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          My Skills.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skill, index) => ( 
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-[#C2C5AA] font-medium">{skill.name}</span>
                <span className="text-[#C2C5AA] font-medium">
                  {skill.level}
                </span>
              </div>

              <div className="w-full bg-[#1E232E] h-2 rounded">
                <div
                  className="h-2 bg-[#C5B67B] rounded"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
