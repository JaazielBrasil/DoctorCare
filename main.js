// Event listener para chamar a função 'onScroll' quando ocorrer o evento de rolagem
window.addEventListener("scroll", onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(testimonials)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection (section) {
  //linha alvo
  const targetLine= scrollY + innerWidth / 2

  //verificar a seação passou da linha
  //quais dados eu vou precisar?
  
  //o topo da seção
  const sectionTop = section.offsetTop

  // a altura da seção
  const sectionHeight = section.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha alto 
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //verificar se a base está abaixo da linha alvo

  //a seção termina aonde?
  const sectionEndsAt = sectionTop + sectionHeight

  // o final da seção passou da linha alvo 
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // limetes da seção 
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute("id")
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove("active")
  if (sectionBoundaries) {
    menuElement.classList.add("active")
  }
}
//função do scroll com a navegação
function showNavOnScroll() {
  const navigation = document.getElementById("navigation")
  if (window.scrollY > 0) {
    navigation.classList.add("scroll")
  } else {
    navigation.classList.remove("scroll")
  }
}

//função scroll com o botão de ir pro início
function showBackToTopButtonOnScroll() {
  const BackToTopButton = document.getElementById("BackToTopButton")
  if (window.scrollY > 600) {
    BackToTopButton.classList.add("show")
  } else {
    BackToTopButton.classList.remove("show")
  }
}

//função abrir e fechar menu
function openMenu() {
  document.body.classList.add("menu-expanded")
}

function closeMenu() {
  document.body.classList.remove("menu-expanded")
}

//biblioteca de terceiros
ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(
  "#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content, #testimonials header, #testimonials .testimonial-box-container, #companies header, #companies .svgs"
)