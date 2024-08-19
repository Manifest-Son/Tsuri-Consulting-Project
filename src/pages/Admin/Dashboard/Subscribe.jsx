/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { database } from "../../../utils/firebase.js";
import { doc, collection, onSnapshot, deleteDoc } from "firebase/firestore";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/success.css";
import "react-simple-toasts/dist/theme/failure.css";

function Subscribe() {
  const [emails, setEmails] = useState([]);
  const collectionRef = collection(database, "subcription");

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        await onSnapshot(collectionRef, (snapshot) => {
          const subscription = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setEmails(subscription);
        });
      } catch (err) {
        toast("Sorry, An Error occured. Please refresh.", {
          theme: "failure",
          duration: 3000,
        });
      }
    };
    fetchSubscription();
  }, []);

  const handleDelete = async (id) => {
    const subcriptionDoc = doc(database, "subcription", id);
    await deleteDoc(subcriptionDoc);
    setEmails(emails.filter((emails) => emails.id !== id));
  };

  return (
    <section className="subscription_section">
      <h1>Email Subscription</h1>
      <main>
        <table className="subscription_table">
          <thead>
            <tr>
              <th>Email Addresses</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((email) => (
              <tr key={email.id}>
                <td>{email.subscribe}</td>
                <td>
                  <button
                    onClick={() => handleDelete(email.id)}
                    className="delete_btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
}

export default Subscribe;
