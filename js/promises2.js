export const getPlanets = async  (id = 1) => {
    let response = await fetch(`https://swapi.dev/api/planets/${id}`);
    let data = await response.json();
    return data;
    } catch(error){
    console.log(error);
    }


export const getEyeColor = async  (id = 1) => {
    let character = await fetch(`https://swapi.dev/api/planets/${id}`);
    let data = await response.json();
    return data;
} catch(error) {
    console.log(error);
}
}























// export const getPlanets = `https://swapi.dev/api/planets/1`;
// export const data = async (name) => {
//     try {
//         const response = await fetch(`https://swapi.dev/api/planets/1`);
//         if (!response.ok) {
//             throw new Error(`Failed to fetch ${1}: ${response.status}`);
//         }
//         const data = await response.json();
//
//
//     } catch (error) {
//         console.error(error); // log the error
//         throw new Error('Error fetching SWAPI data'); // throw a new error
//     }
//
//         async function getPlanets(planets) {
//         const url = 'https://swapi.dev/api/planets/1';
//         const planets = await fetchResource('https://swapi.dev/api/planets/1');
//         return planets;
//     }
// }
//
//


// export const getPlanet = async (name) => {
//     try {
//         const response = await fetch('https://swapi.dev/api/planets/1');
//         console.log(response);
//
//         const data = await response.json(); // use await instead of .then to get the data
//
//         const planets = data.find(event => event.type === "PushEvent");
//
//         return planets.toString();
//     } catch (error) {
//         console.error(error); // log the error
//         throw new Error('Error fetching SWAPI data'); // throw a new error
//     }
// };
//
// export const renderName = (name) => {
//     const element = document.createElement('div');
//     element.classList.add('user-card');
//     element.innerHTML = `
//     <h2>${name}</h2>
//   `;
//     parent.appendChild(element);
// };
// console.log(renderName);
//

/*
TODO: using separation of concerns principles, module syntax, and
 async/await, create  series of code that:
 return specific planet
 return the eye color of specific character
 return all data on a specific movie
 BONUS: Add it onto the DOM however you want
 from: https://swapi.dev/api/planets/1/
 no API key required
 */
