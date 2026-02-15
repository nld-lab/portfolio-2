import { FileDown, Mail } from "lucide-react";
import img from "../assets/image.png";
import cv from "../assets/CV NICOLAS DETEH.pdf";

const Home = () => {
  return (
    <div className="flex flex-col-reverse mt-20 md:mt-0 items-center h-screen md:flex-row justify-center md:justify-between" id="home">
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-start">
          Je suis, <br />
          <span className="text-secondary">Nicolas DETEH</span>
        </h1>
        <p className="my-4 md:text-lg text-center md:text-left w-11/12">
          Un développeur web passionné, spécialisé dans <br /> la 
          création de sites web et applications modernes. 
        </p>
        <div className="flex gap-4 items-center flex-col md:flex-row">
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
        </div>
      </div>
      <div className="md:ml-60 hover-3d">
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
      </div>
    </div>
  );
};

export default Home;
