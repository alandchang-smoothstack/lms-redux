"use strict"

import React from 'react';
import PropTypes from 'prop-types';

const AuthorRender = (props) => {
    function createAuthorRow(author) {
        return (
            <tr key={author.author_id}>
                <td> {author.author_id} </td>
                <td> {author.name} </td>
            </tr>
        );
    }

    let content = '';

    if (!props.authorData || !props.authorData.authorStatus || props.authorData.authorStatus.requestPending) {
        content = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }


    if (props.authorData && props.authorData.authorStatus && props.authorData.authorStatus.requestSuccessful) {
        content =
            (<table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.authorData.authorList.map((author, index) => createAuthorRow(author, index))}
                </tbody>
            </table>)
    }

    if (props.authorData && props.authorData.authorStatus && props.authorData.authorStatus.requestFailed) {
        content =
            (
                <div className="alert alert-danger" role="alert">
                    Error while loading authors!
                </div>
            )
    }

    return (
        <div>
            <h1>Authors</h1>
            {content}
        </div>
    );
}

AuthorRender.propTypes = {
    actions: PropTypes.object,
    authorData: PropTypes.object,
};

export default AuthorRender;
