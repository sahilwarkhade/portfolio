import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      console.log("Form submitted:", formData);

      const params1 = {
        ...formData,
        subject: `New message from ${formData.name} via your portfolio`,
        user_subject: formData.subject,
      };

      const params2 = {
        ...formData,
        subject: `Thanks for reaching out, ${formData.name} 👋`,
      };

      try {
        await Promise.all([
          emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_TO_ID,
            params1,
            import.meta.env.VITE_PUBLIC_KEY
          ),
          emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_FROM_ID,
            params2,
            import.meta.env.VITE_PUBLIC_KEY
          ),
        ]);
        setSubmitSuccess(true);
      } catch (error) {
        alert("Sorry, not able to send email");
      } finally {
        setIsSubmitting(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block border border-white/20 px-4 py-2 mb-6">
            <span className="text-sm tracking-wider">GET IN TOUCH</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Let's Work
            <span className="block text-gray-500">Together</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Have a project in mind or just want to say hello? Feel free to reach
            out. I'm always open to discussing new projects, creative ideas, or
            opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-1 space-y-8">
            <div className="border border-white/10 p-6 hover:border-white/30 transition-colors">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1 text-white" />
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Email</h3>
                  <a
                    href="mailto:sahilwarkhade@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    sahilwarkhade@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="border border-white/10 p-6 hover:border-white/30 transition-colors">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1 text-white" />
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Phone</h3>
                  <a
                    href="tel:+918766867953"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +91-8766867953
                  </a>
                </div>
              </div>
            </div>

            <div className="border border-white/10 p-6 hover:border-white/30 transition-colors">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1 text-white" />
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Location</h3>
                  <p className="text-gray-400">
                    Amravati, Maharashtra
                    <br />
                    India, 444706
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-transparent border ${
                      errors.name ? "border-red-500" : "border-white/20"
                    } px-4 py-3 focus:outline-none focus:border-white transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-transparent border ${
                      errors.email ? "border-red-500" : "border-white/20"
                    } px-4 py-3 focus:outline-none focus:border-white transition-colors`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-transparent border ${
                    errors.subject ? "border-red-500" : "border-white/20"
                  } px-4 py-3 focus:outline-none focus:border-white transition-colors`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={`w-full bg-transparent border ${
                    errors.message ? "border-red-500" : "border-white/20"
                  } px-4 py-3 focus:outline-none focus:border-white transition-colors resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {submitSuccess && (
                <div className="bg-green-500/10 border border-green-500 px-4 py-3 text-green-500">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative border border-white px-8 py-4 overflow-hidden hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative flex items-center gap-2 font-medium">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
