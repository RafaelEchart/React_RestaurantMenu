import _ from 'lodash';
import { innerMenu, convertYoutubeLink } from './innerMenu.js';

import { addComment, fetchComments } from './involvementAPI.js';

const popUpCommentWindow = document.getElementById('popup-comments-window');
let commentsContainer;

export const commentsCount = (mealComments) => {
  let commentCounter = 0;
  let commentIndex = 0;

  while (mealComments[commentIndex] !== undefined) {
    commentCounter += 1;
    commentIndex += 1;
  }
  return commentCounter;
};

const displayComments = (mealComments) => {
  commentsContainer = document.querySelector('.comments-list');
  const numberOfComments = commentsCount(mealComments);
  const commentsHeader = document.querySelector('.comments-header');

  if (mealComments.error !== undefined) {
    commentsContainer.insertAdjacentHTML(
      'beforeend',
      `
    <div class="comments-list__item no-comments errorComments">
    <p>No comments to display</p>
    </div>
    `,
    );

    return;
  }

  commentsHeader.innerHTML = `${
    numberOfComments > 1 ? 'Comments' : 'Comment'
  } (${numberOfComments})`;
  commentsContainer.innerHTML = '';
  _.forEach(mealComments, (comment) => {
    commentsContainer.insertAdjacentHTML(
      'beforeend',
      `
    <li class="comments-list__item">
    <header class="comments-list__item-header">
      <div class="comments-list__item-header__info dflex-row dflex-alignCenter">
        <span class="comments-list__item-header__info__name dflex-alignCenter">
        ${comment.username}
        </span>
        <span class="comments-list__item-header__info__date dflex-alignCenter">
        ${comment.creation_date}
        </span>
      </div>
      <article class="comments-list__item-text">
        ${comment.comment}
      </article>
    <header>
    </li>
    `,
    );
  });
};

const displayPopUpCommentWindow = async (dishIdMeal) => {
  const loadingPopupCard = document.getElementById(`card-${dishIdMeal}`);
  loadingPopupCard.insertAdjacentHTML(
    'afterbegin',
    `<div id="loading-${dishIdMeal}" class="loading-popup">
  <div class="loader">Loading...</div>
</div>`,
  );
  const loading = document.getElementById(`loading-${dishIdMeal}`);
  loading.style.display = 'flex';

  const mealComments = await fetchComments(dishIdMeal);
  let dish = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dishIdMeal}`,
  );
  dish = await dish.json();
  [dish] = dish.meals;

  let ingredient = '';
  for (let x = 1; x <= 20; x += 1) {
    if (dish[`strIngredient${x}`] === null || dish[`strIngredient${x}`] === '') break;
    ingredient += `<span><strong>${dish[`strIngredient${x}`]}:</strong>  ${
      dish[`strMeasure${x}`]
    }</span>`;
  }

  popUpCommentWindow.parentElement.classList.remove('popup-window--hidden');
  popUpCommentWindow.parentElement.classList.add('popup-window--visible');
  popUpCommentWindow.scrollTo(0, 0);
  popUpCommentWindow.innerHTML = `
  <header class="popup-window__header">
      <button class="popup-window__close comments-popup__close" id="popup-window__close">&times;</button>
      <img src="${dish.strMealThumb}" alt="${dish.strMeal}" class="popup-image" width=300;>
      <h3> ${dish.strMeal} </h3>
  </header>
  <div class="container">
  <ul class="container__list">
    <li class="container__item container__item_active">
      <span class="container__link">Instructions</span>
    </li>
    <li class="container__item">
      <span class="container__link">Ingredients</span>
    </li>
    <li class="container__item">
      <span class="container__link">Video</span>
    </li>
   
   
  </ul>
  <div class="container__inner">
    <h2 class="content__subtitle">Intructions</h2>
    <p class="content__description">
    ${dish.strInstructions}
    </p>
  </div>
  <div class="container__inner container__inner_hidden">
    <h2 class="content__subtitle">Ingredients</h2>
    <p class="content__description dflex-column-alignLeft-justifyCenter">
    ${ingredient}
    </p>
  </div>
  <div class="container__inner container__inner_hidden">
      <div class="display_align container__inner">
          <iframe id="iframe" class="iframe" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
  </div>
  
  
</div>
  <section class="meals-comments dflex-column-alignCenter-justifyCenter"> 
    <h3 class="comments-header"></h3>
    <ul class="comments-list dflex-column-alignCenter-justifyFlexStart" id="commentBox"></ul>
  </section>
  <h3>Add a comment</h3>
  <form class="comments-form dflex-column-alignCenter-justifyCenter">
  <label for="comment-name" hidden>Name</label>
  <input type="text" maxlength="250" id="comment-name" placeholder="Your name" required>
  <label for="comment-text" hidden>Comment</label>
  <textarea id="comment-text" placeholder="Your comment" required></textarea>
  <button type="submit" id="newcomment-button" class="comments-form__submit SeeCommentsButton"><div id="loading-newcomment" class="loading-newcomment">
  <div class="loader-comment">Loading...</div>
</div><span id="new-comment-text">Comment</span></button>
  `;

  innerMenu();
  convertYoutubeLink(dish.strYoutube);

  const closePopUpWindow = document.getElementById('popup-window__close');
  const iframe = document.getElementById('iframe');
  const commentsForm = document.querySelector('.comments-form');

  closePopUpWindow.addEventListener('click', () => {
    popUpCommentWindow.parentElement.classList.add('popup-window--hidden');
    popUpCommentWindow.parentElement.classList.remove('popup-window--visible');
    iframe.src = '';
  });
  commentsForm.addEventListener('submit', async (event) => {
    const loading = document.getElementById('loading-newcomment');
    const textComment = document.getElementById('new-comment-text');
    event.preventDefault();
    const comment = {
      username: event.target.querySelector('#comment-name').value,
      comment: event.target.querySelector('#comment-text').value,
      item_id: dishIdMeal,
    };
    loading.style.display = 'flex';
    textComment.style.display = 'none';

    const response = await addComment(comment);
    if (response.status === 201) {
      const mealComments = await fetchComments(dishIdMeal);
      displayComments(mealComments);
      loading.style.display = 'none';
      textComment.style.display = 'block';

      commentsContainer.scrollTop = commentsContainer.scrollHeight;
    }
  });
  displayComments(mealComments);
  commentsCount(mealComments);
  loading.style.display = 'none';
  loading.remove();
};

export default displayPopUpCommentWindow;
