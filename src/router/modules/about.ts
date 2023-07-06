const about1: AuthRoute.Route = {
  name: 'about',
  path: '/about',
  component: 'self',
  meta: {
    title: '平台介绍',
    i18nTitle: 'message.routes.about',
    requiresAuth: true,
    keepAlive: true,
    singleLayout: 'basic',
    permissions: ['super', 'admin', 'user'],
    icon: 'gg:website',
    // hide: true,
    order: 10
  }
};

export default about1;
