const routes = [
    {
        path:"/home",
        name:'home',
        component:()=>import('@/pages/Main.vue')
    },
    {
        path:'/users',
        name:'users',
        component:()=>import('@/pages/User.vue'),
        children:[
            {
                path:'userAdd',
                component:()=>import('@/pages/users/userAdd.vue')
            },
            {
                path:'userList',
                component:()=>import('@/pages/users/userList.vue')
            }
        ]
    },
    {
        path:"/",
        redirect:"/home"
    },
    {
        //用户瞎输入的话显示notFound页面
        //pathMatch是一个用来指定路由匹配策略的字符串。可选项有 prefix（默认值）和 full。
        path:'/:pathMatch(.*)*',
        name:"Notfound",
        component:()=>import('@/views/NotFound.vue')
    }
]

export default routes