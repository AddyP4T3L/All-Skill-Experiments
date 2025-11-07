// src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import BookCard from "./components/BookCard";
import BookDetail from "./components/BookDetail";
import booksData from "./data/books";

function App() {
  // Parent component manages books with useState
  const [books, setBooks] = useState([]);

  // Simulate API fetch
  useEffect(() => {
    setTimeout(() => {
      setBooks(booksData);
    }, 500);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1> My Book Library</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        {/* Book List */}
        <Route
          path="/"
          element={
            <div>
              <h2>Book List</h2>
              <div style={{ display: "flex", gap: "20px" }}>
                {books.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </div>
          }
        />

        {/* Book Detail */}
        <Route path="/book/:id" element={<BookDetail books={books} />} />
      </Routes>
    </div>
  );
}

export default App;
