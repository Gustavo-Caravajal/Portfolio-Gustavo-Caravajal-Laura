import "./About.css"
import "../../../public/images/node.png"
export const About = () => {
    const skills: string[] = [
        "html",
        "css",
        "js",
        "ts",
        "react",
        "node",
        "express",
        "firestore",
        "jwt",
        "postman",
        "git",
        "vscode",
        "github"
    ];

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
                        <h2 className="about-title">Tecnologías </h2>
                    </div>
                    <div className="skill-icons">
                        {skills.map((skill) =>
                            <img
                                key={skill}
                                className="skill-icon"
                                src={`/images/${skill}.png`}
                                alt={skill}
                                draggable={false}
                            />
                        )}
                    </div>

                </div>
            </div>
            <img className="about-image" draggable={false} src="../../../public/images/Gustavo_Caravajal_Laura.png" alt="Gustavo Caravajal Laura" />
        </div>
    );


}