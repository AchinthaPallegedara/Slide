import {
  Sheet as ShadcnSheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";

type Props = {
  tigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  side: "left" | "right";
};

const Sheet = ({ tigger, children, className, side }: Props) => {
  return (
    <ShadcnSheet>
      <SheetTrigger className={className}>{tigger}</SheetTrigger>
      <SheetContent side={side} className="p-0">
        {children}
      </SheetContent>
    </ShadcnSheet>
  );
};

export default Sheet;
