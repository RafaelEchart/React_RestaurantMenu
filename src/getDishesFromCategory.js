import getLikes from './involmentAPI';

const renderIntro = (categoryInfo) => {
  const categoryText = `${(categoryInfo.strCategoryDescription).substring(0, 250)}...`;
  const introBannerImage = document.getElementById('introBanner');
  const introBannerH1 = document.getElementById('introBannerH1');
  const introBannerSpan = document.getElementById('introBannerSpan');

  introBannerImage.style.backgroundImage = `url('${categoryInfo.strCategoryThumb}')`;
  introBannerH1.innerHTML = categoryInfo.strCategory;
  introBannerSpan.innerHTML = categoryText;
};

const renderDishesInDOM = (dishes, likes) => {
  const foodDishes = document.getElementById('foodDishes');
  if (dishes.length > 6) { dishes.length = 6; }

  likes.forEach((like) => {
    dishes.forEach((dish) => {
      if (dish.idMeal === like.item_id) {
        dish.likes = like.likes;
      }
    });
  });

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
            
          <div class="dflex-center-spaceBetween">
            <button type="button" onclick="toggleModal(${x})" class="SeeCommentsButton" id=${dishes[x].idMeal}>
              <span>Comments </span>
            </button>
            <h3 class="like-text">${dishes[x].likes ? dishes[x].likes : '0'} Likes</h3>
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

  let dishes = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories[selectedID].strCategory}`);
  dishes = await dishes.json();
  dishes = dishes.meals;

  const updatedLikes = await getLikes(dishes);

  renderDishesInDOM(dishes, updatedLikes);
  loading.style.display = 'none';
};

export default getDishesFromCategory;