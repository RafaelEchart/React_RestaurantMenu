import displayPopUpCommentWindow from './popUpWindow.js';
import { getLikes, postLikes } from './involvementAPI.js';
import { resetCategoriesAndCountDishes } from './resetCategoriesAndCountDishes.js';

const setEventListeners = (dishes) => {
  dishes.forEach((dish) => {
    const likeButton = document.getElementById(`like-${dish.idMeal}`);
    likeButton.addEventListener('click', () => {
      postLikes(dish.idMeal);
    });

    const commentButton = document.getElementById(dish.idMeal);
    commentButton.addEventListener('click', () => {
      displayPopUpCommentWindow(dish.idMeal);
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

const renderDishesInDOM = (dishes, likes) => {
  let userLikes = localStorage.getItem('userLikes');

  if (userLikes && userLikes.length) {
    userLikes = JSON.parse(userLikes);
  } else {
    userLikes = [];
  }

  const foodDishes = document.getElementById('foodDishes');

  dishes.forEach((dish) => {
    likes.forEach((like) => {
      if (dish.idMeal === like.item_id) {
        dish.likes = like.likes;
      }
    });

    userLikes.forEach((savedLike) => {
      if (dish.idMeal === savedLike) {
        dish.savedLike = true;
      }
    });
  });

  let html = '';
  for (let x = 0; x < dishes.length; x += 1) {
    html += `<div class="card division flex-card dflex-row" >

  

        <div class="align_images" id="card-${dishes[x].idMeal}">
          <img
            src="${dishes[x].strMealThumb}"
            width="554"
            class="imagen_proyectos"
            alt=""
          />
        </div>
        <div class="text_child">
            <h2>${dishes[x].strMeal}</h2>
            
          
            
          <div class="dflex-center-spaceBetween">
            <button type="button" class="SeeCommentsButton" id=${
  dishes[x].idMeal
}>
            <span>Comments</span>
            </button>
            <svg ${
  dishes[x].savedLike ? "class='ico liked'" : "class='ico'"
} id='like-${
  dishes[x].idMeal
}' width="24" height="24" viewBox="0 0 24 24">
            
  <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
  
  </svg>
            <h3 class="like-text" id='likeCounter-${dishes[x].idMeal}'>${
  dishes[x].likes ? dishes[x].likes : '0'
} Like${dishes[x].likes > 1 ? 's' : ''}</h3>
          </div>
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
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories[selectedID].strCategory}`,
  );
  dishes = await dishes.json();
  dishes = dishes.meals;

  if (dishes.length > 6) {
    dishes.length = 6;
  }

  resetCategoriesAndCountDishes(dishes, categories, id);
  const updatedLikes = await getLikes(dishes);
  renderDishesInDOM(dishes, updatedLikes);
  setEventListeners(dishes);
  loading.style.display = 'none';
};

export default getDishesFromCategory;
