import React, { useState, useEffect } from "react";
import "./Gallery.css";
import { database } from "../../utils/firebase.js";
import { collection, onSnapshot } from "firebase/firestore";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/success.css";
import "react-simple-toasts/dist/theme/failure.css";

// eslint-disable-next-line react/prop-types
function DisplayGallery({ img, title }) {
  return (
    <div className="gallery_wrapper">
      <div className="gallery_info">
        <img src={img} alt={title} />
        <div className="image_overlay">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
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

  // Group images by date
  const groupedImages = fetch.reduce((groups, image) => {
    const date = new Date(image.date).toLocaleDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(image);
    return groups;
  }, {});

  return (
    <section className="gallery_section">
      <h1>Gallery</h1>
      {Object.entries(groupedImages)
        .sort(([dateA], [dateB]) => new Date(dateB) - new Date(dateA))
        .map(([date, images]) => (
          <div key={date} className="date_section">
            <div className="section_header">
              <h2 className="date_header">{date}</h2>
              <p className="section_description">
                {images[0]?.description || "Collection of images from this date"}
              </p>
            </div>
            <div className="gallery_container">
              {images.map((currentImg, i) => (
                <DisplayGallery
                  key={i}
                  img={currentImg.imageUrl}
                  title={currentImg.title}
                />
              ))}
            </div>
          </div>
        ))}
    </section>
  );
}

export default Gallery;
