import "./Services.css";
import React from "react";
import bookImg from "../../assets/Book/book_cover.jpg";

function Book() {
  return (
    <React.Fragment>
      <section className="book_section">
        <h1>Life On Campus</h1>
        <div className="book_container">
          <div className="book_display">
            <img src={bookImg} alt="Life On Campus Book" />
          </div>
          <div className="book_review">
            <h2>Book Review</h2>
            <p>
              Life on campus entails all the activities that happens in all
              higher insitutions. The boook gives detailed information from high
              school to campus life within the campus, transition to marketplace
              and message to guardians/parents on what they need to know about
              campus, how they are supposed to support and take care of their
              sons and daughtersin institutions of higher learning.
              <br />
              First year on capmus presents a lot of new experiences, new
              people,, new environment, new activities, new friends, new ways of
              doing thingsand being away from your parents/guardians. While alot
              of these new experiences are exciting they can challange your
              financial, time management kills and academic adjustment.
              <br />
              Unlike in High School, you are responsible for deciding what your
              schedule will hold to manage your time accordingl. You also need
              to prepare by figuring out how to handle situations and
              challenging circumstanceswhen they arise.
              <br />
              This book captures the positive side of campus life and activities
              and behaviours you can adjust to make your campus life more
              memorable and full of fun. If others did it, you can also do it.
            </p>
            <button>Purchase the Book.</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Book;
