import api from './api-config'

export const getOneUser = async (id) => {
  const resp = await api.get(`/users/${id}`);
  return resp.data;
};

export const post = async (foodData) => {
  const resp = await api.post('/users', { food: foodData });
  return resp.data;
};

export const putPost = async (id, foodData) => {
  const resp = await api.put(`/foods/${id}`, { food: foodData });
  return resp.data;
};

export const deletePost = async (id) => {
  const resp = await api.delete(`/foods/${id}`);
  return resp;
};
