import Solution from "@/components/Solutions/Solutions";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Financial Solutions & Client Insights | LedgerWorks",
  description:
    "Tailored financial frameworks, tax credit strategies, fractional CFO advisory, and compliance guides for modern US businesses.",
};

const SolutionPage = () => {
  return (
    <div>
      <Solution />
    </div>
  );
};

export default SolutionPage;