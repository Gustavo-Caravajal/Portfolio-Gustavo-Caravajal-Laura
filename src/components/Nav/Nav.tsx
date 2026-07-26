import { useState } from "react"
import "./Nav.css"

export const Nav = () => {
    const [activeSection, setActiveSection] = useState("home")
    return (
        <nav>
            <ul className="nav-items">
                <li className="nav-item">
                    <a
                        href="#home"
                        className={activeSection === "home" ? "link active" : "link"}
                        onClick={() => setActiveSection("home")}
                    >
                        Inicio
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#about"
                        className={activeSection === "about" ? "link active" : "link"}
                        onClick={() => setActiveSection("about")}
                    >
                        Sobre mí
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#projects"
                        className={activeSection === "projects" ? "link active" : "link"}
                        onClick={() => setActiveSection("projects")}
                    >
                        Proyectos
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#education"
                        className={activeSection === "education" ? "link active" : "link"}
                        onClick={() => setActiveSection("education")}
                    >
                        Educación
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"
                        className={activeSection === "contact" ? "link active" : "link"}
                        onClick={() => setActiveSection("contact")}
                    >
                        Contacto
                    </a>
                </li>
            </ul>
        </nav>
    )
}