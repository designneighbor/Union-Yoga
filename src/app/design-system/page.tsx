import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { BlogCard } from "@/components/BlogCard";
import { Hero } from "@/components/Hero";
import { FeaturedCard } from "@/components/FeaturedCard";
import { NavigationBar } from "@/components/NavigationBar";
import { ImageAndText } from "@/components/ImageAndText";
import { Footer } from "@/components/Footer";

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Design System</h1>
          <p className="text-lg text-neutral-600 max-w-2xl">
            A comprehensive collection of UI components and design patterns for the Union Yoga project. 
            This living document showcases all reusable components, their variations, and usage guidelines.
          </p>
        </div>

        {/* Navigation Bar Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Navigation Bar</h2>
            <p className="text-neutral-600 mb-6">
              A responsive navigation component that adapts to different screen sizes. Features a clean desktop layout 
              with pill-shaped navigation links and a mobile-friendly hamburger menu with a dark sidebar overlay.
            </p>
          </div>

          {/* Navigation Bar Example */}
          <div className="border border-neutral-200 rounded-lg overflow-hidden">
            <NavigationBar />
          </div>

          {/* Responsive Behavior Demo */}
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Responsive Behavior</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="p-4 border border-neutral-200 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">Desktop (lg+)</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Full horizontal layout</li>
                    <li>• Logo on the left</li>
                    <li>• Navigation links in center</li>
                    <li>• Action buttons on the right</li>
                    <li>• Light neutral-50 background</li>
                  </ul>
                </div>
                <div className="p-4 border border-neutral-200 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">Mobile (Closed)</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Logo on the left</li>
                    <li>• Hamburger menu on the right</li>
                    <li>• Navigation links hidden</li>
                    <li>• Light neutral-50 background</li>
                  </ul>
                </div>
                <div className="p-4 border border-neutral-200 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">Mobile (Open)</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Dark primary-950 sidebar</li>
                    <li>• White logo and close button</li>
                    <li>• Vertical navigation links</li>
                    <li>• Stacked action buttons</li>
                    <li>• Semi-transparent overlay</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="mt-8 p-6 bg-neutral-50 rounded-lg">
            <h4 className="text-lg font-medium text-foreground mb-3">Usage Guidelines</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>• Use as the primary navigation component across all pages</li>
              <li>• Navigation links are displayed in pill-shaped containers for better visual hierarchy</li>
              <li>• Mobile menu automatically appears on screens smaller than lg (1024px)</li>
              <li>• Background changes from neutral-50 to primary-950 when mobile menu is active</li>
              <li>• Fully accessible with proper ARIA labels and keyboard navigation</li>
              <li>• Hamburger menu includes both open and close states with appropriate icons</li>
              <li>• Mobile sidebar includes overlay for better focus management</li>
              <li>• All interactive elements have hover and focus states</li>
              <li>• Logo and navigation items automatically close mobile menu when clicked</li>
              <li>• Customizable navigation items, logo text, and button text via props</li>
            </ul>
          </div>
        </section>

        {/* Image and Text Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Image and Text</h2>
            <p className="text-neutral-600 mb-6">
              A versatile content component that pairs compelling text with engaging imagery. 
              Available in three distinct variants to match different design contexts and content needs.
            </p>
          </div>

          {/* Image and Text Examples */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Base Variant</h3>
              <div className="border border-neutral-200 rounded-lg overflow-hidden">
                <ImageAndText
                  title="Header goes here."
                  description="A warm, inclusive yoga studio for every body. Our teachers center BIPOC voices, guiding classes that honor different abilities and experiences. We nurture connection, healing, and joy through movement, breath, and community care, making yoga truly accessible to all."
                  imageSrc="/img/rocks.jpg"
                  imageAlt="Person meditating outdoors in natural setting with hands in prayer position"
                  variant="base"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Secondary Variant</h3>
              <div className="border border-neutral-200 rounded-lg overflow-hidden">
                <ImageAndText
                  title="Header goes here."
                  description="A warm, inclusive yoga studio for every body. Our teachers center BIPOC voices, guiding classes that honor different abilities and experiences. We nurture connection, healing, and joy through movement, breath, and community care, making yoga truly accessible to all."
                  imageSrc="/img/rocks.jpg"
                  imageAlt="Person meditating outdoors in natural setting with hands in prayer position"
                  variant="secondary"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Tertiary Variant</h3>
              <div className="border border-neutral-200 rounded-lg overflow-hidden">
                <ImageAndText
                  title="Header goes here."
                  description="A warm, inclusive yoga studio for every body. Our teachers center BIPOC voices, guiding classes that honor different abilities and experiences. We nurture connection, healing, and joy through movement, breath, and community care, making yoga truly accessible to all."
                  imageSrc="/img/rocks.jpg"
                  imageAlt="Person meditating outdoors in natural setting with hands in prayer position"
                  variant="tertiary"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Image Position Variants</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-medium text-foreground mb-2">Image on Right (Default)</h4>
                  <div className="border border-neutral-200 rounded-lg overflow-hidden">
                    <ImageAndText
                      title="Image on the Right"
                      description="This is the default layout with text on the left and image on the right."
                      imageSrc="/img/rocks.jpg"
                      imageAlt="Person meditating outdoors in natural setting with hands in prayer position"
                      variant="base"
                      imagePosition="right"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-medium text-foreground mb-2">Image on Left</h4>
                  <div className="border border-neutral-200 rounded-lg overflow-hidden">
                    <ImageAndText
                      title="Image on the Left"
                      description="This layout places the image on the left and text on the right."
                      imageSrc="/img/rocks.jpg"
                      imageAlt="Person meditating outdoors in natural setting with hands in prayer position"
                      variant="secondary"
                      imagePosition="left"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="mt-8 p-6 bg-neutral-50 rounded-lg">
            <h4 className="text-lg font-medium text-foreground mb-3">Usage Guidelines</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>• <strong>Base Variant:</strong> Use for standard content sections with white background and dark text</li>
              <li>• <strong>Secondary Variant:</strong> Use for subtle content sections with neutral-50 background and dark text</li>
              <li>• <strong>Tertiary Variant:</strong> Use for high-impact sections with primary-950 background and white text</li>
              <li>• <strong>Image Position:</strong> Choose 'left' or 'right' to control image placement relative to text</li>
              <li>• <strong>Responsive Design:</strong> Layout automatically stacks vertically on mobile devices</li>
              <li>• <strong>Accessibility:</strong> Always provide meaningful alt text for images</li>
              <li>• <strong>Content Guidelines:</strong> Keep titles concise and descriptions informative but brief</li>
              <li>• <strong>Interactive Use:</strong> Add href prop to make the entire component clickable</li>
              <li>• <strong>Typography:</strong> Uses font-sans for consistent branding across all variants</li>
              <li>• <strong>Image Quality:</strong> Use high-resolution images that work well at different screen sizes</li>
            </ul>
          </div>
        </section>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Hero Section</h2>
            <p className="text-neutral-600 mb-6">
              A full-width hero section with compelling messaging, call-to-action buttons, and a prominent image. 
              Perfect for landing pages and key content areas.
            </p>
          </div>

          {/* Hero Example */}
          <div className="border border-neutral-200 rounded-lg overflow-hidden">
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
          </div>

          {/* Usage Guidelines */}
          <div className="mt-8 p-6 bg-neutral-50 rounded-lg">
            <h4 className="text-lg font-medium text-foreground mb-3">Usage Guidelines</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>• Use hero sections for key landing pages and important content areas</li>
              <li>• Keep headlines concise but impactful - aim for 6-12 words</li>
              <li>• Description should provide context and value proposition in 1-2 sentences</li>
              <li>• Primary button should represent the main action you want users to take</li>
              <li>• Secondary button should offer an alternative or less urgent action</li>
              <li>• Use high-quality, relevant images that support your message</li>
              <li>• Ensure text has sufficient contrast against background colors</li>
              <li>• Test on mobile devices to ensure responsive layout works well</li>
              <li>• Consider accessibility - provide meaningful alt text for images</li>
            </ul>
          </div>
        </section>

        {/* Featured Card Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Featured Cards</h2>
            <p className="text-neutral-600 mb-6">
              Eye-catching cards with overlay text and hover effects. Perfect for highlighting featured content, 
              programs, or key messages with compelling visuals and smooth interactions.
            </p>
          </div>

          {/* Featured Card Examples */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Single Featured Card</h3>
              <div className="max-w-md">
                <FeaturedCard
                  title="Inclusive Programs for People of All Backgrounds"
                  description="Join our welcoming community where everyone belongs. Experience yoga, meditation, and wellness practices designed for people from all walks of life."
                  imageSrc="/img/featured_card.jpg"
                  imageAlt="Person in yoga pose with arms raised, wearing mustard yellow athletic top"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Featured Card Grid</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FeaturedCard
                  title="Inclusive Programs for People of All Backgrounds"
                  description="Join our welcoming community where everyone belongs."
                  imageSrc="/img/featured_card.jpg"
                  imageAlt="Person in yoga pose with arms raised, wearing mustard yellow athletic top"
                />
                <FeaturedCard
                  title="Mindful Movement & Wellness"
                  description="Discover the power of intentional movement and breath work."
                  imageSrc="/img/featured_card.jpg"
                  imageAlt="Person in yoga pose with arms raised, wearing mustard yellow athletic top"
                />
                <FeaturedCard
                  title="Community & Connection"
                  description="Build meaningful relationships through shared wellness practices."
                  imageSrc="/img/featured_card.jpg"
                  imageAlt="Person in yoga pose with arms raised, wearing mustard yellow athletic top"
                />
              </div>
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="mt-8 p-6 bg-neutral-50 rounded-lg">
            <h4 className="text-lg font-medium text-foreground mb-3">Usage Guidelines</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>• Use featured cards to highlight important programs, services, or key messages</li>
              <li>• Keep titles concise and impactful - aim for 4-8 words</li>
              <li>• Descriptions should be brief but compelling - 1-2 sentences maximum</li>
              <li>• Use high-quality, relevant images that support your message</li>
              <li>• White text on dark overlays ensures good readability</li>
              <li>• Hover effects provide engaging visual feedback</li>
              <li>• Cards work well in grid layouts for showcasing multiple features</li>
              <li>• Ensure images have proper alt text for accessibility</li>
              <li>• Consider using cards as links by providing an href prop</li>
            </ul>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Buttons</h2>
            <p className="text-neutral-600 mb-6">
              Interactive elements for user actions. Available in primary and secondary variants with consistent sizing and accessibility features.
            </p>
          </div>

          {/* Button Variants */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Variants</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col gap-2">
                  <Button variant="primary" size="base">
                    Primary Button
                  </Button>
                  <span className="text-sm text-neutral-500">Primary variant</span>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="secondary" size="base">
                    Secondary Button
                  </Button>
                  <span className="text-sm text-neutral-500">Secondary variant</span>
                </div>
              </div>
            </div>

            {/* Button States */}
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">States</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col gap-2">
                  <Button variant="primary" size="base">
                    Default
                  </Button>
                  <span className="text-sm text-neutral-500">Default state</span>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="primary" size="base" disabled>
                    Disabled
                  </Button>
                  <span className="text-sm text-neutral-500">Disabled state</span>
                </div>
              </div>
            </div>

            {/* Button Sizes */}
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Sizes</h3>
              <div className="flex flex-wrap items-end gap-4">
                <div className="flex flex-col gap-2">
                  <Button variant="primary" size="base">
                    Base
                  </Button>
                  <span className="text-sm text-neutral-500">Base (base)</span>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="primary" size="sm">
                    Small
                  </Button>
                  <span className="text-sm text-neutral-500">Small (sm)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="mt-8 p-6 bg-neutral-50 rounded-lg">
            <h4 className="text-lg font-medium text-foreground mb-3">Usage Guidelines</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>• Use primary buttons for the main action on a page or form</li>
              <li>• Use secondary buttons for secondary actions or when you need multiple action options</li>
              <li>• Buttons are fully accessible with keyboard navigation and screen reader support</li>
              <li>• All buttons include focus states and hover effects</li>
              <li>• Disabled state is available for non-interactive scenarios</li>
            </ul>
          </div>
        </section>

        {/* Badge Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Badges</h2>
            <p className="text-neutral-600 mb-6">
              Small labels and status indicators for categorizing content, displaying states, or highlighting information. 
              Badges use neutral colors for a clean, understated appearance that works well across all contexts.
            </p>
          </div>

          {/* Badge Examples */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Common Use Cases</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>Meditation</Badge>
                  <Badge>Yoga</Badge>
                  <Badge>Pilates</Badge>
                  <Badge>Breathing</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge>5 min</Badge>
                  <Badge>10 min</Badge>
                  <Badge>15 min</Badge>
                  <Badge>30 min</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge>Beginner</Badge>
                  <Badge>Intermediate</Badge>
                  <Badge>Advanced</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="mt-8 p-6 bg-neutral-50 rounded-lg">
            <h4 className="text-lg font-medium text-foreground mb-3">Usage Guidelines</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>• Use badges to categorize content, show status, or highlight key information</li>
              <li>• Neutral colors provide a clean, understated appearance that works in any context</li>
              <li>• Keep badge text concise and descriptive</li>
              <li>• Small size is optimized for tags, labels, and status indicators</li>
              <li>• Perfect for categorizing content like meditation types, duration, or skill levels</li>
            </ul>
          </div>
        </section>

        {/* Blog Card Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Blog Cards</h2>
            <p className="text-neutral-600 mb-6">
              Content cards for displaying blog posts, articles, and featured content. 
              Available in two variants: Base Post (vertical layout) and Featured Post (horizontal layout).
            </p>
          </div>

          {/* Blog Card Examples */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Base Post (Default)</h3>
              <div className="max-w-sm">
                <BlogCard
                  title="Building Inclusive Community Through Movement"
                  category="Meditation"
                  date="September 4, 2025"
                  readTime="3 Min Read"
                  imageSrc="/img/peace.jpg"
                  imageAlt="Person meditating outdoors in natural setting with hands in prayer position"
                  variant="base"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Featured Post</h3>
              <div className="max-w-4xl">
                <BlogCard
                  title="Building Inclusive Community Through Movement"
                  category="Meditation"
                  date="September 4, 2025"
                  readTime="3 Min Read"
                  imageSrc="/img/peace.jpg"
                  imageAlt="Person meditating outdoors in natural setting with hands in prayer position"
                  variant="featured"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Base Post Grid</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <BlogCard
                  title="Building Inclusive Community Through Movement"
                  category="Meditation"
                  date="September 4, 2025"
                  readTime="3 Min Read"
                  imageSrc="/img/peace.jpg"
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
                  title="Yoga for Beginners: A Complete Guide"
                  category="Yoga"
                  date="August 30, 2025"
                  readTime="7 Min Read"
                  imageSrc="/img/peace.jpg"
                  imageAlt="Person in yoga pose in serene outdoor environment"
                  variant="base"
                />
              </div>
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="mt-8 p-6 bg-neutral-50 rounded-lg">
            <h4 className="text-lg font-medium text-foreground mb-3">Usage Guidelines</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>• <strong>Base Post (default):</strong> Use for standard blog post cards in vertical layout</li>
              <li>• <strong>Featured Post:</strong> Use for highlighting important content in horizontal layout</li>
              <li>• Include relevant category badges to help users identify content types</li>
              <li>• Provide clear, descriptive titles that summarize the content</li>
              <li>• Include publication date and reading time for better user experience</li>
              <li>• Use high-quality, relevant images that enhance the content</li>
              <li>• Base Post cards work well in grid layouts for multiple posts</li>
              <li>• Featured Post cards are ideal for single prominent content pieces</li>
              <li>• Both variants are fully responsive and accessible</li>
              <li>• Hover effects provide visual feedback and enhance interactivity</li>
              <li>• Cards can be used as links by providing an href prop</li>
            </ul>
          </div>
        </section>

        {/* Typography Scale Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Typography Scale</h2>
            <p className="text-neutral-600 mb-6">
              A comprehensive typography scale based on the custom typography variables defined in the design system. 
              Each size is carefully crafted to maintain visual hierarchy and readability across all screen sizes.
            </p>
          </div>

          <div className="space-y-6 font-sans">
            {/* xs */}
            <div className="flex items-center gap-4">
              <div className="w-16 text-sm font-medium text-neutral-500">xs</div>
              <div className="text-xs text-foreground">The quick brown fox jumps over the lazy dog</div>
            </div>

            {/* sm */}
            <div className="flex items-center gap-4">
              <div className="w-16 text-sm font-medium text-neutral-500">sm</div>
              <div className="text-sm text-foreground">The quick brown fox jumps over the lazy dog</div>
            </div>

            {/* base */}
            <div className="flex items-center gap-4">
              <div className="w-16 text-sm font-medium text-neutral-500">base</div>
              <div className="text-base text-foreground">The quick brown fox jumps over the lazy dog</div>
            </div>

            {/* lg */}
            <div className="flex items-center gap-4">
              <div className="w-16 text-sm font-medium text-neutral-500">lg</div>
              <div className="text-lg text-foreground">The quick brown fox jumps over the lazy dog</div>
            </div>

            {/* xl */}
            <div className="flex items-center gap-4">
              <div className="w-16 text-sm font-medium text-neutral-500">xl</div>
              <div className="text-xl text-foreground">The quick brown fox jumps over the lazy dog</div>
            </div>

            {/* 2xl */}
            <div className="flex items-center gap-4">
              <div className="w-16 text-sm font-medium text-neutral-500">2xl</div>
              <div className="text-2xl text-foreground">The quick brown fox jumps over the lazy dog</div>
            </div>

            {/* 3xl */}
            <div className="flex items-center gap-4">
              <div className="w-16 text-sm font-medium text-neutral-500">3xl</div>
              <div className="text-3xl text-foreground">The quick brown fox jumps over the lazy dog</div>
            </div>

            {/* 4xl */}
            <div className="flex items-center gap-4">
              <div className="w-16 text-sm font-medium text-neutral-500">4xl</div>
              <div className="text-4xl text-foreground">The quick brown fox jumps over the lazy dog</div>
            </div>

            {/* 5xl */}
            <div className="flex items-center gap-4">
              <div className="w-16 text-sm font-medium text-neutral-500">5xl</div>
              <div className="text-5xl text-foreground">The quick brown fox jumps over the lazy dog</div>
            </div>

            {/* 6xl */}
            <div className="flex items-center gap-4">
              <div className="w-16 text-sm font-medium text-neutral-500">6xl</div>
              <div className="text-6xl text-foreground">The quick brown fox jumps over the lazy dog</div>
            </div>

            {/* 7xl */}
            <div className="flex items-center gap-4">
              <div className="w-16 text-sm font-medium text-neutral-500">7xl</div>
              <div className="text-7xl text-foreground">The quick brown fox jumps over the lazy dog</div>
            </div>

            {/* 8xl */}
            <div className="flex items-center gap-4">
              <div className="w-16 text-sm font-medium text-neutral-500">8xl</div>
              <div className="text-8xl text-foreground">The quick brown fox jumps over the lazy dog</div>
            </div>

            {/* 9xl */}
            <div className="flex items-center gap-4">
              <div className="w-16 text-sm font-medium text-neutral-500">9xl</div>
              <div className="text-9xl text-foreground">The quick brown fox jumps over the lazy dog</div>
            </div>
          </div>

          {/* Typography Usage Guidelines */}
          <div className="mt-8 p-6 bg-neutral-50 rounded-lg">
            <h4 className="text-lg font-medium text-foreground mb-3">Typography Guidelines</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>• <strong>xs (0.75rem):</strong> Use for captions, labels, and fine print</li>
              <li>• <strong>sm (0.875rem):</strong> Use for small body text and secondary information</li>
              <li>• <strong>base (1rem):</strong> Use for standard body text and general content</li>
              <li>• <strong>lg (1.125rem):</strong> Use for emphasized body text and subheadings</li>
              <li>• <strong>xl (1.25rem):</strong> Use for small headings and important text</li>
              <li>• <strong>2xl (1.5rem):</strong> Use for section headings and medium titles</li>
              <li>• <strong>3xl (1.875rem):</strong> Use for page titles and large headings</li>
              <li>• <strong>4xl (2.25rem):</strong> Use for hero headings and prominent titles</li>
              <li>• <strong>5xl (3rem):</strong> Use for display text and large hero headings</li>
              <li>• <strong>6xl (3.75rem):</strong> Use for very large display text and banners</li>
              <li>• <strong>7xl (4.5rem):</strong> Use for massive display text and impact headlines</li>
              <li>• <strong>8xl (6rem):</strong> Use for extreme display text and billboard-style headings</li>
              <li>• <strong>9xl (8rem):</strong> Use for maximum impact display text and large format designs</li>
            </ul>
          </div>
        </section>

        {/* Colors Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Colors</h2>
            <p className="text-neutral-600 mb-6">
              A comprehensive color palette designed for the Union Yoga brand. Each color family includes 
              tints from 50 (lightest) to 950 (darkest) for maximum design flexibility and accessibility.
            </p>
          </div>

          {/* Color Scale Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-20 text-sm font-medium text-neutral-500">Color</div>
              <div className="grid grid-cols-11 gap-1 flex-1">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                  <div key={shade} className="text-xs font-medium text-neutral-500 text-center">
                    {shade}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Color Palettes */}
          <div className="space-y-4">
            {/* Primary Colors */}
            <div className="flex items-center gap-2">
              <div className="w-20 text-sm font-medium text-neutral-500">Primary</div>
              <div className="grid grid-cols-11 gap-1 flex-1">
                <div className="h-12 rounded bg-primary-50 border border-neutral-200"></div>
                <div className="h-12 rounded bg-primary-100 border border-neutral-200"></div>
                <div className="h-12 rounded bg-primary-200 border border-neutral-200"></div>
                <div className="h-12 rounded bg-primary-300 border border-neutral-200"></div>
                <div className="h-12 rounded bg-primary-400 border border-neutral-200"></div>
                <div className="h-12 rounded bg-primary-500 border border-neutral-200"></div>
                <div className="h-12 rounded bg-primary-600 border border-neutral-200"></div>
                <div className="h-12 rounded bg-primary-700 border border-neutral-200"></div>
                <div className="h-12 rounded bg-primary-800 border border-neutral-200"></div>
                <div className="h-12 rounded bg-primary-900 border border-neutral-200"></div>
                <div className="h-12 rounded bg-primary-950 border border-neutral-200"></div>
              </div>
            </div>

            {/* Secondary Colors */}
            <div className="flex items-center gap-2">
              <div className="w-20 text-sm font-medium text-neutral-500">Secondary</div>
              <div className="grid grid-cols-11 gap-1 flex-1">
                <div className="h-12 rounded bg-secondary-50 border border-neutral-200"></div>
                <div className="h-12 rounded bg-secondary-100 border border-neutral-200"></div>
                <div className="h-12 rounded bg-secondary-200 border border-neutral-200"></div>
                <div className="h-12 rounded bg-secondary-300 border border-neutral-200"></div>
                <div className="h-12 rounded bg-secondary-400 border border-neutral-200"></div>
                <div className="h-12 rounded bg-secondary-500 border border-neutral-200"></div>
                <div className="h-12 rounded bg-secondary-600 border border-neutral-200"></div>
                <div className="h-12 rounded bg-secondary-700 border border-neutral-200"></div>
                <div className="h-12 rounded bg-secondary-800 border border-neutral-200"></div>
                <div className="h-12 rounded bg-secondary-900 border border-neutral-200"></div>
                <div className="h-12 rounded bg-secondary-950 border border-neutral-200"></div>
              </div>
            </div>

            {/* Accent Colors */}
            <div className="flex items-center gap-2">
              <div className="w-20 text-sm font-medium text-neutral-500">Accent</div>
              <div className="grid grid-cols-11 gap-1 flex-1">
                <div className="h-12 rounded bg-accent-50 border border-neutral-200"></div>
                <div className="h-12 rounded bg-accent-100 border border-neutral-200"></div>
                <div className="h-12 rounded bg-accent-200 border border-neutral-200"></div>
                <div className="h-12 rounded bg-accent-300 border border-neutral-200"></div>
                <div className="h-12 rounded bg-accent-400 border border-neutral-200"></div>
                <div className="h-12 rounded bg-accent-500 border border-neutral-200"></div>
                <div className="h-12 rounded bg-accent-600 border border-neutral-200"></div>
                <div className="h-12 rounded bg-accent-700 border border-neutral-200"></div>
                <div className="h-12 rounded bg-accent-800 border border-neutral-200"></div>
                <div className="h-12 rounded bg-accent-900 border border-neutral-200"></div>
                <div className="h-12 rounded bg-accent-950 border border-neutral-200"></div>
              </div>
            </div>

            {/* Neutral Colors */}
            <div className="flex items-center gap-2">
              <div className="w-20 text-sm font-medium text-neutral-500">Neutral</div>
              <div className="grid grid-cols-11 gap-1 flex-1">
                <div className="h-12 rounded bg-neutral-50 border border-neutral-200"></div>
                <div className="h-12 rounded bg-neutral-100 border border-neutral-200"></div>
                <div className="h-12 rounded bg-neutral-200 border border-neutral-200"></div>
                <div className="h-12 rounded bg-neutral-300 border border-neutral-200"></div>
                <div className="h-12 rounded bg-neutral-400 border border-neutral-200"></div>
                <div className="h-12 rounded bg-neutral-500 border border-neutral-200"></div>
                <div className="h-12 rounded bg-neutral-600 border border-neutral-200"></div>
                <div className="h-12 rounded bg-neutral-700 border border-neutral-200"></div>
                <div className="h-12 rounded bg-neutral-800 border border-neutral-200"></div>
                <div className="h-12 rounded bg-neutral-900 border border-neutral-200"></div>
                <div className="h-12 rounded bg-neutral-950 border border-neutral-200"></div>
              </div>
            </div>
          </div>

          {/* Color Usage Guidelines */}
          <div className="mt-8 p-6 bg-neutral-50 rounded-lg">
            <h4 className="text-lg font-medium text-foreground mb-3">Color Guidelines</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-foreground mb-2">Primary Colors</h5>
                <ul className="space-y-1 text-sm text-neutral-600">
                  <li>• Use for main brand elements and primary actions</li>
                  <li>• 500-700 for primary buttons and links</li>
                  <li>• 50-200 for backgrounds and highlights</li>
                  <li>• 800-950 for text on light backgrounds</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-foreground mb-2">Secondary Colors</h5>
                <ul className="space-y-1 text-sm text-neutral-600">
                  <li>• Use for secondary actions and complementary elements</li>
                  <li>• 500-700 for secondary buttons and accents</li>
                  <li>• 50-200 for subtle backgrounds</li>
                  <li>• 800-950 for text and borders</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-foreground mb-2">Accent Colors</h5>
                <ul className="space-y-1 text-sm text-neutral-600">
                  <li>• Use for call-to-action elements and alerts</li>
                  <li>• 500-700 for important buttons and notifications</li>
                  <li>• 50-200 for warning backgrounds</li>
                  <li>• 800-950 for error states and critical text</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-foreground mb-2">Neutral Colors</h5>
                <ul className="space-y-1 text-sm text-neutral-600">
                  <li>• Use for text, borders, and subtle backgrounds</li>
                  <li>• 50-200 for light backgrounds and subtle borders</li>
                  <li>• 300-500 for disabled states and placeholders</li>
                  <li>• 600-950 for text and strong borders</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Footer</h2>
            <p className="text-neutral-600 mb-6">
              A comprehensive footer component that provides site-wide navigation, contact information, 
              and legal links. Features responsive design with mobile-friendly layout and accessibility features.
            </p>
          </div>

          {/* Footer Example */}
          <div className="border border-neutral-200 rounded-lg overflow-hidden">
            <Footer />
          </div>

          {/* Usage Guidelines */}
          <div className="mt-8 p-6 bg-neutral-50 rounded-lg">
            <h4 className="text-lg font-medium text-foreground mb-3">Usage Guidelines</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>• <strong>Logo:</strong> Customize the logoText prop to match your brand</li>
              <li>• <strong>Action Buttons:</strong> Configure contactSalesHref and signInHref for your specific needs</li>
              <li>• <strong>Navigation Links:</strong> Pre-configured with yoga-appropriate links, easily customizable</li>
              <li>• <strong>Social Media:</strong> Add your social media links with custom icons</li>
              <li>• <strong>Responsive Design:</strong> Automatically adapts from desktop grid to mobile stack layout</li>
              <li>• <strong>Accessibility:</strong> Includes proper ARIA labels, focus states, and keyboard navigation</li>
              <li>• <strong>Legal Section:</strong> Includes standard legal links and disclaimer text</li>
              <li>• <strong>Typography:</strong> Uses font-sans for consistent branding across all text elements</li>
              <li>• <strong>Color Scheme:</strong> Follows primary-950 and neutral color palette from globals.css</li>
              <li>• <strong>Interactive States:</strong> Hover and focus states for all interactive elements</li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}