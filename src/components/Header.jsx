function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header id="Header" className="w-full h-screen relative flex flex-col justify-center items-center">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/img2.jpg')",
          filter: "brightness(0.5) saturate(1.2)",
        }}
      ></div>

      <div className="relative bg-opacity-50 p-5 rounded flex flex-col items-center gap-4 text-center">
        <h1
          className="text-5xl text-[#C2C5AA] font-caveat"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          Hello <br />
          I'm Roaa
        </h1>

        <h2
          className="text-2xl text-[#C2C5AA]"
          style={{ fontFamily: "Roboto Slab, serif" }}
        >
          Front-End Developer
        </h2>

        <p
          className="text-lg text-[#C2C5AA]"
          style={{ fontFamily: "Roboto Slab, serif" }}
        >
          I create modern and responsive web applications.
        </p>

        <div className="flex gap-8 mt-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="text-lg text-[#C2C5AA] rounded-xl p-3 bg-[#414833] hover:bg-[#656D4A] cursor-pointer"
            style={{ fontFamily: "Roboto Slab, serif" }}
          >
            View My Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-lg text-[#C2C5AA] rounded-xl p-3 bg-[#414833] hover:bg-[#656D4A] cursor-pointer"
            style={{ fontFamily: "Roboto Slab, serif" }}
          >
            Contact Me
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
