import { useState } from "react";
import { Mail, MapPin, User } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Email functionality would be integrated with EmailJS");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  return (
    <section id="contact" className="py-24 bg-[#111]">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20">
        <h2 className="text-center text-4xl font-medium mb-16 pb-5 relative font-['Ubuntu'] before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-44 before:h-0.5 before:bg-white after:content-['get_in_touch'] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:text-xl after:text-[#dc143c] after:bg-[#111] after:px-1">
          Contact me
        </h2>
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div className="w-full md:w-[48%]">
            <div className="text-xl font-semibold mb-2">Get in Touch</div>
            <p className="text-justify mb-5">
              "Let's connect and build something amazing together! Drop a
              message, and let the coding conversation begin."
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <User className="text-[#dc143c] text-2xl" />
                <div>
                  <div className="font-medium">Name</div>
                  <div className="text-gray-400">Sahil Warkhade</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-[#dc143c] text-2xl" />
                <div>
                  <div className="font-medium">Address</div>
                  <div className="text-gray-400">Nagpur, Maharashtra</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-[#dc143c] text-2xl" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-400">sahilwarkhade111@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[48%]">
            <div className="text-xl font-semibold mb-4">Message me</div>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-1/2 h-11 border border-gray-300 rounded-md px-4 outline-none focus:border-gray-400"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-1/2 h-11 border border-gray-300 rounded-md px-4 outline-none focus:border-gray-400"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full h-11 border border-gray-300 rounded-md px-4 mb-4 outline-none focus:border-gray-400"
                required
              />
              <textarea
                placeholder="Message.."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full h-20 border border-gray-300 rounded-md px-4 py-2 resize-none outline-none focus:border-gray-400 mb-4"
                required
              />
              <button
                type="submit"
                className="bg-[#dc143c] text-white text-lg font-medium py-2.5 px-9 rounded-md border-2 border-[#dc143c] hover:text-[#dc143c] hover:bg-transparent transition-all"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
