window.addEventListener('DOMContentLoaded', ()=> {
    theme = localStorage.getItem("theme");
    if (Boolean(theme)) {
        document.body.setAttribute("theme", theme)
    } else {
        console.warn("Default theme is not set.");
        document.body.setAttribute("theme", "light");
    }
})

document.querySelector('#toggler').addEventListener('click',()=>{
    theme = document.body.getAttribute("theme");
    if (theme  === "dark") {
        localStorage.setItem("theme", "light");
        document.body.setAttribute("theme", "light");
    } else if (theme === "light") {
        localStorage.setItem("theme", "dark")
        document.body.setAttribute("theme", "dark");
    } else {
        console.error("Theme is not avialbale or the theme you choose is not applicable")
    }
})