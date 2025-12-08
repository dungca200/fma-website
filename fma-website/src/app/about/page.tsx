import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Users, BookOpen, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header, Footer, Container } from "@/components/layout";
import {
  SectionHeading,
  ScrollAnimation,
  FloatingShapes,
  Card,
  CardContent,
  Badge,
  Avatar,
} from "@/components/shared";
import { SCHOOL, TIMELINE, AFFILIATIONS, FACULTY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About FMA | 20 Years of Excellence in Education",
  description:
    "Learn about Future Minds Academy's 20-year legacy of quality education, CEdNet membership, and values-based learning in Mandaluyong City.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Love for Learning",
      description: "Fostering curiosity and a lifelong passion for knowledge",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong relationships between students, teachers, and parents",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Teaching honesty, responsibility, and moral values",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for the highest standards in education",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-[65px]">
        {/* Hero Section */}
        <section className="relative py-section-lg overflow-hidden bg-primary/5">
          <FloatingShapes variant="section" />
          <Container className="relative z-10">
            <ScrollAnimation>
              <div className="max-w-3xl">
                <Badge className="mb-4">About Us</Badge>
                <h1 className="font-display text-display-md md:text-display-lg text-foreground mb-6">
                  Building Futures Since {SCHOOL.founded}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {SCHOOL.yearsInOperation} years of nurturing young minds in Mandaluyong City
                </p>
              </div>
            </ScrollAnimation>
          </Container>
        </section>

        {/* School Overview */}
        <section className="py-section-lg">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation direction="left">
                <div className="aspect-square bg-muted rounded-card-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <BookOpen className="w-32 h-32 text-primary/40" />
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="right">
                <h2 className="font-display text-display-sm text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">{SCHOOL.fullName}</strong> was
                    established in {SCHOOL.founded} with a vision to provide quality,
                    accessible education to families in Mandaluyong City.
                  </p>
                  <p>
                    What started as a small preschool has grown into a DepEd-recognized
                    institution serving students from Nursery through Grade 6. Over{" "}
                    {SCHOOL.yearsInOperation} years, we have maintained our commitment to
                    excellence while adapting to the evolving needs of education.
                  </p>
                  <p>
                    As a proud member of the Christian Educators&apos; Network (CEdNet), we
                    integrate values-based education into our curriculum, ensuring that our
                    students grow not just academically, but also morally and spiritually.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </Container>
        </section>

        {/* School Head Message */}
        <section className="py-section-lg bg-muted/50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-3">
                      <div className="bg-primary/10 p-8 flex flex-col items-center justify-center text-center">
                        <Avatar
                          src={FACULTY.schoolHead.image}
                          alt={FACULTY.schoolHead.name}
                          size="xl"
                          className="mb-4 border-4 border-white shadow-lg"
                        />
                        <h3 className="font-display text-lg font-semibold">
                          {FACULTY.schoolHead.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {FACULTY.schoolHead.position}
                        </p>
                      </div>
                      <div className="md:col-span-2 p-8">
                        <Badge className="mb-4">Message from the School Head</Badge>
                        <blockquote className="text-muted-foreground leading-relaxed space-y-4">
                          <p>
                            &ldquo;Welcome to Future Minds Academy! For over two decades, we
                            have been privileged to be part of countless families&apos;
                            educational journeys.
                          </p>
                          <p>
                            Our commitment remains unwavering: to provide quality education
                            that nurtures not just academic excellence, but also strong
                            character and values. We believe that every child has unique
                            potential, and our role is to help them discover and develop it.
                          </p>
                          <p>
                            As we celebrate our {SCHOOL.yearsInOperation}th year, we look
                            forward to continuing this mission with the same dedication and
                            passion that has defined FMA since {SCHOOL.founded}.&rdquo;
                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </Container>
        </section>

        {/* Mission & Values */}
        <section className="py-section-lg">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Our Mission & Values"
                subtitle="Guiding principles that shape our educational approach"
              />
            </ScrollAnimation>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <ScrollAnimation key={value.title} delay={index * 100}>
                  <Card className="h-full text-center">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-display text-lg font-semibold mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </Container>
        </section>

        {/* Timeline */}
        <section className="py-section-lg bg-muted/50">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Our Journey"
                subtitle="Key milestones in FMA's history"
              />
            </ScrollAnimation>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

                {TIMELINE.map((item, index) => (
                  <ScrollAnimation key={item.year} delay={index * 100}>
                    <div className="relative flex items-start gap-6 pb-8 last:pb-0">
                      <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-display font-bold shrink-0">
                        {item.year}
                      </div>
                      <div className="pt-4">
                        <p className="text-foreground font-medium">{item.event}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Affiliations */}
        <section className="py-section-lg">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Our Affiliations"
                subtitle="Proud partnerships that strengthen our educational mission"
              />
            </ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {AFFILIATIONS.map((affiliation, index) => (
                <ScrollAnimation key={affiliation.name} delay={index * 150}>
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="w-20 h-20 bg-primary/10 rounded-card flex items-center justify-center mb-6">
                        <span className="font-display text-2xl font-bold text-primary">
                          {affiliation.name}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-2">
                        {affiliation.fullName}
                      </h3>
                      <p className="text-muted-foreground">{affiliation.description}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-section-lg bg-primary text-primary-foreground">
          <Container>
            <ScrollAnimation>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-display text-display-sm md:text-display-md mb-6">
                  Join Our Community
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Become part of the FMA family and give your child the foundation they
                  deserve.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-primary hover:bg-white/90"
                    asChild
                  >
                    <Link href="/admission">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-white hover:bg-white/10"
                    asChild
                  >
                    <Link href="/contact">Contact Us</Link>
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
