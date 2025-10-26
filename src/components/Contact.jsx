import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatusMessage("");

    emailjs
      .sendForm(
        "Roaa-Mounir",
        "YRoaa-Mounir",
        form.current,
        "0LH9TecHyYpAT2GsI"
      )
      .then(
        (result) => {
          setStatusMessage("Message sent successfully!");
          form.current.reset();
          setSending(false);
          console.log("EmailJS result:", result);
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatusMessage("Oops! Something went wrong. Please try again.");
          setSending(false);
        }
      );
  };

  return (
    <section id="contact" className="relative py-20 bg-[#333D29]">
      <h2
        className="text-4xl font-bold text-center text-[#C2C5AA] mb-12"
        style={{ fontFamily: "Caveat, cursive" }}
      >
        Contact.
      </h2>

      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      <div className="relative container mx-auto px-8 md:px-20 z-10">
        <div className="bg-[#aa9c66de] flex flex-col lg:flex-row items-center p-8 rounded-xl shadow-lg">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h5 className="text-2xl font-semibold text-[#333D29] mb-6">
              Send Message Us
            </h5>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C2C5AA]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C2C5AA]"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C2C5AA]"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C2C5AA]"
                required
              ></textarea>

              <button
                type="submit"
                disabled={sending}
                className="bg-[#C2C5AA] text-[#333D29] py-3 rounded-md font-semibold hover:bg-[#333D29] hover:text-[#C2C5AA] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>

            {statusMessage && (
              <p className="mt-4 text-[#333D29] font-medium">{statusMessage}</p>
            )}
          </div>

          {/* Info Section */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h5 className="text-2xl font-semibold text-[#333D29] mb-6">
              Get in Touch
            </h5>
            <p className="text-[#333D29] mb-6">
              I’d love to hear from you! Send me a message and I’ll get back to
              you as soon as possible.
            </p>

            <ul className="mb-6 space-y-3 text-[#333D29]">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt /> <span>Cairo, Egypt</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMobileAlt /> <span>+201157392657</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope /> <span>roaamounir211@gmail.com</span>
              </li>
            </ul>

            <ul className="flex gap-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/roaamounir96/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-[#C2C5AA] text-[#333D29] hover:bg-[#333D29] hover:text-[#C2C5AA] transition-colors text-2xl"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/roaamounir/roaamounir"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-[#C2C5AA] text-[#333D29] hover:bg-[#333D29] hover:text-[#C2C5AA] transition-colors text-2xl"
                >
                  <FaGithub />
                </a>
              </li>

              <li>
                <a
                  href="mailto:roaamounir211@gmail.com"
                  aria-label="Email"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-[#C2C5AA] text-[#333D29] hover:bg-[#333D29] hover:text-[#C2C5AA] transition-colors text-2xl"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
