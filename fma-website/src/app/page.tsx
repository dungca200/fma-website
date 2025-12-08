import Link from "next/link";
import { ArrowRight, GraduationCap, BookOpen, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header, Footer, Container } from "@/components/layout";
import {
  SectionHeading,
  StatCard,
  ScrollAnimation,
  FloatingShapes,
  AnimatedText,
  Card,
  CardContent,
  Badge,
  FlipCard,
} from "@/components/shared";
import { SCHOOL, STATS, PROGRAMS, EVENTS } from "@/lib/constants";

export default function Home() {
  const rotatingWords = ["Excellence", "Growth", "Community", "Future"];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-[65px]">
        {/* Hero Section */}
        <section className="relative py-section-lg overflow-hidden">
          <FloatingShapes variant="hero" />
          <Container className="relative z-10">
            <ScrollAnimation>
              <div className="text-center max-w-4xl mx-auto">
                <Badge variant="secondary" className="mb-6">
                  Celebrating {SCHOOL.yearsInOperation} Years of Excellence
                </Badge>
                <h1 className="font-display text-display-md md:text-display-lg text-foreground mb-6">
                  {SCHOOL.headline}
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
                  {SCHOOL.tagline}
                </p>
                <p className="text-lg text-primary font-medium mb-8">
                  Building{" "}
                  <AnimatedText words={rotatingWords} className="text-secondary" />
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button size="lg" asChild>
                    <Link href="/admission">
                      Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </Container>
        </section>

        {/* Stats Section */}
        <section className="py-section bg-primary/5">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map((stat, index) => (
                <ScrollAnimation key={stat.label} delay={index * 100}>
                  <StatCard value={stat.value} label={stat.label} />
                </ScrollAnimation>
              ))}
            </div>
          </Container>
        </section>

        {/* About Preview */}
        <section className="py-section-lg">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation direction="left">
                <div className="aspect-[4/3] bg-muted rounded-card-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <GraduationCap className="w-24 h-24 text-primary/50" />
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="right">
                <Badge className="mb-4">About Us</Badge>
                <h2 className="font-display text-display-sm text-foreground mb-4">
                  Nurturing Young Minds Since {SCHOOL.founded}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Future Minds Academy has been a cornerstone of quality education in
                  Mandaluyong City for {SCHOOL.yearsInOperation} years. As a DepEd-recognized
                  institution and proud member of the Christian Educators&apos; Network
                  (CEdNet), we are committed to providing excellent education with values
                  integration.
                </p>
                <Button asChild variant="outline">
                  <Link href="/about">
                    Discover Our Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </ScrollAnimation>
            </div>
          </Container>
        </section>

        {/* Programs Section */}
        <section className="py-section-lg bg-muted/50">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Our Programs"
                subtitle="Comprehensive education from preschool to elementary, following the DepEd K-12 curriculum"
              />
            </ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(PROGRAMS).map(([key, program], index) => (
                <ScrollAnimation key={key} delay={index * 150}>
                  <FlipCard
                    className="h-[300px]"
                    front={
                      <div className="h-full flex flex-col items-center justify-center text-center">
                        {key === "preschool" ? (
                          <BookOpen className="w-16 h-16 text-primary mb-4" />
                        ) : (
                          <GraduationCap className="w-16 h-16 text-primary mb-4" />
                        )}
                        <h3 className="font-display text-2xl font-semibold mb-2">
                          {program.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Hover to learn more
                        </p>
                      </div>
                    }
                    back={
                      <div className="h-full flex flex-col justify-center">
                        <h3 className="font-display text-xl font-semibold mb-4">
                          {program.name}
                        </h3>
                        <p className="text-sm mb-4 opacity-90">{program.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {program.levels.map((level) => (
                            <Badge key={level} variant="outline" className="bg-white/20 border-white/30 text-white">
                              {level}
                            </Badge>
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

        {/* Persona Cards */}
        <section className="py-section-lg">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Who We Serve"
                subtitle="Dedicated to supporting both parents and students in their educational journey"
              />
            </ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-8">
              <ScrollAnimation delay={0}>
                <Card className="h-full bg-primary/5 border-2 border-primary/20">
                  <CardContent className="p-8">
                    <Users className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-display text-2xl font-semibold mb-4">For Parents</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        Safe and nurturing environment
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        Regular progress updates
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        Values-based education
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        Affordable quality education
                      </li>
                    </ul>
                    <Button asChild className="mt-6">
                      <Link href="/admission">Enroll Your Child</Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
              <ScrollAnimation delay={150}>
                <Card className="h-full bg-secondary/5 border-2 border-secondary/20">
                  <CardContent className="p-8">
                    <Heart className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="font-display text-2xl font-semibold mb-4">For Students</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">✓</span>
                        Fun and engaging learning
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">✓</span>
                        Supportive teachers
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">✓</span>
                        Exciting school activities
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">✓</span>
                        New friends and experiences
                      </li>
                    </ul>
                    <Button asChild variant="secondary" className="mt-6">
                      <Link href="/academics">Explore Programs</Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </Container>
        </section>

        {/* Events Preview + Goldenberg Highlight */}
        <section className="py-section-lg bg-muted/50">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Latest News & Events"
                subtitle="Stay updated with the latest happenings at FMA"
              />
            </ScrollAnimation>

            {/* Goldenberg Concert Highlight */}
            <ScrollAnimation>
              <Card className="mb-8 overflow-hidden bg-gradient-to-r from-primary to-primary-dark text-white">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-white/20 text-white border-0">Featured</Badge>
                    <Badge className="bg-secondary text-white border-0">Manila Bulletin</Badge>
                    <Badge className="bg-white/20 text-white border-0">GMA News</Badge>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
                    Goldenberg Concert Series XX
                  </h3>
                  <p className="text-white/90 mb-4 max-w-2xl">
                    FMA students attended the prestigious PCSO Vocal Ensemble performance at
                    Malacañang Palace, featured in Manila Bulletin and GMA News!
                  </p>
                  <p className="text-white/70 text-sm">November 7, 2025</p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Other Events */}
            <div className="grid md:grid-cols-3 gap-6">
              {EVENTS.filter((e) => !e.featured).slice(0, 3).map((event, index) => (
                <ScrollAnimation key={event.title} delay={index * 100}>
                  <Card>
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">
                        {event.date}
                      </Badge>
                      <h4 className="font-display text-lg font-semibold mb-2">
                        {event.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/events">
                  View All Events <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-section-lg bg-secondary text-secondary-foreground">
          <Container>
            <ScrollAnimation>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-display text-display-sm md:text-display-md mb-6">
                  Ready to Join the FMA Family?
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Give your child the gift of quality education. Enrollment is now open for
                  preschool and elementary programs.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-secondary hover:bg-white/90"
                    asChild
                  >
                    <Link href="/admission">Start Application</Link>
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
