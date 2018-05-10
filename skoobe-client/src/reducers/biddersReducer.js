import { FETCH_BIDDERS, FETCH_BIDDERS_SUCCESS } from '../actions/types';

const initialState = {
  loading: false,
  bidders: []
};

export default function(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_BIDDERS:
      return {
        ...state,
        loading: true
      };
    case FETCH_BIDDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        bidders: action.payload.data
      };
    default:
      return state;
  }
}
