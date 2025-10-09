import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Target, Eye, Heart, Award } from 'lucide-react';
import founderImage from '@/assets/founder.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Accuracy',
      description: 'Every data point matters. We ensure precision in every survey and analysis.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Transparent, honest reporting that organizations can trust for critical decisions.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Leveraging modern technology and methodologies to deliver superior results.'
    },
    {
      icon: Eye,
      title: 'Commitment',
      description: 'Dedicated to delivering impactful solutions that drive positive change.'
    }
  ];

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      {/* Hero Section */}
      <section className='section-padding bg-gradient-to-r from-primary to-primary-light'>
        <div className='container-custom text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>About Trimurtione</h1>
          <p className='text-lg md:text-xl text-white/90 max-w-3xl mx-auto'>
            Building trust through accurate data and innovative engineering solutions
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className='section-padding'>
        <div className='container-custom'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>Who We Are</h2>
              <div className='space-y-4 text-muted-foreground leading-relaxed'>
                <p>
                  Trimurtione Data and Engineering Services is a dynamic organization based in Pune, Maharashtra, specializing in field
                  surveys, data collection, and electrical engineering projects across India.
                </p>
                <p>
                  Founded by <span className='font-semibold text-foreground'>Suraksha Jadhav</span>, our company has established a
                  reputation for delivering accurate, transparent, and actionable insights to government agencies, private companies, NGOs,
                  and social organizations.
                </p>
                <p>
                  We combine on-ground field experience with technical expertise to tackle complex challenges in data collection, analysis,
                  and electrical infrastructure development.
                </p>
              </div>
            </div>
            <div className='relative'>
              <div className='aspect-square rounded-2xl overflow-hidden shadow-xl'>
                <img
                  src='https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80'
                  alt='Team conducting field survey in rural India'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className='section-padding bg-muted'>
        <div className='container-custom'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
            <div className='bg-card rounded-xl p-8 shadow-md border border-border'>
              <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
                <Target className='h-6 w-6 text-primary' />
              </div>
              <h3 className='text-2xl font-bold mb-4'>Our Mission</h3>
              <p className='text-muted-foreground leading-relaxed'>
                To provide reliable field survey, data analytics, and electrical engineering services that empower organizations to make
                informed, impactful decisions for sustainable development.
              </p>
            </div>
            <div className='bg-card rounded-xl p-8 shadow-md border border-border'>
              <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
                <Eye className='h-6 w-6 text-primary' />
              </div>
              <h3 className='text-2xl font-bold mb-4'>Our Vision</h3>
              <p className='text-muted-foreground leading-relaxed'>
                To become India's most trusted partner for field data solutions and electrical engineering, known for accuracy, innovation,
                and commitment to excellence.
              </p>
            </div>
          </div>

          <div>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>Our Core Values</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className='text-center'>
                    <div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4'>
                      <Icon className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='text-xl font-semibold mb-3'>{value.title}</h3>
                    <p className='text-muted-foreground text-sm'>{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className='section-padding'>
        <div className='container-custom'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>Our Journey</h2>
            <div className='space-y-6 text-muted-foreground leading-relaxed'>
              <p>
                Trimurtione Data and Engineering Services began with a vision to bridge the gap between field-level data collection and
                actionable insights. Our early projects focused on CSR initiatives, agricultural surveys, and insurance field assessments,
                where accuracy and transparency were paramount.
              </p>
              <p>
                As we grew, we recognized the need for integrated engineering solutions in rural and semi-urban areas. This led us to expand
                into electrical engineering — offering load surveys, solar energy projects, rural electrification support, and electrical
                design services.
              </p>
              <p>
                Today, Trimurtione stands at the intersection of data and engineering, serving diverse clients with tailored solutions that
                combine technical precision with real-world impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className='section-padding bg-muted'>
        <div className='container-custom'>
          <div className='max-w-4xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
              <div className='md:col-span-1'>
                <div className='aspect-square rounded-2xl overflow-hidden shadow-xl'>
                  <img
                    src={founderImage}
                    alt='Suraksha Jadhav, Founder of Trimurtione Data and Engineering Services'
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
              <div className='md:col-span-2'>
                <h2 className='text-3xl font-bold mb-4'>Meet Our Founder</h2>
                <h3 className='text-xl font-semibold text-primary mb-4'>Suraksha Jadhav</h3>
                <div className='space-y-4 text-muted-foreground leading-relaxed'>
                  <p>
                    Suraksha Jadhav is the driving force behind Trimurtione Data and Engineering Services. With a background in field
                    operations and a passion for technical innovation, Suraksha established the company to address the critical need for
                    accurate data and reliable engineering solutions in India.
                  </p>
                  <p>
                    Under her leadership, Trimurtione has executed numerous successful projects spanning CSR surveys, agricultural data
                    collection, and electrical infrastructure development. Her commitment to integrity, precision, and social impact
                    continues to guide the company's growth and vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title='Want to Work With Us?'
        description='Discover how our expertise can help your organization achieve its goals.'
        primaryButtonText='Explore Services'
        primaryButtonLink='/services'
        secondaryButtonText='Contact Us'
        secondaryButtonLink='/contact'
      />

      <Footer />
    </div>
  );
};

export default About;

