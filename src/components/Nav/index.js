import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <div className="w-full flex justify-between items-center bg-black px-2 py-4 ">
      <div>
        <Link href="/">
          <h3 className="flex items-center cursor-pointer">
            Explorer
            <span className="ml-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg"
                width="40px"
                height="40px"
                alt="nig flag"
              />
            </span>
          </h3>
        </Link>
      </div>
      <div className="flex">
        <input className="px-2 py-1 mr-2 rounded shadow outline-none focus:ring-green-500 ring-2 ring-transparent" />
        <Link href="/profile">
        <div className="w-8 h-8 rounded-full text-white bg-green-500 flex items-center justify-center cursor-pointer">
          D
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
