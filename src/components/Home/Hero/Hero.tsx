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
            <Button
              size="lg"
              className="rounded-full text-base w-full sm:w-auto"
            >
              Get Started <ArrowUpRight className="h-5 w-5 ml-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none w-full sm:w-auto"
            >
              <CirclePlay className="h-5 w-5 mr-2" /> Book a Consultation
            </Button>
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
