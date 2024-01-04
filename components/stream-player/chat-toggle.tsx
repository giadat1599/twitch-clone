"use client";

import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useChatSidebar } from "@/store/use-chat-sidebar";

export const ChatToggle = () => {
   const { collapsed, onExpand, onCollapse } = useChatSidebar();

   const Icon = collapsed ? ArrowLeftFromLine : ArrowRightFromLine;
   const label = collapsed ? "Expand" : "Collpase";

   const onToggle = () => {
      if (collapsed) {
         onExpand();
      } else {
         onCollapse();
      }
   };

   return (
      <Hint label={label} side="left" asChild>
         <Button
            onClick={onToggle}
            variant="ghost"
            className="h-auto p-2 hover:bg-white/10 hover:text-primary bg-transparent"
         >
            <Icon className="h-4 w-4" />
         </Button>
      </Hint>
   );
};