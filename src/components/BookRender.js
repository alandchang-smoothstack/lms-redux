"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import MicroModal from 'react-micro-modal';

const BookRender = (props) => {
    function createBookRow(book, index) {
        return (
            <tr key={book.book_id}>
                <td> {book.book_id} </td>
                <td> {book.title} </td>
                <td> {book.author} </td>
                <td>
                    <MicroModal trigger={handleOpen => <button type="button" className='btn btn-primary' onClick={handleOpen}>Update</button>}>
                        {handleClose => (
                            <div>
                                <div><span>Title</span></div>
                                <div><input type="text" /></div>
                                <div><span>Author</span></div>
                                <div><input type="text" /></div>
                                <div><button className='btn btn-primary' onClick={(event) => {
                                    props.actions.updateBook(index, {
                                        book_id: book.book_id,
                                        title: event.target.parentElement.parentElement.children[1].firstChild.value,
                                        author: event.target.parentElement.parentElement.children[3].firstChild.value
                                    });
                                    handleClose();
                                }}>Update</button></div>
                            </div>
                        )}
                    </MicroModal>
                </td>
                <td><button type="button" className='btn' onClick={() => props.actions.deleteBook(index)}>✕</button></td>
            </tr>
        );
    }

    let content = '';

    if (!props.bookData || !props.bookData.bookStatus || props.bookData.bookStatus.requestPending) {
        content = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }


    if (props.bookData && props.bookData.bookStatus && props.bookData.bookStatus.requestSuccessful) {
        content =
            (<div>
                <div><MicroModal trigger={handleOpen => <button type="button" className='btn btn-primary' onClick={handleOpen}>Create</button>}>
                    {handleClose => (
                        <div>
                            <div><span>Title</span></div>
                            <div><input type="text" /></div>
                            <div><span>Author</span></div>
                            <div><input type="text" /></div>
                            <div><button className='btn btn-primary' onClick={(event) => {
                                props.actions.createBook({
                                    title: event.target.parentElement.parentElement.children[1].firstChild.value,
                                    author: event.target.parentElement.parentElement.children[3].firstChild.value
                                });
                                handleClose();
                            }}>Create</button></div>
                        </div>
                    )}
                </MicroModal></div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.bookData.bookList.map((book, index) => createBookRow(book, index))}
                    </tbody>
                </table>
            </div>)
    }

    if (props.bookData && props.bookData.bookStatus && props.bookData.bookStatus.requestFailed) {
        content =
            (
                <div className="alert alert-danger" role="alert">
                    Error while loading books!
                </div>
            )
    }

    return (
        <div>
            <h1>Books</h1>
            {content}
        </div>
    );
}

BookRender.propTypes = {
    actions: PropTypes.object,
    bookData: PropTypes.object
};

export default BookRender;
