// Goi API tu local len server - B1. Cai thu vien axios
let URL = `https://fakestoreapi.com/products`;

const getAPI = async(urlApi) => {
  try {
    let reponse = await axios.get(urlApi);
    console.log(reponse.data);
  } catch (error) {
    console.log(error);
  }
}
getAPI(URL);


// const getAPI = (urlApi) => {
//   try {
//     let reponse = axios.get(urlApi);
//     // console.log(reponse.data);
//     reponse.then((a)=>{
//       console.log(a);
//     })
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAPI(URL);