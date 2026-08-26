"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarMain() {
  return (
    <div className="relative w-full flex items-center justify-center pt-4">
      <Navbar />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-4 inset-x-0 max-w-2xl mx-auto z-50 px-4 sm:px-0",
        className
      )}
    >
      <Menu setActive={setActive}>
        {/* Brand Logo */}
        <Link href="/" className="flex items-center px-2 mr-2">
          <Image
            src="/logo.png"
            alt="LedgerWorks Logo"
            width={32}
            height={32}
            className="object-contain"
          />
        </Link>

        {/* Home Link */}
        <MenuItem setActive={setActive} active={active} item="Home" href="/" />

        {/* Services Dropdown */}
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-3 text-sm p-1">
            <HoveredLink href="/cloud">Cloud Accounting</HoveredLink>
            <HoveredLink href="/tax">Tax Strategy</HoveredLink>
          </div>
        </MenuItem>

        {/* Solutions Direct Link */}
        <MenuItem
          setActive={setActive}
          active={active}
          item="Solutions"
          href="/solutions"
        />

        {/* Company Dropdown */}
        <MenuItem setActive={setActive} active={active} item="Company">
          <div className="flex flex-col space-y-3 text-sm p-1">
            <HoveredLink href="/company">About & FAQs</HoveredLink>
            <HoveredLink href="/team">Leadership & Team</HoveredLink>
          </div>
        </MenuItem>

        {/* Contact Direct Link */}
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact"
          href="/contact"
        />
      </Menu>
    </div>
  );
}
