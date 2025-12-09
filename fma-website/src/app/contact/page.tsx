import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Train, Bus, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header, Footer, Container } from "@/components/layout";
import {
  SectionHeading,
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
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
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Background pattern */}
          <div className="absolute inset-0 hero-gradient opacity-90" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
          </div>

          <Container className="relative z-10 py-20">
            <div className="max-w-3xl">
              <ScrollAnimation>
                <Badge className="mb-6 bg-white/10 text-white border-0">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact Us
                </Badge>
                <h1 className="text-display-xl font-display text-white mb-6">
                  Get In Touch
                </h1>
                <p className="text-body-xl text-white/80 max-w-2xl">
                  We'd love to hear from you. Visit us or reach out through any of
                  our contact channels.
                </p>
              </ScrollAnimation>
            </div>
          </Container>
        </section>

        {/* Contact Info + Map */}
        <section className="py-section">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Details */}
              <ScrollAnimation direction="left">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-display-sm font-display mb-2">
                      Contact Information
                    </h2>
                    <p className="text-muted-foreground">
                      Reach out to us for inquiries about enrollment, programs, or visits.
                    </p>
                  </div>

                  <StaggerContainer className="space-y-4">
                    {/* Address */}
                    <StaggerItem>
                      <Card className="hover-lift">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                              <MapPin className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg mb-2">School Address</h3>
                              <p className="text-muted-foreground">
                                {CONTACT.address.line1}
                                <br />
                                {CONTACT.address.line2}
                                <br />
                                {CONTACT.address.city}, {CONTACT.address.region}
                              </p>
                              <Badge variant="outline" className="mt-3">
                                {CONTACT.landmark}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </StaggerItem>

                    {/* Phone */}
                    <StaggerItem>
                      <Card className="hover-lift">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                              <Phone className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg mb-2">Phone Numbers</h3>
                              <div className="space-y-1">
                                <a
                                  href={`tel:${CONTACT.phone.landline1}`}
                                  className="block text-muted-foreground hover:text-primary transition-colors"
                                >
                                  {CONTACT.phone.landline1}
                                </a>
                                <a
                                  href={`tel:${CONTACT.phone.landline2}`}
                                  className="block text-muted-foreground hover:text-primary transition-colors"
                                >
                                  {CONTACT.phone.landline2}
                                </a>
                                <a
                                  href={`tel:${CONTACT.phone.mobile}`}
                                  className="block text-muted-foreground hover:text-primary transition-colors font-medium"
                                >
                                  Mobile: {CONTACT.phone.mobile}
                                </a>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </StaggerItem>

                    {/* Hours */}
                    <StaggerItem>
                      <Card className="hover-lift">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                              <Clock className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg mb-2">Operating Hours</h3>
                              <p className="text-muted-foreground">
                                Monday - Friday
                                <br />
                                <span className="font-semibold text-foreground">
                                  7:30 AM - 4:00 PM
                                </span>
                              </p>
                              <p className="text-sm text-muted-foreground mt-2">
                                Closed on weekends and holidays
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </StaggerItem>

                    {/* Social */}
                    <StaggerItem>
                      <Card className="hover-lift">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                              <Facebook className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
                              <a
                                href={CONTACT.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                facebook.com/FUTUREMINDSACADEMY
                              </a>
                              <p className="text-sm text-muted-foreground mt-2">
                                Get updates on events and announcements
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </StaggerItem>
                  </StaggerContainer>
                </div>
              </ScrollAnimation>

              {/* Map */}
              <ScrollAnimation direction="right">
                <div className="space-y-6 lg:sticky lg:top-24">
                  <div className="aspect-[4/3] bg-muted rounded-card-xl overflow-hidden shadow-card">
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
                  <Button asChild size="lg" className="w-full">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${CONTACT.coordinates.lat},${CONTACT.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </Container>
        </section>

        {/* Contact Form */}
        <section className="py-section bg-muted/30">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Send Us a Message"
                subtitle="Have questions? We'll get back to you as soon as possible."
              />
            </ScrollAnimation>

            <div className="max-w-2xl mx-auto">
              <ScrollAnimation>
                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Full Name <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            placeholder="Juan Dela Cruz"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Email Address <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="email"
                            className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
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
                          className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          placeholder="09XX XXX XXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Subject
                        </label>
                        <select
                          className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        >
                          <option value="">Select a topic</option>
                          <option value="enrollment">Enrollment Inquiry</option>
                          <option value="visit">Schedule a Visit</option>
                          <option value="tuition">Tuition Information</option>
                          <option value="general">General Question</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Message <span className="text-destructive">*</span>
                        </label>
                        <textarea
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                          placeholder="How can we help you?"
                          required
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full">
                        <Send className="mr-2 h-4 w-4" />
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
        <section className="py-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <Container>
            <ScrollAnimation>
              <div className="text-center mb-16">
                <h2 className="text-display-lg font-display mb-4">How to Get Here</h2>
                <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
                  Convenient transportation options to reach FMA
                </p>
              </div>
            </ScrollAnimation>

            <StaggerContainer className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <StaggerItem>
                <div className="bg-white/5 backdrop-blur-sm rounded-card-xl p-8 border border-white/10 hover:bg-white/10 transition-colors h-full">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                      <Train className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-3">By MRT/LRT</h3>
                      <p className="text-white/70 leading-relaxed">
                        Nearest station: <strong className="text-white">Boni MRT Station</strong>
                        <br />
                        Walk towards Boni Avenue, approximately 10-15 minutes walk
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white/5 backdrop-blur-sm rounded-card-xl p-8 border border-white/10 hover:bg-white/10 transition-colors h-full">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                      <Bus className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-3">By Jeepney/Bus</h3>
                      <p className="text-white/70 leading-relaxed">
                        Take any jeepney or bus passing through Boni Avenue.
                        <br />
                        Alight near <strong className="text-white">BDO Ligaya branch</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-section-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-sky-600" />
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />

          <Container className="relative z-10">
            <ScrollAnimation>
              <div className="text-center max-w-3xl mx-auto text-white">
                <h2 className="text-display-lg font-display mb-6">
                  Visit Us Today
                </h2>
                <p className="text-body-xl opacity-90 mb-10">
                  Experience the FMA difference firsthand. Schedule a campus visit
                  and see why families choose us for their children's education.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 shadow-xl"
                    asChild
                  >
                    <Link href="/admission">
                      Start Enrollment
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-white border-2 border-white/30 hover:bg-white/10"
                    asChild
                  >
                    <a href={CONTACT.social.facebook} target="_blank" rel="noopener noreferrer">
                      <Facebook className="mr-2 h-4 w-4" />
                      Message Us
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
