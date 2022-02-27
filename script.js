const button = document.querySelector('.button');
const input = document.querySelector('.input');
const moviePoster = document.querySelector('.rightBox');
const movieInfo = document.querySelector('.movieInfo');

const apiKey = "c4332220";
let apiUrl = "http://www.omdbapi.com/?apikey="+apiKey;

input.addEventListener("click", () => {
    input.value = "";
    moviePoster.innerHTML = "";
    movieInfo.innerHTML = "";
});

const displayInfo = (data) => {
    console.log(data);
    const {Poster, Title, Released, Director, Genre, Actors} = data;
    moviePoster.innerHTML = `<img class="poster img-thumbnail" src = ${Poster}/>`;
    movieInfo.innerHTML = 
        `<h2>Title : ${Title}</h2>
        <h2>Released date : ${Released}</h2>
        <h2>Director : ${Director}</h2>
        <h2>Genre : ${Genre}</h2>
        <h2>Actors : ${Actors}</h2>`
}

button.addEventListener("click", (event) => {
    event.preventDefault();
    const movieName = input.value;
    if(movieName.length != 0){
        fetch(`${apiUrl}&t=${movieName}`)
        .then((res) => res.json())
        .then((data) => {
            displayInfo(data);
        })
        .catch((error) => {
            alert("Error in fetching data");
            console.log(error);
        })
    }
    else{
        alert("Enter a movie name!");
    }
});