import React from "react";
import { Search } from "./Search";

export function Header({searchCallback}: { searchCallback: (searchTerms: string) => void }) {
    return (
        <header className="py-10">
          <div className="container mx-auto">
            <div className="sm:flex items-center justify-between">
              <a
                  href="/"
                  className="logo lg:w-1/2 sm:w-1/4 w-full block mb-5 sm:mb-0"
              >
                <img
                    className="mx-auto sm:mx-0"
                    src="./image/logo.svg"
                    alt="hackflix"
                />
              </a>
              <div className="flex justify-center sm:justify-end items-center text-right lg:w-1/2 sm:w-3/4 w-full">
                {/* Start: Search Component */}
                <Search searchCallback={searchCallback} />
                {/* End: Search Component */}

                <div className="nav">
                  <a href="/bookmarks" className="bookmark-nav py-3 mr-5">
                    Bookmarks
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
    );
}
