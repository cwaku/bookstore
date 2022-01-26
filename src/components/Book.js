import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBook, removeBook } from '../redux/books/books';
import BookList from './BookList';

const Books = function ShowBooks() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const submitBookToStore = () => {
    if (title === '' || author === '') {
      return;
    }

    const newBook = {
      id: uuidv4(),
      title,
      author,
    };

    dispatch(addBook(newBook));
  };

  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };

  // display books
  return (
    <main>
      <div className="books-container">
        <BookList removeBook={removeBookFromStore} />
        <form className="add-form">
          <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
          <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
          <button type="button" onClick={submitBookToStore}>Add Book</button>
        </form>
      </div>
    </main>
  );
};

export default Books;
