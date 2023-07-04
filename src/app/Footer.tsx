import Image from 'next/image';
import Link from 'next/link';
import Logo from '~/logo-2.svg';

const Footer = () => {
  return (
    <footer className="mx-auto my-24 grid w-full max-w-5xl grid-cols-1 gap-2 gap-y-14 px-4 text-white/60 max-sm:text-center md:grid-cols-4">
      <div className="flex flex-col max-sm:items-center">
        <Image alt="Collosal" src={Logo} />
        <span className="mt-5">Copyright © 2021</span>
        <span className="mt-2">Design By Collosal LLC</span>
      </div>
      <div className="flex flex-col gap-[10px]">
        <h3 className="mb-2 text-sm tracking-[1.4px] text-white">SERVICES</h3>
        <Link href="#">Web Development</Link>
        <Link href="#">App Development</Link>
        <Link href="#">UI Design</Link>
        <Link href="#">Consultation</Link>
        <Link href="#">Maintenance</Link>
      </div>
      <div className="flex flex-col gap-[10px]">
        <h3 className="mb-2 text-sm tracking-[1.4px] text-white">COMPANY</h3>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
        <Link href="#">Send Quote</Link>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Term of Service</Link>
        <Link href="#">Jobs</Link>
      </div>
      <div className="flex flex-col gap-[10px]">
        <h3 className="mb-2 text-sm tracking-[1.4px] text-white">RESOURCES</h3>
        <Link href="#">Support</Link>
        <Link href="#">Documentation</Link>
        <Link href="#">License</Link>
        <Link href="#">Sitemap</Link>
      </div>
    </footer>
  );
};

export default Footer;
