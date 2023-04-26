<template>
  <el-aside width="auto">
        <el-row class="tac">
        <el-col>
      <el-menu
        :collapse="store.state.isCollapse"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        text-color="#fff"
        :router="true"
        :default-active="route.fullPath"
      >
      <h1 class="textTop">鉴权DEMO</h1>
      <el-menu-item index="/home">
          <el-icon><icon-menu /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/users">
          <el-icon><Edit /></el-icon>
          <span>个人中心</span>
        </el-menu-item>
        <el-sub-menu index="/user">
          <template #title>
            <el-icon><location /></el-icon>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/users/userAdd">添加用户</el-menu-item>
            <el-menu-item index="/users/userList">用户列表</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-col>
    </el-row>
      </el-aside>
</template>

<script setup>
import {
  Menu as IconMenu,
  Location,
  Grid,
  Avatar,
  Edit
} from '@element-plus/icons-vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
const route = useRoute()
const store = useStore()

const handleMenu = ()=>{
  store.commit('changeIsCollapse')
}
</script>

<style lang="scss" scoped>
.el-menu{
  .textTop{
      overflow: hidden;
  }
}
</style>

