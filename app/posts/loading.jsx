import Link from "next/link";
import React from "react";

const Page = async () => {
  return (
    <>
      <h1 className="text-center font-bold text-4xl mb-3">
        All Posts By Users
      </h1>
      <ul className="list-none p-0">
        <li className="p-4 border-b">
          <h2 className="text-xl font-bold">Loading Posts...</h2>
        </li>
      </ul>
    </>
  );
};

export default Page;
