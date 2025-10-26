import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Projects() {
  const projects = [
    {
      title: "Weather App",
      description:
        "A dynamic weather application that fetches real-time weather data using JavaScript Fetch API. Users can search for any city and view current conditions and 3-day forecast.",
      tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Fetch API"],
      img: "/Weather.png",
      link: "https://roaamounir.github.io/Weather-App/",
    },
    {
      title: "University Website Design",
      description:
        "A responsive multi-page university website built with HTML5, CSS3, and Bootstrap.It includes sections for academic programs, admissions, news, events, and student services with a modern UI and mobile-friendly layout.",
      tech: ["HTML5", "CSS3", "Java Script", "Bootstrap"],
      img: "/img5.png",
      link: "https://roaamounir.github.io/University-Website-Design/",
    },
    {
      title: "DevFolio Portfolio",
      description:
        "A personal portfolio website template built with HTML, CSS, and Bootstrap. It includes sections like About, Portfolio, Services, Contact, and is designed with a professional responsive layout to showcase projects and skills.",
      tech: ["HTML5", "CSS3", "Bootstrap"],
      img: "/img8.png",
      link: "https://roaamounir.github.io/Devfolio-Portfolio/",
    },
    {
      title: "Daniels Portfolio ",
      description:
        "A personal portfolio website template built with HTML, CSS, and Bootstrap. It includes sections like About, Portfolio, Services, Contact, and is designed with a professional responsive layout to showcase projects and skills.",
      tech: ["HTML5", "CSS3", "Bootstrap"],
      img: "/img9.png",
      link: "https://roaamounir.github.io/Daniels-Portfolio/",
    },
    {
      title: "Start Framework",
      description:
        "A modern and responsive single-page website built with HTML, CSS,React, and Bootstrap. Inspired by Route Academy’s Start Framework design, it showcases sections like portfolio, about, and contact with a clean UI/UX.",
      tech: ["HTML5", "CSS3", "Bootstrap", "React"],
      img: "/img7.png",
      link: "https://clinquant-hamster-085575.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="w-full py-20 bg-[#333D29] px-5 md:px-20">
      <div className="container mx-auto relative">
        <h2
          className="text-4xl font-bold text-center text-[#C2C5AA] mb-12"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          My Projects.
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true }}
            loop={true}
            className="pb-10 custom-swiper"
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.title}>
                <div className="bg-[#414833] rounded-2xl shadow-lg overflow-hidden  transition-transform duration-500 flex flex-col h-full min-h-[480px] md:min-h-[500px] lg:min-h-[500px]">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />

                  <div className="p-5 flex flex-col gap-3 flex-grow">
                    <h3 className="text-2xl font-semibold text-[#C2C5AA]">
                      {project.title}
                    </h3>

                    <p className="text-[#C2C5AA] text-sm flex-grow">
                      {project.description}
                    </p>

                    <p className="text-sm text-[#A3B18A] font-medium">
                      {project.tech.join(" • ")}
                    </p>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C5B67B] hover:text-[#CCC098] font-medium mt-2"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-prev absolute left-[-50px] top-1/2 -translate-y-1/2 text-[#CCC098] cursor-pointer text-3xl z-10">
            ❮
          </div>
          <div className="custom-next absolute right-[-50px] top-1/2 -translate-y-1/2 text-[#CCC098] cursor-pointer text-3xl z-10">
            ❯
          </div>
        </div>
      </div>

      <style>
        {`
          .custom-swiper .swiper-pagination-bullet {
            background: #CCC098 !important;
            opacity: 0.5;
          }
          .custom-swiper .swiper-pagination-bullet-active {
            opacity: 1;
            background: #C5B67B !important;
          }
        `}
      </style>
    </section>
  );
}

export default Projects;
