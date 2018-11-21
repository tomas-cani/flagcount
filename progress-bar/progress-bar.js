function setBarProgress(barName, progress) {
  const progressBarElement =  document.querySelector(`.progress-bar.${barName}`);

  progressBarElement.style.background = `linear-gradient(to right,  #4fc3f7 ${progress}%, #eee ${progress}%)`;
}