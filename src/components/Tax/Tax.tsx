"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, LineChart, Shield } from "lucide-react";
import { motion, Variants } from "framer-motion";

const services = [
  {
    title: "Strategic Tax Planning",
    description:
      "Customized tax strategies designed to reduce liabilities and optimize cash flow while ensuring compliance.",
    icon: LineChart,
  },
  {
    title: "Compliance & Reporting",
    description:
      "Accurate and timely filings for corporate, partnership, and individual tax returns across multiple jurisdictions.",
    icon: FileText,
  },
  {
    title: "Risk Management",
    description:
      "Identify tax risks, strengthen controls, and build audit-ready documentation for peace of mind.",
    icon: Shield,
  },
  {
    title: "Advisory & Guidance",
    description:
      "Proactive advice tailored to evolving tax laws, helping you make smarter financial decisions.",
    icon: CheckCircle,
  },
];

// Animation variants
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
    transition: { duration: 0.6, ease: [0.17, 0.55, 0.55, 1] },
  },
};

const TaxStrategy = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black overflow-hidden">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Tax Strategy Services
        </h1>
        <p className="text-lg text-muted-foreground">
          Our tailored tax strategies go beyond compliance—preserving wealth,
          optimizing efficiency, and positioning your business for lasting
          success.
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
          <motion.div
            key={title}
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className="rounded-2xl shadow-sm hover:shadow-lg transition-all border cursor-pointer">
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
          Ready to optimize your tax strategy?
        </h2>
        <p className="text-muted-foreground mb-6">
          Let us partner with you to build a sustainable, growth-focused plan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 rounded-xl bg-black text-white text-sm hover:bg-neutral-800 transition">
            Book a Consultation
          </button>
          <button className="px-6 py-3 rounded-xl bg-white text-black border text-sm hover:bg-neutral-100 transition dark:bg-transparent dark:hover:bg-neutral-800">
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default TaxStrategy;
