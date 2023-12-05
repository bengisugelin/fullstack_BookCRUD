import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EditBook() {
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];



  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [year, setYear] = useState('');
  const [isFiction, setIsFiction] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8800/api/books/${id}`)
      .then((response) => {
        const bookData = response.data;
        setTitle(bookData.title);
        setAuthor(bookData.author);
        setPages(bookData.pages);
        setYear(bookData.year);
        setIsFiction(bookData.fiction);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

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
      .put(`http://localhost:8800/api/books/update/${id}`, bookData)
      .then((res) => {
        window.location = '/';
      });
  };

  return (
    <div>
      <h3>Create New Task</h3>
      <h3>Update Book</h3>
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
        </div>
        <div className="form-group">
          <label>Author: </label>
          <input
            type="text"
            required
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Pages: </label>
          <input
            type="number"
            required
            className="form-control"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Year: </label>
          <input
            type="number"
            required
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Fiction: </label>
          <input
            type="checkbox"
            className="form-control"
            checked={isFiction}
            onChange={(e) => setIsFiction(e.target.checked)}
          />
        </div>
        <br />

        <div className="form-group">
          <input
            type="submit"
            value="Update Book"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
