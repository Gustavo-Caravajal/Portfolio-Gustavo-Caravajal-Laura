import "./Home.css"

export const Home = () => {
    return (
        <div className="home-container">
            <div className="profile">
                <div className="profile-social">
                    <a href="https://www.linkedin.com/in/gustavo-caravajal-669a37213/" target="_blank"><img className="social-logo" src="../../../public/images/linkedin.png" alt="linkedin" /></a>
                    <a href="https://github.com/Gustavo-Caravajal" target="_blank"><img className="social-logo" src="../../../public/images/github.png" alt="github" /></a>
                </div>
                <img className="profile-image" draggable="false" src="../../../public/images/Gustavo_Caravajal_Laura.png" alt="Gustavo Caravajal Laura" />
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
                    <button className="button download">Descargar CV</button>
                    <button className="button projects">Proyectos</button>
                </div>
            </div>
        </div>
    );
}