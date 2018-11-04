function createCountriesList(countries, filter) {
  const countriesList = document.createElement('ul');
  countries.forEach((country) => {
    if (country.name.toLowerCase().includes(filter.toLowerCase())) {
      const countryElement = document.createElement('p');
      const countryName = document.createTextNode(country.name);
      countryElement.appendChild(countryName);
      countriesList.appendChild(countryElement);
    }
  });
  return countriesList;
}

function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function renderCountries(event) {
  const countriesList = createCountriesList(countries, event.target.value);
  const filteredCountriesElement = document.getElementsByClassName('filtered-countries')[0];
  removeChildren(filteredCountriesElement);
  filteredCountriesElement.appendChild(countriesList);
}

const countryFilter = document.getElementsByClassName('country-filter')[0];
countryFilter.addEventListener('input', renderCountries);

renderCountries({ target: { value: '' } });