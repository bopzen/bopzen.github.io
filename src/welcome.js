let typed = new Typed('#print', {
    strings: ['Console.Write("Hello, my name is Boyan")'],
    typeSpeed: 20,
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
