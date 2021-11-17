import './styles/style.css';
import './styles/common.css';
import './styles/popUpWindow.css';
import fillCategories from './fillCategories';
import renderFooter from './renderFooter';
import getDishesFromCategory from './getDishesFromCategory';

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

  fillCategories(categories);
  getDishesFromCategory(categories, '1');

  loading.style.display = 'none';
};
