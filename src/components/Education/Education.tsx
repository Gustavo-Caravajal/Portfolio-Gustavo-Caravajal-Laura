import "./Education.css"

export const Education = () => {
    const educationItems = [
        {
            title: "Ingeniería en Informática",
            details: {
                institution: "Universidad Nacional de Avellaneda",
                period: "Sept. 2021 - Presente"
            },
            description: "Actualmente cursando 4.º año de la carrera. Formación en programación, algoritmos y estructuras de datos, programación orientada a objetos, sistemas operativos, redes de computadoras, bases de datos, arquitectura de computadoras, electrónica, matemáticas aplicadas y física complementada con proyectos académicos y resolución de problemas de ingeniería."
        },
        {
            title: "Desarrollo de Interfaces Web",
            details: {
                institution: "Talento Tech",
                period: "Ago. 2024 - Dic. 2025"
            },
            description: "Trayecto formativo orientado al desarrollo de interfaces web. Formación en lógica de programación con Python, HTML, CSS, JavaScript y React, desarrollando aplicaciones web responsivas, componentes reutilizables, consumo de APIs y buenas prácticas de desarrollo frontend."
        },
        {
            title: "Back-End Node.js",
            details: {
                institution: "Talento Tech",
                period: "Mar. 2026 - Jul. 2026"
            },
            description: "Desarrollo de APIs REST con Node.js y Express, implementación de arquitectura en capas, manejo de HTTP, JSON y middleware, autenticación con JWT, integración con Firebase Firestore y desarrollo de un proyecto backend completo."
        }
    ]
    return (
        <section id="education" className="education-container">
            <h2 className="education-title">Educación</h2>
            {educationItems.map((item) => (
                <div className="education-item">
                    <div className="education-info">
                        <h4 className="title">{item.title}</h4>
                        <div className="details">
                            <p className="education-institution">{item.details?.institution}</p>
                            <p className="education-period">{item.details?.period}</p>
                        </div>
                        <p className="education-description">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
};