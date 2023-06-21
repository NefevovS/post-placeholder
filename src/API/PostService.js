import axios from "axios";

export class PostService {
  static async getPosts(page = 1, limit = 10) {
    return await axios
      .get("https://jsonplaceholder.typicode.com/posts/", {
        params: {
          _page: page,
          _limit: limit,
        },
      })
      .then((response) => ({ response }))
      .catch((error) => ({ error }));
  }
  static async getCommentsByPostId(id) {
    return await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => ({ response }))
      .catch((error) => ({ error }));
  }
  static async getUserById(id) {
    return await axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => ({ response }))
        .catch((error) => ({ error }));
  }
  static async getPostsByUserId(id) {
    return await axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then((response) => ({ response }))
        .catch((error) => ({ error }));
  }
}
