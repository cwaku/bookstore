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
      <div className="bookItem__info">
        <span>{category}</span>
        <h3>{title}</h3>
        <span>Author</span>
        <div className="bookItem__actions">
          <button type="button" className="bookItem_actions_BTN">Comments</button>
          <button type="button" className="bookItem_actions_BTN" onClick={removeBookFromStore}>Remove</button>
          <button type="button" className="bookItem_actions_BTN">Edit</button>
        </div>
      </div>
      <div className="Oval-2" />
      <div className="Updates-Panel">
        <p className="currentChapter">CURRENT CHAPTER</p>
        <p className="ChapterNumber">Chapter 16</p>
        <button type="button" className="progressBtn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default BookItem;
