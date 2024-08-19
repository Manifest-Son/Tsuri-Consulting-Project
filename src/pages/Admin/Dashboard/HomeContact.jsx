/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { database } from "../../../utils/firebase.js";
import {
  doc,
  collection,
  onSnapshot,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/success.css";
import "react-simple-toasts/dist/theme/failure.css";

function HomeContact() {
  const [contacts, setContacts] = useState([]);
  const contactsCollection = collection(database, "home_contact");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        await onSnapshot(contactsCollection, (snapshot) => {
          const homeContactList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setContacts(homeContactList);
        });
      } catch (err) {
        toast("Sorry, An Error occured. Please refresh.", {
          theme: "failure",
          duration: 3000,
        });
      }
    };
    fetchContacts();
  }, []);

  const handleRead = async (id) => {
    const contactDoc = doc(database, "home_contact", id);
    await updateDoc(contactDoc, { read: true });
    setContacts(
      contacts.map((contact) =>
        contact.id === id ? { ...contact, read: !contact.read } : contact,
      ),
    );
  };

  const handleDelete = async (id) => {
    const contactDoc = doc(database, "home_contact", id);
    await deleteDoc(contactDoc);
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <section className="homecontact_section">
      <h1>Home Contacts</h1>
      <main>
        <table className="homecontact_table">
          <thead>
            <tr>
              <th>Fullname</th>
              <th>Phone Number</th>
              <th>Message</th>
              <th>Subject</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className={contact.read ? "read" : ""}>
                <td>{contact.fullname}</td>
                <td>{contact.phoneno}</td>
                <td>{contact.message}</td>
                <td>{contact.subject}</td>
                <td>
                  <div className="buttons">
                    <button
                      onClick={() => handleRead(contact.id)}
                      className="read_btn"
                    >
                      {contact.read ? "Unread" : "Read"}
                    </button>
                    <button
                      onClick={() => handleDelete(contact.id)}
                      className="delete_btn"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
}

export default HomeContact;
