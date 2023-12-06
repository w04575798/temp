import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/main.css';
import 'font-awesome/css/font-awesome.min.css';
import Card from './Card';

const Main = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/book`)
      .then((response) => {
        console.log(response.data);
        setBooks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <section className="jumbotron text-center">
        {/* ... */}
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {books.map((book) => (
              <Card key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
