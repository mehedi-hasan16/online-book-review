import React, { useEffect, useState } from "react";
import { checkLS } from "../utilities/localStorage";
import ListedBookCard from "../ListedBookCard/ListedBookCard";
import { useLoaderData } from "react-router-dom";

const ListedBook = () => {
  const allBooks = useLoaderData();
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    setData(allBooks);
    handelLoadData('read', allBooks)
  }, [allBooks]);

  const handelLoadData = (name, books) => {
    const localStorageData = checkLS();
    const getLsData = localStorageData[name] || [];
    const arr = [];
    for (const id of getLsData ||[]) {
      const bookData = books.find((book) => book.bookId == id);
      if (bookData) {
        arr.push(bookData);
      }
    }
    setShowData(arr);
  };

 

  //   useEffect(() => {
  //     const localStorageData = checkLS();
  //     const getLsData = localStorageData.read;
  //     const arr = [];
  //     for (const id of getLsData) {
  //       const bookData = data.find((book) => book.bookId == id);
  //       if (bookData) {
  //         arr.push(bookData);
  //       }
  //     }
  //     setShowData(arr);

  // }, [data]);
 

  console.log(showData);

  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {showData.map((book) => (
            <ListedBookCard key={book.bookId} book={book}></ListedBookCard>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="WishList"
          onClick={()=>handelLoadData('wishlist', data)}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {showData.map((book) => (
            <ListedBookCard key={book.bookId} book={book}></ListedBookCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
