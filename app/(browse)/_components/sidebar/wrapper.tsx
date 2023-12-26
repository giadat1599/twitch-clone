"use client";

import { PropsWithChildren, useState, useEffect } from "react";
import { useIsClient } from "usehooks-ts";

import { useSidebar } from "@/store/use-sidebar";
import { cn } from "@/lib/utils";
import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";

interface WrapperProps extends PropsWithChildren {}

export const Wrapper = ({ children }: WrapperProps) => {
   const isClient = useIsClient();
   const { collapsed } = useSidebar();

   if (!isClient)
      return (
         <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50">
            <ToggleSkeleton />
            <RecommendedSkeleton />
         </aside>
      );

   return (
      <aside
         className={cn(
            "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2d2e35] z-50",
            collapsed && "w-[70px]"
         )}
      >
         {children}
      </aside>
   );
};
