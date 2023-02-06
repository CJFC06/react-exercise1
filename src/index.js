//Call all functions inside services and log updated value/s
import { updateUser, getAllUsers, addUser, users } from "./services/users";
// import {getCommentById} from "./services/comments.js"
import {
  getPosts,
  getPostsByUser,
  updatePostTitle,
  getPostById,
  updatePostBody,
  deletePostBy,
  deletePostsByUserId,
  addPost,
  posts,
} from "./services/posts";

import { generateId } from "./utils";

import {
  addComment,
  deleteCommentById,
  getCommentById,
  getComments,
  getCommentsByPostId,
  updateCommentBody,
  comments,
} from "./services/comments";

//ANSWERS!
// updateUser(1, { email: "roger@77.com", website: "hilde-edit.org" });
// console.log(getAllUsers());
// console.log(getAllUsers());
// console.log(getPosts())
// console.log(getPostsByUser(4))
// updatePostTitle(4, { title: "Rowell" });
// console.log(getPostById(5))
// updatePostBody(4, { body: "Update Body" });
// updatePostBody(4, { title: "update", body: "Update " });
// deletePostBy(4)
// deletePostsByUserId(4)
// addPost({
//   userId: generateId(posts),
//   id: generateId(posts),
//   title: "Adding title",
//   body: "Adding body ",
// });
// addUser({
//   id: generateId(users),
//   name: "Rowell Esguerra",
//   username: "CJFC06",
//   email: "rowell@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496",
//     },
//   },
// });
// console.log(getCommentById(1));
// console.log(getCommentsByPostId(100))
// updateCommentBody(4, { body: "Update Body" });
// deleteCommentById(1)
// addComment({
//     postId: generateId(comments),
//     id: generateId(comments),
//     name: "Rowell",
//     email: "Rowell@mandy.co.uk",
//     body: "ShaKe shake",
//     });

// console.log(getComments());
// console.log(getPosts());
// console.log(getAllUsers());
