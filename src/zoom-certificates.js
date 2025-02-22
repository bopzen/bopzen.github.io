document.addEventListener('DOMContentLoaded', function() {
    var certificates = document.querySelectorAll('.certificate-card img');
    var zoomedElement = null;

    certificates.forEach(function(certificate) {
        certificate.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click event from reaching the body
            toggleZoomAndMoveToCenter(certificate);
        });
    });

    function toggleZoomAndMoveToCenter(element) {
        if (zoomedElement === element) {
            zoomOut();
        } else {
            zoomIn(element);
        }
    }

    function zoomIn(element) {
        zoomedElement = element;
        var parentContainer = element.closest('.certificate-card');
        if (parentContainer) {
            parentContainer.style.zIndex = 1000;
        }
        element.style.zIndex = 1000;
        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight;
        var initialPosition = element.getBoundingClientRect().left;

        var translateX = (screenWidth / 2 - initialPosition - element.width / 2) / 4;
        var translateY = -(screenHeight / 2 - element.height / 2) / 6;
        anime({
            targets: element,
            scale: 3,
            translateY: translateY,
            translateX: translateX,
            easing: 'easeInOutQuad',
            duration: 500,
        });

        // Add a class to the body for styling purposes
        setTimeout(function() {
            document.body.classList.add('zoomed');
        }, 0);

        document.body.addEventListener('mousedown', zoomOutHandler);
    }

    function zoomOut() {
        if (zoomedElement) {
            anime({
                targets: zoomedElement,
                scale: 1,
                translateY: 0,
                translateX: 0,
                easing: 'easeInOutQuad',
                duration: 500,
                complete: function() {
                    // Remove the class from the body
                    document.body.classList.remove('zoomed');
                    // Remove the event listener
                    document.body.removeEventListener('mousedown', zoomOutHandler);
                    if (zoomedElement) {
                        var parentContainer = zoomedElement.closest('.certificate-card');
                        if (parentContainer) {
                            parentContainer.style.zIndex = '';
        }
                        zoomedElement.style.zIndex = -100;
                        zoomedElement = null;
                    }
                }
            });
        }
    }

    function zoomOutHandler() {
        zoomOut();
    }
});