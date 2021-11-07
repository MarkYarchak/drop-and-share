import { store } from '../../db/index';

export default (req, res) => {
  if (req.method === 'POST') {
    store.content = req.body.data;
    return { data: req.body.data };
  } else {
    res.statusCode = 404;
    res.end('Failed to fetch');
  };
};
