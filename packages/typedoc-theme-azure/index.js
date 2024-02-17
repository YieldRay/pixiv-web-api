// The only plugin entry, executed in node.js

const { cpSync } = require("node:fs")
const { resolve } = require("node:path")
const { JSX, RendererEvent } = require("typedoc")

// static assets map
const ASSETS = {
    "./script.js": "assets/typedoc-theme-azure.js",
    "./style.css": "assets/typedoc-theme-azure.css",
}

function linkStyleSheet(href) {
    return JSX.createElement("link", {
        rel: "stylesheet",
        href,
    })
}

function load(app) {
    app.listenTo(app.renderer, RendererEvent.END, () => {
        for (const [from, to] of Object.entries(ASSETS)) {
            cpSync(
                resolve(__dirname, from),
                resolve(app.options.getValue("out"), to),
            )
        }
    })

    app.renderer.hooks.on("head.end", (event) =>
        JSX.createElement(
            JSX.Fragment,
            null,
            JSX.createElement("meta", {
                name: "view-transition",
                content: "same-origin",
            }),
            linkStyleSheet(
                "https://fonts.upset.dev/css2?family=Google+Sans+Mono:wght@100;200;300;400;500;700;900&display=swap",
            ),
            linkStyleSheet(
                "https://fonts.upset.dev/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap",
            ),
            linkStyleSheet(event.relativeURL(ASSETS["./style.css"])),
        ),
    )

    app.renderer.hooks.on("body.end", (event) =>
        JSX.createElement("script", {
            type: "module",
            src: event.relativeURL(ASSETS["./script.js"]),
        }),
    )
}

module.exports = { load }
