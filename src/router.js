import page from "page";

const router = {
  routes: {},
  get: (path, handler) => {
    router.routes[path] = { method: 'GET', handler };
  },
  post: (path, handler) => {
    router.routes[path] = { method: 'POST', handler };
  },
  put: (path, handler) => {
    router.routes[path] = { method: 'PUT', handler };
  },
  delete: (path, handler) => {
    router.routes[path] = { method: 'DELETE', handler };
  },
  run: () => {
    page();
  },
  validateParams: (route, params) => {
    // Implementation goes here
  },
  add: (path, method, handler) => {
    router.routes[path] = { method, handler };
  }
};


export default router;
