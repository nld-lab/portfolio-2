import { FileDown, Mail } from "lucide-react";
import img from "../assets/image.png";
import cv from "../assets/CV NICOLAS DETEH.pdf";
import { motion } from "motion/react";
import "./experiences.css";

const Home = () => {
  return (
    <div
      className="flex flex-col-reverse gap-6 md:gap-0 mt-20 md:mt-0 items-center md:h-screen md:flex-row justify-center md:justify-between"
      id="home"
    >
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-5xl md:text-6xl font-bold text-center md:text-start"
        >
          Je suis, <br />
          <span className="text-secondary">Nicolas DETEH</span>
        </motion.h1>
        <h3 className="text text-xl border-r-2 border-secondary md:text-2xl font-semibold text-center md:text-start">
          Développeur Web et Designer UI/UX.
        </h3>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="my-4 md:text-lg text-center md:text-left md:w-11/12"
        >
          Etudiant en génie logiciel passionné de
          <br /> la création de sites web et applications modernes.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex gap-4 items-center flex-col md:flex-row"
        >
          <a
            href="#contact"
            className="flex w-full justify-center gap-2 btn btn-secondary md:w-fit shadow-2xl shadow-secondary"
          >
            <Mail />
            Contact moi
          </a>
          <a
            href={cv}
            download
            className="flex  w-full justify-center gap-2 btn btn-secondary md:w-fit shadow-2xl shadow-secondary"
          >
            <FileDown />
            Telecharger mon CV
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="md:ml-60 hover-3d"
      >
        <img
          src={img}
          alt=""
          className="w-96 h-96 object-cover border-8 border-secondary shadow-2xl shadow-secondary"
          style={{
            borderRadius: "53% 47% 48% 52% / 66% 63% 37% 34% ",
          }}
        />
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </motion.div>
    </div>
  );
};

export default Home;
