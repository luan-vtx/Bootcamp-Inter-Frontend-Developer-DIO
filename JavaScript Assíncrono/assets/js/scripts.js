const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const changeCatBtn = document.getElementById('change-cat');

const getCats = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data.webpurl;
  } catch (e) {
    console.log(e.message);
  }
}

const loadImg = async () => {
  const catImg = document.getElementById('cat');
	catImg.src = await getCats();
};

loadImg();

changeCatBtn.addEventListener('click', () => loadImg());