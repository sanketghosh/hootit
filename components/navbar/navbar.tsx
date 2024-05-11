// PACKAGES
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { useFetchLoggedInUserServer } from "@/hooks/useFetchLoggedInUserServer";
import { logout } from "@/actions/logout-action";

// PACKAGES
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/navbar/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default async function Navbar() {
  const { username } = await useFetchLoggedInUserServer();

  return (
    <nav className="w-full border-b">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2">
        <Link href={"/"} className="flex items-center gap-1">
          <h1 className="text-2xl font-extrabold text-amber-500 text-primary md:text-[26px]">
            hootit
          </h1>
        </Link>

        <div className="flex items-center gap-3">
          <Link href={"/search"} className="">
            <div className="flex w-full items-center gap-2 rounded-3xl border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
              <p>Search...</p>
              <SearchIcon size={17} />
            </div>
          </Link>
          <ThemeToggle />
          {username ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarFallback>{username.charAt(0)}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-5 max-w-40 space-y-2">
                <DropdownMenuLabel>{username}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={"/my-account"} className="cursor-pointer">
                    My Account
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <form action={logout} className="w-full">
                    <Button className="w-full py-1 text-sm" size={"sm"}>
                      LogOut
                    </Button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button size={"sm"} asChild className="text-sm">
              <Link href={"/login"}>Login</Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
