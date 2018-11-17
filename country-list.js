function createCountryList(countries) {
  const countryList = document.createElement('section');
  countryList.classList.add('country-list');
  countries.forEach(country => {
    const countryElement = document.createElement('button');
    countryElement.classList.add('country');
    countryElement.classList.add(country.visited ? 'visited' : 'unvisited');
    const countryName = document.createTextNode(country.name);
    countryElement.appendChild(countryName);
    countryList.appendChild(countryElement);
  });
  addEventListenerToCountryList(countryList, countries);
  return countryList;
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
