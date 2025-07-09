import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Books() {
  const featuredBooks = [
    {
      title: "Elevate the Enterprise with Microsoft 365 Copilot",
      subtitle: "Strategic guide to implementing Copilot for enterprise productivity",
      year: "2024",
      pages: "350+ pages",
      description: "Comprehensive guide helping executive leaders understand, adopt, and govern AI through Microsoft 365 Copilot implementation.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=600",
      amazonUrl: "https://www.amazon.com/Elevate-Enterprise-Using-Copilot-Microsoft/dp/B0D6PZ539W",
      rating: 4.9,
      reviews: 89
    }
  ];

  const otherPublications = [
    {
      title: "Digital Transformation with Microsoft Cloud",
      year: "2021",
      type: "Technical Guide"
    },
    {
      title: "Azure Security Best Practices",
      year: "2021",
      type: "Whitepaper"
    },
    {
      title: "Cognitive Services Implementation Guide",
      year: "2020",
      type: "Technical Manual"
    },
    {
      title: "Modern Workplace Solutions",
      year: "2020",
      type: "Strategy Guide"
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
            <h1 className="text-5xl font-bold mb-4">Published Works</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive guides and insights into Microsoft AI technologies and implementation strategies
            </p>
            <div className="flex justify-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-ms-blue-light">8</div>
                <div className="text-blue-100">Published Books</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ms-blue-light">2000+</div>
                <div className="text-blue-100">Pages Written</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ms-blue-light">15K+</div>
                <div className="text-blue-100">Copies Sold</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Publications</h2>
            <div className="w-20 h-1 bg-ms-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Essential reading for professionals looking to master Microsoft AI and cloud technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featuredBooks.map((book, index) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover bg-white shadow-lg border-0 overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={book.image}
                        alt={`${book.title} book cover`}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <CardContent className="md:w-2/3 p-8">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{book.title}</h3>
                          <p className="text-ms-blue font-medium">{book.subtitle}</p>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <Badge className="bg-ms-blue text-white">{book.year}</Badge>
                          <span className="text-sm text-gray-600">{book.pages}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium">{book.rating}</span>
                            <span className="text-sm text-gray-600">({book.reviews} reviews)</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-700">{book.description}</p>
                        
                        <div className="flex flex-wrap gap-3 pt-4">
                          <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer">
                            <Button className="bg-ms-blue hover:bg-ms-blue-dark text-white">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Buy on Amazon
                            </Button>
                          </a>
                          <Button variant="outline" className="border-ms-blue text-ms-blue hover:bg-ms-blue hover:text-white">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Read Preview
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Publications */}
      <section className="py-20 bg-ms-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Publications</h2>
            <div className="w-20 h-1 bg-ms-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Technical guides, whitepapers, and specialized resources for Microsoft technology professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherPublications.map((publication, index) => (
              <motion.div
                key={publication.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover bg-white shadow-lg border-0 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-ms-blue mb-4">
                      <BookOpen className="h-12 w-12 mx-auto" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{publication.title}</h3>
                    <Badge variant="secondary" className="mb-4">{publication.type}</Badge>
                    <p className="text-sm text-gray-600">{publication.year}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing Process */}
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
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
                alt="Author writing process"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
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
                <h2 className="text-4xl font-bold text-gray-900 mb-4">My Writing Philosophy</h2>
                <div className="w-20 h-1 bg-ms-blue mb-6"></div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Every book I write is designed to bridge the gap between complex Microsoft technologies and practical business implementation. I focus on real-world scenarios and actionable insights.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ms-blue rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Practical Focus</h4>
                    <p className="text-gray-700">Every concept is accompanied by real-world examples and implementation guidance.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ms-blue rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Industry Relevance</h4>
                    <p className="text-gray-700">Content is based on current industry trends and emerging Microsoft technologies.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ms-blue rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Accessible Language</h4>
                    <p className="text-gray-700">Complex technical concepts explained in clear, understandable language.</p>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-4">Stay Updated on New Releases</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Be the first to know about new publications and get exclusive access to chapter previews and technical insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-white text-ms-blue hover:bg-gray-100 px-8 py-4">
                Subscribe to Newsletter
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-ms-blue px-8 py-4"
              >
                Download Free Chapter
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
