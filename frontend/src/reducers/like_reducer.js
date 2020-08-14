import {
  RECEIVE_DOG_COUNT,
  RECEIVE_LIKE,
  RECEIVE_LIKES,
} from "../actions/like_action";

const likeReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIKES:
      let obj = {};
      action.likes.data.forEach((like) => {
        obj[like._id] = like;
        // Object.assign(obj, { [dog._id]: dog });
      });
      return obj;
    case RECEIVE_DOG_COUNT:
      return action.count;
    case RECEIVE_LIKE:
      return action.like.data;
    default:
      return state;
  }
};

export default likeReducer;
