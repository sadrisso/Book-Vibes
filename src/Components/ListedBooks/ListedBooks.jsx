import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredList } from '../../utilities/addToDb';

const ListedBooks = () => {

    const allBooks = useLoaderData();
    const [readLIst, setReadLIst] = useState([]);


    useEffect(() => {
        const storedList = getStoredList()
        const storedReadListInt = storedList.map((id) => parseInt(id))
        const readBookList = allBooks.filter((book) => storedReadListInt.includes(book.bookId));
        setReadLIst(readBookList);
    }, []);


    return (
        <div>
            <h3 className='text-3xl font-bold font-mono my-5'>Book List</h3>
            <Tabs>
                <TabList>
                    <Tab>Books List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-4xl'>Total Read Books : {readLIst.length}</h2>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-10 text-center'>
                        {readLIst.map((book, i) => <div key={i} className='border my-5 space-y-3 p-3 rounded-xl'>
                            <h2 className='text-xl font-bold'>{book.bookName}</h2>
                            <img src={book.image} alt="" className='w-[100px] h-[100px] mx-auto' />
                            <button className='btn btn-error btn-wide'>Delete</button>
                        </div>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Want To Read</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;