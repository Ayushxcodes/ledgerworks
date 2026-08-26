import Contact02Page from "@/components/Contact/Contact";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact LedgerWorks Accounting | Book Consultation",
  description:
    "Get in touch with LedgerWorks Accounting Inc. Speak to our Chartered Accountants and schedule a personalized consultation.",
};

const Contactpage = () => {
  return (
    <div>
      <Contact02Page />
    </div>
  );
};

export default Contactpage;