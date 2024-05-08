import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import OwlIcon from "../icons/owl-icon";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4">
        <Link href={"/"} className="flex items-center gap-1">
          {/* <img
            src="https://cdn-icons-png.flaticon.com/128/1726/1726034.png"
            alt=""
            className="size-6"
          /> */}
          <h1 className="text-2xl font-extrabold text-primary">Hootit</h1>
        </Link>

        <Link href={"/search"} className="w-1/2">
          <input
            type="text"
            placeholder="Search..."
            className="hidden w-full rounded-2xl border-none bg-secondary px-4 py-2 text-sm outline-none md:block"
          />
        </Link>
        <button className="block md:hidden">
          <SearchIcon />
        </button>
        <div className="flex items-center gap-3">
          <Button size={"sm"}>Login</Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
