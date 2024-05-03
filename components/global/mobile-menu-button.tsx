"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useMobileMenuStore from "@/stores/mobile-menu-store";
import { useState } from "react";

export function MobileMenuButton() {
  const { isMenuOpen, openMenu, closeMenu } = useMobileMenuStore();

  function toggleMenu() {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  return (
    <Button
      className="relative group lg:hidden"
      variant="link"
      size="icon"
      onClick={toggleMenu}
    >
      <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
        <div
          className={cn(
            "bg-primary dark:bg-primary h-[2px] w-7 transform transition-all duration-300 origin-left ",
            { "translate-x-10": isMenuOpen }
          )}
        ></div>
        <div
          className={cn(
            "bg-primary dark:bg-primary h-[2px] w-7 rounded transform transition-all duration-300 delay-75",
            {
              "translate-x-10": isMenuOpen,
            }
          )}
        ></div>
        <div
          className={cn(
            "bg-primary dark:bg-primary h-[2px] w-7 transform transition-all duration-300 origin-left delay-150",
            {
              "translate-x-10": isMenuOpen,
            }
          )}
        ></div>

        <div
          className={cn(
            "absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0",
            {
              "translate-x-0 w-12": isMenuOpen,
            }
          )}
        >
          <div
            className={cn(
              "absolute bg-primary dark:bg-primary h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300",
              {
                "rotate-45": isMenuOpen,
              }
            )}
          ></div>
          <div
            className={cn(
              "absolute bg-primary dark:bg-primary h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ",
              {
                "-rotate-45": isMenuOpen,
              }
            )}
          ></div>
        </div>
      </div>
    </Button>
  );
}
