// eslint-disable-next-line no-unused-vars
import React from "react";
import SideNav from "./SideNav";
import AddSchedule from "./Schedule/AddSchedule";
import DisplayScheduler from "./Schedule/DisplaySchedule";

function Admin() {
  return (
    <>
      <section>
        <div className="admin_wrapper">
          <div className="sidenav">
            <SideNav />
          </div>
          <div className="side_content">
            <AddSchedule />
            <DisplayScheduler />
          </div>
        </div>
      </section>
    </>
  );
}

export default Admin;
