import { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavProfile } from "../molecules/profile";

const Navbar = () => {
  const [navBg, setNavBg] = useState("transparent");
  const data = useSelector((state: any) => state);
  console.log(data, "from nav");

  const isLogin = data.success;

  const navList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/login",
    },
    {
      name: "Product",
      link: "/",
    },
    {
      name: "Contact Us",
      link: "/",
    },
  ];

  useEffect(() => {
    const handleScroll = (e: any) => {
      window.scrollY > 10 ? setNavBg("w-full bg-whiter bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20") : setNavBg("bg-transparent");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar py-3 px-5 md:px-10 ${navBg} fixed z-10 duration-300`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={Logo} alt="" width={120} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-sm">
          {navList.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.link} className="active:bg-sun">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        {isLogin ? (
          <NavProfile />
        ) : (
          <Link to="/login">
            <button className="btn font-extrabold bg-sun border-sun text-whiter hover:text-whiter">LOGIN</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
