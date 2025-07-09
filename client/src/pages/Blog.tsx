import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Clock, Search, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  const featuredArticles = [
    {
      title: "The Future of Azure OpenAI Service",
      excerpt: "Exploring the latest capabilities and business applications of Azure's OpenAI integration for enterprise solutions.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Azure AI",
      featured: true
    },
    {
      title: "Power Platform: Beyond Automation",
      excerpt: "How modern organizations are leveraging Power Platform for strategic digital transformation initiatives.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Power Platform",
      featured: true
    },
    {
      title: "Measuring AI ROI: Best Practices",
      excerpt: "A comprehensive guide to measuring and demonstrating the business value of AI implementations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "AI Strategy",
      featured: true
    }
  ];

  const recentArticles = [
    {
      title: "Azure Cognitive Services: A Deep Dive",
      excerpt: "Understanding the full capabilities of Microsoft's cognitive services suite.",
      date: "February 20, 2024",
      readTime: "8 min read",
      category: "Azure AI"
    },
    {
      title: "Building Intelligent Chatbots with Bot Framework",
      excerpt: "Step-by-step guide to creating enterprise-grade conversational AI solutions.",
      date: "February 15, 2024",
      readTime: "10 min read",
      category: "Development"
    },
    {
      title: "Machine Learning Operations at Scale",
      excerpt: "Best practices for MLOps implementation in enterprise environments.",
      date: "February 10, 2024",
      readTime: "12 min read",
      category: "MLOps"
    },
    {
      title: "Securing AI Applications in Azure",
      excerpt: "Essential security considerations for AI and ML workloads in the cloud.",
      date: "February 5, 2024",
      readTime: "9 min read",
      category: "Security"
    },
    {
      title: "Digital Transformation Success Stories",
      excerpt: "Real-world case studies of successful Microsoft AI implementations.",
      date: "January 30, 2024",
      readTime: "11 min read",
      category: "Case Studies"
    },
    {
      title: "Getting Started with Azure Machine Learning",
      excerpt: "A beginner's guide to Microsoft's machine learning platform.",
      date: "January 25, 2024",
      readTime: "7 min read",
      category: "Azure ML"
    }
  ];

  const categories = ["All", "Azure AI", "Power Platform", "AI Strategy", "Development", "MLOps", "Security", "Case Studies"];

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
            <h1 className="text-5xl font-bold mb-4">Latest Insights</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay updated with the latest trends in Microsoft AI, Azure services, and digital transformation
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto pt-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-100"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <div className="w-20 h-1 bg-ms-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              In-depth analysis and insights on the latest Microsoft AI and cloud technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover bg-white shadow-lg border-0 overflow-hidden h-full">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-ms-blue text-white">
                      {article.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 text-sm text-ms-gray">
                        <span>{article.date}</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-700 line-clamp-3">{article.excerpt}</p>
                      
                      <button className="text-ms-blue font-semibold hover:text-ms-blue-dark transition-colors flex items-center space-x-1">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-ms-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" 
                  ? "bg-ms-blue hover:bg-ms-blue-dark text-white" 
                  : "border-ms-blue text-ms-blue hover:bg-ms-blue hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Articles</h2>
            <div className="w-20 h-1 bg-ms-blue mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover bg-white shadow-lg border-0 h-full">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-ms-blue/10 text-ms-blue">
                          {article.category}
                        </Badge>
                        <div className="flex items-center space-x-1 text-sm text-ms-gray">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-700 line-clamp-3">{article.excerpt}</p>
                      
                      <div className="flex items-center justify-between pt-4">
                        <span className="text-sm text-ms-gray">{article.date}</span>
                        <button className="text-ms-blue font-semibold hover:text-ms-blue-dark transition-colors flex items-center space-x-1">
                          <span>Read</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-ms-blue hover:bg-ms-blue-dark text-white px-8 py-4">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white space-y-6"
          >
            <h2 className="text-4xl font-bold mb-4">Never Miss an Update</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Subscribe to get the latest insights on Microsoft AI, Azure services, and digital transformation delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto pt-6">
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-100"
                />
                <Button className="bg-white text-ms-blue hover:bg-gray-100 px-8">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
