import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
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
import { EVENTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "School Events & News | Future Minds Academy",
  description:
    "Stay updated with FMA's latest events, activities, and achievements including the Goldenberg Concert at Malacañang.",
};

export default function EventsPage() {
  const featuredEvent = EVENTS.find((e) => e.featured);
  const otherEvents = EVENTS.filter((e) => !e.featured);

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
                <Badge className="mb-4">Events & News</Badge>
                <h1 className="font-display text-display-md md:text-display-lg text-foreground mb-6">
                  School Activities & Achievements
                </h1>
                <p className="text-xl text-muted-foreground">
                  Stay connected with the latest happenings at Future Minds Academy
                </p>
              </div>
            </ScrollAnimation>
          </Container>
        </section>

        {/* Featured Event - Goldenberg */}
        {featuredEvent && (
          <section className="py-section-lg">
            <Container>
              <ScrollAnimation>
                <Card className="overflow-hidden bg-gradient-to-r from-primary to-primary-dark text-white">
                  <CardContent className="p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-6">
                          <Badge className="bg-white/20 text-white border-0">Featured Event</Badge>
                          {featuredEvent.media?.map((outlet) => (
                            <Badge key={outlet} className="bg-secondary text-secondary-foreground border-0">
                              {outlet}
                            </Badge>
                          ))}
                        </div>
                        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
                          {featuredEvent.title}
                        </h2>
                        <p className="text-white/90 text-lg mb-4">
                          {featuredEvent.description}
                        </p>
                        <p className="text-white/70 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {featuredEvent.date}
                        </p>
                      </div>
                      <div className="aspect-video bg-white/10 rounded-card-lg flex items-center justify-center">
                        <div className="text-center">
                          <Calendar className="w-16 h-16 text-white/50 mx-auto mb-4" />
                          <p className="text-white/50">Event Photo</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </Container>
          </section>
        )}

        {/* Events Grid */}
        <section className="py-section-lg bg-muted/50">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Recent Events"
                subtitle="Highlights from our school activities"
              />
            </ScrollAnimation>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherEvents.map((event, index) => (
                <ScrollAnimation key={event.title} delay={index * 100}>
                  <Card className="h-full">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <Calendar className="w-12 h-12 text-muted-foreground/50" />
                      </div>
                      <div className="p-6">
                        <Badge variant="outline" className="mb-3">
                          {event.date}
                        </Badge>
                        <h3 className="font-display text-lg font-semibold mb-2">
                          {event.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {event.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </Container>
        </section>

        {/* School Calendar */}
        <section className="py-section-lg">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="School Calendar"
                subtitle="Key activities throughout the school year"
              />
            </ScrollAnimation>
            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {schoolCalendar.map((item, index) => (
                  <ScrollAnimation key={item.month} delay={index * 50}>
                    <Card hover={false} className="h-full">
                      <CardContent className="p-4">
                        <h4 className="font-display font-semibold text-primary mb-2">
                          {item.month}
                        </h4>
                        <ul className="space-y-1">
                          {item.activities.map((activity) => (
                            <li key={activity} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
              <ScrollAnimation delay={500}>
                <p className="text-sm text-muted-foreground text-center mt-6">
                  * Schedule may vary. Follow our Facebook page for updates.
                </p>
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
                  Stay Updated
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Follow us on Facebook for real-time updates on school events and
                  announcements.
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-secondary hover:bg-white/90"
                  asChild
                >
                  <a href="https://www.facebook.com/FUTUREMINDSACADEMY" target="_blank" rel="noopener noreferrer">
                    Follow on Facebook <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
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
