import { useNavigate } from "react-router-dom";
import userImage from "../../public/images/sahilwarkhade--profile.png";
const AboutSection = () => {
  const navigate=useNavigate();
  return (
    <section id="about" className="py-24 overflow-x-hidden">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20 text-black">
        <h2 className="text-center text-4xl font-medium mb-12 pb-5 relative before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-44 before:h-0.5 before:bg-[#111] after:content-['who_i_am'] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:text-xl after:text-[#dc143c] after:bg-white after:px-1">
          About me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <div className="w-full md:w-[55%] md:border-r-2 md:border-[#080808] p-4 md:pr-7">
            <div className="text-2xl font-semibold mb-2">
              I'm Sahil and I'm a{" "}
              <span className="text-[#dc143c]">Programmer</span>
            </div>
            <p className="text-justify mb-5">
              I’m a passionate Software Developer focused on building reliable, scalable, and user-centric digital products. I enjoy solving complex problems through clean architecture, thoughtful design, and well-structured code. With experience across full-stack development, I love transforming ideas into impactful applications that feel intuitive and perform seamlessly.
              I continually explore modern technologies, design patterns, and best practices to improve the quality of my work. Whether collaborating in a fast-paced environment or owning projects end-to-end, I bring curiosity, discipline, and ...
            </p>
            {/* <a
              href="./CV/SahilWarkhade.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#dc143c] text-white text-xl font-medium py-2.5 px-8 rounded-md border-2 border-[#dc143c] hover:text-[#dc143c] hover:bg-transparent transition-all"
            >
              Download CV
            </a> */}
            <button className="inline-block bg-[#dc143c] text-white text-sm font-medium py-2 px-4 rounded-md border-2 border-[#dc143c] hover:text-[#dc143c] hover:bg-transparent transition-all duration-500 cursor-pointer" onClick={()=>navigate('/about')}>
              Explore more{" "}
            </button>
          </div>
          <div className="flex items-center justify-center p-6 md:mb-6">
            <div className="relative h-64 sm:h-80 group">
              {/* Border */}
              <div className="absolute top-4 left-4 w-full h-full border-2 border-cyan-950 rounded-md transition-transform duration-500 ease-in-out group-hover:translate-x-1.5 group-hover:translate-y-1.5"></div>

              {/* Image Container */}
              <div className="relative w-full h-full bg-black rounded-md overflow-hidden shadow-2xl shadow-black/60 transition-transform duration-500 ease-in-out group-hover:-translate-x-1.5 group-hover:-translate-y-1.5">
                <img
                  src={userImage}
                  alt="A portrait of the site author"
                  className="w-full h-full object-cover"
                />
                {/* Optional overlay */}
                <div className="absolute inset-0 md:bg-gray-400/40 group-hover:bg-transparent transition-transform duration-500 ease-in-out mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
