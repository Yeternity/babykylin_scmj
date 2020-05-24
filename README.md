# babykylin_scmj

## 声明

此项目 Fork 自 [幼麟棋牌](https://github.com/babykylin/babykylin_scmj)

## 运行

> Cocos Creator v2.3.3
>
> Node.js v12.14.1
>
> OS: Win10

### 数据库

1. 建表 `db_babykylin`，更改 configs_win.js 中的用户名和密码
2. 运行 sql 语句
3. 启动数据库

### 服务端

1. 进入 server 目录 ，安装依赖

   ```bash
   npm ci
   ```

2. 使用 VS Code 打开 server 文件夹，分别运行 `账号服、大厅服、麻将服`

### 客户端

使用 Cocos Creator 打开 client 文件夹，然后运行

### 开始游戏

在 Chrome 中输入以下地址，更改数字，可以实现多开

```
http://localhost:7456/?account=asdf1 
http://localhost:7456/?account=asdf2 
...
```

一个房间凑齐4个，就会自动开始