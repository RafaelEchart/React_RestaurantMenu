export const getLikes = async () => {
  try {
    let likesOfDishes = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xFhLPbE0OxSNE2QeBp9w/likes/');
    likesOfDishes = await likesOfDishes.json();
    return likesOfDishes;
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const postLikes = async (id) => {
  const likeButton = document.getElementById(`like-${id}`);
  if (likeButton.classList.contains('liked')) {
    console.log('not allowed to like two times');
  } else {
    try {
      likeButton.classList.add('liked');
      await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xFhLPbE0OxSNE2QeBp9w/likes/', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: id,
        }),
      });
    } catch (err) {
      console.log(err);
    }

    const likeCounter = document.getElementById(`likeCounter-${id}`);
    const newNumberOfLikes = Number(likeCounter.innerHTML.split(' ')[0]) + 1;

    likeCounter.innerHTML = `${newNumberOfLikes} Like${newNumberOfLikes > 1 ? 's' : ''}`;
    return newNumberOfLikes;
  }
  return null;
};