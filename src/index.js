import './style.css';
import './common.css';

const foodDishes = document.getElementById('foodDishes');
const arrayOfDishes = [
  {
    idMeal: '52772',
    strMeal: 'Teriyaki Chicken Casserole',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
    strTags: ['Meat', 'Casserole'],
  },
  {
    idMeal: '52773',
    strMeal: 'Honey Teriyaki Salmon',
    strMealThumb: 'https://www.themealdb.com//images//media//meals//xxyupu1468262513.jpg',
    strTags: ['Meat', 'Casserole'],
  },
  {
    idMeal: '52774',
    strMeal: 'Pad See Ew',
    strMealThumb: 'https://www.themealdb.com//images//media//meals//uuuspp1468263334.jpg',
    strTags: ['Meat', 'Casserole'],
  },
  {
    idMeal: '52775',
    strMeal: 'Vegan Lasagna',
    strMealThumb: 'https://www.themealdb.com//images//media//meals//rvxxuy1468312893.jpg',
    strTags: ['Meat', 'Casserole'],
  },
  {
    idMeal: '52776',
    strMeal: 'Chocolate Gateau',
    strMealThumb: 'https://www.themealdb.com//images//media//meals//tqtywx1468317395.jpg',
    strTags: ['Meat', 'Casserole'],
  },
  {
    idMeal: '52777',
    strMeal: 'Mediterranean Pasta Salad',
    strMealThumb: 'https://www.themealdb.com//images//media//meals//wvqpwt1468339226.jpg',
    strTags: ['Meat', 'Casserole'],
  },

];

for (let x = 0; x < arrayOfDishes.length; x += 1) {
  foodDishes.innerHTML += `<div class="card division flex-card dflex-row">
      <div class="align_images">
        <img
          src="${arrayOfDishes[x].strMealThumb}"
          width="554"
          class="imagen_proyectos"
          alt=""
        />
      </div>
      <div class="text_child">
          <h2>${arrayOfDishes[x].strMeal}</h2>
          
        <div class="dflex-row">
          <span class="gray_text">• ${arrayOfDishes[x].strTags[0]} </span>
          <span class="gray_text">• ${arrayOfDishes[x].strTags[1]}</span>
        </div>
          <button type="button" onclick="toggleModal(${x})" class="SeeCommentsButton">
            <span>Comments </span>
          </button>
        </div>
    </div>`;
}