import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import OwlIcon from "../icons/owl-icon";

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
          <OwlIcon className="size-6" />
          <h1 className="text-2xl font-extrabold text-primary">Hootit</h1>
        </Link>
        <div className="flex w-1/2 items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 rounded-md border-none bg-muted px-4 py-2 text-sm outline-none"
          />
          <button className="rounded-md bg-primary p-2 text-primary-foreground">
            <SearchIcon size={19} />
          </button>
        </div>
        <Button size={"sm"}>Login</Button>
      </div>
    </nav>
  );
}
