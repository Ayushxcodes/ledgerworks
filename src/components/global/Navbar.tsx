"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarMain() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        // Stick to the top without extra offset
        "fixed top-0 inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">HomePage</HoveredLink>
            <HoveredLink href="/company">Company</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/clients">Clients</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/cloud">Cloud accounting</HoveredLink>
            <HoveredLink href="/tax">Tax strategy</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Details">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Contact</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
