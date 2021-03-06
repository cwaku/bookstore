import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBookAPI } from '../redux/books/books';
import BookList from './BookList';

const Books = function ShowBooks() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const submitBookToStore = () => {
    if (title === '' || category === '') {
      return;
    }

    const newBook = {
      item_id: uuidv4(),
      title,
      category,
    };

    dispatch(addBookAPI(newBook));
  };

  // display books
  return (
    <main>
      <div className="books-container">
        <BookList />
      </div>
      <div className="hr" />
      <form className="add-form">
        <h2 className="addBookHeader">ADD NEW BOOK</h2>
        <div className="inputs">
          <input type="text" placeholder="Title" className="setTitle" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" placeholder="Category" className="setCategory" value={category} onChange={(e) => setCategory(e.target.value)} />
          <button type="button" className="addBookBTN" onClick={submitBookToStore}>Add Book</button>
        </div>
      </form>
    </main>
  );
};

export default Books;
