import axios from 'axios';
import { FETCH_BIDDERS, FETCH_BIDDERS_SUCCESS } from './types';

export const fetchSortedBidders = (keyword, type) => async dispatch => {
  dispatch({ type: FETCH_BIDDERS });
  const res = await axios.post(`/bidding/evaluate/`, { keyword, type });
  dispatch({ type: FETCH_BIDDERS_SUCCESS, payload: res });
};
