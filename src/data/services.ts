export interface Service {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  description: string;
  target_audience: string;
  badge?: string;
  icon: string;
  image_url: string;
  features: string[];
  deliverables: string[];
  is_active: boolean;
  sort_order: number;
  starting_price?: string;
}

export const services: Service[] = [
  {
    id: "srv-1",
    title: "Starter Websites & Portfolios",
    slug: "starter-websites-and-portfolios",
    short_description: "Lightweight, mobile-first websites and portfolio showcases built to build trust and generate direct customer calls and WhatsApp leads.",
    description: "Our Starter Websites & Portfolio packages are specifically engineered for small businesses, consultants, freelancers, and local entrepreneurs who want a clean, lightning-fast web presence without high recurring costs. Designed with responsive mobile navigation, local SEO schemas, and direct call/WhatsApp integration.",
    target_audience: "For small businesses, consultants & local entrepreneurs",
    badge: "Fast Launch",
    icon: "web",
    image_url: "https://lh3.googleusercontent.com/aida/AEtjO1VkzgMwtz0jiT5W0dQt5Ii0cQ4hRh0vRYgrIL8fmjQ_J1on007J7fJSKT9iVJrW3d7wAGRhqVNr7GFj7xVaIhJGzi47Bl372myH6xni76WQppgkmcStGVmWvMQMHSFMYlVZWdcxtgzI8kcGIswf7CbfrCtVy0GP2JGTc71rJc0PITO6niv8q5wENdNiWvRwDuR1vZoW0645EHoTCR_gp2IhWNxD6YxC8gE9RTrgoqgazcOScYX1aeSyOQ",
    features: [
      "1-to-5 responsive pages",
      "WhatsApp & click-to-call integration",
      "Local SEO & Google Maps setup",
      "Lightning-fast loading speed (<1s)",
      "Zero monthly hosting options on Vercel"
    ],
    deliverables: [
      "Mobile-responsive HTML5/Tailwind layout",
      "Google Search Console & XML Sitemap setup",
      "SSL Certificate & Custom Domain configuration",
      "Interactive inquiry contact form",
      "Full ownership & source code delivery"
    ],
    is_active: true,
    sort_order: 1,
    starting_price: "$0 / mo hosting"
  },
  {
    id: "srv-2",
    title: "Industrial & Custom Web Platforms",
    slug: "industrial-and-custom-web-platforms",
    short_description: "Scalable corporate web applications equipped with custom product catalogs, client portals, and secure backend administrative dashboards.",
    description: "Engineered for mid-sized enterprises, manufacturing units, logistics providers, and corporate firms. We build resilient web applications with relational database architecture, role-based admin workflows, and real-time client inquiry management.",
    target_audience: "For factories, logistics & growing enterprises",
    badge: "Enterprise Grade",
    icon: "domain_verification",
    image_url: "https://lh3.googleusercontent.com/aida/AEtjO1WS79WtZ6jSNgg0mI0Hv60cY0M09Fkuc8Gz6UltVs8JNoyEld4vUJHOzk3ne5L3yGRf3fOFkayIXuwVDO0wkgUrMZNcP1WpEj7XLMnt3_ocLMeEhfuwmcrIONdAQvNoFD9Mmwjq7jdmMVg347JDvLN7MweTPWp7FGDUgMkaBZbI9vFZQt7AGW-gqxPcAeOGSYIZUg5GA9WZ1Hp4wl7Q3lSd7s9b_mQN-NZ8f2IVEfbdLbjw-eyD4zKnJdE",
    features: [
      "Custom relational database design (PostgreSQL)",
      "Role-based admin panels & workflows",
      "RESTful API & webhook integrations",
      "High-traffic performance optimization",
      "Automated lead capture & email triggers"
    ],
    deliverables: [
      "Full-stack Astro + Supabase backend architecture",
      "Administrative dashboard for content & services",
      "Cloudinary media & asset management pipeline",
      "Audit logging & database security RLS policies",
      "12-month SLA maintenance package"
    ],
    is_active: true,
    sort_order: 2,
    starting_price: "Custom Scope"
  },
  {
    id: "srv-3",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    short_description: "Sleek, high-performance mobile apps built for customer booking, real-time tracking, or internal business operations.",
    description: "From service technician tracking to on-demand booking platforms, our mobile app solutions deliver seamless cross-platform performance on iOS and Android with clean, thumb-friendly UX and instantaneous push notifications.",
    target_audience: "iOS & Android custom solutions",
    badge: "Cross-Platform",
    icon: "phone_iphone",
    image_url: "https://lh3.googleusercontent.com/aida/AEtjO1VXWxCmsAbV_aB5t9fSxOWzFELfoRjitp1V0Bzlku3QLy8Uy4_hoeLGafMqD2Rpx0coaYiK_quxukryI603xUkuZ3ZInP_UKpM8GmM9D1gUPyRM6pqAeZFZO251yctPvxJ29HsygR7Jat_xwW4Fqp5iXJKyaTVYjAsC40ry3ZJiiQadIIVh7dJClAOiBXwTYlQjZHjOF4yKuZwSKDR3Ng4MXlVzVwF47KBJrm6RgUJMHqx6gxPm0Iv6NyY",
    features: [
      "Cross-platform Android & iOS builds",
      "Real-time API data synchronization",
      "Push notification integration",
      "Clean, thumb-friendly UX/UI",
      "Offline-first caching capabilities"
    ],
    deliverables: [
      "Published Google Play & App Store binaries",
      "Interactive Figma UI design tokens",
      "Backend API authentication integration",
      "Real-time customer live location & status tracking",
      "Analytics telemetry & crash reporting"
    ],
    is_active: true,
    sort_order: 3,
    starting_price: "Milestone-based"
  },
  {
    id: "srv-4",
    title: "Cloud Infrastructure & Deployment",
    slug: "cloud-infrastructure-and-deployment",
    short_description: "Enterprise-grade cloud migration, resilient server architecture, automated backups, and 24/7 technical care.",
    description: "Complete live launch execution plus proactive monthly server and database maintenance. We set up reliable DNS, SSL, continuous integration pipelines, and automated daily backup routines so your digital operations never experience downtime.",
    target_audience: "DevOps & ongoing technical care",
    badge: "99.98% Uptime",
    icon: "cloud_done",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDi_r2rd83J9ahv4zGRRHXTmkFwvhjrw-34I_tctSfL4IF6SIunddIH1r7m684nt1qdw4nlWW0K2n01ROS9-VzY2ubJkGaSc_lJ5gPFoceuTVb7Ivn0ZAXNNn9GYVVOubBT8eyr_x64McExdHyZRuyh0eVwmINMxtx4HYAT5gDn167yw3zZl_aB75PhL-5iSxwZvIO25ciMFq-uB8X--QE-u7m4eIiG4eaujifOzZC5uJGXiasyJ2C9",
    features: [
      "Cloud & server setup (Vercel, Supabase, cPanel)",
      "Continuous uptime & health monitoring",
      "Scheduled automated database backups",
      "On-demand updates & priority fixes",
      "Zero-downtime rolling deployments"
    ],
    deliverables: [
      "Automated Git CI/CD deployment pipelines",
      "256-bit encrypted database disaster recovery",
      "Global CDN caching & asset optimization",
      "24/7 incident alert monitoring",
      "Monthly performance & security reports"
    ],
    is_active: true,
    sort_order: 4,
    starting_price: "$29 / mo"
  },
  {
    id: "srv-5",
    title: "Cybersecurity & Vulnerability Audit",
    slug: "cybersecurity-and-vulnerability-audit",
    short_description: "Comprehensive threat assessment, vulnerability patching, perimeter monitoring, and data compliance readiness.",
    description: "Protect your customer records and business reputation with our rigorous security review. We inspect application code, database access policies, server endpoints, and SSL configurations to ensure bulletproof defense against unauthorized intrusions.",
    target_audience: "For security-conscious businesses & healthcare",
    badge: "Zero-Trust",
    icon: "security",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjKDWBJ3exwJ5fB-fXXyrIDGhuFrH7D8jHMNGM4ZhbAkfKVMo6QkRWffvUEJE_fQNbktr_BhRKDeL8KThcX81PyW56oGTJxyVrQRSfIfar9tP9zrNoaXdOdMJAR-z5awGVpXEdQLArKKBsCVLOet_xocGECgIZeGr7J1urYVkhre_aTa4kUxz9xMsvoCQubOB95WdZGVTYOQS0ZQwmEbIuMNX6XBhUp0Gj-b6iSo-jhkNo90NPxaht",
    features: [
      "Real-time perimeter intrusion detection",
      "Compliance readiness (SOC2 / ISO / HIPAA)",
      "Database Row Level Security (RLS) hardening",
      "Employee security checklists & practices",
      "End-to-end encrypted communication"
    ],
    deliverables: [
      "Detailed vulnerability & penetration test report",
      "Immediate remediation patch checklist",
      "Hardened environment configuration",
      "Secure backup and disaster plan",
      "Compliance verification badge"
    ],
    is_active: true,
    sort_order: 5,
    starting_price: "On Demand"
  },
  {
    id: "srv-6",
    title: "Business Intelligence & Data Portals",
    slug: "business-intelligence-and-data-portals",
    short_description: "Custom analytics dashboards and data tools that transform raw business numbers into actionable strategic insights.",
    description: "Stop relying on chaotic spreadsheets. We build centralized business intelligence dashboards that aggregate sales, leads, inventory, and operational metrics into beautiful, interactive executive reports.",
    target_audience: "For executive decision-makers & operations leads",
    badge: "Actionable Insights",
    icon: "analytics",
    image_url: "https://lh3.googleusercontent.com/aida/AEtjO1Wly8PmUNMpR9n_LCwr-raYqOUQJU7VAg32J8MMTkR28On0GF7Amway6HUUewlOTinAP0HPCEuas3EjkV3fEpMVDFP8s4wwIBYPLocj32b0zLogv3kHOEj34JzhG152qSBeiroIAqTfqL7VnOL_cKRm88_ECAFqU77GkAnCHSMq9Wg2Y61EOcORh0CPyBUldO_1fPZqdT04yKFMGc0rprxoqA6QbeKzG62csRWean3mwqJecIZROqkMtd0",
    features: [
      "Predictive forecasting & trend models",
      "Unified reporting pipelines across channels",
      "Interactive executive summary widgets",
      "Automated weekly PDF/Email exports",
      "Granular user permissions"
    ],
    deliverables: [
      "Custom responsive analytics dashboard UI",
      "PostgreSQL aggregation views & stored queries",
      "Interactive chart visualizations",
      "CSV & Excel data export functions",
      "Staff onboarding walkthrough"
    ],
    is_active: true,
    sort_order: 6,
    starting_price: "Custom Quote"
  }
];
