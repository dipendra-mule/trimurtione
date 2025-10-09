import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { CheckCircle, Database, Zap, Target, Shield, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/hero-two.png';

const Index = () => {
  const services = [
    {
      icon: Database,
      title: 'Field Survey Projects',
      description: 'Comprehensive CSR, agriculture, insurance, and health surveys with precision data collection across India.'
    },
    // {
    //   icon: TrendingUp,
    //   title: 'Data & Reporting Services',
    //   description: 'Advanced data cleaning, GIS mapping, interactive dashboards, and actionable analytics for informed decisions.'
    // },
    {
      icon: Zap,
      title: 'Electrical Engineering',
      description: 'Load surveys, rural electrification, solar energy projects, and electrical design with cutting-edge expertise.'
    }
  ];

  const features = [
    {
      icon: Target,
      title: 'Proven Experience',
      description: '10+ successful CSR projects and 2000+ field surveys completed nationwide.'
    },
    {
      icon: Shield,
      title: 'Transparency & Integrity',
      description: 'We deliver honest, accurate, and reliable data you can trust for critical decisions.'
    },
    {
      icon: CheckCircle,
      title: 'Cost-Effective Solutions',
      description: 'High-quality services that maximize value without compromising on excellence.'
    }
  ];

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      {/* Hero Section */}
      <section className='relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <img
            src={heroImage}
            alt='Field survey and electrical engineering work in rural India'
            className='w-full h-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite]'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-primary/30' />
          <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary/50' />
        </div>

        <div className='container-custom relative z-10 px-4 md:px-6'>
          <div className='max-w-3xl'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight fade-in'>
              Reliable Field Survey and Engineering Solutions You Can Trust
            </h1>
            <p className='text-lg md:text-xl text-white/90 mb-8 slide-in-left [animation-delay:200ms]'>
              From data collection to electrical infrastructure — we deliver precise, transparent, and impactful results for organizations
              across India.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 scale-in [animation-delay:400ms]'>
              <Link to='/services' className='btn-primary'>
                Explore Our Services
              </Link>
              <Link to='/contact' className='btn-accent'>
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Intro Section */}
      <section className='section-padding bg-gradient-to-b from-muted/50 to-background'>
        <div className='container-custom'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 gradient-text bg-size-300% animate-gradient'>
              Delivering Accurate Data for Every Decision
            </h2>
            <p className='text-lg text-muted-foreground leading-relaxed fade-in'>
              Trimurtione Data and Engineering Services specializes in field surveys, data analytics, and electrical engineering. Founded by{' '}
              <span className='font-semibold text-primary'>Suraksha Jadhav</span> in Pune, Maharashtra, we combine technical expertise with
              on-ground experience to serve government agencies, private companies, and social organizations nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className='section-padding bg-gradient-to-b from-background to-muted/20'>
        <div className='container-custom'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 gradient-text bg-size-300% animate-gradient'>Our Core Services</h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto fade-in'>Comprehensive solutions from field to finish</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 align-middle'>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className='bg-card rounded-xl p-6 shadow-md border border-border card-hover relative overflow-hidden group'
                  style={{ animationDelay: `${index * 150}ms` }}>
                  <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent-green/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700' />
                  <div className='relative z-10'>
                    <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent-green flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-500'>
                      <Icon className='h-6 w-6 text-white' />
                    </div>
                    <h3 className='text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300'>{service.title}</h3>
                    <p className='text-muted-foreground'>{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className='text-center mt-10 scale-in'>
            <Link to='/services' className='btn-primary'>
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='section-padding bg-gradient-to-b from-muted/30 to-background'>
        <div className='container-custom'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 gradient-text bg-size-300% animate-gradient'>Why Choose Trimurtione?</h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto fade-in'>Precision you can depend on</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className='text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group'
                  style={{ animationDelay: `${index * 100}ms` }}>
                  <div className='w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent-green/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-md'>
                    <Icon className='h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-500' />
                  </div>
                  <h3 className='text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300'>{feature.title}</h3>
                  <p className='text-muted-foreground'>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title='Ready to Start Your Project?'
        description="Let's discuss how we can help you achieve accurate data collection and reliable engineering solutions."
        primaryButtonText='Get in Touch'
        primaryButtonLink='/contact'
        secondaryButtonText='Learn More'
        secondaryButtonLink='/about'
      />

      <Footer />
    </div>
  );
};

export default Index;

