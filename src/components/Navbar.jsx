import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setShowScrollUp }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
      setShowScrollUp(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 font-['Ubuntu'] overflow-x-hidden ${
        isSticky ? "bg-black py-4" : "py-6"
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-['poppins'] font-semibold tracking-widest">
          Sa
          <span className="text-[#dc143c]">hil.</span>
        </div>

        {/* <div className="relative"> */}
        {/* Mobile / Desktop Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-[280px] bg-[#111] text-white flex flex-col items-start p-10 transition-transform duration-300 md:static md:flex md:flex-row md:h-auto md:w-auto md:p-0 md:bg-transparent md:items-center font-poppins ${
            isMenuOpen ? "translate-x-0" : "max-md:translate-x-full"
          }`}
        >
          <ul className="flex flex-col md:flex-row w-full md:w-auto">
            {["Home", "About", "Experience", "Work", "Contact"].map((item) => (
              <li key={item} className="w-full md:w-auto">
                <a
                  href={`#${
                    item === "About" ? "section-about" : item.toLowerCase()
                  }`}
                  className="block text-white text-sm font-semibold my-4 md:my-0 md:ml-6 hover:text-[#dc143c] hover:scale-105 transition duration-300"
                  onClick={() => {
                    setIsMenuOpen(false);
                    location.pathname !== "/" && item !== 'Work' && navigate("/");
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a href="../../public/sahilwarkhade.pdf" target="_blank" className="mt-6 md:mt-0 md:ml-6 px-4 py-2 rounded-xl bg-gray-600 hover:bg-transparent border hover:border-white text-sm transition duration-300 hover:scale-105 cursor-pointer" >
            Resume
          </a>
        </div>

        {/* Hamburger / Close Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-2xl z-999"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
