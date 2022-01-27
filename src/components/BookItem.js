import { useDispatch } from 'react-redux';
import { removeBookAPI } from '../redux/books/books';

const BookItem = (book) => {
  const {
    // eslint-disable-next-line camelcase
    item_id, title, category,
  } = book;
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBookAPI(item_id));
  };
  return (
    <div className="bookItem">
      <h3>Title</h3>
      <span>{title}</span>
      <h3>Category</h3>
      <span>{category}</span>
      <button type="button" onClick={removeBookFromStore}>Remove</button>
    </div>
  );
};

export default BookItem;
