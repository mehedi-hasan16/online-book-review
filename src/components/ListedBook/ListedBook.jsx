import React, { useEffect, useState } from "react";
import { checkLS } from "../utilities/localStorage";
import ListedBookCard from "../ListedBookCard/ListedBookCard";
import { useLoaderData } from "react-router-dom";

const ListedBook = () => {
    const allBooks = useLoaderData();
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState([]);
console.log(showData);
  useEffect(() => {
    setData(allBooks);
    const localStorageData = checkLS();
    const readId= localStorageData.read;
    const arr=[]
    for( const id of readId){
        const bookData = data.find(book=>book.bookId== id);
        console.log(bookData);
        if(bookData){

            arr.push(bookData);
        }
    }
    setShowData(arr)
    // setWishList(...wishlist, localStorageData.wishlist || []);
   console.log(arr);
  }, [allBooks]);

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
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {/* {wishlist.map((book) => (
            <ListedBookCard key={book.bookId} book={book}></ListedBookCard>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
