import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-[1100px] border-l border-r mx-auto bg-white min-h-screen flex flex-col">
      {children}
    </div>
  );
};

export default Container;
