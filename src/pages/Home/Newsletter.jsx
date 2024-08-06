import { useState } from "react";
import "./Home.css";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/success.css";
import "react-simple-toasts/dist/theme/failure.css";
// eslint-disable-next-line no-unused-vars
import { app, database } from "../../utils/firebase.js";
import { addDoc, collection } from "firebase/firestore";

export default function Newsletter() {
  const [data, setData] = useState();

  const collectionRef = collection(database, "subcription");

  const handleChange = (e) => {
    setData({ subscribe: e.target.value });
  };
  const handleClick = async () => {
    try {
      await addDoc(collectionRef, {
        subscribe: data.subscribe,
      }).then(() => {
        toast("Thank you for subscribing to our emails.", {
          theme: "success",
          duration: 3000,
        });
      });
    } catch {
      toast("Thank you for subscribing to our emails.", {
        theme: "success",
        duration: 3000,
      });
    }
  };
  return (
    <section className="newsletter_section">
      <div className="newsletter">
        <h3>Subscribe to our newsletter:</h3>
        <div className="newsletter_input">
          <input
            type="email"
            name="subscribe"
            id="subcribe"
            onChange={handleChange}
          />
          <button onClick={handleClick}>Subcribe</button>
        </div>
      </div>
    </section>
  );
}
