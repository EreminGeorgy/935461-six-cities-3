import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.COMMENTS;

export const getCommentState = (state) => {
  return state[NAME_SPACE].commentsOperationStatus;
};

