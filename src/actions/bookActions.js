
import axios from 'axios'

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

export const createBook = (book) => {
    return dispatch => {
        dispatch(_createBookStarted());
        return axios.get(`http://www.mocky.io/v2/5e688bd22f00002e59d8ad48`)
            .then(() => {
                dispatch(_createBookSuccess({
                    data: {
                        book_id: Math.floor(new Date().getTime() / 1000),
                        title: book.title,
                        author: book.author
                    }
                }));
            })
            .catch((error) => {
                console.log(error);
                dispatch(_createBookFailed(error));
            });
    };
}

export const readBooks = () => {
    return dispatch => {
        dispatch(_readBooksStarted());
        return axios.get(`http://www.mocky.io/v2/5daca80c30000092002987ad`)
            .then(res => {
                dispatch(_readBooksSuccess(res));
            })
            .catch((error) => {
                console.log(error);
                dispatch(_readBooksFailed(error));
            });
    };
}

export const updateBook = (index, book) => {
    return dispatch => {
        dispatch(_updateBookStarted());
        return axios.get(`http://www.mocky.io/v2/5e6850fc2f00005900d8abb5`)
            .then(() => {
                dispatch(_updateBookSuccess({
                    data: {
                        index: index,
                        book: book
                    }
                }));
            })
            .catch((error) => {
                console.log(error);
                dispatch(_updateBookFailed(error));
            });
    };
}

export const deleteBook = (index) => {
    return dispatch => {
        dispatch(_deleteBookStarted());
        return axios.get(`http://www.mocky.io/v2/5e68517e2f00006500d8abb9`)
            .then(() => {
                dispatch(_deleteBookSuccess({
                    data: {
                        index: index
                    }
                }));
            })
            .catch((error) => {
                console.log(error);
                dispatch(_deleteBookFailed(error));
            });
    };
}

export const resetBookState = () => {
    return dispatch => {
        dispatch(_resetBookState());
    };
}

const _createBookSuccess = (res) => {
    return {
        type: CREATE_BOOK_SUCCESSFUL,
        data: res.data
    };
}

const _createBookFailed = (error) => {
    return {
        type: CREATE_BOOK_FAILURE,
        error
    };
}

const _createBookStarted = () => {
    return {
        type: CREATE_BOOK_PENDING
    };
}

const _readBooksSuccess = (res) => {
    return {
        type: READ_BOOKS_SUCCESSFUL,
        data: res.data
    };
}

const _readBooksFailed = (error) => {
    return {
        type: READ_BOOKS_FAILURE,
        error
    };
}

const _readBooksStarted = () => {
    return {
        type: READ_BOOKS_PENDING
    };
}

const _updateBookSuccess = (res) => {
    return {
        type: UPDATE_BOOK_SUCCESSFUL,
        data: res.data
    };
}

const _updateBookFailed = (error) => {
    return {
        type: UPDATE_BOOK_FAILURE,
        error
    };
}

const _updateBookStarted = () => {
    return {
        type: UPDATE_BOOK_PENDING
    };
}

const _deleteBookSuccess = (res) => {
    return {
        type: DELETE_BOOK_SUCCESSFUL,
        data: res.data
    };
}

const _deleteBookFailed = (error) => {
    return {
        type: DELETE_BOOK_FAILURE,
        error
    };
}

const _deleteBookStarted = () => {
    return {
        type: DELETE_BOOK_PENDING
    };
}

const _resetBookState = () => {
    return {
        type: RESET_BOOK_STATE
    };
}
