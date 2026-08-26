import { CloudAccountingTimeline } from "@/components/Cloud/Cloud";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Cloud Accounting Solutions | LedgerWorks",
  description:
    "Automated bookkeeping, financial reporting, multi-entity accounting, and payroll management powered by cloud technology and Chartered Accountants.",
};

const Cloudpage = () => {
  return (
    <div>
      <CloudAccountingTimeline />
    </div>
  );
};

export default Cloudpage;