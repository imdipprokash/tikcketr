import Image from "next/image";
import React from "react";
import Logo from "@/images/logo.png";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import SearchBar from "./SearchBar";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="border-b ">
      <div className="flex flex-col lg:flex-row items-center gap-4 p-4">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href={"/"} className="font-bold shrink-0">
            <Image
              src={Logo}
              alt="logo"
              width={100}
              height={100}
              className="w-24 lg:w-28"
            />
          </Link>
          <div className="lg:hidden">
            <SignedIn>
              {/* User btn */}
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
        {/* Search bar -full with on mobile */}
        <div className="w-full lg:max-w-2xl">
          <SearchBar />
        </div>

        {/* Sign In and Sign Out */}
        <div className="hidden lg:block ml-auto">
          <SignedIn>
            <div className="flex items-center gap-3">
              <Link href={"/seller"}>
                <button className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition">
                  Sell Tickets
                </button>
              </Link>
              <Link href={"/tickets"}>
                <button className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition">
                  My Tickets
                </button>
              </Link>
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
        {/* Mobile only */}
        <div className="lg:hidden w-full flex justify-center gap-3">
          <SignedIn>
            <Link href={"/seller"} className="flex-1">
              <button className="w-full bg-blue-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition">
                Sell Tickets
              </button>
            </Link>
            <Link href={"/tickets"} className="flex-1">
              <button className="w-full bg-gray-100 text-gray-900 px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition">
                My Tickets
              </button>
            </Link>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Header;
