// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

function Admin() {
  return (
    <>
      <section>
        <div className="admin_wrapper">
          <div className="sidenav">
            <SideNav />
          </div>
          <div className="main_content">
            {<Outlet /> ? (
              <Outlet />
            ) : (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio dolores labore quo tempore dolorum culpa expedita eos
                aperiam excepturi odio natus quasi similique, unde mollitia
                eveniet? Non beatae laudantium est?
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Admin;
