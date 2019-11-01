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

#### 预计完成内容

这些内容所展示的是一个基础框架所要满足的基础条件：

1. resultful api 实现 [完成]
   1. GET
   2. POST
   3. PUST
   4. DELETE
1. 响应结果封装，保证结果的统一性 [完成]
1. 请求参数类型和必须性验证 [完成]
1. 日志文件输出
   1. 请求路径，方法和参数 [完成]
   2. 响应结果和消耗时间 [完成]
   3. 异常捕捉 [完成]
1. orm mysql 的使用
   0. 模型定义
   1. CURD
   1. 一对多，一对一，多对多的表间关系
   1. 复杂的 sql 语句执行
   1. 日志输出
1. 运行环境参数配置
   1. 测试环境
   2. 开发环境
   3. 生产环境
1. 单元测试编写

难度提升：

1. sql 事务实现
2. 依赖继承
3. 框架继承

### 学习记录

1. 了解 req.query,req.params 和 req.body 三种请求对象取值方式的使用场景
2. 了解如何在 vscode 中 debug，配置文件选择 attach process 即可
