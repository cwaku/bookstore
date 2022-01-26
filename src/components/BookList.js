import { useSelector } from 'react-redux';

const BookList = (props) => {
  const books = useSelector((state) => state.booksReducer);
  return books.map((book) => (
    <li key={book.id}>
      <span>{book.title}</span>
      <span>{book.author}</span>
      <button type="button" onClick={() => props.removeBook(book.id)}>
        Remove
      </button>
    </li>
  ));
};

export default BookList;
