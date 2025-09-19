import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { NavigationBar } from "@/components/NavigationBar";
import { ImageAndText } from "@/components/ImageAndText";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans">
      
      {/* Navigation Bar with Animations */}
      <NavigationBar
        logoText="Union Yoga"
        navigationItems={[
          { label: "About", href: "#about" },
          { label: "Classes", href: "#classes" },
          { label: "Blog", href: "#blog" }
        ]}
        signInHref="#signin"
        primaryButtonText="Get Started"
        primaryButtonHref="#get-started"
        enableAnimations={true}
      />

      {/* Hero Section */}
      <Hero
        title="Creating welcoming yoga spaces for every body in Baltimore"
        description="Our studio offers an open, affirming space where all neighbors can move, breathe, and rest together. We teach trauma-informed classes, provide sliding-scale pricing, and create a community rooted in care, respect, and collective well-being."
        primaryButtonText="Get Started"
        secondaryButtonText="Learn More"
        primaryButtonHref="#"
        secondaryButtonHref="#"
        imageSrc="/img/Yoga_Home_Pic.png"
        imageAlt="Person meditating outdoors in natural setting with hands in prayer position"
      />

      {/* Image and Text */}
      <ImageAndText
        title="Header goes here."
        description="A warm, inclusive yoga studio for every body. Our teachers center BIPOC voices, guiding classes that honor different abilities and experiences. We nurture connection, healing, and joy through movement, breath, and community care, making yoga truly accessible to all."
        imageSrc="/img/rocks.jpg"
        imageAlt="Person meditating outdoors in natural setting with hands in prayer position"
        imagePosition="left"
        variant="base"
      />
      
      {/* Design System Link */}
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Explore Our Design System</h2>
        <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
          Discover all the components, colors, typography, and design patterns used throughout our application.
        </p>
        <Link href="/design-system">
          <Button variant="primary" size="base">
            View Design System
          </Button>
        </Link>
      </div>
    </div>
  );
}