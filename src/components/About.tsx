import Title from "./Title";
import img2 from "../assets/image2.jpg";
import { CalendarSync, LetterText } from "lucide-react";
import { motion } from "motion/react";

const abuotSection = [
  {
    id: 1,
    title: "Développeur Front-end",
    description:
      "Je suis spécialisé dans la création d'interfaces utilisateur attrayantes et fonctionnelles ",
    icon: <LetterText className="text-secondary scale-150" />,
  },

  {
    id: 2,
    title: "Passionné par l'UI/UX",
    description:
      "Je m'efforce de concevoir des expériences utilisateur intuitives et engageantes.",
    icon: <CalendarSync className="text-secondary scale-150" />,
  },
];

const About = () => {
  return (
    <div className="bg-base-300 p-5 mb-10 py-30" id="about">
      <Title title={"A propos"} />
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        className=" flex items-center justify-center "
      >
        <div className=" hidden md:flex ">
          <img src={img2} alt="" className="w-96 object-cover rounded-2xl" />
        </div>
        <div className="md:ml-4 space-y-4 ">
          {abuotSection.map((item) => (
            <div
              key={item.id}
              className="flex  gap-5 items-center bg-base-100 p-5 rounded-lg shadow-lg text-center justify-center md:text-start flex-col md:w-96 "
            >
              <div className="mb-2 md:mb-0">{item.icon}</div>
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className=" text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
