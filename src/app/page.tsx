import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-6">
      <h1 className="text-4xl font-bold text-primary">
        Future Minds Academy
      </h1>
      <p className="text-muted-foreground">
        Building Strong Foundations for 20 Years
      </p>
      <div className="flex gap-4">
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </main>
  );
}
