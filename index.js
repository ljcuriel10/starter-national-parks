const descriptions = document.querySelectorAll(".description");
const ratings = document.querySelectorAll(".rating .value");
const parks = document.querySelectorAll(".park");
const header = document.querySelector("header");
const main = document.querySelector("main");
const park = main.querySelector(".park");
const firstBtn = document.querySelector(".rateBtn");
const nameSorter = document.querySelector('#nameSorter');
const ratingSorter = document.querySelector('#ratingSorter');
const parksList = main.querySelectorAll('.park');
const parksArray = Array.from(parksList);
console.log(parksArray)

console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");
// for (let desc of descriptions.values()) {
//     let content = desc.innerText;
    
//     if(content.length > 250) {
//         content = content.slice(0,250);
//         content = content + '<a href="#">...</a>';
//     }
//     desc.innerHTML = content
//   }

//   for (let rating of ratings) {
//       let ratingValue = parseFloat(rating.innerText);
      
//       if (ratingValue > 4.7) {
//           rating.classList.add("high-rating");
//           rating.classList.remove("value");
//       }
//   }

//   const numberParks = parks.length;
//   const newElement = document.createElement("div");

//   newElement.innerText = `${numberParks} exciting parks to visit!`;
//   newElement.classList.add("header-statement");
//   header.appendChild(newElement);

//   main.removeChild(park);
nameSorter.addEventListener("click", (event) => {
    event.preventDefault();
    main.innerHTML = "";
    
    parksArray.sort((parkA, parkB) => {
        const parkAName = parkA.querySelector('h2').innerText;
        const parkBName = parkB.querySelector('h2').innerText;
        if (parkAName < parkBName) {
            return -1;
        } else if (parkAName > parkBName) {
            return 1;
        } else {
            return 0;
        }
    });
    parksArray.forEach((park) => {
        main.appendChild(park);
    })
})

ratingSorter.addEventListener("click", (event) => {
    event.preventDefault();
    main.innerHTML = "";

    parksArray.sort((parkA, parkB) => {
        const parkARating = parseFloat(parkA.querySelector(".rating .value").innerHTML)
        const parkBRating = parseFloat(parkB.querySelector(".rating .value").innerHTML)
        if(parkARating < parkBRating) {
            return 1;
        } else if (parkARating > parkBRating) {
            return -1;
        } else {
            return 0;
        }
    });

    parksArray.forEach((park) => {
        main.appendChild(park);
    });
})
//   firstBtn.addEventListener("click", (event) => {
//       console.log("You clicked the button", event);
//   })
