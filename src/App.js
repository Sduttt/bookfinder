import "./App.css";
import Result from "./components/Result";
import React, { useState } from "react";
import axios from "axios";
import cover from "./Assets/default_book_cover_2015.jpg";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { ImBooks } from 'react-icons/im';


function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [stat, setStat] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true)
  const [query, setQuery] = useState("")

  async function handleSubmit(event) {
    setIsEmpty(false)
    setLoading(true);
    event.preventDefault();
    setResults([]);

    await axios
      .get(`https://openlibrary.org/search.json?q=${searchQuery}`)
      .then((response) => {
        setResults(response.data.docs);
        setQuery(response.data.q)
      })
      .catch((error) => {
        console.error(error);
      });
    setLoading(false);
    setStat(true);
  }

  return (
    <div>
      <Nav />
      <form className="bg-book bg-cover w-full h-[300px] flex justify-center ">
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Book Name/Authors Name/ISBN..."
          className="rounded w-96 my-auto p-4 text-lg"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="rounded font-bold text-gray-900 cursor-pointer my-auto p-4 text-lg hover:bg-accent-focus bg-accent">
          Search
        </button>
      </form>
      {isEmpty ? (<h1 className="center text-4xl font-extrabold flex-col mt-[-50px]"> <span className="text-[150px]"><ImBooks/></span> Books will appear here!</h1>) : null}
      {stat ? (
        <div className="text-center text-xl font-bold my-2">
          <h1 className="">
            Showing results for{" "}
            <span className="font-extrabold italic text-accent">
              {" "}
              {query}{" "}
            </span>
          </h1>
          <p className="">
            Total{" "}
            <span className="font-extrabold italic text-accent">
              {" "}
              {results.length}{" "}
            </span>{" "}
            books found
          </p>
        </div>
      ) : (
        ""
      )}

      <div className="flex flex-wrap justify-around">
        {loading ? (
          <div>
            <div className="text-center text-lg font-bold mt-[40px] mb-[-50px] ">
              Keep patience! Great books are waiting for you to see...
            </div>

            <div className="center">
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
            </div>
          </div>
        ) : null}
        {results.map((results) => {
          return (
            <Result
              key={results.key}
              book_title={results.title}
              img={
                results.cover_i
                  ? `https://covers.openlibrary.org/b/id/${results.cover_i}-L.jpg`
                  : cover
              }
              author={results.author_name ? (
                results.author_name.length <= 2
                  ? results.author_name
                  : `${results.author_name[0]} ${results.author_name[1]} and others`) : "Not Available"
              }
              year={results.first_publish_year ? results.first_publish_year : "Not Available" }
              page={results.number_of_pages_median ? results.number_of_pages_median : "Not Available"}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
