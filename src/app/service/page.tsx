import SectionDevelopment from './SectionDevelopment';
import SectionTitle from './SectionTitle';
import SectionUiDesign from './SectionUiDesign';

const page = () => {
  return (
    <main className="px-4">
      <SectionTitle />
      <SectionUiDesign />
      <SectionDevelopment />
    </main>
  );
};

export default page;
