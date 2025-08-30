import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="font-heading text-4xl font-bold mb-6 text-foreground">Project Details</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Welcome to the project page. Here you can showcase project details, images, and more.
        </p>
        {/* Add your project content here */}
      </main>
      <Footer />
    </div>
  );
}
