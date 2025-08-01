import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {bookId, image, author, bookName, tags, category, rating} = book;
    return (
<Link to={`books/${bookId}`}>

<div className="card bg-base-100 w-96 shadow-sm p-6 ">
  <figure className='bg-blue-200 py-8 rounded-2xl'>
    <img
      src={
        image
      }
      className='h-[166px]'
      alt={
        bookName
      } />
  </figure>
  <div className="card-body">
<div className='flex  justify-center gap-4'>
        {
        tags.map((tag, index) => <button
        key={index}
         className="btn bg-green-200 text-[#23BE0A] font-bold border-0">{tag}</button>)
    }
</div>
   
    <h2 className="card-title">
     {
        bookName
     }
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{author}</p>
    <div className="border-t-2 border-dashed"></div>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div>
      
<div className="rating gap-2">
  {
    rating
  }
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="1 star" />
  
</div>

    </div>
  </div>
</div>

</Link>
    );
};

export default Book;