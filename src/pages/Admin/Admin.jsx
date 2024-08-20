// eslint-disable-next-line no-unused-vars
import React from "react";
import AdminHeader from "../../components/Header/AdminHeader";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <>
      <section>
        <div className="admin_wrapper">
          <div className="admin_header">
            <AdminHeader />
          </div>
          <div className="lower_content">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
}

export default Admin;
