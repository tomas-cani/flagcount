function onCountriesChange() {
  const filter = document.querySelector('.countries-filter').value;
  const countries = getCountries(filter);
  const visitedCountries = getVisitedCountries(filter);
  renderCountries(countries);
  renderTravelerStats(visitedCountries);
}

function renderCountries(countries) {
  const parentElement = document.querySelector('.countries');
  renderCountryList(parentElement, { countries });
}

const countryFilter = document.querySelector('.countries-filter');
countryFilter.addEventListener('input', event => renderCountries(getCountries(event.target.value)));

renderCountries(getCountries(countryFilter.value));