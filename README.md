### 简介

使用 nest 框架搭建 restFul 接口，框架优点如下：

1. 支持 typescript 编写（极大的优点）
2. 采用 AOP 架构，与 java 主流 SPring 一致
3. typeORM 支持使用 typescript 编写，功能与 Sequlize 差不多

#### 使用

```shell
yarn

// 测试环境启动
yarn start

// 开发模式启动，修改代码自动重启
yarn run start:dev
```

#### demo 更新进度

1. 完成 cat 接口的所有功能
   1. 参数校验
   2. 获取全部 cat
   3. 添加 cat
2. 使用中间件添加路由请求和返回日志，内容包括如下：
   1. 请求的路径，方法和参数
   2. 返回的状态值和结果
3. orm 功能加入，实现一般的 CURD 操作
4. 完成自定义异常过滤器
5. 将 app.module.ts 中的数据库连接配置，转移到根目录下的 ormconfig.json
   1. entities 中的路径需要对应 dist 目录下，而不是 src
6. 添加拦截器
   1. 路由结果处理，设定时限
   2. 返回的响应结果封装
   3. 路由抛出的异常捕捉
   4. 请求和响应日志输出
