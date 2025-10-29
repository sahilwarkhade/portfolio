import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#111] py-4 border-t text-white text-center overflow-x-hidden">
        <span>
          Created By{" "}
          <a href="#" className="text-[#dc143c] hover:underline">
            Sahil Warkhade
          </a>
        </span>
        <div className="flex justify-center gap-6 mt-3">
          <a
            href="https://www.linkedin.com/in/sahilwarkhade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="text-2xl hover:scale-125 transition duration-300 cursor-pointer" />

          </a>
          <a
            href="https://twitter.com/SahilWarkhade9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="text-2xl hover:scale-125 transition duration-300 cursor-pointer" />
          </a>
          <a
            href="https://github.com/sahilwarkhade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="text-2xl hover:scale-125 transition duration-300 cursor-pointer" />
          </a>
        </div>
      </footer>
  )
}

export default Footer
