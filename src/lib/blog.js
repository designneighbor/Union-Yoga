// lib/blog.js
export const blogPosts = [
  {
    id: 1,
    title: "5 Morning Yoga Poses for Energy",
    slug: "morning-yoga-poses-energy",
    excerpt: "Start your day with these energizing yoga poses that will awaken your body and mind.",
    content: `
      <h2>Why Morning Yoga?</h2>
      <p>Starting your day with yoga helps set a positive tone and increases energy levels throughout the day.</p>
      
      <h3>1. Sun Salutation</h3>
      <p>This flowing sequence warms up the entire body and connects breath with movement.</p>
      
      <h3>2. Warrior I</h3>
      <p>A powerful standing pose that builds strength and focus.</p>
      
      <h3>3. Tree Pose</h3>
      <p>Improves balance and helps center your mind for the day ahead.</p>
      
      <h3>4. Cat-Cow Stretch</h3>
      <p>Gently awakens the spine and releases tension from sleeping.</p>
      
      <h3>5. Child's Pose</h3>
      <p>A restful pose that helps you set intentions for the day.</p>
    `,
    date: "2024-01-15",
    author: "Sarah Johnson",
    readTime: 5,
    image: "/images/morning-yoga.jpg"
  },
  {
    id: 2,
    title: "Meditation for Beginners: A Complete Guide",
    slug: "meditation-beginners-guide",
    excerpt: "Learn the fundamentals of meditation and how to start your own daily practice.",
    content: `
      <h2>What is Meditation?</h2>
      <p>Meditation is a practice that helps train your mind to focus and achieve a state of calm awareness.</p>
      
      <h3>Getting Started</h3>
      <p>You don't need any special equipment or years of experience to begin meditating.</p>
      
      <h3>Basic Breathing Technique</h3>
      <p>Start by focusing on your natural breath. Count each inhale and exhale from 1 to 10, then start over.</p>
      
      <h3>Creating a Routine</h3>
      <p>Try to meditate at the same time each day, even if it's just for 5 minutes.</p>
      
      <h3>Common Challenges</h3>
      <p>It's normal for your mind to wander. When you notice this happening, gently return your focus to your breath.</p>
    `,
    date: "2024-01-10",
    author: "Sarah Johnson", 
    readTime: 8,
    image: "/images/meditation-guide.jpg"
  },
  {
    id: 3,
    title: "The Benefits of Restorative Yoga",
    slug: "benefits-restorative-yoga",
    excerpt: "Discover how restorative yoga can help reduce stress and promote deep relaxation.",
    content: `
      <h2>What is Restorative Yoga?</h2>
      <p>Restorative yoga is a gentle practice that uses props to support the body in comfortable positions for extended periods.</p>
      
      <h3>Physical Benefits</h3>
      <p>This practice helps activate the parasympathetic nervous system, promoting healing and recovery.</p>
      
      <h3>Mental Benefits</h3>
      <p>The slow pace and supported poses help calm the mind and reduce anxiety.</p>
      
      <h3>Essential Props</h3>
      <p>Bolsters, blankets, and blocks help create comfortable, sustainable poses.</p>
      
      <h3>Best Poses for Beginners</h3>
      <p>Supported Child's Pose, Legs Up the Wall, and Reclined Butterfly are excellent starting points.</p>
    `,
    date: "2024-01-05",
    author: "Sarah Johnson",
    readTime: 6,
    image: "/images/restorative-yoga.jpg"
  }
];

// Function to get all posts (sorted by date, newest first)
export function getAllPosts() {
  return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Function to get a single post by slug
export function getBlogPost(slug) {
  return blogPosts.find(post => post.slug === slug);
}

// Function to get all slugs (for static generation)
export function getAllSlugs() {
  return blogPosts.map(post => post.slug);
}

// Helper function to format dates
export function formatDate(dateString) {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
}