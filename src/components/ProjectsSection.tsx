
import ProjectCard from "./ProjectCard";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Online Clothing Store",
    description: "I want to improve my skills in using Vite, React, and Tailwind CSS to build faster, more efficient, and responsive web applications. My goal is to master clean UI design, optimize performance, and follow modern development practices using these powerful tools.",
    image: "/Projects/clothing-store demo.png",
    techs: ["React", "Redux", "Javascript", "Tailwind CSS"],
    liveUrl: "https://clothing-shop-two-alpha.vercel.app/",
    githubUrl: "https://github.com/Thapelo12345/clothing-shop",
  },
 
  {
    id: 2,
    title: "Figma Desing",
    description: "A client requested that I convert a Figma design into a responsive HTML layout. I chose React to build the entire form component, ensuring it was fully functional, mobile-friendly, and visually aligned with the original design for a seamless experience.",
    image: "/Projects/React form.png",
    techs: ["JavaScript","React", "Sass", "CSS3", "HTML5"],
    liveUrl: "https://thapelo12345.github.io/react-form/",
    githubUrl: "https://github.com/Thapelo12345/react-form",
  },

   {
    id: 3,
    title: "Dessert",
    description: "This is a dessert app built from a Figma design, and it is fully responsive. I built it to improve my skills in converting Figma designs into fully functional websites, as many clients on Upwork look for developers who can translate Figma designs into HTML and CSS.",
    image: "/Projects/dessert store.png",
    techs: ["Html", "Sass", "JavaScript"],
    liveUrl: "https://thapelo12345.github.io/dessert/",
    githubUrl: "https://github.com/Thapelo12345/dessert",
  },
   {
    id: 4,
    title: "CRUD",
    description: "I built a CRUD app with Next.js to strengthen my full-stack skills, learn server-side rendering, improve API handling, and demonstrate real-world project experience as a self-taught web developer.",
    image: "/Projects/CRUD.png",
    techs: ["Vite React", "Next js", "MongoDB"],
    liveUrl: "https://crud-jpabsylij-thapelos-projects-3e392397.vercel.app/",
    githubUrl: "https://github.com/Thapelo12345/CRUD",
  },
 
  {
    id: 5,
    title: "Local Company",
    description: "I built this website for L.S.E.B., a local company that rents sound equipment for events. It was my first real client project, a valuable experience beyond personal projects, working with someone from my community to meet their business needs.",
    image: "/Projects/L.S.E.B Trading & Projects - Quality Quantified Sound - Google Chrome 2025_05_31 15_52_16.png",
    techs: ["Vite React", "AI loveable", "Tailwindcss", "TypeScript"],
    liveUrl: "https://papaya-faun-8172d1.netlify.app/",
    githubUrl: "https://github.com/Thapelo12345/Mlindo",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding py-20 relative z-10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                techs={project.techs}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
