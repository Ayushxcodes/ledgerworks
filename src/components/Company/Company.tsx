import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const Company = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Accordion */}
        <div>
          <h2 className="text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-tighter">
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

        {/* Right: Empty for now */}
        <div className="flex items-center justify-center border border-dashed rounded-lg p-6 text-muted-foreground">
          {/* You can replace this with your own content */}
          <p>Right side content goes here</p>
        </div>
      </div>
    </div>
  );
};

export default Company;
