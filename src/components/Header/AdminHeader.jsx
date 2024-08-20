// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function AdminHeader() {
  return (
    <>
      <nav>
        <ol className="admin_nav_links">
          <Link to="/admin/dashboard">
            <li>Dashboard</li>
          </Link>
          <Link to="/admin/scheduler">
            <li>Scheduler</li>
          </Link>
          <Link to="/admin/galleria">
            <li>Gallery</li>
          </Link>
          <Link to="/admin/profile">
            <li>Profile</li>
          </Link>
        </ol>
      </nav>
    </>
  );
}

export default AdminHeader;
