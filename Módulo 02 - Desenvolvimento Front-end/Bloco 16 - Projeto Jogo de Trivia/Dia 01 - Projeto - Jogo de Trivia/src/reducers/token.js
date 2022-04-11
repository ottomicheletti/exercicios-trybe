import { SAVE_TOKEN } from '../actions';

const token = (state = null, action) => {
  switch (action.type) {
  case SAVE_TOKEN:
    return action.payload;
  default:
    return state;
  }
};

export default token;
