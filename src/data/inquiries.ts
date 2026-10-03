export interface Inquiry {
  id: string;
  customer_name: string;
  email: string;
  phone: string;
  service_id?: string;
  service_title?: string;
  message: string;
  preferred_date?: string;
  budget?: string;
  status: "new" | "contacted" | "in-progress" | "completed";
  created_at: string;
}

export const initialInquiries: Inquiry[] = [
  {
    id: "inq-101",
    customer_name: "Farhan Rahman",
    email: "farhan@dhakatransport.com",
    phone: "+880 1819-234567",
    service_id: "srv-2",
    service_title: "Industrial & Custom Web Platforms",
    message: "We need a custom logistics tracking portal for our dispatch center with a secure backend dashboard.",
    preferred_date: "2026-10-15",
    budget: "$1,500 - $2,500",
    status: "new",
    created_at: "2026-10-03T09:30:00Z"
  },
  {
    id: "inq-102",
    customer_name: "Sadia Sultana",
    email: "sadia.consulting@gmail.com",
    phone: "+880 1712-987654",
    service_id: "srv-1",
    service_title: "Starter Websites & Portfolios",
    message: "Looking for a clean, minimalist portfolio for my legal advisory consultancy with direct WhatsApp booking.",
    preferred_date: "2026-10-10",
    budget: "$300 - $500",
    status: "contacted",
    created_at: "2026-10-02T14:15:00Z"
  },
  {
    id: "inq-103",
    customer_name: "Kamrul Hasan",
    email: "k.hasan@apexindustrial.net",
    phone: "+880 1911-456789",
    service_id: "srv-4",
    service_title: "Cloud Infrastructure & Deployment",
    message: "Require high-availability server setup on Vercel/Supabase and continuous database monitoring.",
    preferred_date: "2026-10-08",
    budget: "$800 / setup",
    status: "in-progress",
    created_at: "2026-10-01T11:20:00Z"
  }
];
