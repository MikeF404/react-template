import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";

import { useState, useEffect } from "react";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { Menu } from "lucide-react";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const isVisible = useScrollDirection();



  return (
    <header
      className={`sticky top-0 flex h-12 items-center justify-center gap-4 border-b bg-card backdrop-blur-sm px-4 md:px-6 transition-transform duration-600 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between max-w-[1080px] w-full">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <span className="sr-only">Name</span>
          </Link>
          <Link
            to="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            to="/link1"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Link1
          </Link>
          <Link
            to="/link2"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Link2
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <span className="sr-only">Name</span>
              </Link>
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground"
              >
                Home
              </Link>
              <Link
                to="/link1"
                className="text-muted-foreground hover:text-foreground"
              >
                Link1
              </Link>
              <Link
                to="/link2"
                className="text-muted-foreground hover:text-foreground"
              >
                Link2
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  );
};

export default Header;
