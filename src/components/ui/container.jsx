import React from "react";
import { cn } from "../../lib/utils";


export const Container = ({ children, className }) => {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 md:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
};
