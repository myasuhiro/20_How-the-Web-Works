// const $gifArea = $("#gif-area");
// const $searchInput = $("#search");

// function addGif(res) {
//   // console.log(res);
//   let numResults = res.data.length;
//   if (numResults) {
//     const randomIdx = Math.floor(Math.random() * numResults);
//     const $newGif = $("<img>", {
//       src: res.data[randomIdx].images.original.url
//     });
//     $gifArea.append($newGif);
//   }
// }

// $("form").on("submit", async function(evt) {
//   evt.preventDefault();

//   let searchTerm = $searchInput.val();
//   $searchInput.val("");

//   const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
//     params: {
//       q: searchTerm,
//       api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
//     }
//   });
//   addGif(response.data);
// });

// $('#remove').on("click", function() {
//   $gifArea.empty();
// })

axios.get("http://api.giphy.com/v1/gifs/search"