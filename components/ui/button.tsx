import { cn } from "@/lib/utils";
import * as React from "react";

export function Button({ className="", variant = "default", asChild, ...props }) {
  const Comp = asChild ? "a" : "button";
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium shadow-md transition-all hover:scale-105",
        variant === "secondary" && "bg-blue-100 text-blue-800",
        variant === "outline" && "border border-gray-300 bg-white",
        variant === "default" && "bg-blue-600 text-white",
        className
      )}
      {...props}
    />
  );
}
