import { useNavigate } from "react-router-dom";
import userImage from "../../public/images/sahilwarkhade--profile.webp";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section
      id="home"
      className="mx-auto relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black z-10" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      <div className="container max-w-[1300px] mx-auto pt-24 md:pt-0 px-6 z-20 ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm tracking-widest text-gray-400 uppercase">
                Software Developer
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm
              <span className="block bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Sahil Warkhade
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Passionate developer crafting elegant solutions to complex
              problems. Specializing in modern technologies and always eager to
              learn.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition-all transform hover:scale-105 cursor-pointer" onClick={()=>navigate('/projects')}>
                View All Projects
              </button>
              <button className="px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-all transform hover:scale-105 cursor-pointer" onClick={()=>navigate('/contact')}>
                Contact Me
              </button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-white to-gray-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white">
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-6xl">
                <img src={userImage} alt="hero-image" fetchPriority="high"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
