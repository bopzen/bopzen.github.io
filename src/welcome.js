let typed = new Typed('#print', {
    strings: ['print("Hello, my name is Boyan")'],
    typeSpeed: 30,
    onComplete: function () {
      // This function is called when the typing animation is complete
      // You can add any additional logic here, e.g., initializing AOS
      initAOS();
    }
  });
  
  // Function to initialize AOS
  function initAOS() {
    // Add your AOS initialization logic here
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out',
    });
  
    // You may want to trigger AOS refresh if needed
    AOS.refresh();
  }