const categorySelector = document.getElementById('categorySelector');

const calculateItems = (dishes) => {
  const itemsLength = dishes.length;
  return itemsLength;
};

const resetCategoriesAndCountDishes = (dishes, categories, id) => {
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

export default resetCategoriesAndCountDishes;