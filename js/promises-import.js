import {getPlanets, getCharacter, getMovie} from './promises2.js';

(async () => {
    let planet = await getPlanets(1);
    let luke = await getCharacter(1);
    let
}



















// import {getPlanets} from './promises2.js';
//
//     try {
//         const planets = await getPlanets(1);
//         outputDiv.innerHTML = `
//       <h2>${planet.name}</h2>
//     `;
//     } catch (error) {
//         console.error(error);
//     }

//     try {
//         const planet = await getPlanet(1);
//         outputDiv.innerHTML = `
//       <h2>Planet: ${name}</h2>
//     `;
//     } catch (error) {
//         console.error(error);
//     }
// movieButton.addEventListener('click', async () => {
//     try {
//         const movie = await getMovieData(1);
//         outputDiv.innerHTML = `
//       <h2>${movie.title}</h2>
//       <p>Director: ${movie.director}</p>
//       <p>Release Date: ${movie.release_date}</p>
//     `;
//     } catch (error) {
//         console.error(error);
//     }
//



// import {getPlanets} from "./promises2.js"; //THE GETTER
//
// function render(name) {
// }
// (async () => {
//     let name = await getPlanets(1);
// })();
