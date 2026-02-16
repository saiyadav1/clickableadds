import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "destructive";
  size?: "default" | "sm";
}

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50",
        variant === "default" &&
          "bg-black text-white hover:bg-black/90",
        variant === "outline" &&
          "border border-gray-300 bg-white hover:bg-gray-100",
        variant === "destructive" &&
          "bg-red-600 text-white hover:bg-red-700",
        size === "default" && "h-10 px-4",
        size === "sm" && "h-8 px-3 text-xs",
        className
      )}
      {...props}
    />
  );
}
