import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Target, Heart, GraduationCap } from "lucide-react";
import founderImg from "@/assets/images/founder.png";

export default function FounderVision() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white text-center mb-6">Founder's Vision</h1>
            <p className="text-xl text-white/80 text-center max-w-2xl mx-auto font-light">
              Building a foundation for excellence and holistic growth.
            </p>
          </div>
        </section>

        {/* Vision Content */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/20 rounded-3xl transform rotate-3"></div>
                <img 
                  src={founderImg} 
                  alt="Founder of Anantam Gurukul" 
                  className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto aspect-square object-cover"
                />
              </div>
              
              <div className="space-y-8">
                <div className="inline-block p-3 bg-secondary/10 rounded-2xl text-secondary">
                  <Quote className="h-8 w-8 fill-current" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight">
                  "Our mission is to empower the next generation with the wisdom of the past and the tools of the future."
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Welcome to Anantam Gurukul. When we laid the foundation of this institution, our vision was simple yet profound: to create a space where education isn't just about grades, but about the "Anantam" (infinite) possibilities within every child.
                  </p>
                  <p>
                    In today's rapidly changing world, children need more than just technical knowledge. They need character, resilience, and a deep-rooted sense of values. Our 'Gurukul' philosophy modernizes traditional teaching to meet contemporary needs.
                  </p>
                </div>
                <div className="pt-4">
                  <p className="font-serif text-2xl font-bold text-primary">Dr. Rajesh Kumar</p>
                  <p className="text-secondary font-medium tracking-widest uppercase text-sm mt-1">Founder & Chairperson</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h3 className="text-3xl font-serif font-bold mb-16">The Four Pillars of Our Vision</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Target className="h-8 w-8 text-secondary" />,
                  title: "Academic Rigor",
                  desc: "Excellence in every subject, fostering a sharp and curious mind."
                },
                {
                  icon: <Heart className="h-8 w-8 text-secondary" />,
                  title: "Value System",
                  desc: "Instilling empathy, honesty, and respect as core personality traits."
                },
                {
                  icon: <BrainCircuit className="h-8 w-8 text-secondary" />,
                  title: "Innovation",
                  desc: "Embracing technology and new-age skills for the 21st century."
                },
                {
                  icon: <GraduationCap className="h-8 w-8 text-secondary" />,
                  title: "Global Citizenship",
                  desc: "Preparing students to be responsible and aware world leaders."
                }
              ].map((pillar, i) => (
                <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="mx-auto w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                      {pillar.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3">{pillar.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function BrainCircuit(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 4.5V2" />
      <path d="M18 11V9" />
      <path d="M6 11V9" />
      <path d="M11 11h2" />
      <path d="M12 11v2" />
      <path d="M12 17v2" />
      <path d="M21 11a9 9 0 0 0-9-9 9 9 0 0 0-9 9c0 1.5.4 3 1.1 4.2" />
      <path d="M16 21a3 3 0 0 1-3-3v-4h2v2a1 1 0 0 0 1 1h2" />
      <path d="M4 15.2a9 9 0 0 0 5.6 4.7l1.4-2.5" />
    </svg>
  );
}