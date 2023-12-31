"use client";

import { useCopyToClipboard } from "usehooks-ts";
import { CheckCheck, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";

interface CopyButtonProps {
   value?: string;
}

export const CopyButton = ({ value }: CopyButtonProps) => {
   const [copiedValue, copy] = useCopyToClipboard();

   const onCopy = () => {
      if (!value) return;
      copy(value);
      setTimeout(() => {
         copy("");
      }, 1000);
   };

   const Icon = copiedValue ? CheckCheck : Copy;

   return (
      <Button onClick={onCopy} disabled={!value || !!copiedValue} variant="ghost" size="sm">
         <Icon className="h-4 w-4" />
      </Button>
   );
};
