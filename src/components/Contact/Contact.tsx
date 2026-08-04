import { useState } from "react";
import emailjs from "@emailjs/browser";
import type { FormEvent } from "react";
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

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!serviceId || !templateId || !publicKey) {
            console.error("Faltan variables de entorno de EmailJS");
            return;
        }
        emailjs.send(
            serviceId,
            templateId,
            {
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                message: user.message
            },
            publicKey
        )
            .then(() => {
                alert("Mensaje enviado correctamente");

                setUser({
                    name: "",
                    lastName: "",
                    email: "",
                    message: ""
                });
            })
            .catch((error) => {
                console.error(error);
                alert("Error al enviar el mensaje");
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
                        <img className="contact-icon" src="/images/ubicacion.png" alt="ubicacion" />
                        Buenos Aires, Argentina
                    </li>
                    <li className="contact-item">
                        <img className="contact-icon" src="/images/disponibilidad.png" alt="disponibilidad" />
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