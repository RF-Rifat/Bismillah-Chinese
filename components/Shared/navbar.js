"use client";
import { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Badge,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BsCartCheck } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { NavBarTab } from "./NavTab";



export function MainNavbar() {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 260 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      shadow={false}
      fullWidth
      className="mx-auto max-w-screen-2xl px-4 py-2 border-0 sticky top-0 z-50 bg-[#EAF7E3]"
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href={"/"}>
          <Image
            width={150}
            height={150}
            alt="logo"
            src={"/image/navLogo.png"}
          />
        </Link>
        <div className="hidden lg:block">
          {/* <NavList /> */}
          <NavBarTab />
        </div>

        <div className="hidden lg:block">
          <Badge content="5">
            <IconButton variant="outlined">
              <BsCartCheck className="size-6" />
            </IconButton>{" "}
          </Badge>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <NavBarTab />
      </Collapse>
    </Navbar>
  );
}
