import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight, Newspaper, Star, Facebook } from "lucide-react";
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
import { EVENTS, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "School Events & News | Future Minds Academy",
  description:
    "Stay updated with FMA's latest events, activities, and achievements including the Goldenberg Concert at Malacañang.",
};

const schoolCalendar = [
  { month: "June", activities: ["Opening of Classes", "Orientation Program"] },
  { month: "July", activities: ["Nutrition Month", "Buwan ng Wika"] },
  { month: "August", activities: ["Science Month", "First Quarter Exams"] },
  { month: "September", activities: ["First Quarter Recognition", "Teachers Day"] },
  { month: "October", activities: ["UN Week", "Earthquake Drill", "Second Quarter Exams"] },
  { month: "November", activities: ["Second Quarter Recognition", "Nutrition Month"] },
  { month: "December", activities: ["Christmas Program", "Vacation"] },
  { month: "January", activities: ["Classes Resume", "Third Quarter Exams"] },
  { month: "February", activities: ["Third Quarter Recognition", "Foundation Day"] },
  { month: "March", activities: ["Fourth Quarter Exams", "Moving Up/Graduation"] },
];

export default function EventsPage() {
  const featuredEvent = EVENTS.find((e) => e.featured);
  const otherEvents = EVENTS.filter((e) => !e.featured);

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
                  <Newspaper className="h-4 w-4 mr-2" />
                  Events & News
                </Badge>
                <h1 className="text-display-xl font-display text-white mb-6">
                  School Activities & Achievements
                </h1>
                <p className="text-body-xl text-white/90 max-w-2xl">
                  Stay connected with the latest happenings at Future Minds Academy.
                  From classroom activities to national recognition.
                </p>
              </ScrollAnimation>
            </div>
          </Container>
        </section>

        {/* Featured Event - Goldenberg */}
        {featuredEvent && (
          <section className="py-section">
            <Container>
              <ScrollAnimation>
                <div className="relative rounded-card-xl overflow-hidden bg-gradient-to-r from-primary to-primary-dark">
                  <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
                  <div className="relative z-10 p-8 md:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-6">
                          <Badge className="bg-white/20 text-white border-0">
                            <Star className="h-3 w-3 mr-1" />
                            Featured Event
                          </Badge>
                          {featuredEvent.media?.map((outlet) => (
                            <Badge key={outlet} className="bg-secondary text-secondary-foreground border-0">
                              {outlet}
                            </Badge>
                          ))}
                        </div>
                        <h2 className="text-display-md font-display text-white mb-4">
                          {featuredEvent.title}
                        </h2>
                        <p className="text-white/90 text-body-lg mb-6 leading-relaxed">
                          {featuredEvent.description}
                        </p>
                        <div className="flex items-center gap-4 text-white/70">
                          <Calendar className="w-5 h-5" />
                          <span>{featuredEvent.date}</span>
                        </div>
                      </div>
                      <div className="aspect-video bg-white/10 rounded-card-lg flex items-center justify-center border border-white/20">
                        <div className="text-center">
                          <div className="h-20 w-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Calendar className="w-10 h-10 text-white/50" />
                          </div>
                          <p className="text-white/50 text-sm">Event Photo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </Container>
          </section>
        )}

        {/* Events Grid */}
        <section className="py-section bg-muted/30">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Recent Events"
                subtitle="Highlights from our school activities and celebrations"
              />
            </ScrollAnimation>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherEvents.map((event) => (
                <StaggerItem key={event.title}>
                  <Card className="h-full group hover-lift overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                        <Calendar className="w-12 h-12 text-primary/30 group-hover:text-primary/50 transition-colors" />
                      </div>
                      <div className="p-6">
                        <Badge variant="outline" className="mb-3">
                          {event.date}
                        </Badge>
                        <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* School Calendar */}
        <section className="py-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <Container>
            <ScrollAnimation>
              <div className="text-center mb-16">
                <h2 className="text-display-lg font-display mb-4">School Calendar</h2>
                <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
                  Key activities throughout the school year
                </p>
              </div>
            </ScrollAnimation>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {schoolCalendar.map((item) => (
                <StaggerItem key={item.month}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-card-lg p-5 border border-white/10 hover:bg-white/10 transition-colors h-full">
                    <h4 className="font-display font-semibold text-primary mb-3">
                      {item.month}
                    </h4>
                    <ul className="space-y-2">
                      {item.activities.map((activity) => (
                        <li key={activity} className="text-sm text-white/70 flex items-start gap-2">
                          <span className="text-primary mt-1.5 text-xs">●</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollAnimation delay={0.5}>
              <p className="text-sm text-white/50 text-center mt-8">
                * Schedule may vary. Follow our Facebook page for updates.
              </p>
            </ScrollAnimation>
          </Container>
        </section>

        {/* Highlights Section */}
        <section className="py-section">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="FMA Highlights"
                subtitle="Memorable moments from our school community"
              />
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ScrollAnimation direction="left">
                <Card className="h-full hover-lift">
                  <CardContent className="p-8">
                    <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <Star className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3">
                      Academic Recognition
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Every quarter, we celebrate our academic achievers through
                      recognition programs that honor their hard work and dedication.
                    </p>
                    <Badge variant="outline">Quarterly Events</Badge>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation direction="right">
                <Card className="h-full hover-lift">
                  <CardContent className="p-8">
                    <div className="h-14 w-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                      <Calendar className="h-7 w-7 text-secondary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3">
                      Cultural Celebrations
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      From Buwan ng Wika to Christmas programs, our students experience
                      rich cultural celebrations throughout the year.
                    </p>
                    <Badge variant="outline">Annual Traditions</Badge>
                  </CardContent>
                </Card>
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
                  Stay Updated
                </h2>
                <p className="text-body-xl opacity-90 mb-10">
                  Follow us on Facebook for real-time updates on school events,
                  announcements, and community highlights.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 shadow-xl"
                    asChild
                  >
                    <a href={CONTACT.social.facebook} target="_blank" rel="noopener noreferrer">
                      <Facebook className="mr-2 h-4 w-4" />
                      Follow on Facebook
                    </a>
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
