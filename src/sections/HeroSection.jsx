// import { Linkedin, Twitter, Github } from "lucide-react";

// const HeroSection = () => {
//   const projectData = [
//     {
//       id: 1,
//       thumbnail:
//         "https://via.placeholder.com/800x400/dc143c/ffffff?text=CompileCode",
//       title: "CompileCode - A Collaborative Code Editor",
//       github_repo_link: "https://github.com/us/compilecode",
//       deployed_link: "https://compilecode.vercel.app",
//       description:
//         "CompileCode is a collaborative, real-time code editor designed to enhance the way developers work together on coding projects. It provides a platform where multiple users can simultaneously edit, compile, and debug code in a seamless, shared environment.",
//       tech_stack: [
//         "React.js",
//         "Node.js",
//         "Express.js",
//         "Socket.io",
//         "Tailwind CSS",
//         "JudgeO",
//         "CodeMirror",
//       ],
//       key_features: [
//         "Support for multiple programming languages",
//         "Real-time code execution and output display",
//         "Syntax highlighting and code editor with Code Mirror Editor",
//         "Secure code execution",
//         "Download code in one click",
//       ],
//       purpose:
//         "To provide developers and learners a seamless online code execution platform for practice and testing.",
//     },
//     {
//       id: 2,
//       thumbnail:
//         "https://via.placeholder.com/800x400/dc143c/ffffff?text=Epicentra",
//       title: "Epicentra - An Epic Blog Website",
//       github_repo_link: "https://github.com/username/epicentra",
//       deployed_link: "https://epicentra.vercel.app",
//       description:
//         "Epicentra is a full-featured blog platform designed to foster a vibrant community of writers and readers. It allows users to explore diverse blogs, write and publish posts, like and comment on content.",
//       tech_stack: [
//         "React.js",
//         "Node.js",
//         "Express.js",
//         "MongoDB",
//         "Editor.js",
//         "Cloudinary",
//       ],
//       key_features: [
//         "Rich text article creation with Editor.js",
//         "Image and video management using Cloudinary",
//         "User-friendly user interface",
//         "Like and comment functionality for posts",
//         "Community building with user profiles and interactions",
//         "Google based authentication",
//       ],
//       purpose:
//         "To enable writers and readers to connect, share ideas, and foster a collaborative community.",
//     },
//     {
//       id: 3,
//       thumbnail:
//         "https://via.placeholder.com/800x400/dc143c/ffffff?text=LearnNotion",
//       title: "LearnNotion - A Learning Management System",
//       github_repo_link: "https://github.com/username/learnnotion",
//       deployed_link: "https://learnnotion.vercel.app",
//       description:
//         "LearnNotion is a comprehensive Learning Management System (LMS) built using the MERN stack. It is designed to facilitate seamless creation, consumption, and interaction with educational content.",
//       tech_stack: [
//         "React.js",
//         "Tailwind CSS",
//         "Node.js",
//         "Express.js",
//         "MongoDB",
//         "Cloudinary",
//         "NodeMailer",
//         "Razorpay",
//       ],
//       key_features: [
//         "Content creation and consumption for educational materials",
//         "Rating and feedback for courses and content",
//         "Payment integration for buying courses",
//         "Email notifications using NodeMailer",
//         "Responsive and intuitive user interface",
//       ],
//       purpose:
//         "To provide a modern platform for educators and learners to share and consume educational content efficiently.",
//     },
//     {
//       id: 4,
//       thumbnail:
//         "https://via.placeholder.com/800x400/dc143c/ffffff?text=Ecomzy",
//       title: "Ecomzy - A Shopping Cart",
//       github_repo_link: "https://github.com/username/ecomzy",
//       deployed_link: "https://ecomzy.example.com",
//       description:
//         "Ecomzy is a modern shopping cart application developed using React, Redux, and Tailwind CSS. It is designed to provide users with a seamless and intuitive shopping experience.",
//       tech_stack: ["React.js", "Redux", "Tailwind CSS"],
//       key_features: [
//         "Dynamic product listings with filtering and sorting",
//         "Shopping cart functionality with item updates and removal",
//         "Responsive design for optimal user experience",
//         "State management using Redux for seamless interactions",
//       ],
//       purpose:
//         "To offer a user-friendly e-commerce experience for customers and a scalable solution for online retailers.",
//     },
//   ];

//   return (
//     <section
//       id="home"
//       className="min-h-screen bg-black text-white flex items-center font-['Ubuntu'] overflow-hidden relative"
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black z-10" />
//       <div
//         className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage:
//             "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)",
//           transform: `translateY(${scrollY * 0.5}px)`,
//         }}
//       />
//       <div className="max-w-[1300px] mx-auto px-6 md:px-20 w-full z-20">
//         <div className="text-1 text-3xl">Hello, my name is</div>
//         <div className="text-[4.5rem] font-semibold -ml-1 my-2">
//           Sahil Warkhade
//         </div>
//         <div className="text-4xl my-1">
//           And I'm a{" "}
//           <span className="text-[#dc143c] font-medium">Developer</span>
//         </div>
//         <div className="flex gap-6 mt-7">
//           <a
//             href="https://www.linkedin.com/in/sahilwarkhade/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Linkedin className="text-2xl hover:scale-125 transition duration-300 cursor-pointer" />
//           </a>
//           <a
//             href="https://twitter.com/SahilWarkhade9"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Twitter className="text-2xl hover:scale-125 transition duration-300 cursor-pointer" />
//           </a>
//           <a
//             href="https://github.com/sahilwarkhade"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Github className="text-2xl hover:scale-125 transition duration-300 cursor-pointer" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import { useNavigate } from "react-router-dom";
import userImage from "../../public/images/sahilwarkhade--profile.png";

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
                <img src={userImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
