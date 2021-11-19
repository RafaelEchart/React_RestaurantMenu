import './styles/style.css';
import './styles/common.css';
import './styles/popUpWindow.css';
import renderFooter from './renderFooter.js';
import getDishesFromCategory from './getDishesFromCategory.js';

const categorySelector = document.getElementById('categorySelector');

let categories;

window.onload = async () => {
  const loading = document.getElementById('loading');
  loading.style.display = 'flex';
  categories = await fetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  );

  categories = await categories.json();
  categories = categories.categories;
  renderFooter();

  categorySelector.addEventListener('change', (event) => {
    getDishesFromCategory(categories, event.target.value);
  });

  getDishesFromCategory(categories, '1');

  loading.style.display = 'none';
};
