import React from "react";

const ListedBookCard = ({ book }) => {
  const {
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
    image,
  } = book;
  return (
    <div className="font-bold border mb-8 rounded-xl">
      <div className="hero bg-base-200 min-h-screen rounded-xl">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className='h-60' />
          <div>
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p className="py-6">By: {author}</p>
            <div className="flex space-x-4">
              <div className="flex space-x-3 text-green-500">Tag: {tags.map(e=><p key={e.bookId}>#{e}</p>)}</div>
              <div>Year of publishing: {yearOfPublishing}</div>
            </div>
            <div className="flex">
              <div>Publisher: {publisher}</div>
              <div>Pages: {totalPages}</div>
            </div>
            <div className="divider"></div>
            <div className="flex space-x-4">
              <p className="bg-blue-300 font-bold text-blue-600 p-3 rounded-full">Category: {category}</p>
              <p className="bg-yellow-300 font-bold text-yellow-600 p-3 rounded-full">Rating: {rating}</p>
              <p className="bg-green-500 text-white font-bold p-3 rounded-full">View Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
