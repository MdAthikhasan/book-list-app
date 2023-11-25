import React, { useState, useEffect } from "react";
import BookRow from "./BookRow";
import { getFromloacl } from "./../../utils/Utils";

export const App = () => {
  // main array of objects state || books state || books array of objects
  const [books, setBooks] = useState(getFromloacl());
  // input field states
  const [title, setTitle] = useState("");
  const [aother, setAother] = useState("");
  const [isbn, setIsbn] = useState("");
  const [pubYear, setPubyear] = useState("");
  // const [cl,ser] = useEffect()

  // form submit event

  // const msg = (isbn) => isbn.target.value === number ? isbn: alert('he');
  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      title,
      aother,
      isbn,
      pubYear,
    };
    setBooks([...books, obj]);
    clearInput();
  };
  const clearInput = function () {
    setTitle("");
    setAother("");
    setIsbn("");
    setPubyear("");
  };
  // delete book from LS
  const deleteHandler = (id) => {
    const filteredBooks = books.filter((book) => book.isbn !== id);
    setBooks(filteredBooks);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("booksss", JSON.stringify(books));
  });
  return (
    <div className="wrapper">
      <h1>BookList App</h1>
      <p>Add and view your books using local storage</p>
      <div className="main">
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              required
            ></input>
            <br></br>
            <label>Author</label>
            <input
              type="text"
              value={aother}
              onChange={(e) => setAother(e.target.value)}
              className="form-control"
              required
            ></input>
            <br></br>
            <label>ISBN#</label>
            <input
              type="number"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              className="form-control"
              required
            ></input>
            <br></br>
            <label>publish year</label>
            <input
              type="number"
              value={pubYear}
              onChange={(e) => setPubyear(e.target.value)}
              className="form-control"
              required
            ></input>
            <br></br>
            <button type="submit" className="btn btn-success btn-md">
              ADD
            </button>
          </form>
        </div>

        <div className="view-container">
          {books.length > 0 ? (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ISBN#</th>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Publish year</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.map((book) => (
                      <BookRow
                        key={book.isbn}
                        deleteHandler={deleteHandler}
                        book={book}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                onClick={() => setBooks([])}
                className="btn btn-danger btn-md"
              >
                Remove All
              </button>
            </>
          ) : (
            "No item added"
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * first is four state
 */

import { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>Show</button>
      )}
    </section>
  );
}

export default function Accordion() {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About">
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology">
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

/**
 * 1 
 * componentb
 * props driling er somossa holo unnesesary  rerender hoe
 */
 