"use strict"

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authorActions from '../actions/authorActions';
import AuthorRender from './AuthorRender';

const AuthorContainer = (props) => {
    useEffect(() => {
        const { actions } = props;
        actions.readAuthors();
        return () => {
            actions.resetAuthorState();
        }
    }, []);
    return (
        <div>
            <AuthorRender {...props} />
        </div>
    );
}

function mapStateToProps(state) {
    return {
        authorData: state.authorReducer.authorData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authorActions, dispatch)
    }
}

AuthorContainer.propTypes = {
    actions: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorContainer);
