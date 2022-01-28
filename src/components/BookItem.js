import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
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
  const percentage = Math.floor(Math.random() * 80);

  return (
    <div className="bookItem">
      <div className="bookItem__info">
        <div className="bookInfo">
          <span className="category">{category}</span>
          <h3 className="title">{title}</h3>
          <span className="author">Ricky Mormor</span>
        </div>
        <div className="bookItem__actions">
          <button type="button" className="bookItem_actions_BTN">
            Comments
          </button>
          <button
            type="button"
            className="bookItem_actions_BTN"
            onClick={removeBookFromStore}
          >
            Remove
          </button>
          <button type="button" className="bookItem_actions_BTN">
            Edit
          </button>
        </div>
      </div>
      <div className="Oval-2">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,
            strokeLinecap: 'butt',
            textSize: '16px',
            pathTransitionDuration: 0.5,
            pathColor: `rgba(2, 144, 255, ${percentage / 80})`,
            textColor: '#f88',
            trailColor: '#ebebeb',
            backgroundColor: '#0290ff',
          })}
          className="progress"
        />
        <div className="percentage">
          <p className="perc">{ `${Math.floor(Math.random() * 80)}%`}</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="book-hr" />
      <div className="Updates-Panel">
        <p className="currentChapter">CURRENT CHAPTER</p>
        <p className="ChapterNumber">Chapter 16</p>
        <button type="button" className="progressBtn">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

export default BookItem;
