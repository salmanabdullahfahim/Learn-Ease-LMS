"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

export default function NavbarRoutes() {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname.includes("/chapter");
  return (
    <div className="flex gap-x-3 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Link href="/">
          <Button variant="ghost" size="sm">
            <LogOut className="h-4 w-4 mr-3" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button variant="ghost" size="sm">
            Teacher Mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
