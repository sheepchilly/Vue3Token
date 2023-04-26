# 1.前台

## 1.登录鉴权

### 1.Login登录页面

1.一点击登录就要向后端发请求获取token

2.怎么样一上来就让用户去登陆页面？**鉴权** 用全局路由守卫来判断当前该用户有没有token，有就让他去home页面，没有就在login页面 

3.怎么样获取后端返回的存在header中的token？ **封装axios** 用拦截器去获取

> 响应拦截器中response可以获得后端返回的响应头，用localstorage.setItem存在本地即可，用户点击退出登录的时候用removeItem删掉token

```js
axios.interceptors.response.use(function (response) {
    const {authorization} = response.headers
    localStorage.setItem('token',authorization)
    
    return response;
  }, function (error) {
    return Promise.reject(error);
  });
```

4.发请求的时候在axios的请求拦截器中配置上token

```js
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    config.headers.authorization = `Berear ${token}`

    return config;
  }, function (error) {
    return Promise.reject(error);
  });
```



## 2.home首页

1.首页是mainbox，需要动态生成侧边栏的子路由

2.首先用hasRoute判断/mainbox路由是否存在，如果不存在就addRoute({})添加

3.遍历路由数组，将每一项添加到mainbox路由中

4.**问题：**前置导航守卫导致路由重定向死循环



# 2.后台

## 1.express框架

1.用express生成server服务器，首先需要在cmd中 express 项目名，然后npm i 安装所需要的依赖

2.下载mongoose数据库 npm i mongoose，然后使用 => const mongoose = requrie('mongoose') => 生成数据模型 const Schema = mongoose.Schema()

3.数据库链接 mongoose.connect('mongodb://127.0.0.1:27017/token-server')

## 2.不使用express框架

1.初始化文件 => npm init     |       安装所需要的依赖 =>  npm i

2.下载express => npm i express --save

3.自动监听的插件 => npm i nodemon --save

4.安装mongoose => npm i mongoose --save

- 连接数据库 => mongoose.connect('mongodb://127.0.0.1:27017/RUNSchool')
- 创建Schema集合 => const OrderReceiveSchema = new mongoose.Schema({}
- 创建数据模型 => const OrderReceive = mongoose.model('OrderReceive',OrderReceiveSchema);
- 

## 3.编写数据库模型

1.新建文件夹（刚初始化的项目文件夹下面只有package.json和node_modules），其他文件夹需要你自己新建，新建 data 文件夹，在其下新建data.js文件用于生成数据库模型

2.在index中导入数据库模型并配置中间件和接口信息

> app.use(express.urlencoded({ extended: true }))  ：当请求携带的参数类型为 x-www-form-urlencoded 时，我们可以使用 `express.urlencoded()` 进行解析，extended为true时，node会调用qs库函数来解析

> app.use(express.json()) ：解析JSON格式的数据

> app.use(express.static(__dirname)) ：所有人都可以访问服务器的静态资源，dirname的意思是把当前文件所在的文件夹设为静态文件目录

## 4.登录页面鉴权

1.根据前端返回的请求体数据，查询数据库是否有该用户，如果返回的结果的长度为0就说明不存在，给前端返回对应信息。否则就走else的分支，生成时长为一天的token，并把token设置在请求头中 => res.header("Authorization",token)

2.判断用户的token是否过期，如果过期了就要让用户重新登录
