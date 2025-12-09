import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, GraduationCap, Heart, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header, Footer, Container } from "@/components/layout";
import {
  SectionHeading,
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  FeaturedTeamCard,
  TeamGrid,
  Card,
  CardContent,
  Badge,
} from "@/components/shared";
import type { TeamMember } from "@/components/shared";
import { FACULTY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Faculty | Future Minds Academy",
  description:
    "Meet the dedicated teachers and staff of Future Minds Academy committed to nurturing young minds.",
};

const schoolHead: TeamMember = {
  id: "school-head",
  name: FACULTY.schoolHead.name,
  position: FACULTY.schoolHead.position,
  image: FACULTY.schoolHead.image || undefined,
  bio: `Leading Future Minds Academy for over two decades, ${FACULTY.schoolHead.name} has dedicated his career to providing quality, values-based education to families in Mandaluyong City. Under his leadership, FMA has grown from a small preschool to a comprehensive elementary institution serving the community.`,
};

const teacherMembers: TeamMember[] = FACULTY.teachers.map((teacher, index) => ({
  id: `teacher-${index}`,
  name: teacher.name,
  position: teacher.position,
  image: teacher.image || undefined,
}));

// Additional placeholder staff
const additionalStaff: TeamMember[] = [
  { id: "staff-1", name: "Teaching Staff", position: "Educator" },
  { id: "staff-2", name: "Teaching Staff", position: "Educator" },
  { id: "staff-3", name: "Teaching Staff", position: "Educator" },
  { id: "staff-4", name: "Teaching Staff", position: "Educator" },
];

const values = [
  {
    icon: Heart,
    title: "Passion for Teaching",
    description: "Our educators bring enthusiasm and dedication to every lesson",
  },
  {
    icon: Award,
    title: "Professional Excellence",
    description: "Continuously improving through training and development",
  },
  {
    icon: Users,
    title: "Student-Centered",
    description: "Focused on each child's unique learning needs and growth",
  },
];

export default function FacultyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
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
                <Badge className="mb-6 bg-white/10 text-white border-0">
                  <Users className="h-4 w-4 mr-2" />
                  Our Team
                </Badge>
                <h1 className="text-display-xl font-display text-white mb-6">
                  Meet Our Faculty
                </h1>
                <p className="text-body-xl text-white/80 max-w-2xl">
                  Dedicated educators committed to nurturing every child's potential
                  and building strong foundations for lifelong learning.
                </p>
              </ScrollAnimation>
            </div>
          </Container>
        </section>

        {/* Stats banner */}
        <section className="py-section-sm bg-card border-b">
          <Container>
            <StaggerContainer className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { value: "20+", label: "Years Experience" },
                { value: "10+", label: "Dedicated Teachers" },
                { value: "100%", label: "Commitment" },
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

        {/* School Head Feature */}
        <section className="py-section">
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

        {/* Our Values */}
        <section className="py-section bg-muted/30">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Our Teaching Philosophy"
                subtitle="The principles that guide our educators"
              />
            </ScrollAnimation>

            <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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

        {/* Teaching Staff Grid */}
        <section className="py-section">
          <Container>
            <ScrollAnimation>
              <SectionHeading
                title="Teaching Staff"
                subtitle="Our dedicated team of educators"
              />
            </ScrollAnimation>

            <TeamGrid
              members={[...teacherMembers, ...additionalStaff]}
              className="lg:grid-cols-3 xl:grid-cols-3"
            />
          </Container>
        </section>

        {/* Join Our Team */}
        <section className="py-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollAnimation direction="left">
                <Badge className="mb-6 bg-white/10 text-white border-0">Careers</Badge>
                <h2 className="text-display-md font-display mb-6">
                  Join Our Team
                </h2>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Are you a passionate educator looking for an opportunity to make a
                  difference? We're always looking for dedicated teachers who share
                  our commitment to quality education and values formation.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Supportive and collaborative work environment",
                    "Professional development opportunities",
                    "Small class sizes for meaningful impact",
                    "Values-aligned community",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/80">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Us About Opportunities
                  </Link>
                </Button>
              </ScrollAnimation>

              <ScrollAnimation direction="right">
                <div className="relative">
                  <div className="aspect-square bg-white/5 rounded-card-xl overflow-hidden border border-white/10 relative">
                    <Image
                      src="/images/faculty/team.jpg"
                      alt="Teaching team collaborating"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-card-lg shadow-xl">
                    <div className="text-3xl font-display font-bold">Join</div>
                    <div className="text-sm opacity-90">Our Team</div>
                  </div>
                </div>
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
                  Experience Our Teaching Excellence
                </h2>
                <p className="text-body-xl opacity-90 mb-10">
                  Visit FMA and see how our dedicated faculty creates a nurturing
                  learning environment for every child.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 shadow-xl"
                    asChild
                  >
                    <Link href="/admission">
                      Schedule a Visit
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
