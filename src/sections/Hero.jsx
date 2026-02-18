
import { ChevronDown  } from "lucide-react";

/*const skills = [
  "•",
  "React",
  "•",
  "JS",
  "•",
  "Node.js",
  "•",
  "MySQL",
  "•",
  "PostgreSQL",
  "•",
  "MongoDB",
  "•",
  "Redis",
  "•",
  "Docker",
  "•",
  "AWS",
  "•",
  "Vercel",
  "•",
  "Tailwind CSS",
  "•",
  "Prisma",
  "•",
  "Jest",
  "•",
  "Cypress",
  "•",
  "Figma",
  "•",
  "Git",
 "•", 
  "GitHub Actions",
    "•", 
];8?*/

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex item-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                 src="/bkg.png"
                 alt="Hero image"
                 className="w-full h-full object-cover opacity-25"/>
            </div>
            <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />

            { /* Content */}

            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    { /* left - text content */}
                    <div className="space-y-8">
                        <div className="animate fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                             <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                 Computer science • Information Technology
                            </span>
                             
                        </div>
                            {/* Headline */}
            <div className="space-y-5">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Engineering <span className="text-primary glow-text">digital</span>
                <br />
                products with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
               Hello, my name is Georgi. I run <a href="#projects" className="text-foreground glow-text hover:text-primary">Watermelon.</a>
                </p>
                
             </div>

                            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
           
              
                 </div>
                        
                    </div>


                    { /* right - image */}

          <div className="relatice animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-sm p-6 glow-border">
                <img
                  src="/edited-me.png"
                  alt="Georgi Georgiev "
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
                </div>
                    {/* Skills Section */}
         
            </div>
      
                  <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
        >
          
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
                
            
       


            
        </section>
        
    
    )
}