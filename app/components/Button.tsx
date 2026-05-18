//dog bone button in progress
import React from "react";
import Link from "next/link";

import { Icon } from "@iconify/react";

interface ButtonProps {
  label: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  variant?: "solid" | "outline" | "white";
  href?: string;
  icon?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({
  label,
  className,
  onClick,
  onMouseEnter,
  variant = "solid",
  href,
  icon,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const baseStyles =
    "w-fit px-8 py-2.5 rounded-full transition-all duration-500 cursor-pointer text-sm md:text-base font-medium inline-flex items-center justify-center gap-2 group";

  const variantStyles =
    variant === "solid"
      ? "bg-primary text-white hover:bg-primary/95 border-2 border-primary"
      : variant === "outline"
        ? "bg-transparent text-primary border-2 border-primary hover:bg-transparent hover:text-primary hover:border-none"
        : "bg-white text-gray-900 shadow-sm hover:shadow-md border-2 border-white";

  const boneColor =
    variant === "solid"
      ? "text-primary"
      : variant === "outline"
        ? "text-primary"
        : "text-white";

  const combinedClassName = `${baseStyles} ${variantStyles} group-hover:bg-transparent group-hover:border-transparent group-hover:shadow-none relative group h-12 ${className || ""}`;
  const content = (
    <>
      <div className="absolute inset-x-0 inset-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex items-center h-full scale-x-[1.15] scale-y-[1.1]">
        {/* Left Head SVG */}
        <div className="h-full aspect-2/3 shrink-0">
          <svg
            viewBox="0 0 40 60"
            className={`w-full h-full ${
              variant === "outline"
                ? "fill-none stroke-current stroke-2"
                : "fill-current"
            } ${boneColor}`}
          >
            <path
              d="M 40 12 C 35 5, 25 0, 15 0 C 0 0, 0 25, 10 30 C 0 35, 0 60, 15 60 C 25 60, 35 55, 40 48"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Center Stretching Bar */}
        <div
          className={`h-[80%] w-full -mx-px ${
            variant === "outline"
              ? `border-y-2 ${boneColor.replace("text-", "border-")} bg-transparent`
              : boneColor.replace("text-", "bg-")
          }`}
        />

        {/* Right Head SVG */}
        <div className="h-full aspect-2/3 shrink-0">
          <svg
            viewBox="0 0 40 60"
            className={`w-full h-full ${
              variant === "outline"
                ? "fill-none stroke-current stroke-2"
                : "fill-current"
            } ${boneColor}`}
          >
            <path
              d="M 0 12 C 5 5, 15 0, 25 0 C 40 0, 40 25, 30 30 C 40 35, 40 60, 25 60 C 15 60, 5 55, 0 48"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <span className="relative z-10 group-hover:translate-y-[0.5px]">
        {label}
      </span>
      {icon && <Icon icon={icon} className="size-5 relative z-10" />}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        aria-label={label}
        onMouseEnter={
          onMouseEnter as unknown as React.MouseEventHandler<HTMLAnchorElement>
        }
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={onMouseEnter as React.MouseEventHandler<HTMLButtonElement>}
      aria-label={label}
      className={combinedClassName}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
