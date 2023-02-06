import { comments as data } from "../data/comments";

//private
let comments = [...data];


export function getComments() {
  return [...comments];
}
export function getCommentById(id) {
  return comments.find((comments) => comments.id === id);
}

export function getCommentsByPostId(postId) {
  return comments.find((comments) => comments.postId === postId);  
}

export function updateCommentBody(id, body) {
  comments = comments.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        ...body,
      };
    }

    return user;
  });
}

export function deleteCommentById(id) {
  comments = comments.filter(comment => comment.id !== id)
  return comments;
}

export function addComment(comment) {
  comments.push(comment)
}
