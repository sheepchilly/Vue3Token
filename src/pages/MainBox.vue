<template>
  <div class="common-layout">
    <el-container>
      <Menu />

      <el-container direction="vertical">
        <Header />

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Menu from '@/components/Menu.vue'
import Header from '@/components/Header.vue'

</script>

<style lang="scss">
.common-layout{
  overflow: hidden;
  width:100vw;
  height: 100vh;
  .el-menu{
    border:0 !important;
  }
  .tac{
    .textTop{
      text-align: center;
      height: 50px;
      line-height: 50px;
      color: white;
      text-shadow: 5px 5px 5px black;
      font-size: 22px;
    }
     .el-menu{
      overflow: hidden;
      height: 100vh;
      .el-menu-item{
        width: 200px;
        text-align: center;
      }
    }
    .el-main{
    background: skyblue;
    height: calc(100vh - 60px);
  }
  }
  .el-header{
    width: 100%;
    background: orange;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
      display: flex;
      justify-content: center;
      align-items: center;
      p{
        margin-right: 10px;
      }
      .el-icon{
        margin-right: 20px;
      }
    }
  }
  
}
</style>