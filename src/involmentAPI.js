const UniqueId = 'xFhLPbE0OxSNE2QeBp9w';

export const getLikes = async () => {
  try {
    let likesOfDishes = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${UniqueId}/likes/`,
    );
    likesOfDishes = await likesOfDishes.json();
    return likesOfDishes;
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const addComment = async (comment) => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xFhLPbE0OxSNE2QeBp9w/comments',
    {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  );
  return response;
};

export const fetchComments = async (mealId) => {
  try {
    let comments = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${UniqueId}/comments?item_id=${mealId}`,
    );
    comments = await comments.json();
    return comments;
  } catch (error) {
    return null;
  }
};

export const postLikes = async (id) => {
  const likeButton = document.getElementById(`like-${id}`);
  if (likeButton.classList.contains('liked')) {
    console.log('not allowed to like two times');
  } else {
    try {
      likeButton.classList.add('liked');
      await fetch(
        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${UniqueId}/likes/`,
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            item_id: id,
          }),
        },
      );
    } catch (err) {
      console.log(err);
    }

    const likeCounter = document.getElementById(`likeCounter-${id}`);
    const newNumberOfLikes = Number(likeCounter.innerHTML.split(' ')[0]) + 1;

    likeCounter.innerHTML = `${newNumberOfLikes} Like${
      newNumberOfLikes > 1 ? 's' : ''
    }`;

    let userLikes = localStorage.getItem('userLikes');
    if (userLikes && userLikes.length) {
      userLikes = JSON.parse(userLikes);
      console.log(userLikes);

      userLikes.push(id);

      localStorage.setItem('userLikes', JSON.stringify(userLikes));
    } else {
      localStorage.setItem('userLikes', JSON.stringify([id]));
    }
    return newNumberOfLikes;
  }
  return null;
};
