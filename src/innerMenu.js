export const convertYoutubeLink = (link) => {
  // https://www.youtube.com/watch?v=ONX74yP6JnI
  // https://www.youtube.com/embed/ONX74yP6JnI
  const iframe = document.getElementById('iframe');
  const id = link.split('?v=')[1];
  const newLink = `https://www.youtube.com/embed/${id}`;
  console.log(newLink);
  iframe.src = newLink;
};

export const innerMenu = () => {
  const tabContent = document.querySelectorAll('.container__inner');
  const tabItem = document.querySelectorAll('.container__item');

  for (let i = 0; i < tabItem.length; i += 1) {
    tabItem[i].addEventListener('mouseover', () => {
      tabContent.forEach((item) => {
        item.classList.add('container__inner_hidden');
      });

      tabItem.forEach((item) => {
        item.classList.remove('container__item_active');
      });

      tabContent[i].classList.remove('container__inner_hidden');
      tabItem[i].classList.add('container__item_active');
    });
  }
};
