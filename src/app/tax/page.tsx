import TaxStrategy from "@/components/Tax/Tax";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Proactive Tax Strategy & Advisory | LedgerWorks",
  description:
    "Year-round US federal and state tax planning, entity structuring, QSBS optimization, R&D credits, and audit-defensible reporting.",
};

const taxpage = () => {
  return (
    <div>
      <TaxStrategy />
    </div>
  );
};

export default taxpage;