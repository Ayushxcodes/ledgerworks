import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 py-16">
      {/* Heading */}
      <h2 className="text-black text-center text-3xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight py-2 md:py-6 relative z-20">
        Cloud Accounting
      </h2>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-black text-center text-sm md:text-lg mt-4 md:mt-6 font-light leading-relaxed">
        Unlock your true potential with cloud accounting solutions that simplify
        finances, ensure precision, and fuel lasting growth.
      </p>
    </BackgroundLines>
  );
}
