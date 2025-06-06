import React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "../lib/util";
import { buttonVariants } from "./Button";

const Pagination = ({ className, ...props }) => {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
};

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => {
  return <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />;
});

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => {
  return <li ref={ref} className={cn("", className)} {...props} />;
});

const PaginationLink = ({ className, isActive, size = "icon", ...props }) => {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    />
  );
};

const PaginationPrevious = ({ className, ...props }) => {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 pl-2.5", className)}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span>Previous</span>
    </PaginationLink>
  );
};

const PaginationNext = ({ className, ...props }) => {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 pr-2.5", className)}
      {...props}
    >
      <span>Next</span>
      <ChevronRight className="h-4 w-4" />
    </PaginationLink>
  );
};

const PaginationEllipsis = ({ className, ...props }) => {
  return (
    <span
      aria-hidden
      className={cn("flex h-9 w-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
};

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
