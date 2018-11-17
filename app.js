function filterCountries(countries, keyword, visited) {
  return countries.filter(country =>
    country.name.toLowerCase().includes(keyword.toLowerCase()) && country.visited === visited);
}

function onCountriesChange() {
  const filter = document.querySelector('.countries-filter').value;
  const countries = getCountries(filter);
  renderCountries(countries);
  renderTravelerStats(visitedCountries);
}

function renderCountries(countries) {
  const countriesList = createCountryList(countries);
  const parentElement = document.querySelector('.countries');
  const countriesListElement = parentElement.querySelector('.country-list');
  if (countriesListElement) {
    parentElement.removeChild(countriesListElement);
  }

  parentElement.appendChild(countriesList);
}

function getCountries(filter) {
  const visitedCountries = filterCountries(countryData, filter, true);
  const unvisitedCountries = filterCountries(countryData, filter, false);
  return [...visitedCountries, ...unvisitedCountries];
}

const countryFilter = document.querySelector('.countries-filter');
countryFilter.addEventListener('input', event => renderCountries(getCountries(event.target.value)));

renderCountries(getCountries(countryFilter.value));