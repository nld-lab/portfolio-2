import Title from "./Title";
import img1 from "../assets/projects/4.png";
import img2 from "../assets/projects/1.png";
import img3 from "../assets/projects/2.png";
import img4 from "../assets/projects/3.png";
import img5 from "../assets/projects/5.png";

const projects = [
  {
    id: 1,
    title: "Gestionnaire de tâches",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["React", "Tailwind CSS"],
    repoLink: "#",
    demoLink: "https://to-do-list-nico-le-dev-15.vercel.app/",
    image: img1,
  },
  {
    id: 2,
    title: "Calculateur de poids",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["JavaScript", "HTML", "Tailwind CSS"],
    repoLink: "#",
    demoLink: "https://planets-tau-orcin.vercel.app/",
    image: img2,
  },
  {
    id: 3,
    title: "Quiz Game",
    technologies: ["HTML", "CSS", "JavaScript"],
    repoLink: "#",
    demoLink: "https://quiz-app-nine-chi-87.vercel.app/",
    image: img3,
  },
  {
    id: 4,
    title: "Chercheur de drapeaux",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["JavaScript", "API"],
    repoLink: "#",
    demoLink: "https://country-search-self.vercel.app/",
    image: img4,
  },
  {
    id: 5,
    title: "Tic-tac-toe Game",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["React", "Tailwind CSS"],
    repoLink: "#",
    demoLink: "https://tictactoe-nico-le-dev.vercel.app/",
    image: img5,
  },
];

const Projets = () => {
  return (
    <div id="projets">
      <Title title={"Mes projets"} />
      <div className=" grid md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <a
            href={project.demoLink}
            target="blank"
            rel="noopener noreferrer"
            key={project.id}
            className=" hover-3d"
          >
            <div className="card mb-10 bg-base-300 p-5 rounded-lg shadow-lg h-fit">
              <img
                src={project.image}
                alt={project.title}
                className=" w-full h-54 rounded-lg object-cover mb-4 "
              />
              <div>
                <h3 className=" text-xl font-bold mb-2">{project.title}</h3>
                <div>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className=" badge badge-sm badge-neutral mr-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 items-center mt-3">
                  <a
                    href={project.demoLink}
                    className="btn btn-sm btn-secondary w-full rounded-sm"
                  >
                    Voir le projet
                  </a>
                </div>
              </div>
            </div>

            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projets;
