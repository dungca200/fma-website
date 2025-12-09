import Link from "next/link";
import Image from "next/image";
import { Facebook, Phone, MapPin, Clock } from "lucide-react";
import { Container } from "./container";
import { SCHOOL, CONTACT, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="bg-gradient-to-b from-slate-800 to-slate-900">
        <Container className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/10">
                  <Image
                    src="/images/logo.png"
                    alt={SCHOOL.shortName}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {SCHOOL.shortName}
                  </h3>
                  <p className="text-xs text-blue-300">Est. 2004</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {SCHOOL.tagline}
              </p>
              <div className="flex gap-3">
                <a
                  href={CONTACT.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/10 hover:bg-blue-500 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-blue-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href={`tel:${CONTACT.phone.mobile}`}
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/10 hover:bg-blue-500 transition-all duration-300"
                  aria-label="Call Us"
                >
                  <Phone className="h-5 w-5 text-blue-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white mb-5">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-sm text-slate-400 hover:text-blue-300 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mr-3 group-hover:bg-blue-400 transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white mb-5">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mt-0.5">
                    <MapPin className="h-4 w-4 text-blue-400" />
                  </div>
                  <div className="text-sm text-slate-400 leading-relaxed">
                    <p>{CONTACT.address.line1}</p>
                    <p>{CONTACT.address.line2}</p>
                    <p>{CONTACT.address.city}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-blue-400" />
                  </div>
                  <div className="text-sm text-slate-400">
                    <p>{CONTACT.phone.landline1}</p>
                    <p>{CONTACT.phone.mobile}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Facebook className="h-4 w-4 text-blue-400" />
                  </div>
                  <a
                    href={CONTACT.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-blue-300 transition-colors"
                  >
                    Facebook Page
                  </a>
                </li>
              </ul>
            </div>

            {/* School Hours */}
            <div>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white mb-5">
                School Hours
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Clock className="h-4 w-4 text-blue-400" />
                  </div>
                  <div className="text-sm text-slate-400">
                    <p className="font-medium text-slate-300">Monday - Friday</p>
                    <p>7:30 AM - 4:00 PM</p>
                  </div>
                </div>
                <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-blue-600/10 border border-blue-500/20">
                  <p className="text-sm font-medium text-blue-300">
                    Enrollment Now Open
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    SY 2025-2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <Container className="py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
            <p className="text-slate-500">
              &copy; {currentYear} {SCHOOL.fullName}. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-slate-500">
              <p className="flex items-center gap-2">
                <span className="text-slate-600">DepEd ID:</span>
                <span className="text-blue-400 font-mono text-xs">{SCHOOL.depedId}</span>
              </p>
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              <p className="text-slate-600">CEdNet Member</p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
