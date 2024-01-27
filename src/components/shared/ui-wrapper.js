import React from "react";

const UiWrapper = ({ children }) => {
  return (
    <div className="max-w-full px-2.5 md:px-20 overflow-hidden">{children}</div>
  );
};

export default UiWrapper;
