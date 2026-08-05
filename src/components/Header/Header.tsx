import { useState } from "react";
import { Nav } from "../Nav/Nav"
import "./Header.css"
import { scrollToSection } from "../../helpers/scrollToSection";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    }

    return (
        <header className={isMenuOpen ? "open" : ""}>
            <h4 
                onClick={() => scrollToSection("home")}
                className={isMenuOpen ? "hidden-logo" : "logo"}
                >
                    Gustavo C. L.
                    </h4>
            <button className="hamburger-button" onClick={toggleMenu}>≡</button>
            <Nav 
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
            />
        </header>
    )
}