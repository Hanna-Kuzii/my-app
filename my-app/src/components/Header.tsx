"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const [navigation, setNavigation] = useState([
    { name: "Home", href: "/", current: true },
    { name: "Goods", href: "/goods", current: false },
    { name: "About", href: "/about", current: false },
    { name: "Contact", href: "/contact", current: false },
  ]);
  const pathname = usePathname();

  useEffect(() => {
    const updatedNavigation = navigation.map((nav) => {
      if (nav.href === pathname) {
        return { ...nav, current: true };
      } else {
        return { ...nav, current: false };
      }
    });
    setNavigation(updatedNavigation);
  }, [pathname]);
  return (
    <>
      <Disclosure as="nav" className="bg-gray-700">
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6"
                      aria-hidden="true"
                      onClick={handleOpen}
                    />
                  )}
                </DisclosureButton>
              </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 items-center">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-5 py-2 text-sm font-medium text-2xl font-bold"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium h-min"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      </Disclosure>
    </>
  );
};
export default Header;
