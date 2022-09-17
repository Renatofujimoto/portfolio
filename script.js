$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky')
    } else {
      $('.navbar').removeClass('sticky')
    }
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show')
    } else {
      $('.scroll-up-btn').removeClass('show')
    }
  })
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 })
  })

  var typed = new Typed('.typing', {
    strings: ['Front End Developer', 'Web Designer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })
  var typed = new Typed('.typing-2', {
    strings: ['Desenvolvedor Front End', 'Web Designer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })
})
