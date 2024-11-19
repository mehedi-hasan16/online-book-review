import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToLS, checkLS } from "../utilities/localStorage";
import toast, { Toaster } from 'react-hot-toast';

const BookDetails = () => {
  const [read, setRead] = useState([]);
  const [wishlist, setWishList] = useState([]);
  const bookData = useLoaderData();
  const id = useParams();

  const singleBook = bookData.find((book) => book.bookId == id.id);


  const {
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    bookId,
    image,
  } = singleBook;

  const handleWishListBtn = (id) => {
    const checkWishList = wishlist.find((book) => book == id);
    if (checkWishList) {
      return toast.error("Already in wishlist");
    } else {
      const checkReadList = read.find((book) => book == id);
      if (checkReadList) {
        return toast.error("Already read the book");
      }
      setWishList([...wishlist, id]);
      addToLS('wishlist', id);
      toast.success('Successfully Added to Wishlist')
    }
  };

  const handleReadBtn = (id) => {
    // const checkRead = read.find((book) => book == id);
    // console.log(checkRead);
    if (read.includes(id)) {
     
      return toast.error("Already Read the book");
    }
    const updateRead = [...read, id];
    setRead(updateRead);
    addToLS('read', id);
    toast.success('Successfully Added to Read');
  };

  useEffect(()=>{
    const localStorageData = checkLS()
    setRead(...read, localStorageData.read || [])
    setWishList(...wishlist, localStorageData.wishlist||[])
  },[])

  return (
    <div className="font-semibold">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">{bookName}</h1>
            <p>By: {author}</p>
            <div className="divider"></div>
            <p>{category}</p>
            <div className="divider"></div>

            <p className="py-6 text-black">
              Review: <span className="text-slate-500">{review}</span>
            </p>
            <p>
              <span className="text-black font-bold">Tag: </span>{" "}
              {tags.map((e, idx) => (
                <span
                  key={idx}
                  className="text-green-500 bg-slate-200 font-semibold mr-1 mb-1 p-1 rounded"
                >
                  #{e}
                </span>
              ))}
            </p>
            <div className="divider"></div>
            <p className="my-5">
              <span className="text-slate-500">Number of Pages: </span>{" "}
              {totalPages}
            </p>
            <p className="my-5">
              <span className="text-slate-500">Number of Pages: </span>{" "}
              {publisher}
            </p>
            <p>
              <span className="text-slate-500">Year of Publishing: </span>
              {yearOfPublishing}
            </p>
            <p className="my-5">
              <span className="text-slate-500">Rating: </span>
              {rating}
            </p>
            <button
              onClick={() => handleReadBtn(bookId)}
              className="btn btn-outline mr-5"
            >
              Read
            </button>
            <button
              onClick={() => handleWishListBtn(bookId)}
              className="btn btn-accent"
            >
              Wishlist
            </button>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
