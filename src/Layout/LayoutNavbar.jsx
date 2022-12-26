import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dropdown_menu_1, main_menu } from "./menus";

function LayoutNavbar() {
  // Togle Dropdown Mega Menu
  const [toggle, setTogle] = useState("hidden");
  const [hamburgerTogle, setHamburgerTogle] = useState("hidden");

  //   fnc hide Mega Menu
  function hiddenDropdown() {
    if (toggle === "hidden") {
      return setTogle(null);
    }
    return setTogle("hidden");
  }

  function hiddenHumberger() {
    if (hamburgerTogle === "hidden") {
      return setHamburgerTogle(null);
    }
    return setHamburgerTogle("hidden");
  }
  return (
    <nav className="bg-white border-gray-900 dark:border-gray-600 dark:bg-gray-900 shadow-sm shadow-zinc-300">
      <div className="flex flex-wrap justify-between items-center mx-auto px-6 py-2.5">
        <Link to="/" className="flex items-center">
          <img
            src="/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Starterkit Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Starterkit Rama
          </span>
        </Link>

        <button
          data-collapse-toggle="mega-menu-full"
          type="button"
          onClick={hiddenHumberger}
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          id="mega-menu-full"
          className={`${hamburgerTogle} justify-between items-center w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
            {main_menu.map((menu) => {
              return (
                <li key={menu.text}>
                  <Link
                    to={menu.target}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    {menu.text}
                  </Link>
                </li>
              );
            })}
            <li>
              <button
                onClick={hiddenDropdown}
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                {dropdown_menu_1.text}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
            <li>
              <Link
                to={"/logout"}
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        id="mega-menu-full-dropdown"
        className={`mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 ${toggle}`}
        onMouseLeave={hiddenDropdown}
      >
        <div className="grid py-5 px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
          {/* First Column */}
          <ul aria-labelledby="mega-menu-full-dropdown-button">
            {dropdown_menu_1.sub_menu_col_1.map((menu) => {
              return (
                <li key={menu.text}>
                  <Link
                    to={menu.target}
                    className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <div className="font-semibold">{menu.text}</div>
                    <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                      {menu.desc}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* Second Column */}
          <ul>
            {dropdown_menu_1.sub_menu_col_2.map((menu) => {
              return (
                <li key={menu.text}>
                  <Link
                    to={menu.target}
                    className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <div className="font-semibold">{menu.text}</div>
                    <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                      {menu.desc}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* Third Column */}
          <ul>
            {dropdown_menu_1.sub_menu_col_3.map((menu) => {
              return (
                <li key={menu.text}>
                  <Link
                    to={menu.target}
                    className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <div className="font-semibold">{menu.text}</div>
                    <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                      {menu.desc}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default LayoutNavbar;
