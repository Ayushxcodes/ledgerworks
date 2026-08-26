import Team04Page from "@/components/Team/Team";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Meet Our Team of Chartered Accountants | LedgerWorks",
  description:
    "Experienced Chartered Accountants, Enrolled Agents, and finance leads with Big 4 background delivering expert financial care.",
};

const TeamPage = () => {
  return (
    <div>
      <Team04Page />
    </div>
  );
};

export default TeamPage;