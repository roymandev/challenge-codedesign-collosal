import type { NextPage } from 'next';
import SectionHero from './SectionHero';
import SectionFeatures from './SectionFeatures';
import SectionPartners from './SectionPartners';
import SectionHowWeWork from './SectionHowWeWork';
import SectionOurTeam from './SectionOurTeam';

const Home: NextPage = () => {
  return (
    <main className="px-4">
      <SectionHero />
      <SectionFeatures />
      <SectionPartners />
      <SectionHowWeWork />
      <SectionOurTeam />
    </main>
  );
};

export default Home;
