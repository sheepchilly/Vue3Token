<template>
  <el-header>
    <div class="iconLeft">
      <el-icon :size="20" @click="handleMenu"><Grid /></el-icon>
      <span>首页</span>
    </div>
    <div class="iconRight">
      <p>欢迎回来 {{ store.state.userName }}</p>

      <el-dropdown>
      <el-icon :size="20"><Avatar /></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="goUsers">个人中心</el-dropdown-item>
            <el-dropdown-item @click="logOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script setup>
import { ref } from "vue";
import { Grid, Avatar } from "@element-plus/icons-vue";
import { useStore } from "vuex";
import { useRoute,useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const store = useStore();

const handleMenu = () => {
  store.commit("changeIsCollapse");
};

const goUsers = ()=>{
  router.push('/users')
}
const logOut = ()=>{
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<style>
</style>