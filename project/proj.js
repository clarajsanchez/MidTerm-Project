let projNum = parseInt(window.location.search.split("?")[1]);

let tituloName;
let subtituloEmail;
let fotoNombre;

const dynamicFetch = async () => {
  await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments?_start=0&_limit=4"
  )
    .then((response) => response.json())
    .then((cleanResponse) => {
      for (let i = 0; i < cleanResponse.length; i++) {
        if (projNum === cleanResponse[i].id) {
          tituloName = cleanResponse[i].name;
          subtituloEmail = cleanResponse[i].email;
          fotoNombre = cleanResponse[i].id;
        }

        document.getElementById("project-titulo").innerHTML = tituloName;
        document.getElementById("project-subtitulo").innerHTML = subtituloEmail;
        document.querySelector(
          ".proj-foto"
        ).src = `/assets/projects-section/${fotoNombre}.jpg`;
        document.querySelector(
          ".blurr"
        ).src = `/assets/projects-section/${fotoNombre}.jpg`;
        document.getElementById("proj-texto").innerHTML = "Dashcoin-text";
      }
      console.log("done!");
    });
};

dynamicFetch();

// if (projNum === 2) {
// } else if (projNum === 3) {
//   document.getElementById("project-titulo").innerHTML = "Vectorify";
//   document.getElementById("project-subtitulo").innerHTML =
//     "User Experience Design";
//   document.getElementsByTagName("img")[0].src =
//     "/assets/projects-section/3.jpg";
//   document.getElementsByTagName("img")[1].src =
//     "/assets/projects-section/3.jpg";
//   document.getElementById("proj-texto").innerHTML = "Vectorify-text";
// }
