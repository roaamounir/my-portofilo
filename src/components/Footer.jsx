import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#333D29] py-10 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[#C2C5AA] text-sm text-center md:text-left">
          © {new Date().getFullYear()} Roaa Mounir. All Rights Reserved.
        </p>

        <div className="flex gap-6 justify-center">
          <a
            href="https://www.linkedin.com/in/roaamounir96/"
            target="_blank"
            rel="noopener noreferrer"
            className="group h-12 w-12 flex items-center justify-center rounded-full bg-[#C2C5AA] shadow-[0_0_0_6px_rgba(194,197,170,0.4)] transition-all duration-500 hover:bg-[#333D29]"
          >
            <FaLinkedinIn className="text-[#333D29] text-xl transition-colors duration-500 group-hover:text-[#C2C5AA]" />
          </a>

          <a
            href="https://github.com/roaamounir"
            target="_blank"
            rel="noopener noreferrer"
            className="group h-12 w-12 flex items-center justify-center rounded-full bg-[#C2C5AA] shadow-[0_0_0_6px_rgba(194,197,170,0.4)] transition-all duration-500 hover:bg-[#333D29]"
          >
            <FaGithub className="text-[#333D29] text-xl transition-colors duration-500 group-hover:text-[#C2C5AA]" />
          </a>

          <a
            href="mailto:roaamounir211@gmail.com"
            className="group h-12 w-12 flex items-center justify-center rounded-full bg-[#C2C5AA] shadow-[0_0_0_6px_rgba(194,197,170,0.4)] transition-all duration-500 hover:bg-[#333D29]"
          >
            <FaEnvelope className="text-[#333D29] text-xl transition-colors duration-500 group-hover:text-[#C2C5AA]" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
