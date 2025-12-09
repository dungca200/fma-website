import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Users, BookOpen, Heart, Shield, Star, Target } from "lucide-react";
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
  Avatar,
  FeaturedTeamCard,
} from "@/components/shared";
import type { TeamMember } from "@/components/shared";
import { SCHOOL, TIMELINE, AFFILIATIONS, FACULTY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About FMA | 20 Years of Excellence in Education",
  description:
    "Learn about Future Minds Academy's 20-year legacy of quality education, CEdNet membership, and values-based learning in Mandaluyong City.",
};

const values = [
  {
    icon: Heart,
    title: "Love for Learning",
    description: "Fostering curiosity and a lifelong passion for knowledge in every student",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building strong relationships between students, teachers, and parents",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Teaching honesty, responsibility, and moral values through example",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Striving for the highest standards in education and character",
  },
];

const schoolHead: TeamMember = {
  id: "school-head",
  name: FACULTY.schoolHead.name,
  position: FACULTY.schoolHead.position,
  image: FACULTY.schoolHead.image || undefined,
  bio: `Leading Future Minds Academy for over two decades, ${FACULTY.schoolHead.name} has dedicated his career to providing quality, values-based education to families in Mandaluyong City. Under his leadership, FMA has grown from a small preschool to a comprehensive elementary institution serving the community.`,
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section - Full width gradient */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Background pattern */}
          <div className="absolute inset-0 hero-gradient opacity-90" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
          </div>

          <Container className="relative z-10 py-20">
            <div className="max-w-3xl">
              <ScrollAnimation>
                <Badge className="mb-6 bg-white/10 text-white border-0">About Us</Badge>
                <h1 className="text-display-xl font-display text-white mb-6">
                  Building Futures Since {SCHOOL.founded}
                </h1>
                <p className="text-body-xl text-white/80 max-w-2xl">
                  For {SCHOOL.yearsInOperation} years, we've been nurturing young minds and building
                  strong foundations for lifelong learning in Mandaluyong City.
                </p>
              </ScrollAnimation>
            </div>
          </Container>
        </section>

        {/* Stats banner */}
        <section className="py-section-sm bg-card border-b">
          <Container>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "2005", label: "Year Founded" },
                { value: "20+", label: "Years of Excellence" },
                { value: "N-G6", label: "Grade Levels" },
                { value: "DepEd", label: "Recognized" },
              ].map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="text-center">
                    <div className="text-display-md font-display text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* Our Story */}
        <section className="py-section">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollAnimation direction="left">
                <div className="relative">
                  <div className="aspect-[4/3] bg-muted rounded-card-xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                      <BookOpen className="w-32 h-32 text-primary/40" />
                    </div>
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-card-lg shadow-xl">
                    <div className="text-3xl font-display font-bold">20+</div>
                    <div className="text-sm opacity-90">Years</div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="right">
                <Badge variant="outline" className="mb-4">Our Story</Badge>
                <h2 className="text-display-md font-display mb-6">
                  A Legacy of Quality Education
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
                    As a proud member of the Christian Educators' Network (CEdNet), we
                    integrate values-based education into our curriculum, ensuring that our
                    students grow not just academically, but also morally and spiritually.
                  </p>
                </div>
                <Button asChild className="mt-8" variant="ghost">
                  <Link href="/academics">
                    Explore Our Programs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </ScrollAnimation>
            </div>
          </Container>
        </section>

        {/* Mission & Vision */}
        <section className="py-section bg-muted/30">
          <Container>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <ScrollAnimation direction="left">
                <Card className="h-full border-l-4 border-l-primary">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 text-primary mb-6">
                      <Target className="h-7 w-7" />
                    </div>
                    <h3 className="text-display-sm font-display mb-4">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To provide quality early childhood and elementary education that builds
                      strong foundations for lifelong learning. We nurture each child's unique
                      potential through engaging instruction, values integration, and a caring
                      community.
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation direction="right">
                <Card className="h-full border-l-4 border-l-blue-400">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-blue-500/10 text-blue-500 mb-6">
                      <Star className="h-7 w-7" />
                    </div>
                    <h3 className="text-display-sm font-display mb-4">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To be the leading neighborhood school in Mandaluyong, recognized for
                      producing well-rounded graduates who excel academically, demonstrate
                      strong character, and are prepared to contribute positively to society.
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </Container>
        </section>

        {/* Core Values */}
        <section className="py-section">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Our Core Values"
                subtitle="The principles that guide everything we do at FMA"
              />
            </ScrollAnimation>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <Card className="h-full text-center group hover-lift">
                    <CardContent className="p-8">
                      <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                        <value.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-3">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* School Head */}
        <section className="py-section bg-muted/30">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="School Leadership"
                subtitle="Meet the dedicated leader behind FMA's success"
              />
            </ScrollAnimation>

            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <FeaturedTeamCard member={schoolHead} />
              </ScrollAnimation>
            </div>
          </Container>
        </section>

        {/* Timeline */}
        <section className="py-section">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Our Journey"
                subtitle="Key milestones in FMA's 20-year history"
              />
            </ScrollAnimation>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

                {TIMELINE.map((item, index) => (
                  <ScrollAnimation key={item.year} delay={index * 0.1}>
                    <div className="relative flex items-start gap-8 pb-12 last:pb-0 group">
                      {/* Year circle */}
                      <div className="relative z-10 w-16 h-16 bg-card border-4 border-primary rounded-full flex items-center justify-center font-display text-sm font-bold text-primary shrink-0 shadow-lg group-hover:bg-primary group-hover:text-white transition-colors">
                        {item.year}
                      </div>
                      {/* Content */}
                      <div className="pt-3 flex-grow">
                        <Card className="hover-lift">
                          <CardContent className="p-6">
                            <p className="font-medium text-foreground">{item.event}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Affiliations */}
        <section className="py-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <Container>
            <ScrollAnimation>
              <div className="text-center mb-16">
                <h2 className="text-display-lg font-display mb-4">Our Affiliations</h2>
                <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
                  Proud partnerships that strengthen our educational mission
                </p>
              </div>
            </ScrollAnimation>

            <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {AFFILIATIONS.map((affiliation) => (
                <StaggerItem key={affiliation.name}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-card-xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                      <span className="font-display text-xl font-bold text-primary">
                        {affiliation.name}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3">
                      {affiliation.fullName}
                    </h3>
                    <p className="text-white/70">{affiliation.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-section-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-sky-600" />
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />

          <Container className="relative z-10">
            <ScrollAnimation>
              <div className="text-center max-w-3xl mx-auto text-white">
                <h2 className="text-display-lg font-display mb-6">
                  Join Our Community
                </h2>
                <p className="text-body-xl opacity-90 mb-10">
                  Become part of the FMA family and give your child the foundation they
                  deserve for a bright future.
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
