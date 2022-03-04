const button = document.querySelector('.button');
const input = document.querySelector('.input');
const moviePoster = document.querySelector('.rightBox');
const movieInfo = document.querySelector('.movieInfo');

const apiKey = "c4332220";
let apiUrl = "https://www.omdbapi.com/?apikey="+apiKey;

input.addEventListener("click", () => {
    input.value = "";
    moviePoster.innerHTML = "";
    movieInfo.innerHTML = "";
});

const displayInfo = (data) => {
    console.log(data);
    const {Poster, Title, Released, Director, Genre, Actors, imdbRating} = data;
    moviePoster.innerHTML = `<img class="poster img-thumbnail" src = ${Poster}/>`;
    movieInfo.innerHTML = 
        `<h3>Title : <span>${Title}</span></h3>
        <h3>Released date : <span>${Released}</span></h3>
        <h3>Director : <span>${Director}</span></h3>
        <h3>Genre : <span>${Genre}</span></h3>
        <h3>Actors : <span>${Actors}</span></h3>
        <h3>IMDB Rating : <span>${imdbRating}</span></h3>`
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