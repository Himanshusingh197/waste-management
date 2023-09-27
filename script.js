const loginNavBtn = document.getElementById('login-nav')
const loginPage = document.getElementById('login-page')
const loginPageOverlay = document.getElementById('login-page-overlay')

let loginPageIsHidden = true
const toggleLoginPage = () => {
    loginPageIsHidden = !loginPageIsHidden
    loginPage.style.display = (loginPageIsHidden) ? 'none' : 'block'
}
loginNavBtn.addEventListener('click', toggleLoginPage)
loginPageOverlay.addEventListener('click', toggleLoginPage)
