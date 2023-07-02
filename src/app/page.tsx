import type { NextPage } from 'next';
import SectionHero from './SectionHero';
import SectionFeatures from './SectionFeatures';
import SectionPartners from './SectionPartners';
import SectionHowWeWork from './SectionHowWeWork';
import SectionOurTeam from './SectionOurTeam';
import SectionProjects from './SectionProjects';
import SectionGetStarted from './SectionGetStarted';
import SectionTestimonial from './SectionTestimonial';

const Home: NextPage = () => {
  return (
    <main className="px-4">
      <SectionHero />
      <SectionFeatures />
      <SectionPartners />
      <SectionHowWeWork />
      <SectionOurTeam />
      <SectionProjects />
      <SectionGetStarted />
      <SectionTestimonial />
    </main>
  );
};

export default Home;
