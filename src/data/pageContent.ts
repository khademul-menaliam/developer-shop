export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar_url: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const siteConfig = {
  name: "Apex Services",
  tagline: "Trusted Local & Regional Professionals",
  description: "Transformative infrastructure, dedicated support, and scalable digital systems designed specifically for regional enterprises looking to dominate their market.",
  location: "Based in Dhaka, Bangladesh • Serving clients locally & worldwide",
  email: "contact@apexservices.dev",
  phone: "+880 1711-000000",
  phoneDisplay: "+880 1711-000000",
  whatsappNumber: "+8801711000000",
  whatsappMessage: "Hello! I am interested in building a website with Apex Services.",
  workingHours: "Saturday - Thursday: 9:00 AM - 8:00 PM",
  emergencySupport: "24/7 Priority Emergency Telemetry Monitoring",
  stats: [
    { label: "Projects Delivered", value: "1,500+", numeric: 1500, suffix: "+" },
    { label: "Client Retention", value: "98%", numeric: 98, suffix: "%" },
    { label: "Expert Support", value: "24/7", numeric: 24, suffix: "/7" },
    { label: "Years Excellence", value: "15+", numeric: 15, suffix: "+" }
  ]
};

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Marcus Vance",
    role: "CEO",
    company: "Vance Industrial Logistics",
    avatar_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgeiTBVVs1Qhy5YKQY59PWDJK7t-4HPvgjF5JKR2Jlx2IW0kASYBCgRfKnB0km5M8JlDFe6leawLaFHFQckv2gltKElguvyNmYODzU3u4txly3j1Hnj5HnFmvYJHpsOfZH8UHVYXDM5vxeve79FCxicRA-Z9yHaC30tLdFVBBaFBRZndxE3yrm2P9lsU1Z1XOHOw9KzeRMVxnzYJcYT00uHcxqAllZExSs90AFfaOqAB9zEoqlF1c-",
    quote: "Apex Services completely overhauled our operational framework. Their team executed a flawless migration with zero downtime, and our efficiency has jumped by over 35%.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Elena Rostova",
    role: "CTO",
    company: "Pacific Medical Network",
    avatar_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuATiPXUvCHNY7jYfJrUDMNdWRWskGDdu1MZQgVyTo4peiDgAUUAzGrZEJGFmKip8F0HqhRAeAmyG4-Slk-SPlGuPpdALXqtrMpKE0xpd70_IsLKDMbBizsZGmhsipVeVLzdXY6WybvUJ4zjwwxCK4zYPU2OOuLq5qiZdreboamVdg8OyizEFDPGybwDpQLg0pzY1Siovv8c7JXeUO4i9aJADqISxgNcqy2l46iFYDJrUXeRnl3aR8d0",
    quote: "The level of responsiveness and deep regional expertise is unmatched. Whenever we need immediate technical intervention or strategic guidance, Apex delivers instantly.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Tariq Chowdhury",
    role: "Managing Director",
    company: "Bengal Craft & Export Ltd.",
    avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    quote: "Building our customer-facing web platform with Apex was the smoothest experience. We started receiving overseas inquiries through WhatsApp within the first 48 hours of launch.",
    rating: 5
  }
];

export const faqs: FAQItem[] = [
  {
    category: "General",
    question: "How does Apex Services differ from a traditional web agency?",
    answer: "We focus on clean, high-performance architecture without bloated subscriptions or unnecessary complexity. You get direct developer communication, transparent milestone-based pricing, and full ownership of your code and assets."
  },
  {
    category: "Pricing & Budget",
    question: "Can you build a website if I have a strict or modest budget?",
    answer: "Yes! We specialize in budget-friendly development packages. For solo creators and small businesses, we can deploy lightweight sites on free modern hosting (Vercel/Netlify) and free Supabase database tiers so your recurring monthly cost is literally $0."
  },
  {
    category: "Timeline",
    question: "How fast can we launch my new website or platform?",
    answer: "Starter websites and portfolio showcases typically launch within 3 to 7 business days. Custom enterprise portals and mobile apps follow a clear 2 to 4 week milestone schedule."
  },
  {
    category: "Technical Stack",
    question: "What technologies do you use under the hood?",
    answer: "We use Astro for blazing-fast static and server rendering, Tailwind CSS for modern responsive styling, Supabase for robust PostgreSQL databases & admin auth, and Cloudinary for optimized media delivery."
  },
  {
    category: "Maintenance",
    question: "Do you offer post-launch support and updates?",
    answer: "Absolutely. We offer hands-off monthly maintenance packages covering automated database backups, security patches, uptime telemetry, and on-demand content updates."
  }
];

export const methodologySteps = [
  {
    step: "01",
    title: "Discovery & Audit",
    icon: "manage_search",
    description: "Comprehensive infrastructure mapping, legacy debt indexing, and deep vulnerability assessment."
  },
  {
    step: "02",
    title: "Architecture Plan",
    icon: "schema",
    description: "Tailored technology roadmap, risk mitigation matrix, and prioritized deployment schedule."
  },
  {
    step: "03",
    title: "Execution & Testing",
    icon: "deployed_code",
    description: "Phased rollout execution with automated staging pipelines and zero operational disruption."
  },
  {
    step: "04",
    title: "24/7 Support",
    icon: "support_agent",
    description: "Continuous telemetry surveillance, automatic patch triage, and SLA-backed engineer responses."
  }
];
