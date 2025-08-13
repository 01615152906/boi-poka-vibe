

import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredRedList } from '../../utility/addToDb';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { BsCheckLg } from "react-icons/bs";
import Book from '../Book/Book';
import { Helmet } from 'react-helmet';

const ListedBooks = () => {
  const [sort, setSort] = useState('');
    const [readList, setReadList] = useState([]);

  const allBooks = useLoaderData();

 useEffect (() =>{
const storedReadList = getStoredRedList();
const storedReadListInt = storedReadList.map(id => parseInt(id));


// worst way
console.log(allBooks, storedReadListInt,  storedReadList);

// 
// const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
setReadList(readBookList);

 },[]);


 const handleSort = sortType =>{
  setSort(sortType);

if(sortType === "Number of pages"){
  const sortedReadLis = [...readList].sort((a, b) => a.totalPages - b.totalPages);
  setReadList(sortedReadLis);
}
if(sortType === "Ratings"){
  const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
  setReadList(sortedReadList);
}

 }
    return (
        <div>
<Helmet>
  <title>
    Listed Books
  </title>
</Helmet>


           <h2 className='text-3xl my-12 text-center '> Books</h2> 



{/* <div className='my-12 text-center'>
            <button className="btn bg-[#23BE0A] mr-4 text-center text-white "> Sort By <BsCheckLg className='text-white ' />
</button>
</div> */}
<div className='my-12 text-center'>
     {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
{/* For TSX uncomment the commented types below */}
<button className="btn   bg-[#23BE0A] mr-4 text-center text-white" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
{
sort ? `sort by: ${sort}` : 'Sort by'
}
<BsCheckLg className='text-white ' />
</button>
</div>


<ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
  <li onClick={() => handleSort('Ratings')}><a>Rating</a></li>
  <li onClick={() => handleSort('Number of pages')}><a>Number of pages</a></li>
  <li onClick={() => handleSort('Publisher year')}><a>Publisher year</a></li>

</ul>
  
  <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <h2>Read Books:{readList.length}</h2>
      <h2>
        {
            readList.map(book => <Book key={book.bookId} book={book}></Book>)
        }
      </h2>
    </TabPanel>
    <TabPanel>
      <h2>Wishlist Books</h2>
    </TabPanel>
  </Tabs>

        </div>
    );
};

export default ListedBooks;


