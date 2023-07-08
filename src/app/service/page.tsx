import SectionDevelopment from './SectionDevelopment';
import SectionMaintance from './SectionMaintance';
import SectionTitle from './SectionTitle';
import SectionUiDesign from './SectionUiDesign';

const page = () => {
  return (
    <main className="px-4">
      <SectionTitle />
      <SectionUiDesign />
      <SectionDevelopment />
      <SectionMaintance />
    </main>
  );
};

export default page;
