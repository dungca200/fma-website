import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Train, Bus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header, Footer, Container } from "@/components/layout";
import {
  SectionHeading,
  ScrollAnimation,
  FloatingShapes,
  Card,
  CardContent,
  Badge,
} from "@/components/shared";
import { CONTACT, SCHOOL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Future Minds Academy",
  description:
    "Get in touch with Future Minds Academy. Visit us at 650 Boni Avenue, Mandaluyong or call (02) 746-12-91.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-[65px]">
        {/* Hero */}
        <section className="relative py-section-lg overflow-hidden bg-primary/5">
          <FloatingShapes variant="section" />
          <Container className="relative z-10">
            <ScrollAnimation>
              <div className="max-w-3xl">
                <Badge className="mb-4">Contact Us</Badge>
                <h1 className="font-display text-display-md md:text-display-lg text-foreground mb-6">
                  Get In Touch
                </h1>
                <p className="text-xl text-muted-foreground">
                  We&apos;d love to hear from you. Visit us or reach out through any of
                  our contact channels.
                </p>
              </div>
            </ScrollAnimation>
          </Container>
        </section>

        {/* Contact Info + Map */}
        <section className="py-section-lg">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <ScrollAnimation direction="left">
                <div className="space-y-8">
                  <div>
                    <h2 className="font-display text-display-sm text-foreground mb-6">
                      Contact Information
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {/* Address */}
                    <Card hover={false}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                            <MapPin className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">School Address</h3>
                            <p className="text-muted-foreground text-sm">
                              {CONTACT.address.line1}
                              <br />
                              {CONTACT.address.line2}
                              <br />
                              {CONTACT.address.city}, {CONTACT.address.region}
                            </p>
                            <p className="text-sm text-primary mt-2">{CONTACT.landmark}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Phone */}
                    <Card hover={false}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                            <Phone className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Phone Numbers</h3>
                            <p className="text-muted-foreground text-sm">
                              <span className="block">{CONTACT.phone.landline1}</span>
                              <span className="block">{CONTACT.phone.landline2}</span>
                              <span className="block mt-1">
                                Mobile: {CONTACT.phone.mobile}
                              </span>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Hours */}
                    <Card hover={false}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                            <Clock className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Operating Hours</h3>
                            <p className="text-muted-foreground text-sm">
                              <span className="block">Monday - Friday</span>
                              <span className="block font-medium text-foreground">
                                7:30 AM - 4:00 PM
                              </span>
                              <span className="block mt-2 text-xs">
                                Closed on weekends and holidays
                              </span>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Social */}
                    <Card hover={false}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                            <Facebook className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Follow Us</h3>
                            <a
                              href={CONTACT.social.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline text-sm"
                            >
                              facebook.com/FUTUREMINDSACADEMY
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Map */}
              <ScrollAnimation direction="right">
                <div className="space-y-6">
                  <div className="aspect-[4/3] bg-muted rounded-card-lg overflow-hidden">
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.2!2d${CONTACT.coordinates.lng}!3d${CONTACT.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM0JzM0LjAiTiAxMjHCsDAyJzE3LjAiRQ!5e0!3m2!1sen!2sph!4v1`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="FMA Location Map"
                    />
                  </div>
                  <Button asChild className="w-full">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${CONTACT.coordinates.lat},${CONTACT.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </Container>
        </section>

        {/* Contact Form */}
        <section className="py-section-lg bg-muted/50">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Send Us a Message"
                subtitle="Have questions? We'll get back to you as soon as possible."
              />
            </ScrollAnimation>
            <div className="max-w-2xl mx-auto">
              <ScrollAnimation>
                <Card>
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="Juan Dela Cruz"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="juan@email.com"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="09XX XXX XXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Message *
                        </label>
                        <textarea
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                          placeholder="How can we help you?"
                          required
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        * Form is for demo purposes. Connect with Formspree to enable
                        submissions.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </Container>
        </section>

        {/* Transportation */}
        <section className="py-section-lg">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="How to Get Here"
                subtitle="Convenient transportation options to reach FMA"
              />
            </ScrollAnimation>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <ScrollAnimation delay={0}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <Train className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">By MRT/LRT</h3>
                        <p className="text-sm text-muted-foreground">
                          Nearest station: <strong>Boni MRT Station</strong>
                          <br />
                          Walk towards Boni Avenue, approximately 10-15 minutes walk
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
              <ScrollAnimation delay={100}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <Bus className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">By Jeepney/Bus</h3>
                        <p className="text-sm text-muted-foreground">
                          Take any jeepney or bus passing through Boni Avenue.
                          <br />
                          Alight near <strong>BDO Ligaya branch</strong>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
