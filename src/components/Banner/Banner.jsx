import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-slate-200 rounded-xl p-10 grid grid-cols-3">
      <div className="col-span-2 my-auto">
        <h1 className="text-7xl font-bold">Books to freshen up <br /> your bookshelf</h1>
        <Link to='/listedBook'><button className="btn btn-lg bg-green-500 font-bold text-xl text-white mt-8">View the List</button></Link>
      </div>
      <div className="">
        <img className=""
          src="https://www.pinclipart.com/picdir/big/163-1639962_book-png-transparent-free-images-school-books-transparent.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
