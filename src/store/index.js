import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state:{
        userName:"",
        isCollapse:false,
        isGetterRouter:false,
    },
    mutations:{
        GetUserName(state,value){
            state.userName = value
        },
        changeIsCollapse(state,value){
            state.isCollapse = !state.isCollapse
        },
        changeGetterRouter(state,value){
            state.isGetterRouter = value
          }
    },
    actions:{

    },
    plugins:[createPersistedState({
        paths:["userName"]
    })]
})