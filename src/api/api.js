import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'https://ghost.selectivepropertymanagement.com',
  key: 'ae2691e6b7f9bcefd97d8ab6f0',
  version: 'v3'
});

export const fetchPosts = async () => {
  return await api.pages.browse({});
}


export default api;
