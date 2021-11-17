const popUpCommentWindow = document.getElementById('popup-comments-window');

const displayComments = async (dishIdMeal) => {
  let dish = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dishIdMeal}`,
  );
  dish = await dish.json();
  [dish] = dish.meals;
  popUpCommentWindow.parentElement.classList.remove('popup-window--hidden');
  popUpCommentWindow.parentElement.classList.add('popup-window--visible');
  popUpCommentWindow.innerHTML = `
  <header class="popup-window__header">
      <button class="popup-window__close comments-popup__close" id="popup-window__close">&times;</button>
      <img src="${dish.strMealThumb}" alt="${dish.strMeal}" class="popup-image" width="400">
      <h3> ${dish.strMeal} </h3>
  </header>
  <nav className="meal-navigation">
      <button class="SeeCommentsButton">Ingredients</button>
      <button class="SeeCommentsButton">Video</button>
      <button class="SeeCommentsButton">Recipe</button>
  </nav>
  <section class="meals-comments"> 
    <h3>Comments</h3>
    <ul class="comments-list"></ul>
  </section>
  <h3>Add a comment</h3>
  <form class="comments-form dflex-column-alignCenter-justifyCenter">
    <input type="text" name="dish-id" value="${dish.idMeal}" hidden>
    <label for="comment-name" hidden>Name</label>
    <input type="text" id="comment-name" placeholder="Your name" required>
    <label for="comment-text" hidden>Comment</label>
    <textarea id="comment-text" placeholder="Your comment" required></textarea>
    <button type="submit" class="comments-form__submit">Comment</button>
  `;
  const closePopUpWindow = document.getElementById('popup-window__close');
  closePopUpWindow.addEventListener('click', () => {
    popUpCommentWindow.parentElement.classList.add('popup-window--hidden');
    popUpCommentWindow.parentElement.classList.remove('popup-window--visible');
  });
};

export default displayComments;
