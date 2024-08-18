function Dashboard() {
  return (
    <>
      <section className="dashboard_section">
        <h1>Welcome Madam Phoebe.</h1>
        <p>Here are some insites on how your company is doing.</p>
        <div className="top_content">
          <div className="subcribers">
            <h1>Subscribers</h1>
            <p>12</p>
          </div>
          <div className="gallery">
            <h1>Gallery</h1>
            <p>10</p>
          </div>
          <div className="responses">
            <h1>Responses</h1>
            <p>20</p>
          </div>
          <div className="booking">
            <h1>Bookings</h1>
            <p>15</p>
          </div>
        </div>
        <div className="bottom_content">
          <table>
            <thead>
              <h1>Responses</h1>
            </thead>
            <tr>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>Message</th>
            </tr>
            <tr>
              <td>Lennox Githinji</td>
              <td>0796302516</td>
              <td>lennox@gmail.com</td>
              <td>I congratulate you for your good work.</td>
            </tr>
            <tr>
              <td>Lennox Githinji</td>
              <td>0796302516</td>
              <td>lennox@gmail.com</td>
              <td>I congratulate you for your good work.</td>
            </tr>
            <tr>
              <td>Lennox Githinji</td>
              <td>0796302516</td>
              <td>lennox@gmail.com</td>
              <td>I congratulate you for your good work.</td>
            </tr>
            <tr>
              <td>Lennox Githinji</td>
              <td>0796302516</td>
              <td>lennox@gmail.com</td>
              <td>I congratulate you for your good work.</td>
            </tr>
            <tr>
              <td>Lennox Githinji</td>
              <td>0796302516</td>
              <td>lennox@gmail.com</td>
              <td>I congratulate you for your good work.</td>
            </tr>
            <button>View More</button>
          </table>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
