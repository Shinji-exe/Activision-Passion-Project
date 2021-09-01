import api from './api-config';

export const getAllComments = async () => {
  const resp = await api.get('/comments');
  return resp.data;
};

export const getOneComment = async (id) => {
  const resp = await api.get(`/comments/${id}`);
  return resp.data;
};

export const postComment = async (commentData) => {
  const resp = await api.post('/comments', { comment: commentData });
  return resp.data;
};

export const putComment = async (id, commentData) => {
  const resp = await api.put(`/comments/${id}`, { comment: commentData });
  return resp.data;
};

export const deleteComment = async (id) => {
  const resp = await api.delete(`/comments/${id}`);
  return resp;
};


export const addCommentToPost = async (postId, commentId) => {
    const resp = await api.get(`/posts/${postId}/comments/${commentId}`)
    return resp.data
}