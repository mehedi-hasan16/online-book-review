import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;
  return (
    <div>
      <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <div>
            {tags.map((e, idx) => (
              <span
                key={idx}
                className="text-green-500 bg-slate-200 font-semibold mr-1 mb-1 p-1 rounded"
              >
                {e}
              </span>
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
