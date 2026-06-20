import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { siteConfig } from '../../data/site';

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Terms and Conditions for ${siteConfig.name}. Please read these terms carefully before using our education advisory platform and services.`,
  alternates: { canonical: "https://youronlinemba.com/terms-and-conditions" },
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        <div className="space-y-3 text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B] tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-slate-500 text-sm font-medium">
            Last updated: January 2026
          </p>
        </div>

        <div className="border-t border-gray-100 pt-10 space-y-8 text-slate-600 text-sm md:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the {siteConfig.name} website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our platform or services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">2. Description of Services</h2>
            <p>
              {siteConfig.name} is an independent education advisory platform that connects learners with universities and educational programs. We provide:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-medium">
              <li>Career counselling and guidance services.</li>
              <li>University and program recommendations.</li>
              <li>Application and enrolment support.</li>
              <li>Information about educational programs, fees, and eligibility.</li>
            </ul>
            <p className="font-semibold text-slate-700">
              {siteConfig.name} is not a university and does not award degrees or certifications. All academic credentials are awarded by the respective partner institutions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">3. User Responsibilities</h2>
            <p>As a user of our platform, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2 font-medium">
              <li>Provide accurate, current, and complete information when using our services.</li>
              <li>Use the platform only for lawful purposes and in accordance with applicable laws.</li>
              <li>Not misuse the platform by introducing viruses, malware, or harmful code.</li>
              <li>Not attempt to gain unauthorised access to any part of the platform.</li>
              <li>Not copy, reproduce, or distribute any content from the platform without permission.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of {siteConfig.name} or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">5. Limitation of Liability</h2>
            <p>
              {siteConfig.name} and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the platform. We make no warranties regarding the accuracy, completeness, or reliability of any information provided on the site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">6. Third-Party Links and Services</h2>
            <p>
              Our platform may contain links to third-party websites or services that are not owned or controlled by {siteConfig.name}. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">7. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless {siteConfig.name}, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising out of your use of the platform or violation of these terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">8. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to our platform at any time, without prior notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users, third parties, or us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">9. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in {siteConfig.city}, {siteConfig.state}.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated revision date. Continued use of the platform after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">11. Contact Information</h2>
            <p>
              For any questions or concerns regarding these Terms and Conditions, please contact us:
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
