function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    localStorage.setItem("theme", "light")
  } else {
    localStorage.setItem("theme", "dark")
  }
}

function loadTheme() {
  const html = document.documentElement

  if (localStorage.getItem("theme") === "light") {
    html.classList.add("light")
  } else {
    html.classList.remove("light")
  }
}

loadTheme()
