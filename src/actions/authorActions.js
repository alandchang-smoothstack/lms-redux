
import axios from 'axios'

import {
    READ_AUTHORS_SUCCESSFUL,
    READ_AUTHORS_PENDING,
    READ_AUTHORS_FAILURE,
    RESET_AUTHOR_STATE
} from '../constants/actionTypes';

export const readAuthors = () => {
    return dispatch => {
        dispatch(_readAuthorsStarted());
        return axios.get(`http://www.mocky.io/v2/5e68f06a2f0000c276d8b12f`)
            .then(res => {
                dispatch(_readAuthorsSuccess(res));
            })
            .catch((error) => {
                console.log(error);
                dispatch(_readAuthorsFailed(error));
            });
    };
}

export const resetAuthorState = () => {
    return dispatch => {
        dispatch(_resetAuthorState());
    }
}

const _readAuthorsSuccess = (res) => {
    return {
        type: READ_AUTHORS_SUCCESSFUL,
        data: res.data
    };
}

const _readAuthorsFailed = (error) => {
    return {
        type: READ_AUTHORS_FAILURE,
        error
    };
}

const _readAuthorsStarted = () => {
    return {
        type: READ_AUTHORS_PENDING
    };
}

const _resetAuthorState = () => {
    return {
        type: RESET_AUTHOR_STATE
    };
}
