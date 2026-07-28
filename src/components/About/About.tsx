import "./About.css"
import "../../../public/images/node.png"
export const About = () => {

    return (
        <div className="about-container">
            <div className="about-info">
                <div className="about">
                    <h2 className="about-title">Sobre mí</h2>
                    <img className="about-image mobile" draggable={false} src="../../../public/images/Gustavo_Caravajal_Laura.png" alt="Gustavo Caravajal Laura" />
                    <p className="about-text">
                        Soy estudiante de Ingeniería en Informática y desarrollador Full Stack. Me apasiona el desarrollo web y el aprendizaje continuo, creando proyectos con React, Node.js, Express y TypeScript. Busco seguir creciendo profesionalmente mientras desarrollo aplicaciones modernas, eficientes y bien estructuradas.
                    </p>
                    <button className="contact-button">Contáctame</button>
                </div>
                <div className="skills">
                    <div className="skills-header">
                        <h2 className="about-title">Skills</h2>
                    </div>
                    <div className="skill-icons">
                        <img className="skill-icon" src="../../../public/images/html.png" alt="html" />
                        <img className="skill-icon" src="../../../public/images/css.png" alt="css" />
                        <img className="skill-icon" src="../../../public/images/js.png" alt="js" />
                        <img className="skill-icon" src="../../../public/images/ts.png" alt="ts" />
                        <img className="skill-icon" src="../../../public/images/react.png" alt="react" />
                        <img className="skill-icon" src="../../../public/images/node.png" alt="node" />
                        <img className="skill-icon" src="../../../public/images/express.png" alt="express" />
                        <img className="skill-icon" src="../../../public/images/firestore.png" alt="firestore" />
                        <img className="skill-icon" src="../../../public/images/jwt.png" alt="jwt" />
                        <img className="skill-icon" src="../../../public/images/postman.png" alt="postman" />
                        <img className="skill-icon" src="../../../public/images/git.png" alt="git" />
                        <img className="skill-icon" src="../../../public/images/vscode.png" alt="vscode" />
                        <img className="skill-icon" src="../../../public/images/github.png" alt="github" />
                    </div>

                </div>
            </div>
            <img className="about-image" draggable={false} src="../../../public/images/Gustavo_Caravajal_Laura.png" alt="Gustavo Caravajal Laura" />
        </div>
    );


}