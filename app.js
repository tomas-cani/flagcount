const unvisitedCountries = countries;
const visitedCountries = [];

function createCountryList(countries) {
  const countriesList = document.createElement('ul');
  countries.forEach((country) => {
    const countryElement = document.createElement('p');
    const countryName = document.createTextNode(country.name);
    countryElement.appendChild(countryName);
    countriesList.appendChild(countryElement);
  });
  return countriesList;
}

function filterCountries(countries, keyword) {
  return countries.filter(country => country.name.toLowerCase().includes(keyword.toLowerCase()));
}

function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function renderUnvisitedCountries(event) {
  const countriesList = createCountryList(filterCountries(unvisitedCountries, event.target.value));
  const unvisitedCountriesElement = document.getElementsByClassName('unvisited-countries-list')[0];
  removeChildren(unvisitedCountriesElement);
  unvisitedCountriesElement.appendChild(countriesList);
}

const countryFilter = document.getElementsByClassName('unvisited-country-filter')[0];
countryFilter.addEventListener('input', renderUnvisitedCountries);

renderUnvisitedCountries({ target: { value: '' } });