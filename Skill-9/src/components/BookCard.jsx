// src/components/BookCard.jsx
import React from "react";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "8px" }}>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
}

export default BookCard;
