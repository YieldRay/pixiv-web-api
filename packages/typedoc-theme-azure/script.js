new MutationObserver(() => {
    nav.querySelectorAll("a").forEach((a) => (a.title = a.textContent.trim()))
}).observe(document.getElementById("tsd-nav-container"), { childList: true })

document.querySelector(".tsd-generator").remove()
