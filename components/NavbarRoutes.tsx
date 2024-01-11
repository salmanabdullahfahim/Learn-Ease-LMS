"use client";

import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function NavbarRoutes() {
  return (
    <div className="flex gap-x-3 ml-auto">
      <UserButton />
    </div>
  );
}
