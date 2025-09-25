"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Cloud, BarChart3, Database, ShieldCheck } from "lucide-react";
import { motion, Variants } from "framer-motion";

const services = [
  {
    title: "Real-Time Insights",
    description:
      "Get instant access to financial data and dashboards for better decision-making anytime, anywhere.",
    icon: BarChart3,
  },
  {
    title: "Secure Cloud Storage",
    description:
      "All your financial records are stored safely with enterprise-grade security and encryption.",
    icon: ShieldCheck,
  },
  {
    title: "Seamless Integrations",
    description:
      "Connect your cloud accounting platform with CRMs, payroll, and business tools effortlessly.",
    icon: Database,
  },
  {
    title: "Anywhere Access",
    description:
      "Collaborate with your team and accountant from any device, keeping workflows smooth and transparent.",
    icon: Cloud,
  },
];

// Motion Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.17, 0.55, 0.55, 1] }, // easeOut cubic-bezier
  },
};

const CloudAccounting = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Cloud Accounting Services
        </h1>
        <p className="text-lg text-muted-foreground">
          Unlock your true potential with cloud accounting solutions that
          simplify finances, ensure precision, and fuel lasting growth.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full"
      >
        {services.map(({ title, description, icon: Icon }) => (
          <motion.div key={title} variants={item}>
            <Card className="rounded-2xl shadow-sm hover:shadow-md transition-all border">
              <CardContent className="p-6 flex flex-col items-start text-left">
                <Icon className="h-10 w-10 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">
          Ready to move your accounting to the cloud?
        </h2>
        <p className="text-muted-foreground mb-6">
          Let Ledger Works help you simplify workflows and unlock smarter
          financial insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 rounded-xl bg-black text-white text-sm hover:bg-neutral-800 transition">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-xl bg-white text-black border text-sm hover:bg-neutral-100 transition dark:bg-transparent dark:hover:bg-neutral-800">
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CloudAccounting;
