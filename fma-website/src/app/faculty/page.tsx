import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, GraduationCap } from "lucide-react";
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
import { FACULTY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Faculty | Future Minds Academy",
  description:
    "Meet the dedicated teachers and staff of Future Minds Academy committed to nurturing young minds.",
};

export default function FacultyPage() {
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
                <Badge className="mb-4">Our Team</Badge>
                <h1 className="font-display text-display-md md:text-display-lg text-foreground mb-6">
                  Meet Our Faculty
                </h1>
                <p className="text-xl text-muted-foreground">
                  Dedicated educators committed to nurturing every child&apos;s potential
                </p>
              </div>
            </ScrollAnimation>
          </Container>
        </section>

        {/* School Head Feature */}
        <section className="py-section-lg">
          <Container>
            <ScrollAnimation>
              <Card className="overflow-hidden max-w-4xl mx-auto">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3">
                    <div className="bg-primary/10 p-8 md:p-12 flex flex-col items-center justify-center text-center">
                      <Avatar
                        src={FACULTY.schoolHead.image}
                        alt={FACULTY.schoolHead.name}
                        size="xl"
                        className="mb-6 border-4 border-white shadow-xl"
                      />
                      <Badge className="mb-2">School Head</Badge>
                    </div>
                    <div className="md:col-span-2 p-8 md:p-12">
                      <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">
                        {FACULTY.schoolHead.name}
                      </h2>
                      <p className="text-primary font-medium mb-6">
                        {FACULTY.schoolHead.position}
                      </p>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          As the School Head and Administrator of Future Minds Academy,{" "}
                          {FACULTY.schoolHead.name.split(" ").pop()} has been instrumental
                          in guiding the school&apos;s growth and maintaining its commitment
                          to quality education.
                        </p>
                        <p>
                          Under his leadership, FMA has achieved DepEd recognition and
                          continues to serve families in Mandaluyong City with dedication
                          and excellence.
                        </p>
                      </div>
                      <div className="mt-8 pt-6 border-t">
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <GraduationCap className="w-4 h-4 text-primary" />
                            20+ Years in Education
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </Container>
        </section>

        {/* Teaching Staff */}
        <section className="py-section-lg bg-muted/50">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Teaching Staff"
                subtitle="Our dedicated team of educators"
              />
            </ScrollAnimation>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {FACULTY.teachers.map((teacher, index) => (
                <ScrollAnimation key={teacher.name} delay={index * 100}>
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <Avatar
                        src={teacher.image}
                        alt={teacher.name}
                        size="lg"
                        className="mx-auto mb-4"
                      />
                      <h3 className="font-display text-lg font-semibold">
                        {teacher.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {teacher.position}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
              {/* Placeholder cards for additional staff */}
              {[1, 2, 3, 4].map((_, index) => (
                <ScrollAnimation key={`placeholder-${index}`} delay={(FACULTY.teachers.length + index) * 100}>
                  <Card className="text-center bg-muted/50 border-dashed">
                    <CardContent className="p-6">
                      <Avatar
                        src={null}
                        alt="Staff Member"
                        size="lg"
                        className="mx-auto mb-4 opacity-50"
                      />
                      <h3 className="font-display text-lg font-semibold text-muted-foreground">
                        Teaching Staff
                      </h3>
                      <p className="text-sm text-muted-foreground/70">
                        Educator
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </Container>
        </section>

        {/* Join Our Team */}
        <section className="py-section-lg">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <ScrollAnimation>
                <Badge className="mb-4">Careers</Badge>
                <h2 className="font-display text-display-sm text-foreground mb-6">
                  Join Our Team
                </h2>
                <p className="text-muted-foreground mb-8">
                  Are you a passionate educator looking for an opportunity to make a
                  difference? We&apos;re always looking for dedicated teachers who share
                  our commitment to quality education and values formation.
                </p>
                <Button asChild>
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Us About Opportunities
                  </Link>
                </Button>
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
                  Experience Our Teaching Excellence
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Visit FMA and see how our dedicated faculty creates a nurturing
                  learning environment.
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-primary hover:bg-white/90"
                  asChild
                >
                  <Link href="/admission">
                    Schedule a Visit <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
