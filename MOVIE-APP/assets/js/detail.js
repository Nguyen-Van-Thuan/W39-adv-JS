const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'


// B1: GET id Movie 
let params = new URLSearchParams(document.location.search);
let idDetail = params.get("id");
// console.log(id);

// Trong truong hop api ho tro, hoac o day 1 mang du lieu mau fix cung
const getApi = async (url) => {
  let response = await axios.get(url);
  showDetail(response.data.results);
}
getApi(API_URL);

// Hien thi chi tiet bo phim khop voi api
const showDetail = (data) => {

  // Truy cap phan tu
  let imgDetail = document.querySelector(".image-detail-js");

  let detail = data.filter(item => {
    return item.id == idDetail;
  });

  console.log(detail)
  // console.log(detail[0])

  imgDetail.innerHTML = `<img src="${IMG_PATH + detail[0].poster_path}" alt="anh movie">`;


}
