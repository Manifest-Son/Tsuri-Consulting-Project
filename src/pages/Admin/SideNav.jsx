// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Admin.css";
import { MdDashboard } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GrGallery } from "react-icons/gr";
import { MdLogout } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase.js";
import useStore from "../../store/store.js";

function SideNav() {
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
      <section>
        <div className="sidenav_wrapper">
          <div className="side_nav">
            <nav>
              <ol className="sidenav_links">
                <Link to="/admin/dashboard">
                  <li>
                    <div className="icon">
                      <MdDashboard />
                    </div>
                    <div className="title">Dashboard</div>
                  </li>
                </Link>
                <Link to="/admin/profile">
                  <li>
                    <div className="icon">
                      <CgProfile  />
                    </div>
                    <div className="title">Profile</div>
                  </li>
                </Link>
                <Link to="/admin/galleria">
                  <li>
                    <div className="icon">
                      <GrGallery />
                    </div>
                    <div className="title">Galleria</div>
                  </li>
                </Link>
                <Link to="/admin/scheduler">
                  <li>
                    <div className="icon">
                      <FaCalendarDay />
                    </div>
                    <div className="title">Scheduler</div>
                  </li>
                </Link>
                <li>
                  <div className="icon">
                    <MdLogout />
                  </div>
                  <div className="title" onClick={handleLogout}>
                    Log Out
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

export default SideNav;
