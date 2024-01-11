import NavbarRoutes from "@/components/NavbarRoutes";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <div className="p-4 h-full border-b flex items-center bg-white shadow-sm">
      <MobileNavbar />
      <NavbarRoutes />
    </div>
  );
}
