import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;
  return (
    <div>
      <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl h-full flex flex-col">
        <figure>
          <img
            src={image}
            alt={bookName}
            className="h-96 w-full object-cover"
          />
        </figure>
        <div className="card-body flex-grow">
          <div className="flex gap-3 justify-center items-center">
            {tags.map((e, idx) => (
              <p
                key={idx}
                className="text-green-500 bg-slate-100 font-semibold p-2 rounded"
              >
                #{e}
              </p>
            ))}
          </div>
          <h2 className="card-title font-bold text-2xl">{bookName}</h2>
          <p className="font-bold">By: {author}</p>
          <div>
            <div className="divider"></div>
            <div className="flex justify-between font-bold">
              <div>{category}</div>
              <div>{rating}</div>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default BookCard;
