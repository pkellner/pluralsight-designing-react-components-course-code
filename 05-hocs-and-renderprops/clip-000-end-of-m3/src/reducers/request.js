import {
  GET_ALL_SUCCESS,
  GET_ALL_FAILURE,
  PUT_SUCCESS,
  PUT_FAILURE,
} from '../actions/request';

export const REQUEST_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const requestReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_SUCCESS: {
      return {
        ...state,
        records: action.records,
        status: REQUEST_STATUS.SUCCESS,
      };
    }
    case GET_ALL_FAILURE: {
      return {
        ...state,
        status: REQUEST_STATUS.ERROR,
        error: action.error,
      };
    }
    case PUT_SUCCESS:
      const { records } = state;
      const { record } = action;
      const recordIndex = records.map((rec) => rec.id).indexOf(record.id);
      return {
        ...state,
        records: [
          ...records.slice(0, recordIndex),
          record,
          ...records.slice(recordIndex + 1),
        ],
      };
    case PUT_FAILURE:
      console.log(
        'PUT_FAILURE: Currently just logging to console without refreshing records list',
      );
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
export default requestReducer;
