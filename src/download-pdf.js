function downloadPDF() {
    const element = document.querySelector('.cv-container');
    if (element) {
        html2pdf().from(element).save("my_cv.pdf");
    } else {
        console.error("Element with class 'cv-container' not found!");
    }
}