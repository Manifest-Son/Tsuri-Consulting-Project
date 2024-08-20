// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Galleria.css";
import FetchGallery from "./DisplayGallery";
import { useNavigate } from "react-router-dom";

function Galleria() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin/add_gallery");
  };
  return (
    <>
      <section className="galleria_section">
        <h1>
          Weclome to Galleria. <br />
          Where your photos where you can upload, edit and delete photos.
        </h1>
        <div className="add_gallery">
          <button onClick={handleClick} className="galleria_btn">
            Add Gallery
          </button>
        </div>
        <FetchGallery />
      </section>
    </>
  );
}

export default Galleria;
