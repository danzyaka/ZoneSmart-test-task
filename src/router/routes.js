export default [
    {
        path: '/',
        name: 'Table',
        component: () => (
            import(
                /* webpackChunkName: "table" */ '@/views/Login'
            )
        ),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => (
            import(/* webpackChunkName: "login" */ '@/views/Login')
        ),
    },
];
