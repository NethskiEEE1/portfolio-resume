document.getElementById('pdfLink').addEventListener('click', function(event) {
    event.preventDefault();
    // Here, you could open the PDF in a viewer or display a message
    // alert('Viewing PDF in a new tab instead of downloading.');
    window.open('cv/CV.pdf', '_blank');
  });
