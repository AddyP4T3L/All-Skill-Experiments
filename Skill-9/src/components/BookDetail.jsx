// src/components/BookDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

function BookDetail({ books }) {
  const { id } = useParams(); // get book id from URL
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <p>Loading book details...</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>{book.title}</h2>
      <p><b>Author:</b> {book.author}</p>
      <p><b>Description:</b> {book.description}</p>
      <p><b>Rating:</b>  {book.rating}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
}

export default BookDetail;
