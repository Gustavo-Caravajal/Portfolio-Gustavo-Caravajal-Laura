import { useState } from "react";
import { Nav } from "../Nav/Nav"
import "./Header.css"

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className={isMenuOpen ? "open" : ""}>
            <h4 className={isMenuOpen ? "hidden-logo" : "logo"}>Gustavo C. L.</h4>
            <button className="hamburger-button" onClick={toggleMenu}>≡</button>
            <Nav 
                isMenuOpen={isMenuOpen}
            />
        </header>
    )
}