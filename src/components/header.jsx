


import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-[#2961b0] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Coursera</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400"
                    : "text-white hover:text-gray-200"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400"
                    : "text-white hover:text-gray-200"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400"
                    : "text-white hover:text-gray-200"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bootcamps"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400"
                    : "text-white hover:text-gray-200"
                }
              >
                Bootcamps
              </NavLink>
            </li>
          </ul>
        </nav>
        <img className="object-cover w-16" src="logo.gif" alt="_" />
      </div>
    </header>
  );
};
