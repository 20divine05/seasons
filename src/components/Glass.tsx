import { motion, type HTMLMotionProps } from "motion/react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type GlassProps = HTMLMotionProps<"div"> & {
  variant?: "default" | "strong";
};

export const Glass = forwardRef<HTMLDivElement, GlassProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <motion.div
      ref={ref}
      className={cn(
        variant === "strong" ? "glass-strong" : "glass",
        "rounded-3xl",
        className,
      )}
      {...props}
    />
  ),
);
Glass.displayName = "Glass";
