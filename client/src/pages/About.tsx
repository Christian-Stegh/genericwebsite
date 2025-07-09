import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import christianPhoto from "../assets/christian-stegh-photo.jpeg";

export default function About() {
  const expertiseAreas = [
    "GenAI & Agentic AI",
    "Enterprise Architecture",
    "Cybersecurity",
    "Microsoft 365",
    "Data Analytics",
    "Organizational Change Management"
  ];

  const certifications = [
    "Microsoft MVP - Copilot",
    "MBA, University of Iowa",
    "BSEE, Northern Illinois University",
    "Leadership Certificate (2025)",
    "17+ Years Experience",
    "Author - Microsoft 365 Copilot"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={christianPhoto}
                alt="Christian Stegh professional portrait"
                className="rounded-2xl shadow-lg w-full h-[600px] object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-4">About Christian Stegh</h1>
                <div className="w-20 h-1 bg-ms-blue mb-6"></div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                As the author of a book on Microsoft 365 Copilot and a Microsoft MVP for Copilot, I help executive leaders understand, adopt, and govern AI in ways that drive secure, meaningful productivity. I speak regularly at industry events and advise organizations on strategic IT investments that deliver business results.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                As CTO and VP of Strategy at eGroup, I lead our Strategy and Architecture division—home to the company's field CTOs, solution architects, and CIO Advisors. Over 17+ years, I've recruited and mentored high-performing technical and sales teams, built strategic alliances with Microsoft and other top partners.
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                <Badge variant="secondary" className="bg-ms-blue text-white">Microsoft MVP</Badge>
                <Badge variant="secondary" className="bg-ms-blue text-white">CTO</Badge>
                <Badge variant="secondary" className="bg-ms-blue text-white">Author</Badge>
                <Badge variant="secondary" className="bg-ms-blue text-white">Speaker</Badge>
              </div>

              <div className="pt-6">
                <Link href="/contact">
                  <Button className="bg-ms-blue hover:bg-ms-blue-dark text-white px-8 py-3 mr-4">
                    Book Speaking Engagement
                  </Button>
                </Link>
                <Link href="/books">
                  <Button variant="outline" className="border-ms-blue text-ms-blue hover:bg-ms-blue hover:text-white px-8 py-3">
                    View Publications
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise and Certifications */}
      <section className="py-20 bg-ms-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-lg border-0 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <CheckCircle className="h-8 w-8 text-ms-blue mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Expertise Areas</h3>
                  </div>
                  <div className="space-y-4">
                    {expertiseAreas.map((area, index) => (
                      <motion.div
                        key={area}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                      >
                        <CheckCircle className="h-5 w-5 text-ms-blue mr-3" />
                        <span className="text-gray-700 font-medium">{area}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-lg border-0 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Award className="h-8 w-8 text-ms-blue mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
                  </div>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={cert}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                      >
                        <Award className="h-5 w-5 text-ms-blue mr-3" />
                        <span className="text-gray-700 font-medium">{cert}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Journey</h2>
            <div className="w-20 h-1 bg-ms-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A timeline of achievements and milestones in Microsoft technology and AI leadership
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                year: "2025",
                title: "Professional Development Academy",
                description: "Currently pursuing Leadership certificate to enhance executive coaching and organizational development capabilities."
              },
              {
                year: "2023",
                title: "AI Practice Launch",
                description: "Led the launch of eGroup's AI Practice, positioning the company at the forefront of Microsoft AI consulting and implementation services."
              },
              {
                year: "2022",
                title: "CTO & VP of Strategy",
                description: "Promoted to lead Strategic Advisory Services Practice and Field-CTOs, representing the organization in thought leadership activities."
              },
              {
                year: "2007",
                title: "Joined eGroup Enabling Technologies",
                description: "Started journey through various leadership roles including VP of Technical Services, VP of Sales, helping organization win Microsoft Partner of the Year Award nine times."
              },
              {
                year: "2000",
                title: "MBA Achievement",
                description: "Completed MBA at University of Iowa, building strategic business acumen to complement technical engineering background."
              }
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}
              >
                <div className="flex-1">
                  <Card className="card-hover bg-white shadow-lg border-l-4 border-l-ms-blue">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl font-bold text-ms-blue mr-4">{milestone.year}</span>
                        <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-700">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden lg:block">
                  <div className="w-4 h-4 bg-ms-blue rounded-full"></div>
                </div>
                <div className="flex-1 lg:block hidden"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white space-y-6"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Organization?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Let's discuss how Microsoft AI technologies can drive innovation and growth in your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-ms-blue hover:bg-gray-100 px-8 py-4">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/speaking">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white hover:text-ms-blue px-8 py-4"
                >
                  Explore Speaking Topics
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
