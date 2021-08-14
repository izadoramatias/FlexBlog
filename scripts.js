const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `.introducao,
  #sobre .sobre-info h1, .sobre .sobre-info p,
  #sobre .sobre-img img,
  #produtos h1,
  #produtos .produtos-container .produtos-item,
  #preco .preco-item,
  #qualidade .qualidade-item,
  #newsletter .newsletter-info h1, #newsletter .newsletter-info p, #newsletter .newsletter-info form,
  .footer p`, {interval: 100})

// botão voltar para o topo da página
function backToTop(){
  const backToTopButton = document.querySelector(".back-to-top")

  if(window.scrollY >= 464){
    backToTopButton.classList.add("show")
  }else{
    backToTopButton.classList.remove("show")
  }
}

// when scroll
window.addEventListener("scroll", function() {
  backToTop()
})
