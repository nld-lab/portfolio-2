import { CodeXml, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <nav>
          <a
            href="#home"
            className="flex font-bold text-2xl items-center gap-1 "
          >
            <CodeXml />
            Nico.Le.
            <span className="text-secondary">Dev</span>
          </a>
          <div className="flex flex-row gap-4 mt-2">
            <a
              href="https://www.linkedin.com/in/nicolas-deteh-b88571374"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a href="https://github.com/nicostar-lab" target="_blank">
              <Github />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Nico.Le.Dev
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
