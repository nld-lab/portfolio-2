import { FileDown, Mail } from "lucide-react";
import img from "../assets/image.png";

const Home = () => {
  return (
    <div className="flex flex-col-reverse items-center h-screen md:flex-row justify-center md:justify-between" id="home">
      <div className="flex flex-col">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-start">
          Je suis, <br />
          <span className="text-secondary">Nico.Le.Dev</span>
        </h1>
        <p className="my-4 text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Dolor
          nisi sint adipisci exercitationem. <br /> Harum inventore tenetur
          quidem facilis
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
            href="#"
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
