
import { Code, GraduationCap, Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding py-20 relative z-10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6 text-pretty">
              I am a certified IT support technician with 1 year of experience, a certified plumber, 
              and a passionate front-end web developer. I've completed FreeCodeCamp courses since 2019 
              and studied C# at Intec College in 2020. I'm planning to pursue a diploma in Web Development soon.
            </p>
            
            <div className="flex flex-col gap-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-md bg-primary/20 text-primary">
                  <Briefcase size={24} />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-1">IT Support Technician</h3>
                  <p className="text-muted-foreground">1 year experience</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-md bg-primary/20 text-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">C# Programming</h3>
                  <p className="text-muted-foreground">Intec College, 2020</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-md bg-primary/20 text-primary">
                  <Code size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Web Development</h3>
                  <p className="text-muted-foreground">FreeCodeCamp, since 2019</p>
                </div>
              </div>
{/* add download btn resume OR cv */}
            </div>
          </div>
          
          <div className="relative h-96 rounded-2xl overflow-hidden glass">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-4">
              <div className="bg-primary/20 rounded-lg p-4 flex flex-col items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h4 className="font-semibold text-lg mb-2">Front-End</h4>
                <p className="text-center text-sm">HTML, CSS, JavaScript, React, TypeScript</p>
              </div>
              
              <div className="bg-primary/20 rounded-lg p-4 flex flex-col items-center justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h4 className="font-semibold text-lg mb-2">Back-End</h4>
                <p className="text-center text-sm">C#, Node.js</p>
              </div>
              
              <div className="bg-primary/20 rounded-lg p-4 flex flex-col items-center justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <h4 className="font-semibold text-lg mb-2">Tools</h4>
                <p className="text-center text-sm">Git, VS Code, Figma</p>
              </div>
              
              <div className="bg-primary/20 rounded-lg p-4 flex flex-col items-center justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <h4 className="font-semibold text-lg mb-2">Learning</h4>
                <p className="text-center text-sm">Three.js, Next.js, Web Development Diploma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
