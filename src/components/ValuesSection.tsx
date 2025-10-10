import React from 'react';
import { Sprout, FlaskConicalIcon, HeartPulse, Users, Wheat, Globe2 } from 'lucide-react';

const ValuesSection = () => {
  const values = [
    {
      icon: Sprout,
      title: 'Crop Loss Survey (CLS)',
      description: 'Accurate field surveys to assess and validate crop loss for insurance and government programs.'
    },
    {
      icon: FlaskConicalIcon,
      title: 'Research and Development',
      description: 'Supporting data-driven research initiatives through structured field data collection and analysis.'
    },
    {
      icon: HeartPulse,
      title: 'Health and Wealth Projects',
      description: 'Gathering critical insights for programs focused on community health and financial well-being.'
    },
    {
      icon: Users,
      title: 'Women Empowerment Studies',
      description: 'Surveying and analyzing data to measure impact and participation in women-centric initiatives.'
    },
    {
      icon: Wheat,
      title: 'Agricultural and Crop Cutting Experiments (CCE)',
      description: 'Field-level experiments and data collection to support accurate yield estimation and analysis.'
    },
    {
      icon: Globe2,
      title: 'CSR (Corporate Social Responsibility) Surveys',
      description: 'Conducting baseline and impact assessment surveys to measure CSR project effectiveness.'
    }
  ];

  return (
    <section className='py-20 bg-background text-foreground'>
      <div className='container-custom'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Our Core Values</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Empowering organizations through accurate field data, impactful research, and measurable outcomes.
          </p>
        </div>

        {/* Values Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className='p-8 rounded-2xl bg-card shadow-sm hover:shadow-lg transition-all text-center border border-border hover:translate-y-[-4px]'>
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
    </section>
  );
};

export default ValuesSection;

