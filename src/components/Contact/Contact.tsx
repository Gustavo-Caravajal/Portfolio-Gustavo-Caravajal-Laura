import { useState } from "react";
import "./Contact.css"

type User = {
    name: string,
    lastName: string,
    email: string,
    message: string
}

export const Contact = () => {
    const [user, setUser] = useState<User>({
        name: "",
        lastName: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUser({
            name: "",
            lastName: "",
            email: "",
            message: ""
        });
    };


    return (
        <section id="contact" className="contact-container">
            <h2 className="contact-title">Contacto</h2>
            <div className="contact-data">
                <ul className="contact-list">
                    <li className="contact-item">
                        <img className="contact-icon" src="/images/correo.png" alt="correo" />
                        Gustavocarvajal_2001@outlook.es
                    </li>
                    <li className="contact-item">
                        <img className="contact-icon" src="/images/telefono.png" alt="telefono" />
                        +54 9 11 63614047
                    </li>
                    <li className="contact-item">
                        <img className="contact-icon" src="images/ubicacion.png" alt="ubicacion" />
                        Buenos Aires, Argentina
                    </li>
                    <li className="contact-item">
                        <img className="contact-icon" src="images/disponibilidad.png" alt="disponibilidad" />
                        Disponible: Lun-Vie, 9AM - 5PM
                    </li>
                </ul>
                <form className="form" action="" onSubmit={handleSubmit}>
                    <input
                        className="form-field"
                        type="text"
                        name="name"
                        value={user.name}
                        placeholder="Nombre"
                        required
                        onChange={handleChange}
                    />
                    <input
                        className="form-field"
                        type="text"
                        name="lastName"
                        value={user.lastName}
                        placeholder="Apellido"
                        required
                        onChange={handleChange}
                    />
                    <input
                        className="form-field"
                        type="email"
                        name="email"
                        value={user.email}
                        placeholder="Email"
                        required
                        onChange={handleChange}
                    />
                    <textarea
                        className="form-field text-area"
                        name="message"
                        value={user.message}
                        placeholder="Mensaje"
                        required
                        onChange={handleChange}
                    >
                    </textarea>
                    <button className="submit-button" type="submit">Enviar mensaje</button>
                </form>
            </div>
        </section>
    );
};