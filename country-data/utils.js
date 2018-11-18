function filterCountries(countries, keyword, visited) {
  return countries.filter(country =>
    country.name.toLowerCase().includes(keyword.toLowerCase()) && country.visited === visited);
}

function getVisitedCountries(filter = '') {
  return filterCountries(countryData, filter, true);
}

function getUnvisitedCountries(filter = '') {
  return filterCountries(countryData, filter, false);
}

function getCountries(filter) {
  const visitedCountries = getVisitedCountries(filter);
  const unvisitedCountries = getUnvisitedCountries(filter);
  return [...visitedCountries, ...unvisitedCountries];
}
