import { useEffect, useState } from "react"
import "./Nav.css"
import { scrollToSection } from "../../helpers/scrollToSection"

type NavProps = {
    isMenuOpen: boolean,
    toggleMenu: () => void
}

export const Nav = ({ isMenuOpen, toggleMenu }: NavProps) => {
    const [activeSection, setActiveSection] = useState<string>("home");    

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting){
                        setActiveSection(entry.target.id)
                    }
                });
            },
            {
                threshold: 0.3,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [])

    return (<>
        <nav className={isMenuOpen ? "nav nav-open" : "nav nav-closed"}>
            <ul className={isMenuOpen ? "nav-items open" : "nav-items close"}>
                <li className="nav-item">
                    <a
                        className={activeSection === "home" ? "link active" : "link"}
                        onClick={() => {
                            scrollToSection("home");
                            setActiveSection("home");
                            toggleMenu();
                        }}
                    >
                        Inicio
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={activeSection === "about" ? "link active" : "link"}
                        onClick={() => {
                            scrollToSection("about");
                            setActiveSection("about");
                            toggleMenu();
                        }}
                    >
                        Sobre mí
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={activeSection === "projects" ? "link active" : "link"}
                        onClick={() => {
                            scrollToSection("projects");
                            setActiveSection("projects");
                            toggleMenu();
                        }}
                    >
                        Proyectos
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={activeSection === "education" ? "link active" : "link"}
                        onClick={() => {
                            scrollToSection("education");
                            setActiveSection("education");
                            toggleMenu();
                        }}
                    >
                        Educación
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={activeSection === "contact" ? "link active" : "link"}
                        onClick={() => {
                            scrollToSection("contact");
                            setActiveSection("contact");
                            toggleMenu();
                        }}
                    >
                        Contacto
                    </a>
                </li>
            </ul>
        </nav>
    </>)
}