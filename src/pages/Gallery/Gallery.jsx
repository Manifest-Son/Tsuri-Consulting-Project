import React, { useState, useEffect } from "react";
import "./Gallery.css";
import { database } from "../../utils/firebase.js";
import { collection, onSnapshot } from "firebase/firestore";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/success.css";
import "react-simple-toasts/dist/theme/failure.css";

// eslint-disable-next-line react/prop-types
function DisplayGallery({ img, title, description }) {
  return (
    <React.Fragment>
      <section>
        <div className="gallery_wrapper">
          <div className="gallery_info">
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

function Gallery() {
  const [fetch, setFetch] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        await onSnapshot(collection(database, "gallery"), (snapshot) => {
          const items = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setFetch(items);
        });
      } catch {
        toast("Error fetching gallery ", {
          theme: "success",
          duration: 3000,
        });
      }
    };

    fetchGallery();
  }, []);
  return (
    <section className="gallery_section">
      <h1>Gallery</h1>
      <div className="gallery_container">
        {fetch.map((currentImg, i) => (
          <DisplayGallery
            key={i}
            img={currentImg.imageUrl}
            title={currentImg.title}
            description={currentImg.description}
          />
        ))}
      </div>
    </section>
  );
}
export default Gallery;
