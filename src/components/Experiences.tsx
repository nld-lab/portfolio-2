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
];

const Experiences = ()=>{
    return(
        <div className="py-30" id="experiences">
            <Title title={"Mes experiences"}/>
            <div>
                <div className=" flex flex-wrap justify-center items-center gap-4 md:w-96 m-auto bg-base-300 p-5 rounded-lg shadow-lg ">
                    {
                        skills.map((skill)=>(
                            <div key={skill.id} className=" flex flex-col items-center">
                                <div className=" h-15 w-15 ">
                                    <img src={skill.image} alt={skill.name} className="object-cover w-full h-full"/>
                                </div>
                                <span className=" text-sm mt-2">{skill.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experiences;