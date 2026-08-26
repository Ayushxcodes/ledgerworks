"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  BadgeDollarSign,
  BriefcaseBusiness,
  Building2,
  Calendar,
  ClockIcon,
  FileCheck,
  Globe2,
  LineChart,
  Receipt,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const solutionsList = [
  {
    id: 1,
    title: "US Entity Formation & QSBS (§1202) Tax Structuring",
    category: "Tax Strategy",
    description:
      "Optimize corporate structuring (LLC, S-Corp, C-Corp) to qualify for Section 1202 Qualified Small Business Stock tax exclusions up to $10M in gain for tech founders and investors.",
    readTime: "6 min read",
    date: "Aug 2026",
    color: "from-blue-600 to-indigo-600",
    icon: Building2,
  },
  {
    id: 2,
    title: "Automated Cloud Bookkeeping & GAAP Reconciliations",
    category: "Cloud Accounting",
    description:
      "Seamless multi-bank feed integration, automated expense categorization, and monthly GAAP-compliant financial reporting to keep your books investor-ready.",
    readTime: "5 min read",
    date: "Aug 2026",
    color: "from-emerald-600 to-teal-600",
    icon: Receipt,
  },
  {
    id: 3,
    title: "R&D Tax Credit (§41) Studies for Technology Firms",
    category: "Tax Strategy",
    description:
      "Claim dollar-for-dollar tax credits for software development, engineering, and product innovation with audit-defensible documentation backed by licensed Chartered Accountants.",
    readTime: "8 min read",
    date: "Jul 2026",
    color: "from-violet-600 to-purple-600",
    icon: FileCheck,
  },
  {
    id: 4,
    title: "Fractional CFO & Strategic Cash Flow Forecasting",
    category: "Financial Advisory",
    description:
      "High-impact financial modeling, runway optimization, unit economics analysis, and board-level reporting for high-growth startups and middle-market enterprises.",
    readTime: "7 min read",
    date: "Jul 2026",
    color: "from-amber-600 to-orange-600",
    icon: LineChart,
  },
  {
    id: 5,
    title: "Multi-State Sales Tax & Wayfair Nexus Compliance",
    category: "Compliance",
    description:
      "Automated economic nexus monitoring across all 50 US states, registration management, and seamless filings integrated with Shopify, Stripe, and ERP platforms.",
    readTime: "4 min read",
    date: "Jun 2026",
    color: "from-cyan-600 to-blue-600",
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: "Cross-Border Indo-US Tax & IRS Compliance",
    category: "Global Advisory",
    description:
      "Specialized cross-border tax advisory covering FBAR, Form 5471/8865 compliance, transfer pricing, and treaty optimization for dual-jurisdiction founders.",
    readTime: "6 min read",
    date: "Jun 2026",
    color: "from-rose-600 to-pink-600",
    icon: Globe2,
  },
];

const categories = [
  { name: "Tax Strategy", totalPosts: 14, icon: BadgeDollarSign },
  { name: "Cloud Accounting", totalPosts: 12, icon: Receipt },
  { name: "Financial Advisory", totalPosts: 9, icon: LineChart },
  { name: "Compliance", totalPosts: 11, icon: ShieldCheck },
  { name: "Global Advisory", totalPosts: 7, icon: Globe2 },
  { name: "Startup Finance", totalPosts: 10, icon: BriefcaseBusiness },
];

const Solution = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 lg:py-16 px-6 xl:px-0 flex flex-col lg:flex-row items-start gap-12">
      {/* Main Content: Solutions Grid */}
      <div className="flex-1">
        <div className="mb-10">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-xs">
            Client Solutions & Insights
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Tailored Financial Solutions for Modern Businesses
          </h1>
          <p className="mt-3 text-muted-foreground text-base md:text-lg">
            Discover strategic frameworks, compliance guides, and financial strategies designed by certified Chartered Accountants.
          </p>
        </div>

        <div className="space-y-8">
          {solutionsList.map((solution) => {
            const Icon = solution.icon;
            return (
              <Card
                key={solution.id}
                className="flex flex-col sm:flex-row sm:items-center shadow-sm hover:shadow-md transition-shadow overflow-hidden rounded-xl border border-border p-5 gap-6"
              >
                <div
                  className={`shrink-0 w-full sm:w-44 h-36 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center text-white shadow-inner`}
                >
                  <Icon className="h-12 w-12 opacity-90 stroke-[1.5]" />
                </div>
                <CardContent className="p-0 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/15 border-none font-medium text-xs">
                        {solution.category}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
                      <Link href="/contact">{solution.title}</Link>
                    </h3>
                    <p className="mt-2 text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-6 text-muted-foreground text-xs font-medium">
                    <div className="flex items-center gap-1.5">
                      <ClockIcon className="h-3.5 w-3.5" /> {solution.readTime}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" /> {solution.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Sidebar: Categories */}
      <aside className="sticky top-24 shrink-0 lg:w-80 w-full">
        <div className="p-6 rounded-xl border border-border bg-card shadow-sm">
          <h3 className="text-lg font-bold tracking-tight mb-4">
            Service Categories
          </h3>
          <div className="space-y-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/60 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="font-medium text-sm">
                      {category.name}
                    </span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="px-2 py-0.5 rounded-full text-xs font-semibold"
                  >
                    {category.totalPosts}
                  </Badge>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20 text-center">
            <h4 className="font-semibold text-sm text-foreground">
              Need a Custom Solution?
            </h4>
            <p className="text-xs text-muted-foreground mt-1 mb-3">
              Schedule a 1-on-1 session with our Chartered Accountants.
            </p>
            <Link
              href="/contact"
              className="inline-flex w-full justify-center items-center py-2 px-4 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Solution;
