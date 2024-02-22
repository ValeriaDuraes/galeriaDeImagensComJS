// changeImage(image): Esta função é chamada quando uma miniatura é clicada na galeria. Ela altera a imagem principal exibida para a imagem correspondente à miniatura clicada.
function changeImage(image) {
  var mainImg = document.getElementById('mainImg')
  mainImg.classList.add('fade-out')
  setTimeout(function () {
    mainImg.src = image
    mainImg.classList.remove('fade-out')
  }, 300) // Tempo para a transição de fade-out, em milissegundos
}

// openModal(): Esta função é chamada quando você deseja abrir o modal do carrossel. Ela exibe o modal e inicia o carrossel de imagens.
function openModal() {
  document.getElementById('myModal').style.display = 'block'
  $('.slick-carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true
  })
}

// closeModal(): Esta função é chamada quando você deseja fechar o modal do carrossel. Ela oculta o modal e destrói o carrossel de imagens.
function closeModal() {
  document.getElementById('myModal').style.display = 'none'
  $('.slick-carousel').slick('unslick')
}






