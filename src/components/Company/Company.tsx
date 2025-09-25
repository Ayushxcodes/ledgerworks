import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const faq = [
  {
    question: "What is your return policy?",
    answer:
      "You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Track your order using the link provided in your confirmation email, or log into your account to view tracking details.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.",
  },
  {
    question: "What if I receive a damaged item?",
    answer:
      "Please contact our support team within 48 hours of delivery with photos of the damaged item. We’ll arrange a replacement or refund.",
  },
];

const words = [{ text: "Join" }, { text: "LedgerWorks" }, { text: "Today" }];

const Company = () => {
  return (
    <div
      className="flex items-start justify-center px-6"
      style={{ minHeight: "calc(100vh - 5rem)" }} // 👈 adjust 5rem = navbar height
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
                <AccordionTrigger className="text-left text-lg">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Right: Hero Section */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full h-full px-4 text-center">
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base mb-2">
              Ledger Works empowers businesses with accurate books, timely
              compliance, and clear financial insights for confident growth
            </p>

            <TypewriterEffectSmooth words={words} />

            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                Join now
              </button>
              <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
