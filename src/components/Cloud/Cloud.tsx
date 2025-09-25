import React from "react";
import { Timeline } from "@/components/ui/timeline";

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
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
