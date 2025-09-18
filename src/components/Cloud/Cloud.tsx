import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex flex-col items-center justify-center w-full min-h-screen px-4 sm:px-6 md:px-12 py-12 sm:py-16">
      {/* Heading */}
      <h2 className="text-black text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans font-bold tracking-tight leading-tight py-2 sm:py-4 md:py-6 relative z-20">
        Cloud Accounting
      </h2>

      {/* Description */}
      <p className="max-w-xl sm:max-w-2xl mx-auto text-black text-center text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6 md:mt-8 font-light leading-relaxed">
        Unlock your true potential with cloud accounting solutions that simplify
        finances, ensure precision, and fuel lasting growth.
      </p>
    </BackgroundLines>
  );
}
