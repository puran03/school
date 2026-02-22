import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, BrainCircuit, Leaf, GraduationCap, Trophy, ChevronRight } from "lucide-react";

import heroImg from "@/assets/images/hero-campus.png";
import libraryImg from "@/assets/images/library.png";
import activitiesImg from "@/assets/images/activities.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-secondary/30">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroImg} 
              alt="Anantam Gurukul Campus" 
              className="w-full h-full object-cover object-center"
            />
            {/* Elegant overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
            <div className="absolute inset-0 bg-primary/20"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/20">
                <Leaf className="h-4 w-4 text-secondary" />
                <span className="text-white text-sm font-medium tracking-wide">ADMISSIONS OPEN FOR 2026-27</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                Discover <span className="text-secondary">Infinite</span> Possibilities
              </h1>
              <p className="text-xl text-white/90 mb-10 leading-relaxed font-light max-w-xl">
                Anantam Gurukul blends modern educational practices with traditional values to nurture brilliant minds and compassionate hearts.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-white hover:text-primary text-base px-8 h-14 rounded-full transition-all duration-300 shadow-[0_0_40px_-10px_rgba(251,191,36,0.5)]">
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-base px-8 h-14 rounded-full backdrop-blur-sm transition-all duration-300">
                  Take a Campus Tour
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Info Banner */}
        <div className="bg-secondary py-6 relative z-20 shadow-lg">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-secondary-foreground font-medium text-lg">
              <span className="mb-4 md:mb-0">Join our growing community in Bilkis Ganj</span>
              <div className="flex items-center space-x-4">
                <span>Call Admissions:</span>
                <a href="tel:8087177890" className="font-bold text-2xl hover:text-white transition-colors">+91 8087177890</a>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 md:px-8 relative">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Our Philosophy</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Education that Transcends the Classroom</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Anantam Gurukul, we believe every child possesses infinite potential. Our holistic approach ensures intellectual, emotional, and physical growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BrainCircuit className="h-10 w-10 text-secondary mb-6" />,
                  title: "Innovative Curriculum",
                  desc: "A progressive syllabus designed to foster critical thinking, creativity, and a lifelong love for learning."
                },
                {
                  icon: <Users className="h-10 w-10 text-secondary mb-6" />,
                  title: "Holistic Development",
                  desc: "Focusing equally on academics, arts, sports, and character building to shape well-rounded individuals."
                },
                {
                  icon: <Leaf className="h-10 w-10 text-secondary mb-6" />,
                  title: "Natural Environment",
                  desc: "A sprawling green campus providing a serene backdrop that enhances focus and mental well-being."
                }
              ].map((feature, i) => (
                <Card key={i} className="bg-white border-none shadow-xl hover:-translate-y-2 transition-transform duration-300 group">
                  <CardContent className="p-10">
                    <div className="p-4 bg-primary/5 inline-block rounded-2xl group-hover:bg-primary/10 transition-colors">
                      {feature.icon}
                    </div>
                    <h4 className="text-2xl font-serif font-bold mb-4 mt-6 text-foreground">{feature.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Highlights with Images */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-8">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 md:order-1 relative">
                <div className="absolute -inset-4 bg-secondary/20 rounded-3xl transform rotate-3"></div>
                <img 
                  src={libraryImg} 
                  alt="Students in library" 
                  className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-4">
                  <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center text-white">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">15k+</div>
                    <div className="text-muted-foreground font-medium">Library Books</div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Academic Excellence</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Fostering a Culture of Curiosity</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Our state-of-the-art academic facilities provide the perfect environment for students to explore, discover, and excel. With dedicated reading spaces, advanced science labs, and interactive classrooms.
                </p>
                <ul className="space-y-4 mb-8">
                  {['Advanced Learning Methods', 'Highly Qualified Faculty', 'Low Student-Teacher Ratio'].map((item, i) => (
                    <li key={i} className="flex items-center text-foreground font-medium">
                      <div className="h-6 w-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mr-3">
                        <Trophy className="h-3 w-3" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="group" variant="link">
                  Explore Academics <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Campus Life</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Vibrant & Active Environment</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Education at Anantam extends beyond textbooks. Our extensive sports facilities and extracurricular programs ensure every student finds their passion and builds lifelong skills.
                </p>
                <ul className="space-y-4 mb-8">
                  {['Extensive Sports Grounds', 'Creative Arts Studios', 'Mental Wellness Programs'].map((item, i) => (
                    <li key={i} className="flex items-center text-foreground font-medium">
                      <div className="h-6 w-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mr-3">
                        <GraduationCap className="h-3 w-3" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="group" variant="link">
                  View Facilities <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl transform -rotate-3"></div>
                <img 
                  src={activitiesImg} 
                  alt="Campus activities" 
                  className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
          <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 max-w-4xl mx-auto">
              Ready to begin your journey with Anantam Gurukul?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
              Visit our campus opposite Magnus College, or reach out to our admissions team today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-white hover:text-primary text-lg px-10 h-16 rounded-full shadow-xl">
                Contact Admissions
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-10 h-16 rounded-full">
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}