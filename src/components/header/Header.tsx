import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Link from "next/link";
import NavItems from "./NavItems";
import { buttonVariants } from "../ui/button";
import Cart from "../Cart";
import { cookies } from "next/headers";
import { getServerSideUser } from "@/lib/payload-utils";
import NavMenuUser from "./NavMenuUser";

const Header = async () => {
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);

  return (
    <div className="bg-white fixed inset-x-0 z-50 h-auto">
      <header className="realtive bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200 ">
            <div className=" flex items-center">
              <Link href="/">
                <Logo className="w-[70px] mb-2" />
              </Link>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch ">
                <NavItems />
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? (
                    ""
                  ) : (
                    <Link href="/sign-in" className={buttonVariants()}>
                      Sign in
                    </Link>
                  )}

                  {user ? (
                    ""
                  ) : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}

                  {user ? (
                    <NavMenuUser user={user} />
                  ) : (
                    <Link
                      href="/sign-up"
                      className={buttonVariants({
                        variant: "ghost",
                        className: "bg-gray-300",
                      })}
                    >
                      Create account
                    </Link>
                  )}

                  {user ? (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  ) : (
                    ""
                  )}

                  {user ? (
                    ""
                  ) : (
                    <div className="flex lg:ml-6">
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Header;
