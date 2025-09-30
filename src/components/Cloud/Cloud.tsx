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
            Foundational accounting services designed for U.S. businesses:
          </p>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Bookkeeping & General Ledger Management</li>
            <li>Accounts Payable & Receivable Management</li>
            <li>Bank Reconciliation & Cash Flow Monitoring</li>
            <li>Multi-entity & multi-currency accounting (where applicable)</li>
            <li>Accurate Financial Reporting & Statement Preparation (GAAP compliant)</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Tax & Compliance Services",
      content: (
        <div>
          <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
            Stay compliant with federal, state, and local tax requirements:
          </p>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Federal and state business tax filings</li>
            <li>Quarterly estimated tax payments</li>
            <li>Entity-specific compliance (LLC, S-Corp, C-Corp, Partnerships)</li>
            <li>Audit preparation and representation</li>
            <li>Ongoing tax planning & advisory</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Financial Insights & Reporting",
      content: (
        <div>
          <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
            Actionable financial insights to grow your business:
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
            Leverage technology to streamline accounting tasks:
          </p>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Automated Invoicing & Payment Reminders</li>
            <li>Bank Feed Integration & Auto-Categorization</li>
            <li>Integration with Payroll, CRM, and E-commerce Platforms</li>
            <li>AI-driven Expense Categorization & Fraud Detection</li>
            <li>Cloud-based Access & Secure Data Storage</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Consulting & Advisory Services",
      content: (
        <div>
          <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
            Beyond compliance — strategic financial advice for U.S. businesses:
          </p>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Business & Financial Planning</li>
            <li>Growth & Performance Analysis</li>
            <li>Startup & Small Business Advisory</li>
            <li>Technology & Cloud Accounting Implementation</li>
            <li>Training & Support for In-house Teams</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Sales Tax",
      content: (
        <div>
          <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
            Manage multi-state and local sales tax compliance with confidence:
          </p>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Sales tax calculation & automated filing</li>
            <li>Nexus tracking for multi-state compliance</li>
            <li>Sales tax reports for e-commerce & retail</li>
            <li>Exemption certificate management</li>
            <li>Sales tax audit support</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Income Tax",
      content: (
        <div>
          <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
            Full-service federal and state income tax solutions:
          </p>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Preparation & filing of federal income tax returns</li>
            <li>State-specific corporate & individual income tax compliance</li>
            <li>Quarterly estimated tax planning</li>
            <li>Maximizing allowable deductions & credits</li>
            <li>IRS audit support & representation</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Payroll & Employment Taxes",
      content: (
        <div>
          <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
            Stay compliant with payroll tax laws and employment reporting:
          </p>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Payroll processing & tax withholding</li>
            <li>FICA, FUTA, and state unemployment tax compliance</li>
            <li>Quarterly & annual payroll tax returns</li>
            <li>W-2 & 1099 preparation & filing</li>
            <li>Multi-state employment tax compliance</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Other Business-Related Taxes",
      content: (
        <div>
          <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
            Covering additional taxes common to U.S. businesses:
          </p>
          <ul className="list-disc ml-5 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Franchise Taxes (state-specific)</li>
            <li>Excise Taxes (federal & industry-based)</li>
            <li>Gross Receipts Taxes</li>
            <li>Occupational & industry-specific compliance</li>
            <li>Ongoing tax planning & advisory</li>
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
