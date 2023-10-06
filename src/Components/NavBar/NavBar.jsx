import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const NavLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active underline text-red-700 font-semibold" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/orders"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active underline text-red-700 font-semibold" : ""
        }
      >
        Orders
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active underline text-red-700 font-semibold" : ""
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active underline text-red-700 font-semibold" : ""
        }
      >
        Contact
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Event MAMA</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-7">{NavLinks}</ul>
        </div>
        <div className="navbar-end flex items-center gap-6">
            <img className="w-12 h-12 rounded-full" src="" alt="" />
          <Link to={'/login'}><button className="btn">Log In</button></Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;