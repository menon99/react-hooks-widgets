const axios = require("axios");

// const request = axios.post(
//   "https://google-translate1.p.rapidapi.com/language/translate/v2",
//   {
//     source: "en",
//     q: "Hello, world!",
//     target: "es",
//   },
//   {
//     headers: {
//       "content-type": "application/x-www-form-urlencoded",
//       "x-rapidapi-host": "google-translate1.p.rapidapi.com",
//       "x-rapidapi-key": "f37a7aeb48msh99affaf130918f9p1dd469jsn5b93d8507950",
//       "accept-encoding": "application/gzip",
//       useQueryString: true,
//     },
//   }
// );
// request.then((response) => console.dir(response));
// request.catch((error) => console.log(error));

axios({
  method: "POST",
  url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "x-rapidapi-host": "google-translate1.p.rapidapi.com",
    "x-rapidapi-key": "f37a7aeb48msh99affaf130918f9p1dd469jsn5b93d8507950",
    "accept-encoding": "application/gzip",
    useQueryString: true,
  },
  data: {
    source: "en",
    q: "Hello, world!",
    target: "es",
  },
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
