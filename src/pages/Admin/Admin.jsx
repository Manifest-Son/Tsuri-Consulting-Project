// eslint-disable-next-line no-unused-vars
import React from "react";
import SideNav from "./SideNav";
// import AddSchedule from "./Schedule/AddSchedule";
// import DisplayScheduler from "./Schedule/DisplaySchedule";
import HomeContact from "./Dashboard/HomeContact";
import MainContact from "./Dashboard/MainContact";
import Subscribe from "./Dashboard/Subscribe";

function Admin() {
  return (
    <>
      <section>
        <div className="admin_wrapper">
          <div className="sidenav">
            <SideNav />
          </div>
          <div className="side_content">
            <HomeContact />
            <MainContact />
            <Subscribe />
            {/* // <AddSchedule /> */}
            {/* // <DisplayScheduler /> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Admin;
