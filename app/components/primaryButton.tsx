"use client";

import Link from "next/link";
import React from "react";

interface ButtonProps {
  href?: string;
  //   onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
}

const Btn_components: React.FC<ButtonProps> = ({
  href,
  //   onClick,
  children,
  className = "",
  type = "button",
  variant = "primary",
}) => {
  const baseStyle = "inline-block px-5 py-2 rounded-md font-medium transition-colors duration-200";

  const variants = {
    primary: "bg-[#272727] text-white rounded-[5px] hover:bg-[#333] border border-[#272727] px-[15px] py-[10px]",
    secondary: "bg-transparent text-[#272727] border border-[#272727] rounded-[5px] hover:bg-gray-300 px-[15px] py-[10px]",
  };

  const combinedClass = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClass}>
      {children}
    </button>
  );
};

export default Btn_components;
