function renderVisitedCountriesCount() {
  const visitedCountriesCountElement = document.querySelector('.visited-countries-count');
  const visitedCountriesPercentageElement = document.querySelector('.visited-countries-percentage');
  const visitedCountriesCount = getVisitedCountries().length;
  const visitedCountriesPercentage = ((visitedCountriesCount * 100) / 195).toFixed(2);
  visitedCountriesCountElement.textContent = `${visitedCountriesCount}/195`;
  visitedCountriesPercentageElement.textContent = `(${visitedCountriesPercentage}%)`;
}