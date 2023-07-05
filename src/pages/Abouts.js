import React from "react";
import Navigation from "../components/Navigation";
import Buttons from "../components/Buttons";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";

const Abouts = () => {
  const variant = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: 100,
    },
  };

  return (
    <div>
      <Mouse />
      <motion.div
        className="about-container"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variant}
      >
        <Navigation />
        <SocialNetwork />
        <div className="about">
          <div className="about-content">
            <div className="about-main">
              <h1>A propos</h1>
              <p>
                Bonjour, je m'appelle François ! <br />
                <br /> Je suis à la recherche d'une <span>alternance</span> en
                développement
                <span> frontend</span> pour une durée de <span>24 mois</span> à
                partir de septembre 2023. <br /> J'ai obtenu un BTS SIO et fait
                une licence en Informatique, mais j'ai décidé de me spécialiser
                en développement web en autodidacte. <br />
                J'ai suivi la formation de <span>Développeur Web</span> (React,
                MongoDB, Express) <span>d'OpenClassroomss</span> pour renforcer
                mes compétences. <br /> Je continue également à me former en
                autodidacte pour rester à jour avec les nouvelles technologies
                telles que Redux, Vite et Next.js.
              </p>
            </div>
            <div className="about-pictures">
              <img src="./assets/img/photo.jpg" alt="François Lancastre " />
              <a
                href="./assets/files/Francois_Lancastre_CV.pdf"
                className=" hover"
                download
              >
                <button className="about-pictures-cv">
                  <i className="fa-solid fa-file-arrow-down"></i> CV
                </button>
              </a>
            </div>
            <div className="about-skills">
              <h2>Skills</h2>
              <div className="skills-container">
                <div className="skills-content">
                  <h3>Design</h3>
                  <ul>
                    <li>
                      <i className="fa-brands fa-figma"></i> figma
                    </li>
                    <li>
                      <img src="./assets/img/canva.png" alt="canva" />
                      canva
                    </li>
                  </ul>
                </div>
                <div className="skills-content">
                  <h3>Front-end</h3>
                  <ul>
                    <li>
                      <i className="fa-brands fa-react"></i> react
                    </li>
                  </ul>
                </div>
                <div className="skills-content">
                  <h3>Back-end</h3>
                  <ul>
                    <li>
                      <img src="./assets/img/mongodb.png" alt="mongo" />
                      mongodb
                    </li>
                    <li>
                      {" "}
                      <img src="./assets/img/express.png" alt="express" />
                      express
                    </li>
                    <li>
                      {" "}
                      <img src="./assets/img/mysql.png" alt="mysql" />
                      mysql
                    </li>
                  </ul>
                </div>
                <div className="skills-content">
                  <h3>Other</h3>
                  <ul>
                    <li>
                      <i className="fa-brands fa-github"></i>git & github
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Buttons left={"/"} right={"/projet-1"} />
      </motion.div>
    </div>
  );
};

export default Abouts;
