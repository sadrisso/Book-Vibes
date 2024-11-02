import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBooks = () => {
    return (
        <div>
            <h3 className='text-3xl font-bold font-mono my-5'>Book List</h3>
            <Tabs>
                <TabList>
                    <Tab>Books List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Books I Read</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Want To Read</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;