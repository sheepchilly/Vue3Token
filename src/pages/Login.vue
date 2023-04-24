<template>
  <div class="body">
    <div class="container">
        <div class="login-header">登   录</div>
        <div class="login-main">
            <div>用户名:<input type="text" placeholder="请输入用户名"/></div>
            <div>密 码:<input type="password" placeholder="请输入密码"/></div>
        </div>
        <div class="login-footer">
            <button>登录</button>
            <button>撤销</button>
        </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.body{
    width: 100vw;
    height: 100vh;
    background: whitesmoke;
    position: relative;
    .container{
        width: 500px;
        height: 300px;
        background: white;
        border: 2px solid #2C3E50;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        border-radius: 20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        .login-header{
            text-align: center;
            margin: 20px;
            font-size: 40px;
            font-weight: 600;
        }
        .login-main{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            input{
                width: 200px;
                height: 30px;
                margin-top: 10px;
                padding-left: 10px;
            }
            
        }
        .login-footer{
            margin: 30px;
            text-align: center;
            button{
                width: 100px;
                height: 30px;
                border: 1px solid #2C3E50;
                border-radius: 8px;
                background: #f1f3eb;
            }
            button:nth-child(1){
                background: #1067D1;
                color: white;
                margin-right: 30px;
            }
        }
    }
}

</style>