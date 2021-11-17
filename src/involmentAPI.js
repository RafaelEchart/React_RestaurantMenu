const getLikes = async () => {
  let likesOfDishes = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xFhLPbE0OxSNE2QeBp9w/likes/');
  likesOfDishes = await likesOfDishes.json();
  return likesOfDishes;
};

export default getLikes;