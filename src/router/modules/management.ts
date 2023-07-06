const management: AuthRoute.Route = {
  name: 'management',
  path: '/management',
  component: 'basic',
  children: [
    {
      name: 'management_auth',
      path: '/management/auth',
      component: 'self',
      meta: {
        title: '权限管理',
        i18nTitle: 'message.routes.management.auth',
        requiresAuth: true,
        icon: 'ic:baseline-security',
        hide: true
      }
    },
    {
      name: 'management_role',
      path: '/management/role',
      component: 'self',
      meta: {
        title: '角色管理',
        i18nTitle: 'message.routes.management.role',
        requiresAuth: true,
        icon: 'carbon:user-role'
      }
    },
    {
      name: 'management_user',
      path: '/management/user',
      component: 'self',
      meta: {
        title: '用户管理',
        i18nTitle: 'message.routes.management.user',
        requiresAuth: true,
        icon: 'ic:round-manage-accounts'
      }
    },
    {
      name: 'management_route',
      path: '/management/route',
      component: 'self',
      meta: {
        title: '路由管理',
        i18nTitle: 'message.routes.management.route',
        requiresAuth: true,
        hide: true,
        icon: 'material-symbols:route'
      }
    }
  ],
  meta: {
    title: '平台管理',
    i18nTitle: 'message.routes.management._value',
    icon: 'arcticons:aliucord-manager',
    order: 9
  }
};

export default management;
