import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlowCard from "../components/GlowCard";
import { TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const expCards = [
  { 
    companyName:"TechnoYug",
    review:
      "At TechnoYug, Sahil showcased strong backend development skills, contributing to the architecture and optimization of multiple server-side modules. His problem-solving approach and clean code practices enhanced overall system stability.",
    imgPath: "/images/exp1.webp",
    logoPath: "/images/technoyug.webp",
    title: "Backend Developer Intern",
    date: "Oct 2025 - Present",
    responsibilities: [
      "Developed and maintained RESTful APIs and backend logic using Node.js and Express.js.",
      "Worked with DynamoDb to handle large-scale data operations.",
      "Integrated AWS and other third-party services to streamline media management workflows.",
      "Improved system performance through code optimization, caching, and proper error handling.",
    ],
  },
  {
    companyName:"AB Infotech Solution",
    review:
      "Sahil demonstrated excellent full stack capabilities at AB Infotech Solutions. His ability to design, develop, and deploy scalable applications streamlined the project workflow and improved product reliability.",
    imgPath: "/images/exp2.webp",
    logoPath: "/images/abis.webp",
    title: "Full Stack Developer Intern",
    date: "Jan 2025 - June 2025",
    responsibilities: [
      "Built and deployed full stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Implemented RESTful APIs to handle user authentication and data operations efficiently.",
      "Collaborated with cross-functional teams to deliver responsive and intuitive UI designs.",
      "Integrated third-party services and improved backend performance by optimizing database queries.",
    ],
  },
];

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.fromTo(
        card,
        {
          x: -80,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });

    gsap.fromTo(
      ".timeline",
      {
        scaleY: 1,
      },
      {
        scaleY: 0,
        transformOrigin: "bottom bottom",
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline",
          start: "top center",
          end: "70% center",
          scrub: true,
        },
      }
    );

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<");
  }, []);

  return (
    <section id="experience" className="flex-center bg-[black] py-24">
      <div className="max-w-[1300px] mx-auto px-6 md:px-16">
        <div className="text-left mb-12">
          <div className="flex items-center gap-x-2.5">
            <TrendingUp className="w-7 h-7 md:w-10 md:h-10" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb:2 md:mb-4">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
                Experiences
              </span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg">
            Hands-On Experience in Production Environments.
          </p>
        </div>
        <div className="mt-32 relative">
          <div className="relative z-auto xl:space-y-24 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper w-full">
                <div className="xl:w-2/6">
                  <GlowCard card={card}>
                    <div className="w-16 rounded-2xl overflow-hidden">
                      <img src={card.imgPath} alt="exp-img" />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" className="" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-[#839CB5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 mt-4 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-lg">
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
// const Experience = () => {
//   useGSAP(() => {
//     gsap.utils.toArray(".timeline-card").forEach((card) => {
//       gsap.fromTo(
//         card,
//         {
//           x: -80,
//           opacity: 0,
//         },
//         {
//           x: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     });

//     gsap.fromTo(
//       ".timeline",
//       {
//         scaleY: 1,
//       },
//       {
//         scaleY: 0,
//         transformOrigin: "bottom bottom",
//         ease: "none",
//         scrollTrigger: {
//           trigger: ".timeline",
//           start: "top center",
//           end: "70% center",
//           scrub: true,
//         },
//       }
//     );

//     gsap.to(".timeline", {
//       transformOrigin: "bottom bottom",
//       ease: "power1.inOut",
//       scrollTrigger: {
//         trigger: ".timeline",
//         start: "top center",
//         end: "70% center",
//         onUpdate: (self) => {
//           gsap.to(".timeline", {
//             scaleY: 1 - self.progress,
//           });
//         },
//       },
//     });

//     gsap.utils.toArray(".expText").forEach((text) => {
//       gsap.from(text, {
//         opacity: 0,
//         xPercent: 0,
//         duration: 1,
//         ease: "power2.inOut",
//         scrollTrigger: {
//           trigger: text,
//           start: "top 60%",
//         },
//       });
//     }, "<");
//   }, []);

//   return (
//     <section id="experience" className="flex-center bg-[black] py-24">
//       <div className="max-w-[1300px] mx-auto px-6 md:px-16">
//         <h2 className="text-center text-4xl font-medium mb-16 pb-5 relative font-['Ubuntu'] before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-46 before:h-0.5 before:bg-white after:content-['where_i_worked'] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:text-xl after:text-[#dc143c] after:bg-[#111] after:px-1">
//           My Experience
//         </h2>
//         <div className="mt-32 relative">
//           <div className="relative z-auto xl:space-y-24 space-y-10">
//             {expCards.map((card) => (
//               <div key={card.title} className="exp-card-wrapper w-full">
//                 <div className="xl:w-2/6">
//                   <GlowCard card={card}>
//                     <div>
//                       <img src={card.imgPath} alt="exp-img" />
//                     </div>
//                   </GlowCard>
//                 </div>
//                 <div className="xl:w-4/6">
//                   <div className="flex items-start">
//                     <div className="timeline-wrapper">
//                       <div className="timeline" />
//                       <div className="gradient-line w-1 h-full" />
//                     </div>
//                     <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
//                       <div className="timeline-logo">
//                         <img src={card.logoPath} alt="logo" className="" />
//                       </div>
//                       <div>
//                         <h1 className="font-semibold text-3xl">{card.title}</h1>
//                         <p className="my-5 text-white-50">
//                           🗓️&nbsp;{card.date}
//                         </p>
//                         <p className="text-[#839CB5] italic">
//                           Responsibilities
//                         </p>
//                         <ul className="list-disc ms-5 mt-4 flex flex-col gap-5 text-white-50">
//                           {card.responsibilities.map(
//                             (responsibility, index) => (
//                               <li key={index} className="text-lg">
//                                 {responsibility}
//                               </li>
//                             )
//                           )}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export default Experience;
