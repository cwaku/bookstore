/* eslint-disable camelcase */
import axios from 'axios';

// Constants:
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

// initializes state
const initialState = [];

// action creators
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBooks = (payload) => ({
  type: GET_BOOKS,
  payload,
});

export const createStoreAPI = () => {
  axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/')
    .then((response) => response.data);
};

export const fetchBooks = () => async (dispatch) => {
  const books = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/bw6bJP6J7bXVfjB5iYY0/books');
  const data = await books.json();
  const displayBooks = Object.entries(data).map(([item_id, book]) => {
    const { category, title } = book[0];
    return {
      item_id,
      category,
      title,
    };
  });
  dispatch(getBooks(displayBooks));
};

export const removeBookAPI = (payload) => async (dispatch) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/bw6bJP6J7bXVfjB5iYY0/books/${payload}`);
  dispatch(removeBook(payload));
};

export const addBookAPI = (payload) => async (dispatch) => {
  await axios
    .post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/bw6bJP6J7bXVfjB5iYY0/books', payload);
  dispatch(addBook(payload));
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case GET_BOOKS:
      return action.payload;
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
