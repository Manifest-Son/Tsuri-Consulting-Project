import React from "react";
import "./Gallery.css";
import graduateImg from '../../assets/graduate.png'

function Gallery() {
  return (
    <React.Fragment>
        <section>
        <div className="gallery_header"><h1>Gallery</h1></div>
            <div className="gallery_container">
                <div className="gallery_wrapper">
                    <div className="gallery_info">
                        <img src={graduateImg} alt="" />
                        <h1>Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dicta perferendis exercitationem cum ipsum facere aperiam in similique rerum sit!</p>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  );
}

export default Gallery;
