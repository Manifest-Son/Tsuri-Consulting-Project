import "./Services.css";
import React from "react";
import bookImg from "../../assets/Book/book_cover.jpg";

function Book() {
  return (
    <React.Fragment>
      <section>
        <div className="book_container">
          <div className="book_display">
            <img src={bookImg} alt="Life On Campus Book" />
          </div>
          <div className="book_review">
            <h1>Life On Campus</h1>
            <h3>Book Review</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              iste aliquam, at accusamus doloribus est?
            </p>
            <button>Purchase the Book.</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Book;
