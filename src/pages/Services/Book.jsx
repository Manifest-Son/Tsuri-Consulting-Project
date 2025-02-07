import React from "react";
import "./Services.css";
import bookImg from "../../assets/Book/book_cover.jpg";
import { FaStar, FaBookOpen, FaDownload, FaShoppingCart } from 'react-icons/fa';

function Book() {
  return (
    <section className="book_section">
      <div className="book_header">
        <h1>Life On Campus</h1>
        <div className="book_subtitle">Your Complete Guide to University Success</div>
      </div>

      <div className="book_container">
        <div className="book_display">
          <img src={bookImg} alt="Life On Campus Book" />
          <div className="book_badges">
            <span>Bestseller</span>
            <span>Student Choice</span>
          </div>
        </div>

        <div className="book_review">
          <div className="book_rating">
            <FaStar color="#ffc300" />
            <FaStar color="#ffc300" />
            <FaStar color="#ffc300" />
            <FaStar color="#ffc300" />
            <FaStar color="#ffc300" />
            <span>(500+ Reviews)</span>
          </div>

          <h2>Transform Your Campus Experience</h2>

          <div className="book_highlights">
            <div className="highlight_item">
              <FaBookOpen />
              <span>Complete Campus Guide</span>
            </div>
            <div className="highlight_item">
              <FaDownload />
              <span>Digital Access Included</span>
            </div>
          </div>

          <div className="book_description">
            <p>
              From high school transition to career preparation, this comprehensive guide covers:
            </p>
            <ul>
              <li>✓ First Year Survival Skills</li>
              <li>✓ Time Management Techniques</li>
              <li>✓ Financial Planning Tips</li>
              <li>✓ Social Integration Strategies</li>
              <li>✓ Academic Success Methods</li>
            </ul>
          </div>

          <div className="book_cta">
            <button className="primary_btn">
              <FaShoppingCart /> Purchase Now
            </button>
            <button className="secondary_btn">
              Preview Chapter
            </button>
          </div>

          <div className="book_guarantee">
            <p>30-Day Money-Back Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Book;
