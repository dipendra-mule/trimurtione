import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { FileText, Zap, MapPin, Sun, Calculator, Sprout, HeartPulse, Users, Wheat, Globe2, FlaskConicalIcon } from 'lucide-react';
import fieldImage from '@/assets/field-survey-team.png';

const Services = () => {
  const values = [
    {
      icon: Sprout, // you can replace with a relevant icon like Leaf or Tree if Sprout isn’t available
      title: 'Crop Loss Survey (CLS)',
      description: 'Accurate field surveys to assess and validate crop loss for insurance and government programs.'
    },
    {
      icon: FlaskConicalIcon, // or use Beaker / Microscope
      title: 'Research and Development',
      description: 'Supporting data-driven research initiatives through structured field data collection and analysis.'
    },
    {
      icon: HeartPulse, // or Heart if you prefer simpler
      title: 'Health and Wealth Projects',
      description: 'Gathering critical insights for programs focused on community health and financial well-being.'
    },
    {
      icon: Users, // or UserCheck
      title: 'Women Empowerment Studies',
      description: 'Surveying and analyzing data to measure impact and participation in women-centric initiatives.'
    },
    {
      icon: Wheat, // or Leaf / BarChart3
      title: 'Agricultural and Crop Cutting Experiments (CCE)',
      description: 'Field-level experiments and data collection to support accurate yield estimation and analysis.'
    },
    {
      icon: Globe2, // or Building2
      title: 'CSR (Corporate Social Responsibility) Surveys',
      description: 'Conducting baseline and impact assessment surveys to measure CSR project effectiveness.'
    }
  ];

  const fieldSurveyServices = [
    'CSR and social impact surveys',
    'Agriculture and PMFBY crop cutting experiments',
    'Insurance field assessments',
    'Health and wellness surveys',
    'Community needs assessments'
  ];

  // const dataServices = [
  //   'Data cleaning and validation',
  //   'GIS mapping and spatial analysis',
  //   'Interactive dashboards and reporting',
  //   'Statistical analysis and insights',
  //   'Database management'
  // ];

  const engineeringServices = [
    'Electrical load surveys and audits',
    'Rural electrification planning',
    'Solar energy project design',
    'Electrical system design and estimation',
    'Infrastructure development support'
  ];

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      {/* Hero Section */}
      <section className='section-padding bg-gradient-to-r from-primary to-primary-light'>
        <div className='container-custom text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>Our Services</h1>
          <p className='text-lg md:text-xl text-white/90 max-w-3xl mx-auto'>
            From Data to Engineering — We Deliver Results You Can Measure
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className='py-24 bg-background text-foreground'>
        <div className='container-custom'>
          {/* Header */}
          <div className='text-center mb-20'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 tracking-tight'>Comprehensive Solutions for Every Need</h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              We offer end-to-end services across field surveys, data analytics, and electrical engineering.
            </p>
          </div>

          {/* Field Survey Projects */}
          <div className='mb-24'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              {/* Text Section */}
              <div>
                <div className='flex items-center mb-6'>
                  <div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mr-4'>
                    <FileText className='h-7 w-7 text-primary' />
                  </div>
                  <h3 className='text-3xl font-bold'>Field Survey Projects</h3>
                </div>
                <p className='text-muted-foreground mb-6 leading-relaxed'>
                  Our field survey services provide accurate, on-ground data collection across diverse sectors. We specialize in CSR
                  initiatives, agricultural assessments, insurance surveys, and community studies that deliver actionable insights for
                  informed decision-making.
                </p>
                <ul className='space-y-3'>
                  {fieldSurveyServices.map((service, index) => (
                    <li key={index} className='flex items-start'>
                      <MapPin className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Section */}
              <div className='relative group'>
                <div className='aspect-video rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]'>
                  <img src={fieldImage} alt='Field survey team collecting data in rural area' className='w-full h-full object-cover' />
                </div>
              </div>
            </div>
          </div>

          {/* Electrical Engineering Projects */}
          <div className='mb-24'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              {/* Text Section */}
              <div>
                <div className='flex items-center mb-6'>
                  <div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mr-4'>
                    <Zap className='h-7 w-7 text-primary' />
                  </div>
                  <h3 className='text-3xl font-bold'>Electrical Engineering Projects</h3>
                </div>
                <p className='text-muted-foreground mb-6 leading-relaxed'>
                  Our electrical engineering services bring modern, sustainable infrastructure to communities and businesses. From load
                  surveys and audits to solar energy projects and rural electrification, we design and support solutions that power
                  progress.
                </p>
                <ul className='space-y-3'>
                  {engineeringServices.map((service, index) => (
                    <li key={index} className='flex items-start'>
                      <Zap className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Section */}
              <div className='relative group'>
                <div className='aspect-video rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]'>
                  <img
                    src='https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80'
                    alt='Solar panels and electrical infrastructure'
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className='my-16 border-muted' />

          {/* Core Values */}
          <div>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-14'>Our Core Values</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className='p-8 rounded-2xl bg-card shadow-sm hover:shadow-lg transition-all text-center border border-border'>
                    <div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5'>
                      <Icon className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='text-xl font-semibold mb-3'>{value.title}</h3>
                    <p className='text-muted-foreground text-sm leading-relaxed'>{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className='section-padding bg-muted'>
        <div className='container-custom'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>Why Choose Trimurtione Services?</h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>Experience, expertise, and commitment to excellence</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-card rounded-xl p-6 shadow-md border border-border'>
              <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
                <Sun className='h-6 w-6 text-primary' />
              </div>
              <h3 className='text-xl font-semibold mb-3'>10+ Successful Projects</h3>
              <p className='text-muted-foreground'>Proven track record in CSR surveys, agricultural data, and engineering solutions</p>
            </div>

            <div className='bg-card rounded-xl p-6 shadow-md border border-border'>
              <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
                <Calculator className='h-6 w-6 text-primary' />
              </div>
              <h3 className='text-xl font-semibold mb-3'>3,00,000+ Field Surveys Completed</h3>
              <p className='text-muted-foreground'>Extensive experience in data collection across diverse geographies and sectors</p>
            </div>

            <div className='bg-card rounded-xl p-6 shadow-md border border-border'>
              <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
                <MapPin className='h-6 w-6 text-primary' />
              </div>
              <h3 className='text-xl font-semibold mb-3'>Nationwide Coverage</h3>
              <p className='text-muted-foreground'>Serving clients across India with local expertise and national reach</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title='Ready to Collaborate?'
        description="Let's discuss how our services can help you achieve accurate data collection and reliable engineering solutions."
        primaryButtonText='Request Consultation'
        primaryButtonLink='/contact'
        secondaryButtonText='Learn About Us'
        secondaryButtonLink='/about'
      />

      <Footer />
    </div>
  );
};

export default Services;

