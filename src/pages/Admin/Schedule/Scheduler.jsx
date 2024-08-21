import { useNavigate } from "react-router-dom";
import FetchSchedule from "./DisplaySchedule";

function Scheduler() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin/add_schedule");
  };
  return (
    <section className="scheduler_section">
      <h1>
        Welcome to the Scheduler. <br /> Where you create update and delete
        events for your web page.
      </h1>
      <div className="add_button">
        <button onClick={handleClick} className="schedulder_btn">
          Add Schedule
        </button>
      </div>
      <FetchSchedule />
    </section>
  );
}

export default Scheduler;
