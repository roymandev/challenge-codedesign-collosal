import LogoGithub from '~/logo-github.svg';
import LogoForbes from '~/logo-forbes.svg';
import LogoGoogle from '~/logo-google.svg';
import LogoMicrosoft from '~/logo-microsoft.svg';
import LogoFacebook from '~/logo-facebook.svg';
import Image from 'next/image';

const PARTNERS = [
  LogoGithub,
  LogoForbes,
  LogoGoogle,
  LogoMicrosoft,
  LogoFacebook,
];

const SectionPartners = () => {
  return (
    <section className="mx-auto my-[60px] flex w-full max-w-5xl items-center justify-center gap-11 border-y border-white/10 py-8">
      {PARTNERS.map((partner, index) => (
        <Image alt="" key={index} src={partner} />
      ))}
    </section>
  );
};

export default SectionPartners;
