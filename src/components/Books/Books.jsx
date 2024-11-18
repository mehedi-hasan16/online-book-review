import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';

const Books = () => {

    const [books, setBooks]= useState([]);


    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])


    return (
        <div>
           <h1 className='text-5xl font-bold text-center mt-10'>Books</h1>
           <div className='grid grid-cols-3 gap5'>
                {
                    books.map(book=><BookCard key={book.id} book={book}></BookCard>)
                }
           </div>
        </div>
    );
};

export default Books;