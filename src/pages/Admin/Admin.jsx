// eslint-disable-next-line no-unused-vars
import React from "react";
import SideNav from "./SideNav";
import AddGallery from "./Galleria/AddGallery";
// import UpdateGallery from './Galleria/UpdateGallery'
import FetchGallery from "./Galleria/DisplayGallery";

function Admin() {
  return (
    <>
      <section>
        <div className="admin_wrapper">
          <div className="sidenav">
            <SideNav />
          </div>
          <div className="side_content">
            <AddGallery />
            <FetchGallery />
            {/* <UpdateGallery /> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Admin;
