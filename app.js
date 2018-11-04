function createCountriesList(countries) {
  const countriesList = document.createElement('ul');
  countries.forEach((country) => {
    const countryElement = document.createElement('p');
    const countryName = document.createTextNode(country.name);
    countryElement.appendChild(countryName);
    countriesList.appendChild(countryElement);
  });
  return countriesList;
}

function renderCountries() {
  const countriesList = createCountriesList(countries);
  const filteredCountriesElement = document.getElementsByClassName('filtered-countries')[0];
  filteredCountriesElement.appendChild(countriesList);
}

renderCountries();