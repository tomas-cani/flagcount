function renderCountryList(parentElement, { countries }) {
  const countryListTemplate = createCountryList(countries);
  const countryListElement = renderElement(parentElement, '.country-list', countryListTemplate);
  addEventListenerToCountryList(countryListElement, countries);
}

function createCountryList(countries) {
  const countryElements = countries.map(createCountry);
  return `<section class="country-list">${countryElements.join('')}</section>`;
}

function createCountry(country) {
  return `<button class="country ${country.visited ? 'visited' : 'unvisited'}">${country.name}</button>`;
}

function addEventListenerToCountryList(countryList, countries) {
  countryList.addEventListener('click', event => {
    const target = event.target;
    if (target.matches('.country')) {
      const country = countries.find(country => country.name === target.textContent);
      country.visited = !country.visited;
      onCountriesChange();
    }
  });
}
