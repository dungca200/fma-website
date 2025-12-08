import Link from "next/link";
import { Facebook, Phone, MapPin, Mail } from "lucide-react";
import { Container } from "./container";
import { SCHOOL, CONTACT, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">
              {SCHOOL.shortName}
            </h3>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              {SCHOOL.tagline}
            </p>
            <div className="flex gap-3">
              <a
                href={CONTACT.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary-light" />
                <span className="text-sm text-background/70">
                  {CONTACT.address.line1}
                  <br />
                  {CONTACT.address.line2}
                  <br />
                  {CONTACT.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary-light" />
                <div className="text-sm text-background/70">
                  <p>{CONTACT.phone.landline1}</p>
                  <p>{CONTACT.phone.mobile}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* School Hours */}
          <div>
            <h4 className="font-semibold mb-4">School Hours</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Monday - Friday</li>
              <li>7:30 AM - 4:00 PM</li>
              <li className="pt-2">
                <span className="text-secondary font-medium">
                  Enrollment Open
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <Container className="py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-background/50">
            <p>&copy; {currentYear} {SCHOOL.fullName}</p>
            <p className="flex items-center gap-1">
              <span>DepEd ID:</span>
              <span className="text-background/70">{SCHOOL.depedId}</span>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
