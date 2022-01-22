# nuxt

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

## 目录介绍

```js

|-- .nuxt                            // Nuxt自动生成，临时的用于编辑的文件，build
|-- assets                           // 用于组织未编译的静态资源入LESS、SASS 或 JavaScript
|-- components                       // 用于自己编写的Vue组件，比如滚动组件，日历组件，分页组件
|-- layouts                          // 布局目录，用于组织应用的布局组件，不可更改。
|-- utils                            // 用于存放工具
|-- pages                            // 用于存放写的页面，我们主要的工作区域
|-- plugins                          // 用于存放JavaScript插件的地方
|-- static                           // 用于存放静态资源文件
|-- store                            // 用于组织应用的Vuex 状态管理。
|-- nuxt.config.js                   // 用于组织Nuxt.js应用的个性化配置，已覆盖默认配置

```

## pm2

pm2是一个进程管理工具，可以用它来管理你的node进程，并查看node进程的状态，当然也支持性能监控，进程守护，负载均衡等功能

1. pm2需要全局安装

npm install -g pm2

2. 进入项目根目录

2.1 启动进程/应用 pm2 start bin/www 或 pm2 start app.js

2.2 重命名进程/应用 pm2 start app.js --name wb123

2.3 添加进程/应用 watch pm2 start bin/www --watch

2.4 结束进程/应用 pm2 stop www

2.5 结束所有进程/应用 pm2 stop all

2.6 删除进程/应用 pm2 delete www

2.7 删除所有进程/应用 pm2 delete all

2.8 列出所有进程/应用 pm2 list

2.9 查看某个进程/应用具体情况 pm2 describe www

2.10 查看进程/应用的资源消耗情况 pm2 monit

2.11 查看pm2的日志 pm2 logs

2.12 若要查看某个进程/应用的日志 pm2 logs www

2.13 重新启动进程/应用 pm2 restart www

2.14 重新启动所有进程/应用 pm2 restart all

3. 生成配置文件

pm2 ecosystem

常用配置项说明:

apps： json结构，apps是一个数组，每一个数组成员就是对应一个pm2中运行的应用；

name：应用程序名称；

cwd：应用程序所在的目录；

script：应用程序的脚本路径；

log_date_format： 指定日志日期格式，如YYYY-MM-DD HH：mm：ss；

error_file：自定义应用程序的错误日志文件，代码错误可在此文件查找；

out_file：自定义应用程序日志文件，如应用打印大量的标准输出，会导致pm2日志过大；

pid_file：自定义应用程序的pid文件；

interpreter：指定的脚本解释器；

interpreter_args：传递给解释器的参数；

instances： 应用启动实例个数，仅在cluster模式有效，默认为fork；

min_uptime：最小运行时间，这里设置的是60s即如果应用程序在60s内退出，pm2会认为程序异常退出，此时触发重启max_restarts设置数量；

max_restarts：设置应用程序异常退出重启的次数，默认15次（从0开始计数）；

autorestart ：默认为true, 发生异常的情况下自动重启；

cron_restart：定时启动，解决重启能解决的问题；

max_memory_restart：最大内存限制数，超出自动重启；

watch：是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件。

ignore_watch：忽略监听的文件夹，支持正则表达式；

merge_logs： 设置追加日志而不是新建日志；

exec_interpreter：应用程序的脚本类型，默认是nodejs；

exec_mode：应用程序启动模式，支持fork和cluster模式，默认是fork；

autorestart：启用/禁用应用程序崩溃或退出时自动重启；

vizion：启用/禁用vizion特性(版本控制)；

env：环境变量，object类型；

force：默认false，如果true，可以重复启动一个脚本。pm2不建议这么做；

restart_delay：异常重启情况下，延时重启时间；


## 部署

package.json
ecosystem.config.js
static
.nuxt
