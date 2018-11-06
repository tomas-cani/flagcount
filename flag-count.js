function renderFlagCount() {
  const flagCountElement = document.querySelector('.flag-count');
  flagCountElement.textContent = `${getVisitedCountries().length}/195`;
}