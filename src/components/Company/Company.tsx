"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const faq = [
  {
    question: "What services does LedgerWorks provide?",
    answer:
      "LedgerWorks specializes in bookkeeping, tax strategy, and financial advisory services for businesses across the US. We ensure accurate records, compliance, and proactive tax savings.",
  },
  {
    question: "Do you work with businesses outside the US?",
    answer:
      "Currently, LedgerWorks focuses on serving businesses and individuals within the United States to ensure full compliance with IRS regulations.",
  },
  {
    question: "Who can benefit most from your services?",
    answer:
      "Our services are ideal for business owners with consistent profits, real estate investors, startups preparing for growth or exit, and high-net-worth individuals seeking strategic tax planning.",
  },
  {
    question: "Do you help with year-round tax planning?",
    answer:
      "Yes. Unlike traditional firms, we integrate year-round tax strategy and implementation with monthly accounting so you maximize savings in real time, not just at year-end.",
  },
  {
    question: "What makes LedgerWorks different from other firms?",
    answer:
      "We combine modern technology with expert Chartered Accountants, providing personalized solutions and proactive planning. Our strategies are backed by proven results and client satisfaction.",
  },
];

const words = [
  { text: "Partner" },
  { text: "With" },
  { text: "LedgerWorks." },
];

const Company = () => {
  return (
    <div
      className="flex items-start justify-center px-6 pt-12"
      style={{ minHeight: "calc(100vh - 5rem)" }}
    >
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
        {/* Left: Accordion */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">
            Questions & Answers
          </h2>
          <Accordion
            type="single"
            collapsible
            className="mt-6"
            defaultValue="question-0"
          >
            {faq.map(({ question, answer }, index) => (
              <AccordionItem key={question} value={`question-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Right: Hero Section */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full h-full px-4 text-center">
            <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base mb-2 max-w-md">
              LedgerWorks empowers businesses with accurate books, timely
              compliance, and clear financial insights for confident growth.
            </p>

            <TypewriterEffectSmooth words={words} />

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-44 rounded-xl font-medium">
                  Get Started
                </Button>
              </Link>
              <Link href="/solutions">
                <Button size="lg" variant="outline" className="w-44 rounded-xl font-medium">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
