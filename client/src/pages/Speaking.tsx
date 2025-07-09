import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cloud, Rocket, Star, Users, GraduationCap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Speaking() {
  const speakingTopics = [
    {
      icon: Brain,
      title: "AI Strategy & Implementation",
      description: "Strategic approaches to implementing AI solutions that drive real business value and competitive advantage.",
      highlights: ["AI Readiness Assessment", "Implementation Roadmaps", "ROI Measurement"]
    },
    {
      icon: Cloud,
      title: "Azure AI Services",
      description: "Deep dives into Microsoft's AI and cognitive services portfolio for practical business applications.",
      highlights: ["Cognitive Services Overview", "Custom AI Models", "Integration Patterns"]
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description: "Leading organizational change through intelligent automation and modern workplace solutions.",
      highlights: ["Change Management", "Process Automation", "Modern Workplace"]
    }
  ];

  const testimonials = [
    {
      rating: 5,
      text: "Christian's expertise in Microsoft 365 Copilot implementation was invaluable. His strategic approach helped our executive team understand the true business potential of AI.",
      author: "Sarah Johnson",
      title: "CEO, Fortune 500 Financial Services",
      initials: "SJ"
    },
    {
      rating: 5,
      text: "Outstanding keynote that transformed how our leadership team thinks about AI governance. Christian's insights were both practical and immediately actionable.",
      author: "Michael Torres",
      title: "CTO, Higher Education Institution",
      initials: "MT"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <h1 className="text-5xl font-bold mb-4">Speaking Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Engaging keynotes and workshops that transform how organizations think about AI and Microsoft technologies
            </p>
            <div className="flex justify-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-ms-blue-light">500+</div>
                <div className="text-blue-100">Speaking Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ms-blue-light">30+</div>
                <div className="text-blue-100">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ms-blue-light">50K+</div>
                <div className="text-blue-100">Professionals Trained</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Keynotes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Keynotes</h2>
            <div className="w-20 h-1 bg-ms-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Invited lectures and keynotes delivered to executive audiences worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-lg border-0 h-full">
                <CardContent className="p-8">
                  <div className="text-ms-blue text-4xl mb-4">
                    <Users className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">AI for Executive Leadership</h3>
                  <p className="text-gray-700">Strategic insights for C-suite executives on governing AI adoption, measuring ROI, and leading organizational transformation in the age of artificial intelligence.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-lg border-0 h-full">
                <CardContent className="p-8">
                  <div className="text-ms-blue text-4xl mb-4">
                    <GraduationCap className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">AI for Higher Ed Leaders</h3>
                  <p className="text-gray-700">Addressing the unique challenges and opportunities of AI implementation in higher education, from academic integrity to operational efficiency.</p>
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
                  <div className="text-ms-blue text-4xl mb-4">
                    <TrendingUp className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">AI for Financial Executives</h3>
                  <p className="text-gray-700">Practical frameworks for financial leaders to evaluate AI investments, manage risks, and drive measurable business outcomes through intelligent automation.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-20 bg-ms-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Speaking Topics</h2>
            <div className="w-20 h-1 bg-ms-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive coverage of Microsoft AI, enterprise architecture, and digital transformation strategies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakingTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover bg-white shadow-lg border-0 h-full">
                  <CardContent className="p-8">
                    <div className="text-ms-blue text-4xl mb-4">
                      <topic.icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{topic.title}</h3>
                    <p className="text-gray-700 mb-4">{topic.description}</p>
                    <div className="space-y-1">
                      {topic.highlights.map((highlight) => (
                        <div key={highlight} className="text-sm text-gray-600">
                          • {highlight}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <div className="w-20 h-1 bg-ms-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Feedback from organizations that have experienced transformational results
            </p>
          </motion.div>

          <Card className="bg-white shadow-lg border-0 p-8">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.author}
                    initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.text}"</p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-ms-blue rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Speaking Formats */}
      <section className="py-20 bg-ms-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Speaking Formats</h2>
            <div className="w-20 h-1 bg-ms-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Flexible formats tailored to your event and audience needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Keynote Presentations",
                duration: "45-60 minutes",
                description: "Inspirational talks that set the tone for your event"
              },
              {
                title: "Technical Workshops",
                duration: "2-4 hours",
                description: "Hands-on training sessions with practical exercises"
              },
              {
                title: "Panel Discussions",
                duration: "30-45 minutes",
                description: "Interactive discussions with industry experts"
              },
              {
                title: "Executive Briefings",
                duration: "1-2 hours",
                description: "Strategic sessions for leadership teams"
              }
            ].map((format, index) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover bg-white shadow-lg border-0 h-full text-center">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{format.title}</h3>
                    <Badge className="bg-ms-blue text-white mb-4">{format.duration}</Badge>
                    <p className="text-gray-700 text-sm">{format.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Book Christian Stegh?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Transform your next event with insights from a Microsoft MVP and CTO who leads AI initiatives that combine humans + machines for measurable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/contact">
                <Button size="lg" className="bg-ms-blue hover:bg-ms-blue-dark text-white px-8 py-4">
                  Book Speaking Engagement
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-ms-blue text-ms-blue hover:bg-ms-blue hover:text-white px-8 py-4"
              >
                Download Speaker Kit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
