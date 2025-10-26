import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Header");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (window.scrollY === 0) {
        setActive("Header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.getAttribute("id"));
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#Header", id: "Header" },
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Services", href: "#Services", id: "Services" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      style={{ backgroundColor: "#333D29" }}
      className={`shadow-md fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "p-3" : "p-5"
      }`}
    >
      <div className="flex justify-between items-center">
        <div
          style={{ color: "#C2C5AA", fontFamily: "Caveat, cursive" }}
          className="ps-8.5 text-5xl"
        >
          Roaa.
        </div>

        <ul
          className="hidden md:flex gap-6 pe-8.5 text-xl"
          style={{ color: "#C2C5AA", fontFamily: "Roboto Slab, serif" }}
        >
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              <a
                href={link.href}
                onClick={() => setActive(link.id)}
                className={`transition-colors duration-200 ${
                  active === link.id ? "text-white" : "hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#C2C5AA] transition-all duration-500 origin-left ${
                    active === link.id
                      ? "w-full scale-x-100"
                      : "w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden text-3xl">
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: "#C2C5AA" }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul
          className="flex flex-col gap-4 mt-4 text-xl w-full items-center md:hidden"
          style={{ color: "#C2C5AA", fontFamily: "Roboto Slab, serif" }}
        >
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              <a
                href={link.href}
                onClick={() => {
                  setActive(link.id);
                  setIsOpen(false);
                }}
                className={`transition-colors duration-200 ${
                  active === link.id ? "text-white" : "hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#C2C5AA] transition-all duration-500 origin-left ${
                    active === link.id
                      ? "w-full scale-x-100"
                      : "w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
