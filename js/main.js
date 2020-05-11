const siteContainer = document.querySelector('.site-container')
const header = siteContainer.querySelector('.header')
const main = siteContainer.querySelector('.main')
const footer = siteContainer.querySelector('.footer')

header.addEventListener('click', outlineHeader)
main.addEventListener('click', outlineMain)
footer.addEventListener('click', outlineFooter)

function outlineHeader() {
  header.classList.toggle('outline')
}

function outlineMain() {
  main.classList.toggle('outline')
}

function outlineFooter() {
  footer.classList.toggle('outline')
}
