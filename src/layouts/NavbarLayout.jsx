import { useState } from "react";
import Navbar from "../components/Navbar";
import { ChevronUp } from "lucide-react";
import { Outlet } from "react-router-dom";

const NavbarLayout = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <Navbar setShowScrollUp={setShowScrollUp} />
      <main>
        <Outlet />
      </main>
      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed cursor-pointer right-8 bottom-8 z-50 bg-[#dc143c] text-white w-10 h-10 rounded-full flex items-center justify-center hover:brightness-90 transition duration-500 overflow-x-hidden"
        >
          <ChevronUp size={25} />
        </button>
      )}
    </div>
  );
};

export default NavbarLayout;
