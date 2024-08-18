// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Admin.css";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <>
      <section>
        <div className="sidenav_wrapper">
          <nav>
            <ol className="sidenav_links">
              <Link to="">
                <li>
                  <div className="icon">
                    <MdDashboard />
                  </div>
                  <div className="title">Dashboard</div>
                </li>
              </Link>
              <Link to="">
                <li>
                  <div className="icon">
                    <MdDashboard />
                  </div>
                  <div className="title">Profile</div>
                </li>
              </Link>
              <Link to="">
                <li>
                  <div className="icon">
                    <MdDashboard />
                  </div>
                  <div className="title">Galleria</div>
                </li>
              </Link>
              <Link to="">
                <li>
                  <div className="icon">
                    <MdDashboard />
                  </div>
                  <div className="title">Scheduler</div>
                </li>
              </Link>
              <Link to="">
                <li>
                  <div className="icon">
                    <MdDashboard />
                  </div>
                  <div className="title">Mailbox</div>
                </li>
              </Link>
              <Link to="">
                <li>
                  <div className="icon">
                    <MdDashboard />
                  </div>
                  <div className="title">Feedback</div>
                </li>
              </Link>
            </ol>
          </nav>
        </div>
      </section>
    </>
  );
}

export default SideNav;
