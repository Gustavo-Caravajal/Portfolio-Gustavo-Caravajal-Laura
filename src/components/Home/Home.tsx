import { scrollToSection } from "../../helpers/scrollToSection";
import "./Home.css"

export const Home = () => {
    return (
        <section id="home" className="home-container">
            <div className="profile">
                <div className="profile-social">
                    <a href="https://www.linkedin.com/in/gustavo-caravajal-669a37213/" target="_blank"><img className="social-logo" src="/images/linkedin.png" alt="linkedin" /></a>
                    <a href="https://github.com/Gustavo-Caravajal" target="_blank"><img className="social-logo" src="/images/github.png" alt="github" /></a>
                </div>
                <img className="profile-image" draggable="false" src="/images/Gustavo_Caravajal_Laura.png" alt="Gustavo Caravajal Laura" />
            </div>
            <div className="presentation">
                <p>Hola, soy Gustavo Caravajal Laura</p>
                <h1 className="profession">
                    Desarrollador Full Stack
                </h1>
                <p>
                    Desarrollo aplicaciones web modernas con React, Node.js y TypeScript.
                    Me apasiona crear soluciones eficientes, seguir aprendiendo y
                    transformar ideas en proyectos funcionales.
                </p>
                <div className="presentation-buttons">
                    <a className="button download">Descargar CV</a>
                    <a onClick={() => scrollToSection("projects")} className="button projects">Proyectos</a>
                </div>
            </div>
        </section>
    );
}