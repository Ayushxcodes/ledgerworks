import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Globe } from "./Globe";

const Hero04 = () => {
  return (
    <div className="min-h-screen flex justify-center overflow-hidden bg-background pt-0">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-12 py-0 items-start">
        {/* Left Section */}
        <div className="my-auto text-center lg:text-left font-sans">
          <Badge
            variant="secondary"
            className="rounded-full py-1 px-4 border border-muted-foreground/30 text-muted-foreground font-medium tracking-wide"
            asChild
          >
            <Link href="#services">
              Trusted by Businesses Across the US
              <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>

          <h1 className="mt-6 max-w-[20ch] mx-auto lg:mx-0 text-3xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-extrabold leading-tight tracking-tight text-foreground font-serif">
            Expert Bookkeeping & Taxation Services
          </h1>

          <p className="mt-6 max-w-[60ch] mx-auto lg:mx-0 text-base md:text-lg text-muted-foreground leading-relaxed font-light">
            At{" "}
            <strong className="text-foreground font-semibold">
              LedgerWorks
            </strong>
            , we believe every business deserves bespoke financial care. Our
            Chartered Accountants blend modern technology with timeless
            expertise to deliver personalized bookkeeping and tax strategies,
            held to the highest standards of accuracy and trust—so you can stay
            compliant, save time, and focus on growth.
          </p>

          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            {/* Primary CTA (unchanged) */}
            <button className="relative inline-flex w-full sm:w-auto h-12 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-6 text-base font-medium text-white backdrop-blur-3xl">
                Get Started <ArrowUpRight className="h-5 w-5 ml-2" />
              </span>
            </button>

            {/* Secondary CTA (unchanged) */}
            <button className="relative inline-flex w-full sm:w-auto h-12 overflow-hidden rounded-full p-[2px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1e293b_0%,#475569_50%,#1e293b_100%)] opacity-70" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-background px-6 text-base font-medium text-foreground backdrop-blur-sm">
                <CirclePlay className="h-5 w-5 mr-2" /> Book a Consultation
              </span>
            </button>
          </div>
        </div>

        {/* Right Section (Globe) */}
        <div className="flex items-start justify-center">
          <div className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[600px] aspect-square">
            <Globe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero04;
