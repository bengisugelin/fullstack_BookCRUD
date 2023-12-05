import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Book = (props) => (
  <tr className="d-flex">
    <td className="col-2">{props.book}</td>
    <td className="col-2"> {props.title} </td>
    <td className="col-2"> {props.author}</td>
    <td className="col-2" > {props.pages}</td>
    <td className="col-2">{props.year}</td>
    <td className="col-2" style={{ textAlign: 'left' }}>
      <button  onClick={() => {props.editBook(props.keyt); }} > Edit  </button>
      {'  '}
      <button onClick={() => { props.deleteBook(props.keyt); }}> delete </button>
    </td>
  </tr>
);

export default function BookList() {
  const [books, setBookList] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8800/api/books/')
      .then((response) => {
        setBookList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteBook = (id) => {
    axios
      .delete('http://localhost:8800/api/books/delete/' + id)
      .then((response) => {
        console.log(response.data);
      });

      setBookList(books.filter((el) => el._id !== id));
  };

  const editBook = (id) => {
    window.location = '/update/' + id;
  };

  return (
    <div>
      <h3>Logged Books</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Book</th> 
            
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            return (
              <Book
                book={book.title}
                author={book.author}
                pages={book.pages}
                year={book.year}
                key={book._id}
                keyt={book._id}
                deleteBook={deleteBook}
                editBook={editBook}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
