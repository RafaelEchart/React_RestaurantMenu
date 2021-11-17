import _ from 'lodash';
import displayComments from './popUpWindow.js';

const setEventListeners = (dishes) => {
  const SeeCommentsButton = document.querySelectorAll('.SeeCommentsButton');

  _.forEach(SeeCommentsButton, (button) => {
    button.addEventListener('click', (e) => {
      const dish = _.filter(dishes, (dish) => dish.idMeal === e.target.id);
      displayComments(dish[0].idMeal);
    });
  });
};

const renderIntro = (categoryInfo) => {
  const categoryText = `${categoryInfo.strCategoryDescription.substring(
    0,
    250,
  )}...`;
  const introBannerImage = document.getElementById('introBanner');
  const introBannerH1 = document.getElementById('introBannerH1');
  const introBannerSpan = document.getElementById('introBannerSpan');

  introBannerImage.style.backgroundImage = `url('${categoryInfo.strCategoryThumb}')`;
  introBannerH1.innerHTML = categoryInfo.strCategory;
  introBannerSpan.innerHTML = categoryText;
};

const renderDishesInDOM = (dishes) => {
  const foodDishes = document.getElementById('foodDishes');
  if (dishes.length > 6) {
    dishes.length = 6;
  }

  let html = '';
  for (let x = 0; x < dishes.length; x += 1) {
    html += `<div class="card division flex-card dflex-row">
        <div class="align_images">
          <img
            src="${dishes[x].strMealThumb}"
            width="554"
            class="imagen_proyectos"
            alt=""
          />
        </div>
        <div class="text_child">
            <h2>${dishes[x].strMeal}</h2>
            
          
            <button type="button" class="SeeCommentsButton" id=${dishes[x].idMeal}>
              <span>Comments </span>
            </button>
          </div>
      </div>`;
  }

  foodDishes.insertAdjacentHTML('beforeend', html);
};

const getDishesFromCategory = async (categories, id) => {
  const foodDishes = document.getElementById('foodDishes');

  foodDishes.innerHTML = '';

  const loading = document.getElementById('loading');

  loading.style.display = 'flex';

  const selectedID = id - 1;
  renderIntro(categories[selectedID]);

  let dishes = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood',
  );
  dishes = await dishes.json();
  dishes = dishes.meals;

  renderDishesInDOM(dishes);
  setEventListeners(dishes);
  loading.style.display = 'none';
};

export default getDishesFromCategory;
