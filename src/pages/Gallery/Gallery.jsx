import React from "react";
import "./Gallery.css";
import gallery from "../../data/gallery";

// eslint-disable-next-line react/prop-types
function DisplayGallery({ img, title, description }) {
  return (
    <React.Fragment>
      <section>
        <div className="gallery_wrapper">
          <div className="gallery_info">
            <img src={img} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

function Gallery() {
  return (
    <section>
      <div className="gallery_header">
        <h1>Gallery</h1>
      </div>
      <div className="gallery_container">
        {gallery.map((currentImg) => (
          <DisplayGallery
            key={currentImg.id}
            img={currentImg.img}
            title={currentImg.title}
            description={currentImg.description}
          />
        ))}
      </div>
    </section>
  );
}
export default Gallery;
