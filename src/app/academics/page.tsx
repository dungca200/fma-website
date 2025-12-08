import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header, Footer, Container } from "@/components/layout";
import {
  SectionHeading,
  ScrollAnimation,
  FloatingShapes,
  Card,
  CardContent,
  Badge,
  FlipCard,
} from "@/components/shared";
import { PROGRAMS, CURRICULUM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Academic Programs | Preschool & Elementary Education",
  description:
    "Discover FMA's comprehensive preschool and elementary programs following DepEd K-12 and MATATAG curriculum.",
};

export default function AcademicsPage() {
  const gradeLevels = [
    { level: "Nursery", age: "3-4 years", color: "bg-pink-500" },
    { level: "Kinder", age: "4-5 years", color: "bg-purple-500" },
    { level: "Grade 1", age: "6-7 years", color: "bg-blue-500" },
    { level: "Grade 2", age: "7-8 years", color: "bg-cyan-500" },
    { level: "Grade 3", age: "8-9 years", color: "bg-teal-500" },
    { level: "Grade 4", age: "9-10 years", color: "bg-green-500" },
    { level: "Grade 5", age: "10-11 years", color: "bg-lime-500" },
    { level: "Grade 6", age: "11-12 years", color: "bg-amber-500" },
  ];

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
                <Badge className="mb-4">Academics</Badge>
                <h1 className="font-display text-display-md md:text-display-lg text-foreground mb-6">
                  Nurturing Excellence at Every Level
                </h1>
                <p className="text-xl text-muted-foreground">
                  From preschool to elementary, we provide comprehensive education following
                  the DepEd K-12 curriculum with values integration.
                </p>
              </div>
            </ScrollAnimation>
          </Container>
        </section>

        {/* Programs with Flip Cards */}
        <section className="py-section-lg">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Our Programs"
                subtitle="Two comprehensive programs designed to build strong foundations"
              />
            </ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(PROGRAMS).map(([key, program], index) => (
                <ScrollAnimation key={key} delay={index * 150}>
                  <FlipCard
                    className="h-[320px]"
                    front={
                      <div className="h-full flex flex-col items-center justify-center text-center">
                        {key === "preschool" ? (
                          <BookOpen className="w-20 h-20 text-primary mb-6" />
                        ) : (
                          <GraduationCap className="w-20 h-20 text-primary mb-6" />
                        )}
                        <h3 className="font-display text-2xl font-semibold mb-2">
                          {program.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {program.levels.join(" • ")}
                        </p>
                        <p className="text-sm text-primary mt-4">Hover to learn more</p>
                      </div>
                    }
                    back={
                      <div className="h-full flex flex-col justify-center">
                        <h3 className="font-display text-xl font-semibold mb-4">
                          {program.name}
                        </h3>
                        <p className="text-sm mb-6 opacity-90">{program.description}</p>
                        <div className="space-y-2">
                          {program.levels.map((level) => (
                            <div key={level} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4" />
                              <span className="text-sm">{level}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    }
                  />
                </ScrollAnimation>
              ))}
            </div>
          </Container>
        </section>

        {/* Curriculum Accordion */}
        <section className="py-section-lg bg-muted/50">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Our Curriculum"
                subtitle="Aligned with national standards and enhanced with values education"
              />
            </ScrollAnimation>
            <div className="max-w-3xl mx-auto">
              <ScrollAnimation>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="k12" className="bg-card rounded-card border-0 shadow-card px-6">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      {CURRICULUM.main}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      Our curriculum follows the Department of Education&apos;s K-12 program,
                      ensuring students receive standardized, quality education that prepares
                      them for higher learning. The curriculum emphasizes Filipino and English
                      literacy, Mathematics, Science, and Social Studies.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="matatag" className="bg-card rounded-card border-0 shadow-card px-6">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      {CURRICULUM.transitioning}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      We are progressively implementing the MATATAG curriculum, DepEd&apos;s
                      enhanced basic education program. This curriculum focuses on
                      decongested learning competencies, streamlined content, and more
                      time for mastery of foundational skills.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="phonics" className="bg-card rounded-card border-0 shadow-card px-6">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      Phonics-Based Reading
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      Our reading program emphasizes phonics instruction, helping students
                      decode words systematically. This approach builds strong reading
                      foundations, enabling students to become confident, independent readers.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="values" className="bg-card rounded-card border-0 shadow-card px-6">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      Values Integration
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      As a CEdNet member school, we integrate Christian values throughout
                      our curriculum. Students learn not just academic subjects but also
                      honesty, respect, responsibility, and compassion through daily
                      activities and special programs.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </ScrollAnimation>
            </div>
          </Container>
        </section>

        {/* Grade Level Progression */}
        <section className="py-section-lg">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Grade Level Progression"
                subtitle="A clear pathway from early learning to elementary completion"
              />
            </ScrollAnimation>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {gradeLevels.map((grade, index) => (
                <ScrollAnimation key={grade.level} delay={index * 50}>
                  <div className="relative">
                    <Card className="text-center">
                      <CardContent className="p-4">
                        <div className={`w-10 h-10 ${grade.color} rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-sm`}>
                          {index < 2 ? "P" : index - 1}
                        </div>
                        <h4 className="font-semibold text-sm">{grade.level}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{grade.age}</p>
                      </CardContent>
                    </Card>
                    {index < gradeLevels.length - 1 && (
                      <ChevronRight className="absolute top-1/2 -right-3 w-5 h-5 text-muted-foreground hidden lg:block" />
                    )}
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </Container>
        </section>

        {/* Assessment */}
        <section className="py-section-lg bg-muted/50">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation direction="left">
                <Badge className="mb-4">Assessment</Badge>
                <h2 className="font-display text-display-sm text-foreground mb-6">
                  Quarterly Grading System
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We follow the DepEd quarterly grading system, providing regular
                    assessments to track student progress and identify areas for
                    improvement.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span>Written works, performance tasks, and quarterly assessments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span>Regular parent-teacher consultations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span>Recognition of academic achievers each quarter</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span>Detailed report cards (SF9) for progress monitoring</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="right">
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-8">
                    <h3 className="font-display text-2xl font-semibold mb-6">
                      Academic Recognition
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Badge className="bg-secondary text-secondary-foreground">
                          With Highest Honors
                        </Badge>
                        <span className="text-sm">98-100 Average</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className="bg-white/20 text-white">
                          With High Honors
                        </Badge>
                        <span className="text-sm">95-97 Average</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className="bg-white/10 text-white">
                          With Honors
                        </Badge>
                        <span className="text-sm">90-94 Average</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-section-lg bg-secondary text-secondary-foreground">
          <Container>
            <ScrollAnimation>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-display text-display-sm md:text-display-md mb-6">
                  Ready to Start Your Child&apos;s Journey?
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Enroll now and give your child access to quality education with values
                  integration.
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-secondary hover:bg-white/90"
                  asChild
                >
                  <Link href="/admission">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
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
