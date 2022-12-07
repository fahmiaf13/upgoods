import React from "react";
import { useSelector } from "react-redux";
import { BiShoppingBag, BiLogOut } from "react-icons/bi";
import { logOut } from "../../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import AvatarDefault from "../../../assets/avatar-default.png";
import { TbSettings } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Cart } from "../cart";

const NavProfile = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: any) => state.user);

  const user = data;

  const logOutHandler = () => {
    dispatch(logOut());
    window.location.reload();
  };

  return (
    <div className="flex gap-2 items-center">
      <Cart />
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={`${user.photoURL || AvatarDefault}`} />
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">{user.displayName}</a>
          </li>

          <li>
            <Link to="/settings" className="flex items-center justify-start">
              <TbSettings size={20} /> Settings
            </Link>
          </li>
          <li>
            <button onClick={logOutHandler} className="flex items-center justify-start">
              <BiLogOut size={20} />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavProfile;
