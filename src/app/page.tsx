import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Hero
        title="Designing digital products with enterprises and startups since 2013"
        description="A safe, innovative, and easy crypto app for everyone. I led end-to-end designs for the Giddy app, revamped the website with marketing, and co-developed a design system with engineering."
        primaryButtonText="Get Started"
        secondaryButtonText="Learn More"
        primaryButtonHref="#"
        secondaryButtonHref="#"
        imageSrc="/img/Yoga_Home_Pic.png"
        imageAlt="Person meditating outdoors in natural setting with hands in prayer position"
      />
      
      {/* Design System Link */}
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Explore Our Design System</h2>
        <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
          Discover all the components, colors, typography, and design patterns used throughout our application.
        </p>
        <Link href="/design-system">
          <Button variant="primary" size="md">
            View Design System
          </Button>
        </Link>
      </div>
    </div>
  );
}