function createCountryList(countries) {
  const countryList = document.createElement('section');
  countryList.classList.add('country-list');
  countries.forEach(country => {
    const countryElement = document.createElement('button');
    countryElement.classList.add('country');
    const countryName = document.createTextNode(country.name);
    countryElement.appendChild(countryName);
    countryList.appendChild(countryElement);
  });
  addEventListenerToCountryList(countryList);
  return countryList;
}

function addEventListenerToCountryList(countryList) {
  countryList.addEventListener('click', event => {
    const target = event.target;
    if (target.matches('.country')) {
      const country = countries.find(country => country.name === target.textContent);
      country.visited = !country.visited;
      onCountriesChange();
    }
  });
}

function filterCountries(countries, keyword, visited) {
  return countries.filter(country =>
    country.name.toLowerCase().includes(keyword.toLowerCase()) && country.visited === visited);
}

function onCountriesChange() {
  const filter = document.querySelector('.unvisited-countries-filter').value;
  renderUnvisitedCountries(filter);
  renderVisitedCountries();
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
  renderCountries(filterCountries(countries, filter, false), '.unvisited-countries');
}

function renderVisitedCountries() {
  renderCountries(filterCountries(countries, '', true), '.visited-countries');
}

const countryFilter = document.querySelector('.unvisited-countries-filter');
countryFilter.addEventListener('input', event => renderUnvisitedCountries(event.target.value));

renderCountries(countries, '.unvisited-countries');