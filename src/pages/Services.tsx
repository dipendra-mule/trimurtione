import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { FileText, BarChart3, Zap, MapPin, Sun, Calculator } from "lucide-react";

const Services = () => {
  const fieldSurveyServices = [
    "CSR and social impact surveys",
    "Agriculture and PMFBY crop cutting experiments",
    "Insurance field assessments",
    "Health and wellness surveys",
    "Community needs assessments",
  ];

  const dataServices = [
    "Data cleaning and validation",
    "GIS mapping and spatial analysis",
    "Interactive dashboards and reporting",
    "Statistical analysis and insights",
    "Database management",
  ];

  const engineeringServices = [
    "Electrical load surveys and audits",
    "Rural electrification planning",
    "Solar energy project design",
    "Electrical system design and estimation",
    "Infrastructure development support",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-light">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            From Data to Engineering — We Deliver Results You Can Measure
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Solutions for Every Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer end-to-end services across field surveys, data analytics, and electrical engineering
            </p>
          </div>

          {/* Field Survey Projects */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                    <FileText className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold">Field Survey Projects</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our field survey services provide accurate, on-ground data collection across diverse sectors. 
                  We specialize in CSR initiatives, agricultural assessments, insurance surveys, and community studies 
                  that deliver actionable insights for informed decision-making.
                </p>
                <ul className="space-y-3">
                  {fieldSurveyServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80"
                    alt="Field survey team collecting data in rural area"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Data & Reporting Services */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                    alt="Data analytics dashboard with charts and graphs"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                    <BarChart3 className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold">Data & Reporting Services</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Transform raw data into powerful insights with our comprehensive data services. From cleaning 
                  and validation to advanced GIS mapping and interactive dashboards, we help you visualize and 
                  understand your data for strategic decision-making.
                </p>
                <ul className="space-y-3">
                  {dataServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <BarChart3 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Electrical Engineering Projects */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                    <Zap className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold">Electrical Engineering Projects</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our electrical engineering services bring modern, sustainable infrastructure to communities 
                  and businesses. From load surveys and audits to solar energy projects and rural electrification, 
                  we design and support solutions that power progress.
                </p>
                <ul className="space-y-3">
                  {engineeringServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <Zap className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
                    alt="Solar panels and electrical infrastructure"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Trimurtione Services?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience, expertise, and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-md border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Sun className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">10+ Successful Projects</h3>
              <p className="text-muted-foreground">
                Proven track record in CSR surveys, agricultural data, and engineering solutions
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-md border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2000+ Field Surveys</h3>
              <p className="text-muted-foreground">
                Extensive experience in data collection across diverse geographies and sectors
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-md border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Nationwide Coverage</h3>
              <p className="text-muted-foreground">
                Serving clients across India with local expertise and national reach
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Collaborate?"
        description="Let's discuss how our services can help you achieve accurate data collection and reliable engineering solutions."
        primaryButtonText="Request Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn About Us"
        secondaryButtonLink="/about"
      />

      <Footer />
    </div>
  );
};

export default Services;
