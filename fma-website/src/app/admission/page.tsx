import type { Metadata } from "next";
import Link from "next/link";
import NextImage from "next/image";
import { ArrowRight, FileText, ClipboardList, Award, Image, HeartPulse, MapPin, Phone, Clock, CheckCircle2, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header, Footer, Container } from "@/components/layout";
import {
  SectionHeading,
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  ProcessSteps,
  Card,
  CardContent,
  Badge,
} from "@/components/shared";
import type { ProcessStep } from "@/components/shared";
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

const enrollmentSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Discovery Visit",
    description: "Schedule a visit to our campus. Meet our teachers, tour our facilities, and learn about our programs in person.",
    icon: <Users className="h-6 w-6" />,
    cta: { text: "Schedule a Visit", href: "/contact" },
  },
  {
    number: 2,
    title: "Submit Requirements",
    description: "Prepare and submit all required documents. Our admissions team will guide you through the paperwork.",
    icon: <FileText className="h-6 w-6" />,
  },
  {
    number: 3,
    title: "Assessment & Enrollment",
    description: "Students undergo age-appropriate assessment. Complete enrollment forms and welcome your child to the FMA family!",
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
];

export default function AdmissionPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary to-sky-600">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          </div>

          <Container className="relative z-10 py-20">
            <div className="max-w-3xl">
              <ScrollAnimation>
                <Badge className="mb-6 bg-white/20 text-white border-0">
                  <Calendar className="h-4 w-4 mr-2" />
                  Now Enrolling for SY 2025-2026
                </Badge>
                <h1 className="text-display-xl font-display text-white mb-6">
                  Join the FMA Family
                </h1>
                <p className="text-body-xl text-white/90 mb-8 max-w-2xl">
                  {ADMISSION.cta}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {ADMISSION.levels.map((level) => (
                    <Badge key={level} className="bg-white/20 text-white border-0 py-2 px-4">
                      {level}
                    </Badge>
                  ))}
                </div>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-xl"
                  asChild
                >
                  <Link href="/contact">
                    Start Your Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </ScrollAnimation>
            </div>
          </Container>
        </section>

        {/* How to Apply - Process Steps */}
        <section className="py-section">
          <Container>
            <ProcessSteps
              steps={enrollmentSteps}
              title="How to Apply"
              subtitle="Our simple 3-step enrollment process makes joining the FMA family easy"
            />
          </Container>
        </section>

        {/* Welcome Banner */}
        <section className="relative h-64 md:h-80 overflow-hidden">
          <NextImage
            src="/images/admission/welcome.jpg"
            alt="Students and parents at enrollment"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
          <Container className="relative z-10 h-full flex items-center">
            <div className="text-white max-w-xl">
              <h3 className="text-display-sm font-display mb-2">Welcome to the FMA Family</h3>
              <p className="text-white/90">Join hundreds of families who trust us with their children's education.</p>
            </div>
          </Container>
        </section>

        {/* Requirements Checklist */}
        <section className="py-section bg-muted/30">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Enrollment Requirements"
                subtitle="Prepare the following documents for a smooth enrollment process"
              />
            </ScrollAnimation>

            <div className="max-w-4xl mx-auto">
              <StaggerContainer className="grid sm:grid-cols-2 gap-4">
                {ADMISSION.requirements.map((req) => {
                  const Icon = requirementIcons[req.icon] || FileText;
                  return (
                    <StaggerItem key={req.item}>
                      <Card className="group hover-lift border-l-4 border-l-primary">
                        <CardContent className="p-5 flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                            <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                          </div>
                          <span className="font-medium">{req.item}</span>
                        </CardContent>
                      </Card>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>

              <ScrollAnimation delay={0.4}>
                <div className="mt-8 p-6 bg-primary/5 rounded-card-lg border border-primary/10">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong className="text-foreground">Note:</strong> Additional requirements may be requested
                    depending on grade level and circumstances. Contact us for tuition fee information.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-section">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Frequently Asked Questions"
                subtitle="Common questions about enrollment at FMA"
              />
            </ScrollAnimation>

            <div className="max-w-3xl mx-auto">
              <StaggerContainer className="space-y-4">
                {[
                  {
                    q: "What grade levels do you offer?",
                    a: "We offer Preschool (Nursery and Kindergarten) and Complete Elementary (Grades 1-6).",
                  },
                  {
                    q: "What curriculum do you follow?",
                    a: "We follow the DepEd K-12 curriculum and are transitioning to the MATATAG curriculum per DepEd timeline.",
                  },
                  {
                    q: "Do you offer summer classes?",
                    a: "Yes! We offer summer classes for students who want to get ahead or catch up.",
                  },
                  {
                    q: "How can I get information about tuition fees?",
                    a: "Please visit our school or contact us directly for current tuition fee schedules.",
                  },
                ].map((faq, i) => (
                  <StaggerItem key={i}>
                    <Card className="hover-lift">
                      <CardContent className="p-6">
                        <h4 className="font-display font-semibold text-lg mb-2">{faq.q}</h4>
                        <p className="text-muted-foreground">{faq.a}</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </Container>
        </section>

        {/* Visit Us Section */}
        <section className="py-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollAnimation direction="left">
                <Badge className="mb-6 bg-white/10 text-white border-0">Visit Us</Badge>
                <h2 className="text-display-md font-display mb-8">
                  Come See Our Campus
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Address</h4>
                      <p className="text-white/70">
                        {CONTACT.address.line1}
                        <br />
                        {CONTACT.address.line2}
                        <br />
                        {CONTACT.address.city}
                      </p>
                      <p className="text-primary mt-2 text-sm">{CONTACT.landmark}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Contact Numbers</h4>
                      <p className="text-white/70">
                        <a href={`tel:${CONTACT.phone.landline1}`} className="hover:text-white transition-colors">
                          {CONTACT.phone.landline1}
                        </a>
                        <br />
                        <a href={`tel:${CONTACT.phone.mobile}`} className="hover:text-white transition-colors">
                          {CONTACT.phone.mobile}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Office Hours</h4>
                      <p className="text-white/70">
                        Monday - Friday
                        <br />
                        7:30 AM - 4:00 PM
                      </p>
                    </div>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-slate-900 hover:bg-white/90 mt-4"
                  >
                    <Link href="/contact">
                      Get Directions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="right">
                <div className="aspect-[4/3] bg-white/5 rounded-card-xl overflow-hidden border border-white/10">
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

        {/* Final CTA */}
        <section className="py-section-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-sky-600" />
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />

          <Container className="relative z-10">
            <ScrollAnimation>
              <div className="text-center max-w-3xl mx-auto text-white">
                <h2 className="text-display-lg font-display mb-6">
                  Start Your Application Today
                </h2>
                <p className="text-body-xl opacity-90 mb-10">
                  Limited slots available. Visit us now to secure your child's spot
                  for School Year 2025-2026.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 shadow-xl"
                    asChild
                  >
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-white border-2 border-white/30 hover:bg-white/10"
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
