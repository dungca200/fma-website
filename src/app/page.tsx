import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header, Footer, Container } from "@/components/layout";
import { SCHOOL, STATS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-[65px]">
        {/* Hero Section */}
        <section className="py-section-lg">
          <Container className="text-center">
            <h1 className="font-display text-display-md md:text-display-lg text-foreground mb-6">
              {SCHOOL.headline}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {SCHOOL.tagline}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link href="/admission">Enroll Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Stats Section */}
        <section className="py-section bg-primary/5">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-card p-6 text-center shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Color Palette Test */}
        <section className="py-section">
          <Container>
            <h2 className="font-display text-display-sm text-center mb-8">
              Design Tokens Test
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-primary text-primary-foreground">
                Primary
              </div>
              <div className="p-4 rounded-lg bg-secondary text-secondary-foreground">
                Secondary
              </div>
              <div className="p-4 rounded-lg bg-accent text-accent-foreground">
                Accent
              </div>
              <div className="p-4 rounded-lg bg-muted text-muted-foreground">
                Muted
              </div>
            </div>
            <div className="mt-6 flex gap-4 flex-wrap justify-center">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
