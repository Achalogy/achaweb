; (function initTheme() {
  var theme = localStorage.getItem('theme') || 'light'
  if (theme === 'dark') {
    document.querySelector('html').classList.add('dark')
    document.body.style.backgroundColor = "#1F2232"
  } else {
    document.documentElement.classList.remove('dark')
    document.body.style.backgroundColor = "#fff"
  }
})()