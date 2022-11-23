let projNum = parseInt(window.location.search.split('?')[1]);

if (projNum === 2) {
    document.getElementById("project-titulo").innerHTML = "Dashcoin";
    document.getElementById("project-subtitulo").innerHTML = "Web Development";
    document.getElementsByTagName("img")[0].src = "/assets/projects-section/2.jpg";
    document.getElementsByTagName("img")[1].src = "/assets/projects-section/2.jpg";
}
else if (projNum === 3) {
    document.getElementById("project-titulo").innerHTML = "Vectorify";
    document.getElementById("project-subtitulo").innerHTML = "User Experience Design";
    document.getElementsByTagName("img")[0].src = "/assets/projects-section/3.jpg";
    document.getElementsByTagName("img")[1].src = "/assets/projects-section/3.jpg";
}