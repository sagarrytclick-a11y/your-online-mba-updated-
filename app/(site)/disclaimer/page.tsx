import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { siteConfig } from '../../data/site';

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Disclaimer for ${siteConfig.name} - an independent education advisory platform. We are not a university and do not award degrees.`,
  alternates: { canonical: "https://youronlinemba.com/disclaimer" },
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        <div className="space-y-3 text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B] tracking-tight">
            Disclaimer
          </h1>
          <p className="text-slate-500 text-sm font-medium">
            Last updated: January 2026
          </p>
        </div>

        <div className="border-t border-gray-100 pt-10 space-y-8 text-slate-600 text-sm md:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">1. General Information</h2>
            <p>
              The information provided on the {siteConfig.name} website is for general informational and educational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on the website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">2. Not a University</h2>
            <p className="font-semibold text-slate-700 bg-[#FFF1F2] p-4 rounded-xl border border-[#C81E3D]/10">
              {siteConfig.name} is an independent education advisory platform and is not a university, college, or educational institution. We do not award degrees, diplomas, or certifications. All academic credentials are provided solely by the respective partner universities and institutions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">3. No Guarantee of Outcomes</h2>
            <p>
              While we provide career counselling and program recommendations, we do not guarantee:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-medium">
              <li>Admission to any specific program or university.</li>
              <li>Placement, employment, or salary outcomes after completing a program.</li>
              <li>Visa approval or study abroad clearance.</li>
              <li>The accuracy of fee structures, eligibility criteria, or program details provided by third parties.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">4. External Links</h2>
            <p>
              Our website may contain links to external websites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility for their practices or privacy policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">5. Professional Advice</h2>
            <p>
              The information on this website should not be construed as professional, legal, or financial advice. You should consult with appropriate professionals for advice specific to your situation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">6. Limitation of Liability</h2>
            <p>
              In no event shall {siteConfig.name} be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising out of or in connection with the use of this website or the information provided herein.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">7. Changes to This Disclaimer</h2>
            <p>
              We reserve the right to update or modify this disclaimer at any time without prior notice. Changes will be effective immediately upon posting on this page. We encourage you to review this page periodically.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">8. Contact Us</h2>
            <p>
              If you have any questions about this disclaimer, please contact us:
            </p>
            <div className="bg-[#F8FAFC] p-6 rounded-xl border border-gray-100 space-y-2 font-medium">
              <p>Email: <a href={`mailto:${siteConfig.email}`} className="text-[#C81E3D] hover:underline">{siteConfig.email}</a></p>
              <p>Phone: <a href={`tel:${siteConfig.phone}`} className="text-[#C81E3D] hover:underline">{siteConfig.phoneDisplay}</a></p>
              <p>Address: {siteConfig.address}, {siteConfig.city}, {siteConfig.state}, {siteConfig.country}</p>
            </div>
          </section>

        </div>

        <div className="border-t border-gray-100 pt-8 text-center">
          <Link href="/" className="text-[#C81E3D] font-bold hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
