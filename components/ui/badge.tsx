import { cn } from "@/lib/utils";
import * as React from "react";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        className
      )}
      {...props}
    />
  );
}
