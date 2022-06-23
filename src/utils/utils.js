export const shuffleArray = (array) => {
  console.log(array[1]);
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const getCategorizedData = (videos, category) => {
  if (category === 'All') {
    return [...videos];
  }
  return videos.filter((video) => video.category === category);
};
