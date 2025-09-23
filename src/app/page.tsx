import { Hero } from "@/components/Hero";
import { NavigationBar } from "@/components/NavigationBar";
import { ImageAndText } from "@/components/ImageAndText";
import { Footer } from "@/components/Footer";
import { FeaturedCard } from "@/components/FeaturedCard";
import { BlogCard } from "@/components/BlogCard";

export default function Home() {
  return (
    <div className="font-sans">
      
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Hero Section */}
      <Hero
        title="Creating welcoming yoga spaces for every body in Baltimore"
        description="Our studio offers an open, affirming space where all neighbors can move, breathe, and rest together. We teach trauma-informed classes, provide sliding-scale pricing, and create a community rooted in care, respect, and collective well-being."
        primaryButtonText="Design System"
        secondaryButtonText="Learn More"
        primaryButtonHref="/design-system"
        secondaryButtonHref="#"
        imageSrc="/img/Yoga_Home_Pic.png"
        imageAlt="Person meditating outdoors in natural setting with hands in prayer position"
      />

      {/* Featured Cards Block */}
      <div className="bg-neutral-50 fade-in-up delay-400">
        <div className="container px-4 sm:px-6 md:px-8 xl:px-10 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <FeaturedCard
          title="Online Classes"
          description="Join our virtual yoga sessions from the comfort of your home"
          imageSrc="/img/yoga_at_home.jpg"
          imageAlt="Featured Card 2 image"
        />

        <FeaturedCard
          title="Our Teachers"
          description="Meet our experienced and trauma-informed instructors"
          imageSrc="/img/teachers.jpg"
          imageAlt="Featured Card 3 image"
        />

        <FeaturedCard
          title="Our Studio"
          description="Visit our welcoming space designed for every body"
          imageSrc="/img/studio.jpg"
          imageAlt="Featured Card 3 image"
        />

        <FeaturedCard
          title="Trainings & Workshops"
          description="Deepen your practice with specialized training programs"
          imageSrc="/img/community.jpg"
          imageAlt="Featured Card 1 image"
        />
      </div>
      </div>

      {/* Image and Text */}
      <ImageAndText
        title="Header goes here."
        description="A warm, inclusive yoga studio for every body. Our teachers center BIPOC voices, guiding classes that honor different abilities and experiences. We nurture connection, healing, and joy through movement, breath, and community care, making yoga truly accessible to all."
        imageSrc="/img/rocks.jpg"
        imageAlt="Person meditating outdoors in natural setting with hands in prayer position"
        imagePosition="left"
        variant="tertiary"
      />

      {/* Blog */}
      <div className="bg-white font-sans fade-in-up delay-200">
        <div className="container px-4 sm:px-6 md:px-8 xl:px-10 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <h2 className="font-sans text-3xl lg:text-4xl xl:text-5xl leading-tight mb-4 col-span-full">Latest Blog Posts</h2>

            <BlogCard
              title="Building Inclusive Community Through Movement"
              category="Meditation"
              date="September 4, 2025"
              readTime="3 Min Read"
              imageSrc="/img/yoga_group.jpg"
              imageAlt="Person meditating outdoors in natural setting with hands in prayer position"
              variant="base"
            />

            <BlogCard
              title="The Science of Breathwork and Stress Relief"
              category="Breathing"
              date="September 2, 2025"
              readTime="5 Min Read"
              imageSrc="/img/peace.jpg"
              imageAlt="Person practicing breathing exercises in peaceful outdoor setting"
              variant="base"
            />

            <BlogCard
              title="Breathe, Align, Repeat: Discover the Joy of Pilates"
              category="Pilates"
              date="August 28, 2025"
              readTime="5 Min Read"
              imageSrc="/img/yoga_unsplash.jpg"
              imageAlt="Person practicing breathing exercises in peaceful outdoor setting"
              variant="base"
            />

            <BlogCard
              title="Yoga for Beginners: A Complete Guide for Newbies"
              category="Yoga"
              date="August 25, 2025"
              readTime="7 Min Read"
              imageSrc="/img/teacher.jpg"
              imageAlt="Person in yoga pose in serene outdoor environment"
              variant="base"
            />

        </div>
      </div>

      {/* Footer */}
      <Footer/>
      
    </div>
  );
}