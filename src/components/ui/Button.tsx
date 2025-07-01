"use client";

import React from "react";
import Link from "next/link";

export interface FancyButtonProps {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

const FancyButton: React.FC<FancyButtonProps> = ({
  href,
  onClick,
  children,
  className = "",
  variant = "primary",
}) => {
  const variantClass =
    variant === "primary"
      ? "" 
      : "btn-fancy-secondary";

  return (
    <div className={`btn-fancy ${variantClass} ${className}`.trim()}>
      {href ? (
        <Link href={href} legacyBehavior>
          <a onClick={onClick}>{children}</a>
        </Link>
      ) : (
        <button onClick={onClick}>{children}</button>
      )}
    </div>
  );
};

export default FancyButton;
