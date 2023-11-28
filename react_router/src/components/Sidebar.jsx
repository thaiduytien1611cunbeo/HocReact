import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const activeMenu = ({ isActive }) => {
    return isActive ? "nav-link current" : "nav-link";
  };
  return (
    <div>
      <h2>Menu</h2>
      <ul className="nav flex-column">
        <li>
          <NavLink to="/" className={activeMenu}>
            Trang Chủ
          </NavLink>
        </li>
        <li>
          <NavLink to="/gioi-thieu" className={activeMenu}>
            Giới Thiệu
          </NavLink>
        </li>
        <li>
          <NavLink to="/san-pham" className={activeMenu}>
            Sản Phẩm
          </NavLink>
        </li>
        <li>
          <NavLink to="/dat-hang" className={activeMenu}>
            Đặt Hàng
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
