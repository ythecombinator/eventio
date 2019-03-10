const nextRoutes = require('next-routes');
const router = (module.exports = nextRoutes());

const routes = [
  {
    name: 'dashboard',
    page: 'events',
    pattern: '/',
  },
  {
    name: 'events',
    page: 'events',
    pattern: '/events',
  },
  {
    name: 'sign-in',
    page: 'sign-in',
    pattern: '/sign-in',
  },
];

routes.forEach((route) => {
  router.add(route.name, route.pattern, route.page);
});
