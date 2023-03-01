import page from "page";

const router = {
    get: (path, handler) => {
      page(path, handler);
    },
    post: (path, handler) => {
      page(path, { method: 'POST' }, handler);
    },
    put: (path, handler) => {
      page(path, { method: 'PUT' }, handler);
    },
    delete: (path, handler) => {
      page(path, { method: 'DELETE' }, handler);
    },
    run: () => {
      page();
    }
  };
  
  module.exports = router;