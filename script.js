let yesButton1 = document.getElementById('yesButton1');
let yesButton2 = document.getElementById('yesButton2');
let noButton = document.getElementById('noButton');
let texts = ['yes!!', 'definitely', 'of course', 'exactly yes', 'hundred percent'];
let clickCount = 0;

function goToResultPage() {
  window.location.href = 'result.html';
}

yesButton1.addEventListener('click', goToResultPage);
yesButton2.addEventListener('click', goToResultPage);

noButton.addEventListener('click', function() {
  if (clickCount < 5) {
    yesButton1.textContent = texts[clickCount];
    clickCount++; 
    let computedStyle = window.getComputedStyle(yesButton1);
    let currentWidth = parseFloat(computedStyle.getPropertyValue('width'));
    let currentHeight = parseFloat(computedStyle.getPropertyValue('height'));
    let newWidth = currentWidth * 1.1;
    let newHeight = currentHeight * 1.1;
    yesButton1.style.width = newWidth + 'px';
    yesButton1.style.height = newHeight + 'px';
  } else {
    yesButton1.textContent = texts[clickCount - 5];
    yesButton2.textContent = yesButton1.textContent;
    yesButton2.style.width = yesButton1.style.width;
    yesButton2.style.height = yesButton1.style.height;
    yesButton2.style.display = 'inline-block';
    noButton.style.display = 'none';
  }
});
