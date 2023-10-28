import React from "react";

export const Button = ({
  border,
  textColor,
  bgColor,
  children,
  marginTop,
  marginLeft,
  paddingNote,
  width,
}) => {
  return (
    <button
      className="btn"
      style={{
        width: width,
        backgroundColor: bgColor,
        color: textColor,
        border: border,
        marginTop: marginTop,
        marginLeft: marginLeft,
        padding: paddingNote,
      }}
    >
      {children}
    </button>
  );
};
