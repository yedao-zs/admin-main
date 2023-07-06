const dashboard: AuthRoute.Route = {
  name: 'dashboard',
  path: '/dashboard',
  component: 'basic',
  children: [
    {
      name: 'dashboard_analysis',
      path: '/dashboard/analysis',
      component: 'self',
      meta: {
        title: '分析页',
        requiresAuth: true,
        icon: 'icon-park:config',
        i18nTitle: 'message.routes.dashboard.analysis'
      }
    },
    {
      name: 'dashboard_workbench',
      path: '/dashboard/workbench',
      component: 'self',
      meta: {
        title: '工作台',
        requiresAuth: true,
        icon: 'icon-park:database-config',
        i18nTitle: 'message.routes.dashboard.workbench'
      }
    }
  ],
  meta: {
    title: '首页',
    icon: 'ep:platform',
    order: 1,
    i18nTitle: 'message.routes.dashboard._value'
  }
};

export default dashboard;
