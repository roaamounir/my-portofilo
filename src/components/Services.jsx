import {
  FaPaintBrush,
  FaLaptopCode,
  FaMobileAlt,
  FaFigma,
  FaRocket,
  FaGithub,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Web Design",
      description:
        "Creating modern, user-friendly, and visually appealing website designs.",
      icon: FaPaintBrush,
    },
    {
      title: "Web Development",
      description:
        "Building responsive and dynamic websites using HTML, CSS, JavaScript, and React.",
      icon: FaLaptopCode,
    },
    {
      title: "Responsive Design",
      description:
        "Ensuring websites look great and function smoothly on all devices and screen sizes.",
      icon: FaMobileAlt,
    },
    {
      title: "UI/UX Prototyping",
      description:
        "Turning wireframes into functional and interactive user interfaces using Figma.",
      icon: FaFigma,
    },
    {
      title: "SEO Optimization",
      description:
        "Improving website performance and visibility with clean, optimized code.",
      icon: FaRocket,
    },
    {
      title: "Version Control",
      description:
        "Managing and collaborating on projects efficiently using Git and GitHub.",
      icon: FaGithub,
    },
  ];

  return (
    <section id="Services" className="w-full py-20 bg-[#333D29] px-20">
      <h2
        className="text-4xl font-bold text-center text-[#C2C5AA] mb-12"
        style={{ fontFamily: "Caveat, cursive" }}
      >
        Services.
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={index}
              className="group bg-[#414833] rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-500 cursor-pointer"
            >
              <div className="flex justify-center items-center mb-4">
                <div className="h-24 w-24 flex items-center justify-center rounded-full bg-[#C2C5AA] shadow-[0_0_0_10px_rgba(194,197,170,0.5)] transition-all duration-500 group-hover:bg-[#333D29]">
                  <IconComponent className="text-[#333D29] text-4xl transition-colors duration-500 group-hover:text-[#C2C5AA]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#C2C5AA] mb-2">
                {service.title}
              </h3>
              <p className="text-[#C2C5AA] text-sm">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
