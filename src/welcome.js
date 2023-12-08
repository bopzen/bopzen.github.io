let typed = new Typed('#print', {
    strings: ['print("Hello, my name is Boyan")'],
    typeSpeed: 30,
    onComplete: function () {
      initAOS();
    }
  });
  
  function initAOS() {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }
