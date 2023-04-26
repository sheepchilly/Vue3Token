import {createRouter, createWebHashHistory} from 'vue-router'
import RoutesConfig from '@/router/config'
import store from '../store/index'

const routes = [
    {
        path:"/login",
        name:'login',
        component:()=>import("@/pages/Login.vue")
    },
    {
        path:'/mainbox',
        name:'mainbox',
        component:()=>import("@/pages/MainBox.vue")
    }
    
]

const router = createRouter({
    history:createWebHashHistory(),
    routes

})

router.beforeEach((to,from,next)=>{
    if(to.name === 'login'){
        next()
    }else{
        if(!localStorage.getItem('token')){
            next({path:'/login'})
        }else{
            //如果没有配置过路由，就动态添加路由，否则直接放行
            //（一定要走这个判断，不然每次切路由的时候都会重新add一遍）
            if(!store.state.isGetterRouter){
                //配置子路由
                ConfigRouter()
                //放行让他走，并且把未来要去的路径让他重新走一下，光next()不行，要传路径
                next({
                    path:to.fullPath
                })
            }else{
                next()
            }
        }
    }
})

//动态创建路由
const ConfigRouter = ()=>{
    RoutesConfig.forEach(item=>{
        router.addRoute('mainbox',item)
    })
    store.commit('changeGetterRouter',true)
}


export default router