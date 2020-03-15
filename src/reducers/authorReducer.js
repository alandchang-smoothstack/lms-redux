import {
  READ_AUTHORS_SUCCESSFUL,
  READ_AUTHORS_PENDING,
  READ_AUTHORS_FAILURE,
  RESET_AUTHOR_STATE
} from '../constants/actionTypes';

export default function authorReducer(state = {}, action) {
  switch (action.type) {
    case READ_AUTHORS_SUCCESSFUL:
      return { ...state, authorData: { ...state.authorData, authorStatus: { requestSuccessful: true }, authorList: action.data } };
    case READ_AUTHORS_PENDING:
      return { ...state, authorData: { ...state.authorData, authorStatus: { requestPending: true } } };
    case READ_AUTHORS_FAILURE:
      return { ...state, authorData: { ...state.authorData, authorStatus: { requestFailed: true } } };
    case RESET_AUTHOR_STATE:
      return { ...state, authorData: {} };
    default:
      return state;
  }
}
