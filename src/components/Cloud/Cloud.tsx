import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function CloudAccountingTimeline() {
  const data = [
    {
      title: "Core Accounting Services",
      content: (
        <div>
          <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
            Our foundational cloud accounting services to streamline your
            financial operations:
          </p>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Bookkeeping & Ledger Management</li>
            <li>Accounts Payable & Receivable Management</li>
            <li>Bank Reconciliation & Cash Flow Monitoring</li>
            <li>Multi-currency Transaction Management</li>
            <li>Financial Reporting & Statement Preparation</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Tax & Compliance Services",
      content: (
        <div>
          <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
            Ensure your business meets all regulatory and tax obligations
            effortlessly:
          </p>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Automated Tax Calculation & Filing</li>
            <li>VAT/GST/Income Tax Compliance</li>
            <li>Preparation & Submission of Statutory Returns</li>
            <li>Tax Planning & Advisory Services</li>
            <li>Audit Support & Documentation</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Financial Insights & Reporting",
      content: (
        <div>
          <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
            Get real-time insights to make informed business decisions:
          </p>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Custom Financial Dashboards</li>
            <li>Profit & Loss Analysis</li>
            <li>Cash Flow Forecasting</li>
            <li>Expense Tracking & Budgeting</li>
            <li>Management Reports & KPI Monitoring</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Automation & Cloud Integration",
      content: (
        <div>
          <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
            Streamline workflows and reduce manual effort with automation:
          </p>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Automated Invoice Generation & Reminders</li>
            <li>Bank Feed Integration & Auto-Categorization</li>
            <li>Integration with Payroll, CRM, and E-commerce Platforms</li>
            <li>AI-based Expense Categorization & Fraud Detection</li>
            <li>Mobile Access & Cloud Storage for Secure Data</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Consulting & Advisory Services",
      content: (
        <div>
          <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
            Beyond numbers — guiding your business growth and financial
            strategy:
          </p>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Financial Planning & Strategy</li>
            <li>Business Performance Analysis</li>
            <li>Startup & SME Advisory</li>
            <li>Cloud Accounting Implementation Support</li>
            <li>Training & Support for Teams</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip py-15">
      {/* Timeline */}
      <Timeline data={data} />

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-20 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Cloud Accounting FAQ
        </h2>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What services are included in LedgerWorks cloud accounting
              package?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-700 dark:text-neutral-300">
              LedgerWorks offers a comprehensive suite of cloud accounting
              services for growing businesses, including full cycle accounting
              management, bookkeeping, dynamic financial reporting, bill pay,
              accounts receivable management, and payroll oversight.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              How does cloud accounting benefit growing startups and digital
              businesses?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-700 dark:text-neutral-300">
              Cloud accounting with LedgerWorks streamlines back-office
              operations, allowing startups and digital businesses to focus on
              growth and innovation by outsourcing complex accounting tasks and
              gaining insights into financial performance.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              What types of businesses can benefit from LedgerWorks cloud
              accounting services?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-700 dark:text-neutral-300">
              LedgerWorks cloud accounting services are tailored for various
              business needs, including scaling digital businesses, real estate
              investors & funds, and high-growth startups looking to raise
              outside capital.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              What is the starting price for LedgerWorks cloud accounting
              services?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-700 dark:text-neutral-300">
              LedgerWorks offers cloud accounting services starting at
              <span className="font-semibold"> $500/month</span>. Each
              business’s needs vary, so we ensure you are provided with the
              appropriate level of accounting and bookkeeping support based on
              our experience.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              How does LedgerWorks support businesses in scaling and managing
              financial complexity?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-700 dark:text-neutral-300">
              LedgerWorks assists businesses in scaling by providing tailored
              back-office solutions, helping manage financial complexities like
              GAAP and accrual accounting, and supporting startups from
              formation through to potential exits.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
