function renderVisitedCountriesCount() {
  const flagCountElement = document.querySelector('.visited-countries-count');
  const visitedCountriesCount = getVisitedCountries().length;
  const visitedCountriesPercentage = ((visitedCountriesCount * 100) / 195).toFixed(2);
  flagCountElement.textContent = `${visitedCountriesCount}/195 (${visitedCountriesPercentage}%)`;
}