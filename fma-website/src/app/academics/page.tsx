import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, GraduationCap, CheckCircle2, Sparkles, Brain, Users, Palette, Calculator, Globe, Music } from "lucide-react";
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
  StaggerContainer,
  StaggerItem,
  NumberedCard,
  NumberedCardGrid,
  NumberedCardItem,
  Card,
  CardContent,
  Badge,
} from "@/components/shared";
import { PROGRAMS, CURRICULUM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Academic Programs | Preschool & Elementary Education",
  description:
    "Discover FMA's comprehensive preschool and elementary programs following DepEd K-12 and MATATAG curriculum.",
};

const gradeLevels = [
  { number: 1, level: "Nursery", age: "3-4 years", description: "Introduction to structured learning through play-based activities" },
  { number: 2, level: "Kinder", age: "4-5 years", description: "School readiness and early literacy development" },
  { number: 3, level: "Grade 1", age: "6-7 years", description: "Foundation of formal reading, writing, and math skills" },
  { number: 4, level: "Grade 2", age: "7-8 years", description: "Building fluency and comprehension skills" },
  { number: 5, level: "Grade 3", age: "8-9 years", description: "Developing critical thinking and problem-solving" },
  { number: 6, level: "Grade 4", age: "9-10 years", description: "Expanding knowledge across all subject areas" },
  { number: 7, level: "Grade 5", age: "10-11 years", description: "Preparing for intermediate-level academics" },
  { number: 8, level: "Grade 6", age: "11-12 years", description: "Capstone year with junior high school preparation" },
];

const subjects = [
  { name: "Filipino", icon: Globe, description: "National language proficiency" },
  { name: "English", icon: BookOpen, description: "Communication and literacy" },
  { name: "Mathematics", icon: Calculator, description: "Numerical reasoning" },
  { name: "Science", icon: Brain, description: "Scientific inquiry" },
  { name: "Araling Panlipunan", icon: Users, description: "Social studies" },
  { name: "MAPEH", icon: Music, description: "Arts, PE & Health" },
  { name: "Values Education", icon: Sparkles, description: "Character formation" },
  { name: "Computer", icon: Palette, description: "Digital literacy" },
];

export default function AcademicsPage() {
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
                  <BookOpen className="h-4 w-4 mr-2" />
                  Academics
                </Badge>
                <h1 className="text-display-xl font-display text-white mb-6">
                  Nurturing Excellence at Every Level
                </h1>
                <p className="text-body-xl text-white/90 mb-8 max-w-2xl">
                  From preschool to elementary, we provide comprehensive education
                  following the DepEd K-12 curriculum with values integration.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 shadow-xl"
                    asChild
                  >
                    <Link href="/admission">
                      Enroll Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-white border-2 border-white/30 hover:bg-white/10"
                    asChild
                  >
                    <Link href="/contact">Schedule a Visit</Link>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </Container>
        </section>

        {/* Programs Section */}
        <section className="py-section">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Our Programs"
                subtitle="Two comprehensive programs designed to build strong foundations for lifelong learning"
              />
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(PROGRAMS).map(([key, program], index) => (
                <ScrollAnimation key={key} delay={index * 0.15} direction={index === 0 ? "left" : "right"}>
                  <div className="group relative bg-card rounded-card-xl shadow-card hover-lift overflow-hidden h-full">
                    {/* Program Image */}
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <Image
                        src={`/images/programs/${key}.jpg`}
                        alt={program.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">
                          {key === "preschool" ? "Ages 3-5" : "Ages 6-12"}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                        {key === "preschool" ? (
                          <BookOpen className="h-7 w-7" />
                        ) : (
                          <GraduationCap className="h-7 w-7" />
                        )}
                      </div>

                      <h3 className="text-display-sm font-display mb-3">{program.name}</h3>
                      <p className="text-muted-foreground mb-5 leading-relaxed">{program.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {program.levels.map((level) => (
                          <Badge key={level} variant="outline" className="py-1.5 px-3">
                            {level}
                          </Badge>
                        ))}
                      </div>

                      <Button asChild variant="ghost" className="group/btn -ml-4">
                        <Link href="/admission">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </Container>
        </section>

        {/* Grade Level Progression */}
        <section className="py-section bg-muted/30">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Grade Level Progression"
                subtitle="A clear pathway from early learning to elementary completion"
              />
            </ScrollAnimation>

            <NumberedCardGrid className="lg:grid-cols-4">
              {gradeLevels.map((grade) => (
                <NumberedCardItem key={grade.level}>
                  <NumberedCard
                    number={grade.number}
                    title={grade.level}
                    description={grade.description}
                    className="h-full"
                  />
                </NumberedCardItem>
              ))}
            </NumberedCardGrid>
          </Container>
        </section>

        {/* Curriculum Section */}
        <section className="py-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <Container>
            <ScrollAnimation>
              <div className="text-center mb-16">
                <h2 className="text-display-lg font-display mb-4">Our Curriculum</h2>
                <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
                  Aligned with national standards and enhanced with values education
                </p>
              </div>
            </ScrollAnimation>

            <div className="max-w-3xl mx-auto">
              <ScrollAnimation>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="k12" className="bg-white/5 backdrop-blur-sm rounded-card-lg border border-white/10 px-6">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline text-white">
                      {CURRICULUM.main}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 pb-6">
                      Our curriculum follows the Department of Education's K-12 program,
                      ensuring students receive standardized, quality education that prepares
                      them for higher learning. The curriculum emphasizes Filipino and English
                      literacy, Mathematics, Science, and Social Studies.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="matatag" className="bg-white/5 backdrop-blur-sm rounded-card-lg border border-white/10 px-6">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline text-white">
                      {CURRICULUM.transitioning}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 pb-6">
                      We are progressively implementing the MATATAG curriculum, DepEd's
                      enhanced basic education program. This curriculum focuses on
                      decongested learning competencies, streamlined content, and more
                      time for mastery of foundational skills.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="phonics" className="bg-white/5 backdrop-blur-sm rounded-card-lg border border-white/10 px-6">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline text-white">
                      Phonics-Based Reading
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 pb-6">
                      Our reading program emphasizes phonics instruction, helping students
                      decode words systematically. This approach builds strong reading
                      foundations, enabling students to become confident, independent readers.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="values" className="bg-white/5 backdrop-blur-sm rounded-card-lg border border-white/10 px-6">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline text-white">
                      Values Integration
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 pb-6">
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

        {/* Subjects Grid */}
        <section className="py-section">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Subjects Offered"
                subtitle="Comprehensive learning areas aligned with DepEd standards"
              />
            </ScrollAnimation>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {subjects.map((subject) => (
                <StaggerItem key={subject.name}>
                  <Card className="text-center group hover-lift h-full">
                    <CardContent className="p-6">
                      <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <subject.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-display font-semibold mb-1">{subject.name}</h3>
                      <p className="text-xs text-muted-foreground">{subject.description}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* Assessment Section */}
        <section className="py-section bg-muted/30">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollAnimation direction="left">
                <Badge variant="outline" className="mb-4">Assessment</Badge>
                <h2 className="text-display-md font-display mb-6">
                  Quarterly Grading System
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We follow the DepEd quarterly grading system, providing regular
                    assessments to track student progress and identify areas for
                    improvement.
                  </p>
                </div>
                <ul className="space-y-4 mt-6">
                  {[
                    "Written works, performance tasks, and quarterly assessments",
                    "Regular parent-teacher consultations",
                    "Recognition of academic achievers each quarter",
                    "Detailed report cards (SF9) for progress monitoring",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollAnimation>

              <ScrollAnimation direction="right">
                <Card className="bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="font-display text-2xl font-semibold mb-8">
                      Academic Recognition
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                        <div>
                          <Badge className="bg-blue-400 text-white mb-2">
                            With Highest Honors
                          </Badge>
                          <p className="text-sm text-white/70">Top academic achievement</p>
                        </div>
                        <span className="text-2xl font-display font-bold">98-100</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                        <div>
                          <Badge className="bg-white/20 text-white border-0 mb-2">
                            With High Honors
                          </Badge>
                          <p className="text-sm text-white/70">Excellent performance</p>
                        </div>
                        <span className="text-2xl font-display font-bold">95-97</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                        <div>
                          <Badge className="bg-white/10 text-white border-0 mb-2">
                            With Honors
                          </Badge>
                          <p className="text-sm text-white/70">Outstanding achievement</p>
                        </div>
                        <span className="text-2xl font-display font-bold">90-94</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-section-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-primary to-blue-700" />
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />

          <Container className="relative z-10">
            <ScrollAnimation>
              <div className="text-center max-w-3xl mx-auto text-white">
                <h2 className="text-display-lg font-display mb-6">
                  Ready to Start Your Child's Journey?
                </h2>
                <p className="text-body-xl opacity-90 mb-10">
                  Enroll now and give your child access to quality education with values
                  integration. Limited slots available for SY 2025-2026.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 shadow-xl"
                    asChild
                  >
                    <Link href="/admission">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-white border-2 border-white/30 hover:bg-white/10"
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
