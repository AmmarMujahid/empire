import React from "react";

const Button = ({
  title,
  className,
  primary,
  secondary,
  tertiary,
  ...rest
}) => {
  let baseStyle = "py-[10px] rounded-3xl font-semibold";

  if (primary) {
    baseStyle += " bg-primaryColor text-white";
  }

  if (secondary) {
    baseStyle += " bg-white text-primaryColor";
  }

  if (tertiary) {
    baseStyle += " bg-darkColor1 text-primaryColor border-[1px] border-primaryColor px-[40px]";
  }

  return (
    <button className={`${baseStyle} ${className}`} {...rest}>
      {title}
    </button>
  );
};

export default Button;
