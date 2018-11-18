const worldCountriesCount = countryData.length;
const continents = [
  {
    name: 'Africa',
    count: 54
  },
  {
    name: 'Americas',
    count: 35
  },
  {
    name: 'Asia',
    count: 47
  },
  {
    name: 'Europe',
    count: 45
  },
  {
    name: 'Oceania',
    count: 14
  },
];

function renderTravelerStats(visitedCountries) {
  renderScore();
  renderContinentBreakdowns(visitedCountries);
}

function renderScore() {
  const visitedCountriesCountElement = document.querySelector('.visited-countries-count');
  const visitedCountriesPercentageElement = document.querySelector('.visited-countries-percentage');
  const visitedCountriesCount = getVisitedCountries().length;
  const visitedCountriesPercentage = getPercentage(visitedCountriesCount, worldCountriesCount);
  visitedCountriesCountElement.textContent = `${visitedCountriesCount}/${worldCountriesCount}`;
  visitedCountriesPercentageElement.textContent = `${visitedCountriesPercentage}%`;
  setProgress('world', visitedCountriesPercentage);
}

function renderContinentBreakdowns(visitedCountries) {
  const continentBreakdownElement = document.querySelector('.continent-breakdown');

  continents.forEach(continent => {
    const visitedCountriesCount = getVisitedCountriesCountFor(continent.name, visitedCountries);
    const visitedCountriesPercentage = `(${getPercentage(visitedCountriesCount, continent.count)}%)`;
    const visitedCountriesBreakdown = `${visitedCountriesCount}/${continent.count} ${visitedCountriesPercentage}`;
    const className = `${continent.name.toLowerCase()}-score`;
    const continentBreakdownTemplate = `<p class="${className}">${continent.name}: <span>${visitedCountriesBreakdown}</span></p>`;
    renderElement(continentBreakdownElement, `.${className}`, continentBreakdownTemplate);
  });
}

function getPercentage(x, y) {
  return String(((x * 100) / y).toFixed(2)).replace('.00', '');
}

function getVisitedCountriesCountFor(continent, visitedCountries) {
  return visitedCountries.filter(visitedCountry => visitedCountry.region === continent).length;
}
