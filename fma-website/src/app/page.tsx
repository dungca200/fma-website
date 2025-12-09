import Link from "next/link";
import { ArrowRight, GraduationCap, BookOpen, Users, Heart, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header, Footer, Container } from "@/components/layout";
import {
  SectionHeading,
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  HeroCarousel,
  InteractiveTabs,
  TestimonialCarousel,
  Card,
  CardContent,
  Badge,
} from "@/components/shared";
import type { HeroSlide, Testimonial, Tab } from "@/components/shared";
import { SCHOOL, STATS, PROGRAMS, EVENTS } from "@/lib/constants";

// Hero slides with new marketing copy and images
const heroSlides: HeroSlide[] = [
  {
    headline: "Building Strong Foundations for 20 Years",
    subheadline: "Ensuring a strong foundation for every child's educational journey from preschool to primary school",
    cta: { text: "Enroll Now", href: "/admission" },
    image: "/images/hero/hero-1.jpg",
  },
  {
    headline: "Where Every Child's Potential is Nurtured",
    subheadline: "Small class sizes, personalized attention, and values-based education that shapes future leaders",
    cta: { text: "Meet Our Faculty", href: "/faculty" },
    image: "/images/hero/hero-2.jpg",
  },
  {
    headline: "DepEd Recognized Excellence",
    subheadline: "Following the K-12 curriculum with a commitment to academic excellence and character development",
    cta: { text: "Explore Programs", href: "/academics" },
    image: "/images/hero/hero-3.jpg",
  },
  {
    headline: "Join the FMA Family",
    subheadline: "Be part of a community that celebrates achievements and creates lasting memories",
    cta: { text: "Contact Us", href: "/contact" },
    image: "/images/hero/hero-4.jpg",
  },
];

// Who is FMA for - Interactive Tabs
const audienceTabs: Tab[] = [
  {
    id: "parents",
    label: "Parents",
    title: "For Working & First-Time Parents",
    description: "Seeking a safe, nurturing environment with convenient location near MRT stations and regular communication about your child's progress. We understand the challenges of balancing work and parenting.",
    image: "/images/tabs/parents.jpg",
    icon: <Users className="h-5 w-5" />,
    features: [
      "Safe and secure campus environment",
      "Regular progress updates via app",
      "Convenient location near MRT",
      "Flexible payment options",
    ],
  },
  {
    id: "preschoolers",
    label: "Preschoolers",
    title: "For Curious Young Learners",
    description: "Ready for fun, engaging learning experiences with supportive teachers and exciting school activities. Our play-based approach nurtures natural curiosity and love for learning.",
    image: "/images/tabs/preschoolers.jpg",
    icon: <Heart className="h-5 w-5" />,
    features: [
      "Play-based learning curriculum",
      "Small class sizes (max 20 students)",
      "Caring and trained teachers",
      "Fun field trips and activities",
    ],
  },
  {
    id: "educators",
    label: "Values-Driven",
    title: "For Values-Driven Families",
    description: "Wanting education that integrates character formation and moral values alongside academic excellence. We're part of CEdNet (Christian Educators' Network) for holistic development.",
    image: "/images/tabs/educators.jpg",
    icon: <Star className="h-5 w-5" />,
    features: [
      "Values integration in curriculum",
      "Character formation programs",
      "CEdNet member school",
      "Community service activities",
    ],
  },
];

// Placeholder testimonials
const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Future Minds Academy has been amazing for our daughter. The teachers are so caring and we've seen incredible growth in her confidence and love for learning.",
    author: "Maria Santos",
    role: "Parent of Kindergarten Student",
  },
  {
    id: "2",
    quote: "The small class sizes mean our son gets the attention he needs. The school really feels like a family and we couldn't be happier with our choice.",
    author: "Juan Dela Cruz",
    role: "Parent of Grade 3 Student",
  },
  {
    id: "3",
    quote: "I love going to school! My teachers are fun and I have so many friends. We went to a concert at Malacañang and it was the best day ever!",
    author: "Sofia",
    role: "Grade 5 Student",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Carousel */}
        <HeroCarousel slides={heroSlides} autoPlayInterval={6000} />

        {/* Stats Section */}
        <section className="py-section-sm bg-background relative">
          <Container>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="text-center p-6 rounded-card-lg bg-card shadow-card hover-lift">
                    <div className="text-display-md font-display text-gradient mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* Who is FMA For - Interactive Tabs */}
        <section className="py-section bg-muted/30">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Who is Future Minds Academy For?"
                subtitle="We serve families in Mandaluyong who value quality education, character development, and a nurturing community"
              />
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <InteractiveTabs tabs={audienceTabs} />
            </ScrollAnimation>
          </Container>
        </section>

        {/* Programs Preview */}
        <section className="py-section bg-background">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Academic Programs"
                subtitle="Comprehensive education following the DepEd K-12 curriculum with values integration"
              />
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(PROGRAMS).map(([key, program], index) => (
                <ScrollAnimation key={key} delay={index * 0.15} direction={index === 0 ? "left" : "right"}>
                  <div className="group relative bg-card rounded-card-xl p-8 shadow-card hover-lift overflow-hidden">
                    {/* Background number */}
                    <div className="absolute -top-8 -right-4 font-display text-[10rem] font-bold leading-none text-primary/5 select-none">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                        {key === "preschool" ? (
                          <BookOpen className="h-7 w-7" />
                        ) : (
                          <GraduationCap className="h-7 w-7" />
                        )}
                      </div>

                      <h3 className="text-display-sm font-display mb-3">{program.name}</h3>
                      <p className="text-muted-foreground mb-6">{program.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {program.levels.map((level) => (
                          <Badge key={level} variant="outline">
                            {level}
                          </Badge>
                        ))}
                      </div>

                      <Button asChild variant="ghost" className="group/btn -ml-4">
                        <Link href="/academics">
                          Learn More
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

        {/* Why Choose FMA */}
        <section className="py-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <Container>
            <ScrollAnimation>
              <div className="text-center mb-16">
                <h2 className="text-display-lg font-display mb-4">Why Choose FMA?</h2>
                <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
                  For 20 years, we've been committed to providing quality education that makes a difference
                </p>
              </div>
            </ScrollAnimation>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "DepEd Recognized", desc: "Government-approved curriculum ensuring quality education standards" },
                { title: "Small Class Sizes", desc: "Personalized attention for every student's unique needs" },
                { title: "CEdNet Member", desc: "Part of the Christian Educators' Network for values-based education" },
                { title: "Experienced Teachers", desc: "Dedicated faculty committed to nurturing young minds" },
                { title: "Convenient Location", desc: "Near MRT stations, accessible to Mandaluyong families" },
                { title: "Active Community", desc: "Regular events, field trips, and parent engagement" },
              ].map((item, i) => (
                <StaggerItem key={item.title}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* Testimonials */}
        <section className="py-section bg-muted/30">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="What Our Community Says"
                subtitle="Hear from the families who have made FMA their educational home"
              />
            </ScrollAnimation>

            <div className="max-w-3xl mx-auto">
              <TestimonialCarousel testimonials={testimonials} autoPlayInterval={7000} />
            </div>
          </Container>
        </section>

        {/* Events Highlight */}
        <section className="py-section bg-background">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Latest News & Events"
                subtitle="Stay connected with what's happening at FMA"
              />
            </ScrollAnimation>

            {/* Featured Event - Goldenberg Concert */}
            <ScrollAnimation>
              <div className="relative mb-12 rounded-card-xl overflow-hidden bg-gradient-to-r from-primary to-primary-dark">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
                <div className="relative z-10 p-8 md:p-12 text-white">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-white/20 text-white border-0">Featured</Badge>
                    <Badge className="bg-blue-400 text-white border-0">Manila Bulletin</Badge>
                    <Badge className="bg-white/20 text-white border-0">GMA News</Badge>
                  </div>
                  <h3 className="text-display-sm font-display mb-4">
                    Goldenberg Concert Series XX
                  </h3>
                  <p className="text-white/90 mb-6 max-w-2xl text-body-lg">
                    FMA students attended the prestigious PCSO Vocal Ensemble performance at
                    the historic Goldenberg Mansion in Malacañang, featured in national media!
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-white/70 text-sm">November 7, 2025</span>
                    <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
                      <Link href="/events">View All Events</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Other Events Grid */}
            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              {EVENTS.filter((e) => !e.featured).slice(0, 3).map((event) => (
                <StaggerItem key={event.title}>
                  <Card className="h-full hover-lift">
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
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-section-lg relative overflow-hidden">
          {/* Background - Blue gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-primary to-blue-700" />
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />

          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-300/10 rounded-full blur-2xl" />

          {/* Content */}
          <Container className="relative z-10">
            <ScrollAnimation>
              <div className="text-center max-w-3xl mx-auto text-white">
                <h2 className="text-display-lg font-display mb-6">
                  Ready to Join the FMA Family?
                </h2>
                <p className="text-body-xl opacity-90 mb-10">
                  Give your child the gift of quality education. Enrollment is now open for
                  preschool and elementary programs for School Year 2025-2026.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 shadow-xl"
                    asChild
                  >
                    <Link href="/admission">
                      Start Application
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
