const unvisitedCountries = countries;
const visitedCountries = [];

function createCountryList(countries) {
  const countriesList = document.createElement('section');
  countriesList.classList.add('countries-list');
  countries.forEach((country) => {
    const countryElement = document.createElement('div');
    const countryName = document.createTextNode(country.name);
    countryElement.appendChild(countryName);
    countriesList.appendChild(countryElement);
  });
  return countriesList;
}

function filterCountries(countries, keyword) {
  return countries.filter(country => country.name.toLowerCase().includes(keyword.toLowerCase()));
}

function renderUnvisitedCountries(event) {
  const countriesList = createCountryList(filterCountries(unvisitedCountries, event.target.value));
  const unvisitedCountriesElement = document.querySelector('.unvisited-countries');
  const unvisitedCountriesListElement = unvisitedCountriesElement.querySelector('.countries-list');
  if (unvisitedCountriesListElement) {
    unvisitedCountriesListElement.parentNode.removeChild(unvisitedCountriesListElement);
  }
  unvisitedCountriesElement.appendChild(countriesList);
}

const countryFilter = document.getElementsByClassName('unvisited-country-filter')[0];
countryFilter.addEventListener('input', renderUnvisitedCountries);

renderUnvisitedCountries({ target: { value: '' } });