import getDishesFromCategory from './getDishesFromCategory';

const categorySelector = document.getElementById('categorySelector');

const fillCategories = (categories) => {
  categories.forEach((category) => {
    const { idCategory, strCategory } = category;
    const optionCategory = `<option value=${idCategory} id=${idCategory}>${strCategory}</option>`;

    categorySelector.insertAdjacentHTML('beforeend', optionCategory);
  });

  categorySelector.addEventListener('change', (event) => {
    getDishesFromCategory(categories, event.target.value);
  });
};

export default fillCategories;