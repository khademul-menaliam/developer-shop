export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  category: "Web Platforms" | "Mobile Apps" | "Infrastructure" | "Security" | "Portfolios";
  client: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  image_url: string;
  tags: string[];
  year: string;
  live_url?: string;
  featured: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "port-1",
    title: "Metropolitan Logistics Automated Hub Networking",
    slug: "metropolitan-logistics-automated-hub",
    category: "Infrastructure",
    client: "Vance Industrial Logistics",
    summary: "Seamless multi-site fiber connection handling 40% increased payload traffic with zero packet loss.",
    challenge: "Metropolitan Logistics operated across four distributed regional warehouses with frequent system sync delays, causing delayed freight dispatch and order inaccuracies.",
    solution: "Designed a centralized cloud-synced infrastructure leveraging Astro frontends with real-time PostgreSQL replication, automated load balancing, and instant failover routines.",
    results: [
      "40% increase in daily shipment payload throughput",
      "99.99% server uptime maintained over 12 months",
      "Zero operational disruption during phased live migration"
    ],
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDi_r2rd83J9ahv4zGRRHXTmkFwvhjrw-34I_tctSfL4IF6SIunddIH1r7m684nt1qdw4nlWW0K2n01ROS9-VzY2ubJkGaSc_lJ5gPFoceuTVb7Ivn0ZAXNNn9GYVVOubBT8eyr_x64McExdHyZRuyh0eVwmINMxtx4HYAT5gDn167yw3zZl_aB75PhL-5iSxwZvIO25ciMFq-uB8X--QE-u7m4eIiG4eaujifOzZC5uJGXiasyJ2C9",
    tags: ["Astro", "Cloud Architecture", "PostgreSQL", "DevOps"],
    year: "2024",
    featured: true
  },
  {
    id: "port-2",
    title: "Regional Healthcare Secure Patient Records Hub",
    slug: "regional-healthcare-secure-records",
    category: "Security",
    client: "Pacific Medical Network",
    summary: "HIPAA-compliant cloud migration with encrypted zero-trust access protocols and sub-second retrieval.",
    challenge: "The medical provider needed to transition 150,000+ sensitive patient records from legacy servers to a secure, modern cloud architecture while adhering to stringent compliance guidelines.",
    solution: "Implemented end-to-end encrypted storage with Supabase PostgreSQL Row Level Security (RLS), multi-factor authenticated staff portals, and continuous threat monitoring.",
    results: [
      "100% HIPAA and SOC2 compliance audit clearance",
      "Sub-200ms record retrieval speed across 12 clinical branches",
      "Zero security incidents or unauthorized access attempts"
    ],
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjKDWBJ3exwJ5fB-fXXyrIDGhuFrH7D8jHMNGM4ZhbAkfKVMo6QkRWffvUEJE_fQNbktr_BhRKDeL8KThcX81PyW56oGTJxyVrQRSfIfar9tP9zrNoaXdOdMJAR-z5awGVpXEdQLArKKBsCVLOet_xocGECgIZeGr7J1urYVkhre_aTa4kUxz9xMsvoCQubOB95WdZGVTYOQS0ZQwmEbIuMNX6XBhUp0Gj-b6iSo-jhkNo90NPxaht",
    tags: ["Supabase", "Row Level Security", "HIPAA", "Astro UI"],
    year: "2024",
    featured: true
  },
  {
    id: "port-3",
    title: "Pacific Finance Predictive Analytics Suite",
    slug: "pacific-finance-predictive-analytics",
    category: "Web Platforms",
    client: "Pacific Finance Group",
    summary: "Custom data lake deployment providing real-time portfolio risk scoring and executive reporting.",
    challenge: "Investment directors were losing critical hours compiling weekly portfolio risk reports manually across disparate legacy spreadsheets and trading terminals.",
    solution: "Engineered a custom Business Intelligence dashboard with automated data ingestion, real-time KPI graphing, and instant PDF client report generation.",
    results: [
      "Saved 15+ analyst hours per week in manual report preparation",
      "Instant executive visibility into market volatility risk",
      "Custom responsive interface accessible from iPad and desktop"
    ],
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxvaNq83B1FXLLPLaGJsDgxuVSPrLgZMaNoNS_Hx-e8S7STn6BvuStuP2v8E2-o0xFyrWUxmGTobWbOunziupOy8bHphyxjFAgbQk6RH--gsM62C2Fnp6r-rXkNvOIt-s-w7kS_ULDhvPxVo2_0CwAukzjP_i2T81abDQTs0CG_z6RGNt2YaldCIDrH9_7piAJROI88MM5f0snM8uRGOnrF-nAGq5pFI8CIn12e1bKzZQ79BDW2dXo",
    tags: ["Business Intelligence", "Tailwind CSS", "Data Visuals"],
    year: "2024",
    featured: true
  },
  {
    id: "port-4",
    title: "Apex On-Demand Technician Dispatch App",
    slug: "apex-ondemand-technician-dispatch",
    category: "Mobile Apps",
    client: "Apex Services Field Team",
    summary: "Cross-platform mobile application with live GPS technician tracking and instant customer job sign-offs.",
    challenge: "Field technicians required an offline-capable mobile app to log service completions, capture customer signatures, and receive new jobs on the road.",
    solution: "Developed a sleek mobile app with real-time location streaming, offline data sync, instant push alerts, and direct WhatsApp customer communication.",
    results: [
      "Reduced average response dispatch time by 28 minutes",
      "99% customer satisfaction rating on job completion alerts",
      "100% paperless job sign-off process"
    ],
    image_url: "https://lh3.googleusercontent.com/aida/AEtjO1VXWxCmsAbV_aB5t9fSxOWzFELfoRjitp1V0Bzlku3QLy8Uy4_hoeLGafMqD2Rpx0coaYiK_quxukryI603xUkuZ3ZInP_UKpM8GmM9D1gUPyRM6pqAeZFZO251yctPvxJ29HsygR7Jat_xwW4Fqp5iXJKyaTVYjAsC40ry3ZJiiQadIIVh7dJClAOiBXwTYlQjZHjOF4yKuZwSKDR3Ng4MXlVzVwF47KBJrm6RgUJMHqx6gxPm0Iv6NyY",
    tags: ["Mobile App", "GPS Tracking", "Real-Time Sync"],
    year: "2023",
    featured: false
  },
  {
    id: "port-5",
    title: "High-Tech Industrial Machinery Portal",
    slug: "hightech-industrial-machinery-portal",
    category: "Web Platforms",
    client: "Apex Engineering & Heavy Tech",
    summary: "B2B engineering catalog and client inquiry portal with interactive 3D specs and quote generator.",
    challenge: "Global buyers needed a structured digital catalog to inspect technical machinery specifications, request custom quotes, and review maintenance manuals.",
    solution: "Delivered a high-performance Astro website integrated with Cloudinary for ultra-fast CDN delivery of heavy engineering diagrams and PDF catalogs.",
    results: [
      "Page load speed increased by 3.2x compared to previous CMS",
      "65% increase in international quotation inquiries",
      "Seamless content updates via lightweight admin panel"
    ],
    image_url: "https://lh3.googleusercontent.com/aida/AEtjO1WS79WtZ6jSNgg0mI0Hv60cY0M09Fkuc8Gz6UltVs8JNoyEld4vUJHOzk3ne5L3yGRf3fOFkayIXuwVDO0wkgUrMZNcP1WpEj7XLMnt3_ocLMeEhfuwmcrIONdAQvNoFD9Mmwjq7jdmMVg347JDvLN7MweTPWp7FGDUgMkaBZbI9vFZQt7AGW-gqxPcAeOGSYIZUg5GA9WZ1Hp4wl7Q3lSd7s9b_mQN-NZ8f2IVEfbdLbjw-eyD4zKnJdE",
    tags: ["Astro", "Cloudinary", "B2B Catalog", "SEO"],
    year: "2023",
    featured: false
  },
  {
    id: "port-6",
    title: "Executive Consultant Minimalist Portfolio",
    slug: "executive-consultant-minimalist-portfolio",
    category: "Portfolios",
    client: "Sarah Jenkins & Associates",
    summary: "Clean, zero-hosting-cost personal website with high conversion booking and WhatsApp appointment triggers.",
    challenge: "Independent senior management consultant needed a sophisticated web presence with zero monthly overhead costs and instantaneous mobile loading.",
    solution: "Crafted a custom Astro portfolio deployed on Vercel's global edge network with custom typography, dark/light contrast, and direct WhatsApp lead capture.",
    results: [
      "100/100 Google Lighthouse performance score",
      "$0 recurring monthly server expense",
      "Direct weekly consultation bookings increased by 45%"
    ],
    image_url: "https://lh3.googleusercontent.com/aida/AEtjO1VkzgMwtz0jiT5W0dQt5Ii0cQ4hRh0vRYgrIL8fmjQ_J1on007J7fJSKT9iVJrW3d7wAGRhqVNr7GFj7xVaIhJGzi47Bl372myH6xni76WQppgkmcStGVmWvMQMHSFMYlVZWdcxtgzI8kcGIswf7CbfrCtVy0GP2JGTc71rJc0PITO6niv8q5wENdNiWvRwDuR1vZoW0645EHoTCR_gp2IhWNxD6YxC8gE9RTrgoqgazcOScYX1aeSyOQ",
    tags: ["Portfolio", "Vercel Edge", "Lighthouse 100", "Direct Lead"],
    year: "2023",
    featured: false
  }
];
