function downloadPDF() {
    // Element to render
    const element = document.getElementById('cv');
    
    // Options
    const options = {
      margin: [-10, -10, 0, 0],
      filename: 'cv_boyan_todorov.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 3, useCORS: true },
      jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },
    //    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };
    
    // Generate PDF
    html2pdf()
    .from(element)
    .set(options)
    .toPdf()
    .get('pdf')
    .then(pdf => {
        const totalPages = pdf.internal.getNumberOfPages();
        if (totalPages > 2) {
            pdf.deletePage(totalPages); // Remove last blank page
        }
    })
    .save();
  }