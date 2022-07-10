const infoCardHeaders = document.querySelectorAll('.info_card_header');
// Event Listener
infoCardHeaders.forEach((infoCardHeader) => {
  infoCardHeader.addEventListener('click', (event) => {
    const activeBars = document.querySelector('.info_card_header.active');
    if (activeBars && activeBars !== infoCardHeader) {
      activeBars.classList.remove('active');
      activeBars.nextElementSibling.style.maxHeight = 0;
    }
    infoCardHeader.classList.toggle('active');
    const cardBodyMain = infoCardHeader.nextElementSibling;
    if (infoCardHeader.classList.contains('active')) {
      cardBodyMain.style.maxHeight = cardBodyMain.scrollHeight + 'px';
    } else {
      cardBodyMain.style.maxHeight = 0;
    }
  });
});
