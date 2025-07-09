import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MicOff, Award, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import christianPhoto from "../assets/christian-stegh-photo.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-6"
            >
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Leading AI initiatives that combine{" "}
                <span className="text-ms-blue-light">humans + machines</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                As the author of a book on Microsoft 365 Copilot and a Microsoft MVP for Copilot, I help executive leaders understand, adopt, and govern AI in ways that drive secure, meaningful productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-ms-blue hover:bg-gray-100 px-8 py-4 text-base font-semibold">
                    Book Speaking Engagement
                  </Button>
                </Link>
                <Link href="/books">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white text-white hover:bg-white hover:text-ms-blue px-8 py-4 text-base font-semibold"
                  >
                    View Publications
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={christianPhoto}
                alt="Christian Stegh - Professional speaker presenting"
                className="rounded-2xl shadow-2xl w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-ms-blue text-white p-3 rounded-full">
                    <MicOff className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">500+ Speaking Events</p>
                    <p className="text-sm text-ms-gray">Across 30+ Countries</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-ms-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-ms-blue mb-2">17+</div>
              <div className="text-ms-gray font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ms-blue mb-2">9</div>
              <div className="text-ms-gray font-medium">Partner Awards Won</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ms-blue mb-2">CTO</div>
              <div className="text-ms-gray font-medium">VP of Strategy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ms-blue mb-2">2023</div>
              <div className="text-ms-gray font-medium">AI Practice Launch</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={christianPhoto}
                alt="Christian Stegh professional portrait"
                className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">About Christian Stegh</h2>
                <div className="w-20 h-1 bg-ms-blue mb-6"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                As CTO and VP of Strategy at eGroup, I lead our Strategy and Architecture division—home to the company's field CTOs, solution architects, and CIO Advisors. Over 17+ years, I've recruited and mentored high-performing technical and sales teams.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My expertise spans cybersecurity, Microsoft 365, AI adoption, IaaS/SaaS, and unified communications. I find my MBA and BSEE useful to be comfortable turning ambiguity clarity—and vision into action!
              </p>
              <Link href="/about">
                <Button className="bg-ms-blue hover:bg-ms-blue-dark text-white px-8 py-3">
                  Learn More About Christian
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-ms-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How I Can Help</h2>
            <div className="w-20 h-1 bg-ms-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Transforming organizations through strategic AI implementation and Microsoft technology expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MicOff,
                title: "Keynote Speaking",
                description: "Inspiring presentations that drive digital transformation"
              },
              {
                icon: Users,
                title: "Workshops",
                description: "Hands-on training in Microsoft AI and cloud technologies"
              },
              {
                icon: Award,
                title: "Consulting",
                description: "Strategic guidance for AI implementation and adoption"
              },
              {
                icon: BookOpen,
                title: "Publications",
                description: "Comprehensive guides and technical resources"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover bg-white shadow-lg border-0 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="text-ms-blue mb-4">
                      <service.icon className="h-12 w-12 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/speaking">
              <Button className="bg-ms-blue hover:bg-ms-blue-dark text-white px-8 py-4 text-base">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
