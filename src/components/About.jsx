function About() {
  return (
    <section
      id="about"
      className="w-full py-35 bg-[#414833] flex flex-col md:flex-row items-center justify-center px-5"
    >
      <div className="flex-1 flex justify-center items-center">
        <img
          src={`${import.meta.env.BASE_URL}img3.jpg`}
          alt="Roaa Mounir"
          className="rounded-lg shadow-lg w-[336px] h-[336px] object-cover border p-4 border-[#333D29] transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center gap-11 pe-10">
        <h2
          className="text-4xl font-bold text-[#C2C5AA]"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          About Me
        </h2>

        <div className="space-y-6">
          <p
            className="text-lg text-[#C2C5AA]"
            style={{ fontFamily: "Roboto Slab, serif" }}
          >
            Hi! I'm Roaa Mounir, a passionate Front-End Developer. I specialize
            in creating modern, responsive, and user-friendly web applications.
          </p>

          <p
            className="text-lg text-[#C2C5AA]"
            style={{ fontFamily: "Roboto Slab, serif" }}
          >
            I’m skilled in HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript,
            React CSS, jQuery, and proficient with Figma, Git, and GitHub. I’m
            always eager to learn new technologies and deliver websites that are
            both functional and visually engaging.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
