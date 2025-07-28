import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Users, Zap, Shield, Rocket, Code, Smartphone, Globe, Database, Star, Quote, ChevronRight, Play } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Globe,
      title: "Enterprise Web Applications",
      description: "Scalable, secure web platforms that transform how your business operates and serves customers.",
      features: ["Cloud-native architecture", "Advanced security", "Real-time analytics"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions that engage users and drive business growth.",
      features: ["iOS & Android native", "Cross-platform solutions", "Enterprise integration"]
    },
    {
      icon: Database,
      title: "Digital Transformation",
      description: "End-to-end modernization of legacy systems with cutting-edge technology stacks.",
      features: ["Legacy system migration", "API development", "Cloud infrastructure"]
    },
    {
      icon: Shield,
      title: "Enterprise Software",
      description: "Custom enterprise solutions built for scale, security, and seamless integration.",
      features: ["Microservices architecture", "Enterprise security", "Third-party integrations"]
    }
  ];

  const caseStudies = [
    {
      company: "Fortune 500 Retailer",
      project: "Omnichannel Commerce Platform",
      result: "300% increase in online revenue",
      metric: "$50M+ additional revenue",
      description: "Unified customer experience across web, mobile, and in-store touchpoints with real-time inventory management.",
      tags: ["E-commerce", "Mobile", "Analytics"]
    },
    {
      company: "Global Manufacturing Corp",
      project: "Supply Chain Optimization System",
      result: "40% reduction in operational costs",
      metric: "$12M annual savings",
      description: "AI-powered supply chain management platform with predictive analytics and automated workflows.",
      tags: ["AI/ML", "Enterprise", "Automation"]
    },
    {
      company: "Healthcare Network",
      project: "Patient Management Platform",
      result: "60% improvement in patient satisfaction",
      metric: "500K+ patients served",
      description: "HIPAA-compliant platform streamlining patient care coordination across multiple facilities.",
      tags: ["Healthcare", "Compliance", "Integration"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Deep dive into your business objectives, technical requirements, and success metrics."
    },
    {
      step: "02",
      title: "Architecture & Design",
      description: "Create scalable system architecture and user-centered design that aligns with your goals."
    },
    {
      step: "03",
      title: "Agile Development",
      description: "Iterative development with regular demos, feedback loops, and continuous integration."
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing including security audits, performance optimization, and user acceptance."
    },
    {
      step: "05",
      title: "Deployment & Support",
      description: "Seamless launch with ongoing maintenance, monitoring, and strategic enhancements."
    }
  ];

  const testimonials = [
    {
      quote: "They didn't just build software—they transformed how we think about technology as a competitive advantage.",
      author: "Sarah Chen",
      title: "CTO, TechCorp Industries",
      company: "Fortune 1000 Company"
    },
    {
      quote: "The level of strategic thinking and technical execution exceeded our expectations. ROI was evident within 6 months.",
      author: "Michael Rodriguez",
      title: "VP of Digital Innovation",
      company: "Global Manufacturing"
    }
  ];

  const clientLogos = [
    "Microsoft", "Amazon", "Salesforce", "Oracle", "IBM", "Google"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">Nexus Labs</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">Services</a>
              <a href="#work" className="text-slate-600 hover:text-slate-900 transition-colors">Our Work</a>
              <a href="#process" className="text-slate-600 hover:text-slate-900 transition-colors">Process</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">
                  Trusted by Fortune 500 Companies
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-slate-900">Transform Your Business with</span>
                  <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Enterprise Software
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                  We partner with visionary leaders to build custom software solutions that drive measurable business outcomes and competitive advantage.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg">
                  <span className="flex items-center gap-2">
                    Schedule Strategy Call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button size="lg" variant="outline" className="group border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg">
                  <span className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    View Case Studies
                  </span>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">$2.5B+</div>
                  <div className="text-sm text-slate-600">Value Created</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">150+</div>
                  <div className="text-sm text-slate-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">98%</div>
                  <div className="text-sm text-slate-600">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">Project Dashboard</h3>
                    <Badge className="bg-green-100 text-green-800">Live</Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="text-slate-700">Revenue Growth</span>
                      <span className="text-green-600 font-semibold">+247%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="text-slate-700">User Engagement</span>
                      <span className="text-blue-600 font-semibold">+180%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="text-slate-700">Operational Efficiency</span>
                      <span className="text-purple-600 font-semibold">+65%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-slate-500 mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((logo, index) => (
              <div key={index} className="text-2xl font-bold text-slate-400">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Enterprise-Grade Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We specialize in building mission-critical software that scales with your business and delivers measurable ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-indigo-200">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="group/btn text-indigo-600 hover:text-indigo-700 p-0">
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Proven Results That Matter
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our solutions don't just work—they transform businesses and create lasting competitive advantages.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-slate-200 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                <CardHeader className="pb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-lg text-slate-900">{study.company}</CardTitle>
                  <p className="text-indigo-600 font-medium">{study.project}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">{study.description}</p>
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <div className="text-2xl font-bold text-green-600">{study.result}</div>
                    <div className="text-sm text-slate-500">{study.metric}</div>
                  </div>
                  <Button variant="ghost" className="group/btn text-indigo-600 hover:text-indigo-700 p-0 mt-4">
                    View full case study
                    <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Our Proven Methodology
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A battle-tested approach that minimizes risk and maximizes value delivery at every stage.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="group">
                <div className="flex flex-col md:flex-row items-start gap-6 p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              What Leaders Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="space-y-6 p-0">
                  <Quote className="w-8 h-8 text-indigo-500" />
                  <blockquote className="text-lg text-slate-700 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.author}</div>
                      <div className="text-sm text-slate-600">{testimonial.title}</div>
                      <div className="text-sm text-slate-500">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-slate-900">
                  Built by Engineers, Led by Strategy
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  We're not just developers—we're strategic partners who understand that great software is about solving business problems, not just writing code.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <Users className="w-8 h-8 text-indigo-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-slate-900">50+</div>
                  <div className="text-sm text-slate-600">Expert Engineers</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <Zap className="w-8 h-8 text-indigo-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-slate-900">12</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">ISO 27001 certified security practices</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Agile methodology with proven frameworks</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">24/7 support and maintenance included</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <Star className="w-6 h-6 text-yellow-500 mb-2" />
                    <div className="text-sm font-medium text-slate-900">Industry Recognition</div>
                    <div className="text-xs text-slate-600">Top Software Development Company 2024</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <Shield className="w-6 h-6 text-green-500 mb-2" />
                    <div className="text-sm font-medium text-slate-900">Security First</div>
                    <div className="text-xs text-slate-600">Enterprise-grade security standards</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <Rocket className="w-6 h-6 text-indigo-500 mb-2" />
                    <div className="text-sm font-medium text-slate-900">Innovation Focus</div>
                    <div className="text-xs text-slate-600">Cutting-edge technology stack</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <Users className="w-6 h-6 text-purple-500 mb-2" />
                    <div className="text-sm font-medium text-slate-900">Client Partnership</div>
                    <div className="text-xs text-slate-600">Long-term strategic relationships</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how custom software can drive your next phase of growth. Schedule a strategic consultation with our team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="group bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 text-lg font-semibold">
                <span className="flex items-center gap-2">
                  Schedule Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button size="lg" variant="outline" className="group border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg font-semibold">
                Download Case Studies
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8 text-indigo-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Strategic insights included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Nexus Labs</span>
              </div>
              <p className="text-slate-400">
                Transforming businesses through strategic software development.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <div className="space-y-2 text-slate-400">
                <div>Web Applications</div>
                <div>Mobile Development</div>
                <div>Digital Transformation</div>
                <div>Enterprise Software</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <div className="space-y-2 text-slate-400">
                <div>About Us</div>
                <div>Case Studies</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-slate-400">
                <div>hello@nexuslabs.com</div>
                <div>+1 (555) 123-4567</div>
                <div>San Francisco, CA</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Nexus Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;