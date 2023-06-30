import type { NextPage } from 'next';
import SectionHero from './SectionHero';
import SectionFeatures from './SectionFeatures';

const Home: NextPage = () => {
  return (
    <main className="px-4">
      <SectionHero />
      <SectionFeatures />
    </main>
  );
};

export default Home;
