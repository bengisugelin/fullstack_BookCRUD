import React, { useState } from 'react';
import axios from 'axios';

export default function CreateBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [year, setYear] = useState('');
  const [isFiction, setIsFiction] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const bookData = {
      title: title,
      author: author,
      pages: pages,
      year: year,
      fiction: isFiction,
    };

    axios
      .post('http://localhost:8800/api/books/add', bookData)
      .then((res) => {
        window.location = '/';
      });
  };

  return (
    <div>

      <h3>Create New Book</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title: </label>
          <input
            type="text"
            required
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

            <label>Author: </label>
           <input
            type="text"
            required
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <label>Pages: </label>
          <input
            type="number"
            required
            className="form-control"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />

           <label>Year: </label>
           <input
            type="number"
            required
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />

            <label>Fiction: </label>
            <input
            type="checkbox"
            required
            className="form-control"
            checked={isFiction}
            onChange={(e) => setIsFiction(e.target.checked)}
          />
        </div>
        <br></br>

        <div className="form-group">
          <input
            type="submit"
            value="Create Book"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
