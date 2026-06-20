import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { siteConfig } from '../../data/site';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information when you use our education advisory services.`,
  alternates: { canonical: "https://youronlinemba.com/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="space-y-3 text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm font-medium">
            Last updated: January 2026
          </p>
        </div>

        <div className="border-t border-gray-100 pt-10 space-y-8 text-slate-600 text-sm md:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">1. Introduction</h2>
            <p>
              {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p>
              By accessing or using our platform, you agree to the terms of this Privacy Policy. If you do not agree, please do not use our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 font-medium">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and other details you provide through our counselling or enquiry forms.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring URLs.</li>
              <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 font-medium">
              <li>To provide personalised career counselling and guidance.</li>
              <li>To match you with suitable programs and universities.</li>
              <li>To communicate with you regarding your enquiries and requests.</li>
              <li>To improve our website, services, and user experience.</li>
              <li>To send relevant updates, offers, and educational content (with your consent).</li>
              <li>To comply with legal obligations and prevent fraudulent activities.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">4. Data Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your data with:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-medium">
              <li>Partner universities and educational institutions (only with your explicit consent).</li>
              <li>Service providers who assist us in operating our website and delivering services.</li>
              <li>Legal authorities when required by applicable law or to protect our rights.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">5. Data Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 font-medium">
              <li>Access, update, or delete your personal information.</li>
              <li>Withdraw consent at any time where we rely on your consent to process your data.</li>
              <li>Request a copy of the data we hold about you.</li>
              <li>Lodge a complaint with a data protection authority.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">7. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings. Please note that some features of the site may not function properly without cookies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">9. Changes to This Policy</h2>
            <p>
              We reserve the right to update or modify this Privacy Policy at any time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#1E293B]">10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
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
