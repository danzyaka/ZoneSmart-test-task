export default [
    {
        path: '/',
        name: 'Table',
        component: () => (
            import(
                /* webpackChunkName: "table" */ '@/views/Table.vue'
            )
        ),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => (
            import(/* webpackChunkName: "login" */ '@/views/Login.vue')
        ),
    },
];
