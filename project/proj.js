let projNum = parseInt(window.location.search.split("?")[1]);

let tituloName;
let subtituloEmail;
let fotoNombre;
let paragraphBody;

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
          paragraphBody = cleanResponse[i].body;
        }

        document.getElementById("project-titulo").innerHTML = tituloName;
        document.getElementById("project-subtitulo").innerHTML = subtituloEmail;
        document.querySelector(
          ".proj-foto"
        ).src = `/assets/projects-section/${fotoNombre}.jpg`;
        document.querySelector(
          ".blurr"
        ).src = `/assets/projects-section/${fotoNombre}.jpg`;
        document.getElementById("proj-texto").innerHTML = paragraphBody;
      }
      console.log("done!");
    });
};

dynamicFetch();
