import { useNavigate } from "react-router-dom";
import FetchSchedule from "./DisplaySchedule";

function Scheduler() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin/add_schedule");
  };
  return (
    <section>
      <div className="add_button">
        <button onClick={handleClick}>Add Schedule</button>
      </div>
      <FetchSchedule />
    </section>
  );
}

export default Scheduler;
