import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Globe } from "./Globe";

const Hero04 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden pt-0">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-12 py-0">
        {/* Left Section */}
        <div className="my-auto text-center lg:text-left">
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border"
            asChild
          >
            <Link href="#services">
              Trusted by Businesses Across the US
              <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
          <h1 className="mt-6 max-w-[20ch] mx-auto lg:mx-0 text-3xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-tight tracking-tighter">
            Expert Bookkeeping & Taxation Services
          </h1>
          <p className="mt-6 max-w-[60ch] mx-auto lg:mx-0 text-base md:text-lg">
            At <strong>LedgerWorks</strong>, our Chartered Accountants provide
            accurate bookkeeping and smart tax solutions tailored to your
            business. Stay compliant, save time, and focus on growth while we
            handle the numbers.
          </p>
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="relative inline-flex w-full sm:w-auto h-12 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-6 text-base font-medium text-white backdrop-blur-3xl">
                Get Started <ArrowUpRight className="h-5 w-5 ml-2" />
              </span>
            </button>
            <button className="relative inline-flex w-full sm:w-auto h-12 overflow-hidden rounded-full p-[2px] focus:outline-none">
      {/* Animated gradient border */}
      <span className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1e293b_0%,#475569_50%,#1e293b_100%)] opacity-70" />
      
      {/* Inner button (Shadcn style) */}
      <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-background px-6 text-base font-medium text-foreground backdrop-blur-sm">
        <CirclePlay className="h-5 w-5 mr-2" /> Book a Consultation
      </span>
      </button>
          </div>
        </div>

        {/* Right Section (Globe) */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[600px] aspect-square">
            <Globe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero04;
