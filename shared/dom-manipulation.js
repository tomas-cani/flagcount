function renderElement(parentElement, elementClass, newElement) {
  const oldElement = parentElement.querySelector(elementClass);
  if (oldElement) {
    parentElement.removeChild(oldElement);
  }
  parentElement.insertAdjacentHTML('beforeend', newElement);
  return parentElement.querySelector(elementClass);
}