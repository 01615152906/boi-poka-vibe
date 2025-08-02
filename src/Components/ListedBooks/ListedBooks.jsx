

import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredRedList } from '../../utility/addToDb';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { BsCheckLg } from "react-icons/bs";
import Book from '../Book/Book';

const ListedBooks = () => {
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
    return (
        <div>
           <h2 className='text-3xl my-12 text-center '> Books</h2> 



<div className='my-12 text-center'>
            <button className="btn bg-[#23BE0A] mr-4 text-center text-white "> Sort By <BsCheckLg className='text-white ' />
</button>
</div>

   
  
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


