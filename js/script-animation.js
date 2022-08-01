$(window).scroll(function(){
    var top = $(window).scrollTop();
    var height = $(window).height();

    $('.scroll-active').each(function(index, el) {
      if($(el).offset().top + 200 > top + height) {
        $(el).removeClass("active")
      } else {
        $(el).addClass("active")
      }
    })
})
