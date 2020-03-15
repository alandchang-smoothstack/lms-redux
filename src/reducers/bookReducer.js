import {
  CREATE_BOOK_SUCCESSFUL,
  CREATE_BOOK_PENDING,
  CREATE_BOOK_FAILURE,
  READ_BOOKS_SUCCESSFUL,
  READ_BOOKS_PENDING,
  READ_BOOKS_FAILURE,
  UPDATE_BOOK_SUCCESSFUL,
  UPDATE_BOOK_PENDING,
  UPDATE_BOOK_FAILURE,
  DELETE_BOOK_SUCCESSFUL,
  DELETE_BOOK_PENDING,
  DELETE_BOOK_FAILURE,
  RESET_BOOK_STATE
} from '../constants/actionTypes';

export default function bookReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_BOOK_SUCCESSFUL:
      return { ...state, bookData: { ...state.bookData, bookStatus: { requestSuccessful: true }, bookList: [...state.bookData.bookList, action.data] } };
    case CREATE_BOOK_PENDING:
      return { ...state, bookData: { ...state.bookData, bookStatus: { requestPending: true } } };
    case CREATE_BOOK_FAILURE:
      return { ...state, bookData: { ...state.bookData, bookStatus: { requestFailed: true } } };
    case READ_BOOKS_SUCCESSFUL:
      return { ...state, bookData: { ...state.bookData, bookStatus: { requestSuccessful: true }, bookList: action.data } };
    case READ_BOOKS_PENDING:
      return { ...state, bookData: { ...state.bookData, bookStatus: { requestPending: true } } };
    case READ_BOOKS_FAILURE:
      return { ...state, bookData: { ...state.bookData, bookStatus: { requestFailed: true } } };
    case UPDATE_BOOK_SUCCESSFUL: {
      let bookList = [...state.bookData.bookList];
      bookList[action.data.index] = action.data.book;
      return { ...state, bookData: { ...state.bookData, bookStatus: { requestSuccessful: true }, bookList: bookList } };
    }
    case UPDATE_BOOK_PENDING:
      return { ...state, bookData: { ...state.bookData, bookStatus: { requestPending: true } } };
    case UPDATE_BOOK_FAILURE:
      return { ...state, bookData: { ...state.bookData, bookStatus: { requestFailed: true } } };
    case DELETE_BOOK_SUCCESSFUL: {
      let bookList = [...state.bookData.bookList];
      bookList.splice(action.data.index, 1);
      return { ...state, bookData: { ...state.bookData, bookStatus: { requestSuccessful: true }, bookList: bookList } };
    }
    case DELETE_BOOK_PENDING:
      return { ...state, bookData: { ...state.bookData, bookStatus: { requestPending: true } } };
    case DELETE_BOOK_FAILURE:
      return { ...state, bookData: { ...state.bookData, bookStatus: { requestFailed: true } } };
    case RESET_BOOK_STATE:
      return { ...state, bookData: {} };
    default:
      return state;
  }
}
