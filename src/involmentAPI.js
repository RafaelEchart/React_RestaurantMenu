const UniqueId = 'xFhLPbE0OxSNE2QeBp9w';

const getLikes = async () => {
  let likesOfDishes = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${UniqueId}/likes/`
  );
  likesOfDishes = await likesOfDishes.json();
  return likesOfDishes;
};

export const fetchComments = async (mealId) => {
  try {
    let comments = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${UniqueId}/comments?item_id=${mealId}`
    );
    comments = await comments.json();
    return comments;
  } catch (error) {
    return false;
  }
};

export default getLikes;
