function setProgress(circleName, progress) {
  const degrees = (progress * 360) / 100;
  const progressCircleElement =  document.querySelector(`.progress-circle.${circleName}`);
  const topSemicircle = progressCircleElement.querySelector('.semicircle.top');
  const bottomSemicircle = progressCircleElement.querySelector('.semicircle.bottom');

  if (degrees <= 180) {
    if (topSemicircle.classList.contains('filling')) {
      topSemicircle.classList.remove('filling');
      topSemicircle.classList.add('empty');
      topSemicircle.style.transform = 'rotate(0deg)';
    }
    bottomSemicircle.style.transform = `rotate(${degrees}deg)`;
  } else {
    if (topSemicircle.classList.contains('empty')) {
      topSemicircle.classList.remove('empty');
      topSemicircle.classList.add('filling');
      topSemicircle.style.transform = 'rotate(0deg)';
    }
    topSemicircle.style.transform = `rotate(${degrees - 180}deg)`;
  }
}