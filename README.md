# pixiv-web-api

对 Pixiv 网页端 API 的简单封装  
零依赖，基于 `fetch()`，因此支持多数 Javascript 运行时

## 返回值

> [!NOTE]  
> 返回值暂时没有类型标注。

Pixiv 网页端 API 存在两种形式的返回值，大多数情况如下，数据包含在 body 属性下  
此时 error 为 false 时只返回 body 属性的值，否则将 message 封装为 Error 抛出

```ts
type APIResponse<T> = {
    error: boolean;
    message: string;
    body: T;
};
```

另外一种则是直接返回数据，此时我们也直接返回数据

## 示例

```
npm install @__dirname/pixiv-web-api
```

```ts
import * as api from "@__dirname/pixiv-web-api";

// 默认配置直接请求官方接口，使用默认配置则不需要调用下面的配置函数
api.setOptions({
    // 默认值 https://www.pixiv.net
    // 若实现了对 https://www.pixiv.net 的反向代理，则可以使用该代理调用 API
    baseURL: "https://md-cors.deno.dev/https://www.pixiv.net",
    // 语言
    // 浏览器环境可省略
    acceptLanguage: "zh-CN",
    // 仅当访问需要登陆的接口才必须提供
    cookie: "xxx",
    // 默认值 globalThis.fetch
    // 自定义 fetch 函数
    fetch: globalThis.fetch,
});

const data = await api.ranking(); // 获取排行榜
console.log(data);
```
