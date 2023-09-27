$(document).ready(function(){
    $('.banner-img').ripples({
        resolution: 500,
        dropRadius: 20,
        perturbance: 0.03
    })
});

var typed = new Typed('#interests', {
    strings: ['Web development', 'ui/ux design', 'testing', 'cyber security', 'artificial intelligence'],
    typeSpeed: 150,
    smartBackspace: true,
    shuffle: false,
    loop: true,
    loopCount: Infinity,
    showCursor: false,
    cursorChar: '|',
    autoInsertCss: true,
  });


  var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

  var mixer = mixitup(containerEl, {
      selectors: {
          target: '[data-ref~="mixitup-target"]'
      }
  });

    