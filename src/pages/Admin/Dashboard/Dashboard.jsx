// eslint-disable-next-line no-unused-vars
import React from "react";
import HomeContact from "./HomeContact";
import MainContact from "./MainContact";
import Subscribe from "./Subscribe";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <section className="dashboard_section">
        <div className="dashboard_content">
          <h1>Welcome to your dashboard.</h1>
          <p>
            Here are the data fetched from the database collected from the
            forms.
          </p>
        </div>
        <HomeContact />
        <MainContact />
        <Subscribe />
      </section>
    </>
  );
}

export default Dashboard;
