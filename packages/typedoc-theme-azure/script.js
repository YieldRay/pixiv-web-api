const nav = document.getElementById("tsd-nav-container")
new MutationObserver(() => {
    nav.querySelectorAll("a").forEach((a) => (a.title = a.textContent.trim()))
}).observe(nav, { childList: true })
document.querySelector(".tsd-generator").remove()
