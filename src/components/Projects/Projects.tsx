import "./Projects.css"

export const Projects = () => {
    const projects = [{
        id: 1,
        imageUrl: "/images/movies-app.jpg",
        projectName: "App de películas",
        projectType: "Frontend",
        projectDescription: "Aplicación para descubrir películas en tiempo real: consumo de una API externa, búsqueda dinámica y visualización de información en una interfaz moderna y responsive.",
        technologies: [{
            id: 1,
            color: "rgb(97, 218, 251)",
            name: "React"
        }, {
            id: 2,
            color: "rgb(247, 223, 30)",
            name: "JavaScript"
        }],
        buttons: [{
            id: 1,
            title: "Demo",
            type: "demo",
            url: "https://react-movies-app-33st.vercel.app/"
        }, {
            id: 2,
            title: "Github",
            type: "github",
            url: "https://github.com/Gustavo-Caravajal/React-Movies-App"
        }]
    }, {
        id: 2,
        imageUrl: "/images/tienda-app.jpg",
        projectName: "Tienda de tecnología",
        projectType: "Fullstack",
        projectDescription: "Tienda online completa: gestión de productos y base de datos con Supabase, conectada a una interfaz responsive construida con React y TypeScript.",
        technologies: [{
            id: 1,
            color: "rgb(97, 218, 251)",
            name: "React"
        }, {
            id: 2,
            color: "rgb(49, 120, 198)",
            name: "TypeScript"
        }, {
            id: 3,
            color: "rgb(62, 207, 142)",
            name: "Supabase"
        }],
        buttons: [{
            id: 1,
            title: "Demo",
            type: "demo",
            url: "https://tienda-react-typescript-dev.vercel.app/"
        }, {
            id: 2,
            title: "Github",
            type: "github",
            url: "https://github.com/Gustavo-Caravajal/tienda-react-typescript"
        }]
    },

    {
        id: 3,
        imageUrl: "/images/products-api.png",
        projectName: "API de productos",
        projectType: "Backend",
        projectDescription: "API REST para gestión de productos con operaciones CRUD, autenticación mediante JWT y persistencia de datos en Firestore. Incluye registro y login de usuarios y middleware de autorización.",
        technologies: [{
            id: 1,
            color: "rgb(131, 205, 41)",
            name: "Node.js"
        }, {
            id: 2,
            color: "rgb(255, 255, 255)",
            name: "Express"
        }, {
            id: 3,
            color: "rgb(49, 120, 198)",
            name: "TypeScript"
        }, {
            id: 4,
            color: "rgb(255, 160, 0)",
            name: "Firebase"
        }],
        buttons: [{
            id: 1,
            title: "Ver repositorio",
            type: "repo",
            url: "https://github.com/Gustavo-Caravajal/Entrega-Final-Backend-NodeJs-"
        }]
    }
    ];

    return (
        <section id="projects" className="projects-container">
            <h2 className="projects-title">Proyectos</h2>
            <div className="projects">
                {projects.map((project) =>
                    <div key={project.id} className="project">
                        <img className="project-img" src={project.imageUrl} alt="" draggable={false} />
                        <div className="card-top">
                            <h4 className="card-title">{project.projectName}</h4>
                            <span className="card-tag">{project.projectType}</span>
                        </div>
                        <p className="card-description">{project.projectDescription}</p>
                        <ul className="chip-list">
                            {project.technologies.map((technology) =>
                                <li key={technology.id} className="chip">
                                    <span className="chip-dot" style={{ backgroundColor: technology.color }}></span>
                                    {technology.name}
                                </li>
                            )}
                        </ul>
                        <div className="actions">
                            {project.buttons.map((button) => (
                                <a
                                    key={button.id}
                                    className={`action ${button.type}`}                                    
                                    href={button.url}
                                    target="_blank"
                                >
                                    {button.title}
                                    {button.type === "demo" &&
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.4">
                                            <path d="M7 17 17 7M9 7h8v8"></path>
                                        </svg>
                                    }
                                    {(button.type === "github" || button.type === "repo") &&
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
                                        </svg>
                                    }                                    
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};