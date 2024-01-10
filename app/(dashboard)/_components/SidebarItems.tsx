"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
interface sidebarItemsProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export default function SidebarItems({
  icon: Icon,
  label,
  href,
}: sidebarItemsProps) {
  const pathName = usePathname();
  const router = useRouter();

  const onclick = () => {
    router.push(href);
  };
  const isActive =
    (pathName === "/" && href === "/") ||
    pathName === href ||
    pathName?.startsWith(`${href}/`);

  return (
    <button
      onClick={onclick}
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-sky-700")}
        />
        {label}
      </div>
      <div
        className={cn(
          "h-full ml-auto opacity-0 transition-all border-2 border-sky-700 ",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
}
