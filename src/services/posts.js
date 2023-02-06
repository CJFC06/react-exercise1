import { posts as data } from "../data/posts";

//private
let posts = [...data];

export function getPosts() {
  return [...posts];
}

export function getPostsByUser(userId) {
  return posts.find((posts) => posts.userId === userId);
}

export function getPostById(id) {
  return posts.find((posts) => posts.id === id);
}

export function addPost(post) {
 posts.unshift(post)
}

export function updatePostTitle(id, title) {
  posts = posts.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        ...title,
      };
    }

    return user;
  });
}

export function updatePostBody(id, body) {
  posts = posts.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        ...body,
      };
    }

    return user;
  });
}

export function updatePost(id, post) {
  posts = posts.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        ...post,
      };
    }

    return user;
  });
}

export function deletePostBy(id) {
  posts = posts.filter(posts => posts.id !== id)
  return posts;
}

export function deletePostsByUserId(userId) {
  posts = posts.filter(posts => posts.userId !== userId)
  return posts;
}
