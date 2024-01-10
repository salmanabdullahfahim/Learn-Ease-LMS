import React from "react";
import Logo from "./Logo";

export default function Sidebar() {
  return (
    <div className="h-full border-r flex  flex-col overflow-y-auto bg-white shadow-sm ">
      <div className="p-6">
        <Logo />
      </div>
    </div>
  );
}
