// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase.js";
import useStore from "../../store/store.js";

function AdminHeader() {
  const navigate = useNavigate();
  const clearUser = useStore((state) => state.clearUser);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      clearUser();
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <nav>
        <ol className="admin_nav_links">
          <Link to="">
            <li>Dashboard</li>
          </Link>
          <Link to="">
            <li>Scheduler</li>
          </Link>
          <Link to="">
            <li>Gallery</li>
          </Link>
          <Link to="">
            <li>Profile</li>
          </Link>
          <li>
            <button onClick={handleLogout} className="logout_btn">
              Log Out
            </button>
          </li>
        </ol>
      </nav>
    </>
  );
}

export default AdminHeader;
