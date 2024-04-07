"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  IconButton,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Tabs value="Home" className="lg:flex">
        <Link href={"/"}>
          <TabsHeader
            indicatorProps={{
              className:
                "border-b-2 border-gray-900 shadow-none !text-gray-900 rounded-md bg-gray-900/10",
            }}
            className="bg-transparent"
          >
            <Tab value="Home">
              <h2 className="text-lg font-semibold px-2 py-1">Home</h2>
            </Tab>
          </TabsHeader>
        </Link>
        <Link href={"/menu"}>
          <TabsHeader className="bg-transparent">
            <Tab value="Menu">
              <h2 className="text-lg font-semibold px-4 py-2">Menu</h2>
            </Tab>
          </TabsHeader>
        </Link>
        <Link href={"/contact"}>
          <TabsHeader className="bg-transparent">
            <Tab value="Contact">
              <h2 className="text-lg font-semibold px-4 py-2">Contact</h2>
            </Tab>
          </TabsHeader>
        </Link>
      </Tabs>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-2xl px-4 py-2 rounded-md bg-transparent opacity-100">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href={"/"} className="mr-4 cursor-pointer py-1.5">
          <Image
            width={120}
            height={120}
            alt="logo"
            src={"/image/navLogo.png"}
          />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-7 w-7" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-7 w-7" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
