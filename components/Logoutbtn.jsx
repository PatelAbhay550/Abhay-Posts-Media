import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";

const Logoutbtn = () => {
  return (
    <LogoutLink className="bg-red-700 text-white p-2 mt-5">Logout</LogoutLink>
  );
};

export default Logoutbtn;
