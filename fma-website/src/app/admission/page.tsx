import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, ClipboardList, Award, Image, HeartPulse, MapPin, Phone, Clock } from "lucide-react";
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
import { ADMISSION, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Enroll at Future Minds Academy | Admission Open",
  description:
    "Join the FMA Family! Now accepting enrollment for preschool and elementary. Visit us at 650 Boni Avenue, Mandaluyong.",
};

const requirementIcons: Record<string, React.ElementType> = {
  "file-text": FileText,
  "clipboard": ClipboardList,
  "award": Award,
  "image": Image,
  "heart-pulse": HeartPulse,
};

export default function AdmissionPage() {
  const steps = [
    {
      number: 1,
      title: "Visit the School",
      description: "Come to our campus during office hours for an initial inquiry and school tour.",
    },
    {
      number: 2,
      title: "Submit Requirements",
      description: "Prepare and submit all required documents listed below.",
    },
    {
      number: 3,
      title: "Assessment",
      description: "Students undergo age-appropriate assessment to determine placement.",
    },
    {
      number: 4,
      title: "Enrollment",
      description: "Complete enrollment forms and settle initial fees.",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-[65px]">
        {/* Hero */}
        <section className="relative py-section-lg overflow-hidden bg-secondary/10">
          <FloatingShapes variant="section" />
          <Container className="relative z-10">
            <ScrollAnimation>
              <div className="max-w-3xl">
                <Badge variant="secondary" className="mb-4">Now Enrolling</Badge>
                <h1 className="font-display text-display-md md:text-display-lg text-foreground mb-6">
                  Join the FMA Family
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {ADMISSION.cta}
                </p>
                <div className="flex flex-wrap gap-3">
                  {ADMISSION.levels.map((level) => (
                    <Badge key={level} variant="outline" className="text-sm py-1.5">
                      {level}
                    </Badge>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </Container>
        </section>

        {/* Enrollment Info */}
        <section className="py-section-lg">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="How to Apply"
                subtitle="Follow these simple steps to enroll your child at FMA"
              />
            </ScrollAnimation>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <ScrollAnimation key={step.number} delay={index * 100}>
                  <Card className="h-full relative overflow-hidden">
                    <CardContent className="p-6">
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full" />
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-display text-xl font-bold mb-4 relative z-10">
                        {step.number}
                      </div>
                      <h3 className="font-display text-lg font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </Container>
        </section>

        {/* Requirements Checklist */}
        <section className="py-section-lg bg-muted/50">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Enrollment Requirements"
                subtitle="Prepare the following documents for enrollment"
              />
            </ScrollAnimation>
            <div className="max-w-3xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-4">
                {ADMISSION.requirements.map((req, index) => {
                  const Icon = requirementIcons[req.icon] || FileText;
                  return (
                    <ScrollAnimation key={req.item} delay={index * 75}>
                      <Card hover={false} className="border-l-4 border-l-primary">
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <span className="font-medium">{req.item}</span>
                        </CardContent>
                      </Card>
                    </ScrollAnimation>
                  );
                })}
              </div>
              <ScrollAnimation delay={400}>
                <p className="text-sm text-muted-foreground text-center mt-8">
                  * Additional requirements may be requested depending on grade level and
                  circumstances.
                </p>
              </ScrollAnimation>
            </div>
          </Container>
        </section>

        {/* Visit Us CTA + Map Preview */}
        <section className="py-section-lg">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12">
              <ScrollAnimation direction="left">
                <Badge className="mb-4">Visit Us</Badge>
                <h2 className="font-display text-display-sm text-foreground mb-6">
                  Come See Our Campus
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-muted-foreground text-sm">
                        {CONTACT.address.line1}
                        <br />
                        {CONTACT.address.line2}
                        <br />
                        {CONTACT.address.city}
                      </p>
                      <p className="text-sm text-primary mt-1">{CONTACT.landmark}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Contact Numbers</h4>
                      <p className="text-muted-foreground text-sm">
                        {CONTACT.phone.landline1}
                        <br />
                        {CONTACT.phone.mobile}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Office Hours</h4>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday
                        <br />
                        7:30 AM - 4:00 PM
                      </p>
                    </div>
                  </div>

                  <Button asChild className="mt-4">
                    <Link href="/contact">
                      Get Directions <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="right">
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
              </ScrollAnimation>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-section-lg bg-primary text-primary-foreground">
          <Container>
            <ScrollAnimation>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-display text-display-sm md:text-display-md mb-6">
                  Start Your Application Today
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Limited slots available. Visit us now to secure your child&apos;s spot
                  for the upcoming school year.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-primary hover:bg-white/90"
                    asChild
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-white hover:bg-white/10"
                    asChild
                  >
                    <a href={CONTACT.social.facebook} target="_blank" rel="noopener noreferrer">
                      Visit Facebook
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
