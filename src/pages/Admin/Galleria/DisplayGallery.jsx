/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { database } from "../../../utils/firebase.js";
import "./Galleria.css";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/success.css";
import "react-simple-toasts/dist/theme/failure.css";

// eslint-disable-next-line react/prop-types
function DisplayGallery({ id, image, title, description, onUpdate, onDelete }) {
  return (
    <section>
      <div className="galleria_display">
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="operations">
        <button onClick={() => onUpdate(id)}>Update</button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </section>
  );
}

function FetchGallery() {
  const [galleryItems, setGalleryItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const snapshot = await getDocs(collection(database, "gallery"));
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGalleryItems(items);
      } catch {
        toast("Error fetching gallery items:", {
          theme: "success",
          duration: 3000,
        });
      }
    };

    fetchGalleryItems();
  }, []);

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(database, "gallery", id));
      setGalleryItems((prevItems) =>
        prevItems.filter((item) => item.id !== id),
      );
    } catch (error) {
      // console.error("Error deleting gallery item:", error);
      toast("Error deleting the record.", { theme: "failure", duration: 3000 });
    }
  };

  return (
    <>
      <section>
        <div className="galleria_wrapper">
          {galleryItems.map((item) => (
            <DisplayGallery
              key={item.id}
              id={item.id}
              image={item.imageUrl}
              title={item.title}
              description={item.description}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default FetchGallery;
