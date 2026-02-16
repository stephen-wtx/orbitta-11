const toggle = document.getElementById("toggle-tema");

if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
    toggle.cheked = true;
}

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("tema", "dark");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("tema", "light");
    }
})