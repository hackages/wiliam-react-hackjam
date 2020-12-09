import React from 'react';

export function Logo() {
  return (
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
  );
}