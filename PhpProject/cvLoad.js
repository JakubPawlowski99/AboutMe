function loadCV() {
  // Load the CV PDF
  document.getElementById('content').innerHTML = '<object data="JakubPawlowskiCVPL.pdf" type="application/pdf" width="100%" height="100%">CV PDF</object>';

  // Check if PL and ENG buttons already exist
  if (!document.getElementById('button-pl')) {
    // Create buttons to switch between PDFs
    document.getElementById('button-bar').innerHTML += '<a id="button-pl" href="#" class="button" onclick="changePDF(\'JakubPawlowskiCVPL.pdf\')">PL</a>';
    document.getElementById('button-bar').innerHTML += '<a id="button-eng" href="#" class="button" onclick="changePDF(\'JakubPawlowskiCVeng.pdf\')">ENG</a>';
  }
}
function changePDF(pdf) {
  // Change the loaded PDF
  document.querySelector('object').setAttribute('data', pdf);
}
