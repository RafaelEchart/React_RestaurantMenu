export const calculateItems = (dishes) => {
  let counter = 0;
  for (let x = 0; x < dishes.length; x += 1) {
    counter += 1;
  }
  return counter;
};

export const resetCategoriesAndCountDishes = (dishes, categories, id) => {
  const categorySelector = document.getElementById('categorySelector');
  categorySelector.innerHTML = '';

  const selectedCategory = categories[id - 1].strCategory;
  const newDishesCount = calculateItems(dishes);

  categories.forEach((category) => {
    const { idCategory, strCategory } = category;
    const selected = strCategory === selectedCategory;
    const optionCategory = `<option value=${idCategory} ${selected ? 'selected' : ''} id=${idCategory}>${selected ? `${strCategory} (${newDishesCount})` : strCategory}</option>`;

    categorySelector.insertAdjacentHTML('beforeend', optionCategory);
  });
};
