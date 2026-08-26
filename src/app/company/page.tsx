import Company from "@/components/Company/Company";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About LedgerWorks Accounting | Company & FAQs",
  description:
    "Learn about LedgerWorks Accounting Inc., our mission, principles, and answers to common accounting and tax strategy questions.",
};

const CompanyPage = () => {
  return (
    <div className="py-20">
      <Company />
    </div>
  );
};

export default CompanyPage;