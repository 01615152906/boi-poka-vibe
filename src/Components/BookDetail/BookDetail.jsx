import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredRedList } from '../../utility/addToDb';

const BookDetail = () => {
//     const{ bookId } = useParams();
//     // const id = parseInt (bookId);

//     const data = useLoaderData();
// const id = parseInt(bookId);
//     // const book = data.find(book => book.bookId === id);
//     // console.log(book);
//     // const book = data.find(book => book.bookId === bookId);
//     // const book = data.find(book => book.bookId === id);
//     // console.log(book);
//     // console.log(book, data, bookId)

//     // console.log(data);
    
//     // console.log(bookId);
// // const id = parseInt(bookId);
// // // console.log(typeof bookId, typeof id, typeof data[0].bookId)
// const book = data.find(book => book.bookId === id);
// console.log(book);


  const { bookId } = useParams();      
  const data = useLoaderData();        

  const id = parseInt(bookId); 

  const book = data.find(book => book.bookId === id);
  
  console.log("bookId (string):", bookId);
  console.log("id (number):", id);
  console.log("data from loader:", data);
  console.log(book);

const {bookId: currentBookId, image, bookName, category, yearOfPublishing, totalPages, tags, publisher, author, rating} = book;



const handleMarAsRead = (id) =>{
  
/***
 * 1. underStand what to store or save : => bookId
 * 2. where to store: database
 * 3. array, list, colection:
 * 4. check : if the book is alReady in the readlist .
 * 5. if not , then add the book to the list 
 * 6. if yes , do not add the book 
 * 
 * 
 * 
 * */ 

addToStoredRedList(id);

}
    return (
        <div className='my-12 space-y-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center '>
<div>
             <h2>Book details {bookId} </h2> 
            
           <img className='w-36' src={image} alt="" />
</div>
<div>
  <h1 className='text-5xl font-bold'>The Catcher in the Rye</h1>
<h2 className='text-3xl'>{bookName}</h2>
  <h3 className='text-2xl'>by: {author}</h3>
   <h3>{category}</h3>
   <p><span>Review :</span> Sit amet consectetur. Interdum porta pulvinar non sit aliquam. Aenean pulvinar blandit vel non enim elementum penatibus pellentesque ac. Nec accumsan euismod nulla adipiscing lectus. Morbi elementum a auctor erat diam tellus. Fermentum faucibus nulla enim ornare.
Id neque neque pretium enim platea urna non dictum. Faucibus dignissim ridiculus nibh tristique massa non. </p>

<div className='flex gap-4'>
  <p className='text-3xl'>Tag : </p>
        {
        tags.map((tag, index) => <button
        key={index}
         className="btn bg-green-200 text-[#23BE0A] font-bold border-0">{tag}</button>)
    }

</div>

<div className='flex gap-12'>
  <div>
    <ol>
      <li><a href="">Number of Pages:</a></li>
      <li><a href="">Publisher:</a></li>
      <li><a href="">Year of Publishing:</a></li>
      <li><a href="">Rating:</a></li>
    </ol>
  </div>
    <div>
    <ul>
      <li><a href="">{totalPages}</a></li>
      <li><a href="">{publisher}</a></li>
      <li><a href="">{yearOfPublishing}</a></li>
      <li><a href="">{rating}</a></li>
    </ul>
  </div>
</div>

        <button onClick={ () =>  handleMarAsRead (bookId) } className="btn btn-accent btn-outline mr-4"> Mark as Read</button>
 <button className="btn btn-accent btn-outline mr-4 "> Add to Wishlist</button>
</div>
        </div>
    );
};

export default BookDetail;