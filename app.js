function filterCountries(countries, keyword, visited) {
  return countries.filter(country =>
    country.name.toLowerCase().includes(keyword.toLowerCase()) && country.visited === visited);
}

function getVisitedCountries() {
  return filterCountries(countryData, '', true);
}

function onCountriesChange() {
  const filter = document.querySelector('.unvisited-countries-filter').value;
  const visitedCountries = getVisitedCountries();
  renderUnvisitedCountries(filter);
  renderVisitedCountries(visitedCountries);
  renderTravelerStats(visitedCountries);
}

function renderCountries(countries, parent) {
  const countriesList = createCountryList(countries);
  const parentElement = document.querySelector(parent);
  const countriesListElement = parentElement.querySelector('.country-list');
  if (countriesListElement) {
    parentElement.removeChild(countriesListElement);
  }

  parentElement.appendChild(countriesList);
}

function renderUnvisitedCountries(filter) {
  renderCountries(filterCountries(countryData, filter, false), '.unvisited-countries');
}

function renderVisitedCountries(visitedCountries) {
  renderCountries(visitedCountries, '.visited-countries');
}

const countryFilter = document.querySelector('.unvisited-countries-filter');
countryFilter.addEventListener('input', event => renderUnvisitedCountries(event.target.value));

renderCountries(countryData, '.unvisited-countries');