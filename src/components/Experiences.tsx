import Title from "./Title";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgFIGMA from "../assets/techno/figma.png";
import imgGIT from "../assets/techno/git.png";
import imgGITHUB from "../assets/techno/github.png";
import imgNODE from "../assets/techno/node-js.png";
import "./experiences.css";
import { motion } from "motion/react";

const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 3, name: "JavaScript", image: imgJS },
  { id: 4, name: "React", image: imgREACT },
  { id: 5, name: "Tailwind CSS", image: imgTAILWIND },
  { id: 6, name: "TypeScript", image: imgTYPE },
  { id: 7, name: "Figma", image: imgFIGMA },
  { id: 8, name: "Git", image: imgGIT },
  { id: 9, name: "GitHub", image: imgGITHUB },
  { id: 10, name: "Node.js", image: imgNODE },
];

const Experiences = () => {
  return (
    <div className="py-30" id="experiences">
      <Title title={"Mes Compétences"} />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="carousel mt-10"
      >
        <div className="group">
          {skills.map((skill) => (
            <div key={skill.id} className=" flex flex-col items-center">
              <div className=" h-20 w-20 flex items-center justify-center ">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="object-cover w-10 h-10"
                />
              </div>
              <span className=" text-sm mt-2">{skill.name}</span>
            </div>
          ))}
        </div>
        <div className="group" aria-hidden>
          {skills.map((skill) => (
            <div key={skill.id} className=" flex flex-col items-center">
              <div className=" h-20 w-20 flex items-center justify-center ">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="object-cover w-10 h-10"
                />
              </div>
              <span className=" text-sm mt-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experiences;
