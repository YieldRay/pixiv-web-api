# pixiv-web-api

[![](https://img.shields.io/npm/v/@__dirname/pixiv-web-api)](https://www.npmjs.com/package/@__dirname/pixiv-web-api)
[![](https://badgen.net/packagephobia/install/@__dirname/pixiv-web-api)](https://packagephobia.com/result?p=@__dirname/pixiv-web-api)

一个 Pixiv 网页端 API 的简单封装  
零依赖，基于 `fetch()`，支持绝大多数 Javascript 运行时

例如：浏览器（需要自行处理 CORS），nodejs>=18，deno，bun，以及其它 serverless 环境

## 返回值

> [!NOTE]  
> 返回值暂时没有类型标注。

Pixiv 网页端 API 存在两种形式的返回值，大多数情况如下，数据包含在 body 属性下  
此时 error 为 false 时只返回 body 属性的值，否则将 message 封装为 Error 抛出

```ts
type APIResponse<T> = {
    error: boolean
    message: string
    body: T
}
```

另外一种则是直接返回数据，此时我们也直接返回数据

# 安装

node.js 安装

```sh
npm i @__dirname/pixiv-web-api --registry https://registry.npmjs.org/
# 确保使用的是官方 npm 源
```

```js
import * as pixiv_web_api from "@__dirname/pixiv-web-api"
// 或按需引入
import { ranking } from "@__dirname/pixiv-web-api"
```

浏览器引入为全局变量

```html
<script src="https://unpkg.com/@__dirname/pixiv-web-api/dist/index.umd.js"></script>
<script>
    pixiv_web_api.ranking().then((data) => {
        // ...
    })
</script>
```

浏览器以模块导入

```html
<script type="module">
    import * as pixiv_web_api from "https://unpkg.com/@__dirname/pixiv-web-api/dist/index.js"
    pixiv_web_api.ranking().then((data) => {
        // ...
    })
</script>
```

## 示例

```ts
import * as pixiv_web_api from "@__dirname/pixiv-web-api"

// 默认配置直接请求官方接口，使用默认配置则不需要调用下面的配置函数
pixiv_web_api.setOptions({
    // 默认值 https://www.pixiv.net （国内网络需要代理）
    // 若实现了对 https://www.pixiv.net 的反向代理，则可以使用该代理调用 API，例如：
    baseURL: "https://cros.deno.dev/https://www.pixiv.net",
    // 设置语言
    // 浏览器默认为本机语言，其它环境默认值为 zh-CN（设置为空字符串可移除）
    acceptLanguage: "zh-CN",
    // 仅当访问需要登陆的接口才必须提供
    cookie: "xxx",
    // 默认值为 globalThis.fetch
    // 用于自定义发出请求的 fetch 函数
    fetch: globalThis.fetch,
})

const data = await pixiv_web_api.ranking() // 获取排行榜
console.log(data)
```

# 构建

```sh
git clone https://github.com/YieldRay/pixiv-web-api.git
cd pixiv-web-api
pnpm install
pnpm build:api   # 构建API
pnpm build:docs  # 构建文档
```
