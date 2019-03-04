const nextRoutes = require('next-routes');
const router = (module.exports = nextRoutes());

const routes = [
  {
    name: 'home',
    page: 'events',
    pattern: '/',
  },
  {
    name: 'events',
    page: 'events',
    pattern: '/events',
  },
];

routes.forEach((route) => {
  router.add(route.name, route.pattern, route.page);
});
