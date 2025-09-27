"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const features = [
  {
    category: "Virtual Tax Strategy",
    title: "For US Business Owners & Real Estate Investors",
    details:
      "Deviating from the norm – year-round tax strategy and implementation. Entity choice and compensation, multi-state nexus, QSBS (§1202), §41/R&D, and real estate strategies (REPS, cost segregation, STR rules). Coordinated with monthly accounting so savings actually hit the return, not just a slide deck.",
    more: `Delivered 100% virtually across the US with audit-defensible documentation. 
           Start with a tax advisory subscription and integrate bookkeeping and accounting 
           advisory as needed.`,
    image: "/tax_growth.jpg",
  },
  {
    category: "Year-Round Planning",
    title: "Execution-Backed Tax Strategies",
    details:
      "Delivered 100% virtually across the US with audit-defensible documentation. Start with a tax advisory subscription and integrate bookkeeping and accounting advisory as needed.",
    more: `Our team coordinates tax planning with monthly accounting, ensuring 
           strategies are executed in real time, not just presented in a slide deck.`,
    image: "/tax_year.jpg",
  },
  {
    category: "Maximizing Every Dollar",
    title: "Strategic Tax Planning",
    details:
      "As an entrepreneur, you know every dollar counts. Strategic tax strategies can be the most important investment you make in your business.",
    more: `By leveraging tax code opportunities, entity structuring, and proactive planning, 
           we maximize your savings and reinvest those dollars into growth.`,
    image: "/dollar.jpg",
  },
  {
    category: "Tailored Tax Solutions",
    title: "Proactive Financial Management",
    details:
      "At LedgerWorks, we empower clients with comprehensive review and planning, delivering high-impact tax strategies tailored to your unique situation. Identify, implement, and report seamlessly.",
    more: `We don’t stop at advice — we help you implement changes in real time, 
           monitor impact, and ensure reporting is accurate for compliance and audit protection.`,
    image: "/tax_tailored.jpg",
  },
  {
    category: "Exceptional ROI",
    title: "Tax Planning with a Satisfaction Guarantee",
    details:
      "Our Advanced Tax Strategy Advisory has delivered an average ROI of 250%+, across startups, real estate investors.",
    more: `Our strategies are backed by proven results, industry recognition, 
           and an average ROI of 250%+. We ensure you pay the least tax legally possible.`,
    image: "/tax_roi.jpg",
  },
];

const taxFaqs = [
  {
    question:
      "What unique approach does LedgerWorks take toward tax strategy and planning?",
    answer:
      "LedgerWorks goes beyond traditional tax planning by integrating year-round strategic planning and implementation, ensuring businesses maximize every tax opportunity with customized strategies. This approach led to LedgerWorks being recognized as a top tax strategist in the US in 2023 by the AICTC.",
  },
  {
    question: "Who can benefit most from LedgerWorks tax planning services?",
    answer:
      "Business owners with consistent profits, real estate investors expanding their portfolios, high-growth startups planning for exits, and high-net-worth individuals are ideal candidates for LedgerWorks tax planning services.",
  },
  {
    question: "Do you implement §41/R&D tax credit studies?",
    answer:
      "Yes, we offer research & development tax credit studies for a flat price. Credentialed CPAs perform the study and sign your tax returns, avoiding unnecessary fees from non-credentialed providers.",
  },
];

const TaxStrategy = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <motion.div
      className="flex flex-col items-center justify-center px-4 py-19 sm:px-6 md:px-12 lg:px-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl w-full">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight sm:max-w-xl sm:mx-auto">
            Strengthen Your Strategy
          </h2>
          <p className="mt-3 text-muted-foreground text-lg sm:text-xl">
            Enhance your strategy with intelligent tools designed for success.
          </p>
        </motion.div>

        {/* Features */}
        <div className="space-y-12 md:space-y-20">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex flex-col md:flex-row items-center gap-x-8 gap-y-6 md:even:flex-row-reverse"
            >
              <div className="w-full aspect-[4/4] rounded-xl border border-border/50 basis-1/2 overflow-hidden relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>

              <div className="basis-1/2 shrink-0 text-center md:text-left">
                <span className="uppercase font-medium text-sm text-muted-foreground">
                  {feature.category}
                </span>
                <h4 className="my-3 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
                  {feature.details}
                </p>

                <Dialog
                  open={open === idx}
                  onOpenChange={(o) => setOpen(o ? idx : null)}
                >
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="mt-4 md:mt-6 rounded-full gap-3"
                    >
                      Learn More <ArrowRight />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-lg">
                    <DialogHeader>
                      <DialogTitle>{feature.title}</DialogTitle>
                      <DialogDescription>{feature.category}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 text-sm sm:text-base text-muted-foreground space-y-4">
                      <p>{feature.more}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-3xl mx-auto mt-16 px-2 sm:px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-center">
            FAQ
          </h3>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {taxFaqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-lg sm:text-xl md:text-2xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-base sm:text-lg text-muted-foreground">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TaxStrategy;
