import React from "react";
import { IconsProps } from "./icons";

export const ArrowDownIcon = ({ className, fill, width, height, viewBox }: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox={viewBox ? viewBox : "0 0 12 8"}
      width={width ? width : "12"}
      height={height ? height : "8"}
      fill={fill ? fill : "currentColor"}
    >
      <path
        d="M1.99961 0.799804L5.99961 4.7998L9.99961 0.799805L11.5996 1.5998L5.99961 7.1998L0.399609 1.5998L1.99961 0.799804Z"
        fill="currentColor"
      />
    </svg>
  );
};
