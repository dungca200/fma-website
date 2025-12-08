import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { SCHOOL, STATS } from "@/lib/constants";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Test Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-container mx-auto px-6 py-4 flex items-center justify-between">
          <h2 className="font-display text-xl font-semibold text-primary">
            {SCHOOL.shortName}
          </h2>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-section-lg px-6">
        <div className="max-w-container mx-auto text-center">
          <h1 className="font-display text-display-md md:text-display-lg text-foreground mb-6">
            {SCHOOL.headline}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {SCHOOL.tagline}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg">Enroll Now</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-section bg-primary/5">
        <div className="max-w-container mx-auto px-6">
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
        </div>
      </section>

      {/* Color Palette Test */}
      <section className="py-section px-6">
        <div className="max-w-container mx-auto">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} {SCHOOL.fullName}</p>
        <p className="mt-1">Phase 1 Setup Complete</p>
      </footer>
    </main>
  );
}
