function createCountryList(countries) {
  const countryList = document.createElement('section');
  countryList.classList.add('country-list');
  countries.forEach(country => {
    const countryElement = createCountry(country);
    countryList.insertAdjacentHTML('beforeend', countryElement);
  });
  addEventListenerToCountryList(countryList, countries);
  return countryList;
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
