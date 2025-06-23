import React from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  type = "text",
  placeholder = "Enter text...",
  className = "",
  ...props
}) {
  return (
    <textarea
      placeholder={placeholder}
      rows={4}
      className={cn(
        "px-4 py-2 w-full border-2 border-border shadow-md transition focus:outline-none focus:shadow-sm placeholder:text-muted-foreground bg-background text-foreground resize-none",
        className
      )}
      {...props}
    />
  );
}
