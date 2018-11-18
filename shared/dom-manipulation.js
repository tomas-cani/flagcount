function renderElement(parentElement, elementQuery, newElement) {
  const oldElement = parentElement.querySelector(elementQuery);
  if (oldElement) {
    parentElement.removeChild(oldElement);
  }
  parentElement.insertAdjacentHTML('beforeend', newElement);
  return parentElement.querySelector(elementQuery);
}