import SectionBadge from '@/components/SectionBadge';

const TosPage = () => {
  return (
    <main className="mx-auto max-w-5xl px-4">
      <section className="border-b border-white/10 py-24 text-center">
        <SectionBadge>PAGE</SectionBadge>
        <p className="mx-auto mt-3 w-full max-w-lg text-2xl font-bold leading-10 sm:text-4xl sm:leading-[54px]">
          Terms & Conditions
        </p>
        <p className="mt-6 text-sm text-white/60">Updated at 2021-05-06</p>
      </section>

      <section className="prose prose-invert mx-auto max-w-[674px] py-24 prose-p:mb-10">
        <p>
          By accessing and placing an order with Collosal, you confirm that you
          are in agreement with and bound by the terms of service contained in
          the Terms & Conditions outlined below. These terms apply to the entire
          website and any email or other type of communication between you and
          Collosal.
        </p>
        <p>
          Under no circumstances shall Collosal team be liable for any direct,
          indirect, special, incidental or consequential damages, including, but
          not limited to, loss of data or profit, arising out of the use, or the
          inability to use, the materials on this site, even if Collosal team or
          an authorized representative has been advised of the possibility of
          such damages. If your use of materials from this site results in the
          need for servicing, repair or correction of equipment or data, you
          assume any costs thereof.
        </p>
        <p>
          Collosal will not be responsible for any outcome that may occur during
          the course of usage of our resources. We reserve the rights to change
          prices and revise the resources usage policy in any moment.
        </p>
        <h2>License</h2>
        <p>
          Collosal grants you a revocable, non-exclusive, non- transferable,
          limited license to download, install and use the website strictly in
          accordance with the terms of this Agreement.
        </p>
        <p>
          These Terms & Conditions are a contract between you and Collosal
          grants you a revocable, non-exclusive, non- transferable, limited
          license to download, install and use the website strictly in
          accordance with the terms of this Agreement.
        </p>
      </section>
    </main>
  );
};

export default TosPage;
