let $person = document.querySelector(".person");
let $person_info = document.querySelector(".person_info");
let $homeworld_info = document.querySelector(".homeworld_info");
let $starships_info = document.querySelector(".starships_info");
let $vehicles_info = document.querySelector('.vehicles_info')
let $films_info = document.querySelector('.films_info')
let url1 = "https://swapi.dev/api/people/5/";
let url2 = "https://swapi.dev/api/people/16/";
let url3 = "https://swapi.dev/api/people/4/";

function loadData(url) {
  if (url.length == 0) {
    return;
  }
  let req = new XMLHttpRequest();
  let person;
  req.open("GET", url, false);
  req.send();
  if (req.status !== 200) {
    console.log(`REQ error code ${req.status}. ${req.statusText}`);
  } else {
    person = JSON.parse(req.response);
  }
  return person;
}
let person1 = loadData(url1);
person2 = loadData(url2);
person3 = loadData(url3);
function showData4(obj) {
  for (key in obj) {
    if (
      !Array.isArray(obj[key])
    )
      writeData(key, obj[key], $films_info);
  }
}
function showData3(obj) {
  for (key in obj) {
    if (
      !obj[key].includes("2014") &&
      !obj[key].includes("http") &&
      !Array.isArray(obj[key])
    )
      writeData(key, obj[key], $vehicles_info);
  }
}

function showData2(obj) {
  for (key in obj) {
    if (
      !obj[key].includes("2014") &&
      !obj[key].includes("http") &&
      !Array.isArray(obj[key])
    )
      writeData(key, obj[key], $starships_info);
  }
}

function showData1(obj) {
  for (key in obj) {
    if (
      !obj[key].includes("2014") &&
      !obj[key].includes("http") &&
      !Array.isArray(obj[key])
    )
      writeData(key, obj[key], $homeworld_info);
  }
}
function showData(obj) {
  for (key in obj) {
    if (
      !obj[key].includes("2014") &&
      !obj[key].includes("http") &&
      !Array.isArray(obj[key])
    )
      writeData(key, obj[key], $person_info);
  }
}
function writeData(key, value, place) {
  let html = `</br><b>${key} :</b> <i> ${value}</i>`;
  place.insertAdjacentHTML("beforeend", html);
}

btn1.addEventListener("click", () => {
  $person_info.innerHTML = "";
  $person_info.classList.add('person_info_style')
  let person_h = document.createElement('h3')
  person_h.textContent = 'Person Information'
  $person_info.appendChild(person_h)
  showData(person3);


  $homeworld_info.innerHTML = "";
  $homeworld_info.classList.add('homeworld_info_style')
  let homew_h = document.createElement('h3')
  homew_h.textContent = 'Homeworld'
  $homeworld_info.appendChild(homew_h)
  showData1(loadData(person3.homeworld));


  $starships_info.innerHTML = "";
  $starships_info.classList.add('starships_info_style')
  let starship_h = document.createElement('h3')
  starship_h.textContent = 'Starship Information'
  $starships_info.appendChild(starship_h)
  showData2(loadData(person3.starships));

  $vehicles_info.innerHTML = "";
  $vehicles_info.classList.add('starships_info_style')
  let vehicles_h = document.createElement('h3')
  vehicles_h.textContent = 'Vehicles Information'
  $vehicles_info.appendChild(vehicles_h)
  showData3(loadData(person3.vehicles));

  $films_info.innerHTML = "";
  $films_info.classList.add('films_info_style')
  let films_h = document.createElement('h3')
  films_h.textContent = 'Films Information'
  $films_info.appendChild(films_h)
  showData4(loadData(person3.films[0]));
  showData4(loadData(person3.films[1]));
  showData4(loadData(person3.films[2]));
  showData4(loadData(person3.films[3]));






});
btn2.addEventListener("click", () => {
  $person_info.innerHTML = "";
  $person_info.classList.add('person_info_style')
  let person_h = document.createElement('h3')
  person_h.textContent = 'Person Information'
  $person_info.appendChild(person_h)
  showData(person1);


  $homeworld_info.innerHTML = "";
  $homeworld_info.classList.add('homeworld_info_style')
  let homew_h = document.createElement('h3')
  homew_h.textContent = 'Homeworld'
  $homeworld_info.appendChild(homew_h)
  showData1(loadData(person1.homeworld));


  $starships_info.innerHTML = "";
  $starships_info.classList.add('starships_info_style')
  let starship_h = document.createElement('h3')
  starship_h.textContent = 'Starship Information'
  $starships_info.appendChild(starship_h)
  showData2(loadData(person1.starships));

  $vehicles_info.innerHTML = "";
  $vehicles_info.classList.add('starships_info_style')
  let vehicles_h = document.createElement('h3')
  vehicles_h.textContent = 'Vehicles Information'
  $vehicles_info.appendChild(vehicles_h)
  showData3(loadData(person1.vehicles));

  $films_info.innerHTML = "";
  $films_info.classList.add('films_info_style')
  let films_h = document.createElement('h3')
  films_h.textContent = 'Films Information'
  $films_info.appendChild(films_h)
  showData4(loadData(person1.films[0]));
  showData4(loadData(person1.films[1]));
  showData4(loadData(person1.films[2]));
  showData4(loadData(person1.films[3]));

});
btn3.addEventListener("click", () => {
  $person_info.innerHTML = "";
  $person_info.classList.add('person_info_style')
  let person_h = document.createElement('h3')
  person_h.textContent = 'Person Information'
  $person_info.appendChild(person_h)
  showData(person2);


  $homeworld_info.innerHTML = "";
  $homeworld_info.classList.add('homeworld_info_style')
  let homew_h = document.createElement('h3')
  homew_h.textContent = 'Homeworld'
  $homeworld_info.appendChild(homew_h)
  showData1(loadData(person2.homeworld));


  $starships_info.innerHTML = "";
  $starships_info.classList.add('starships_info_style')
  let starship_h = document.createElement('h3')
  starship_h.textContent = 'Starship Information'
  $starships_info.appendChild(starship_h)
  showData2(loadData(person2.starships));

  $vehicles_info.innerHTML = "";
  $vehicles_info.classList.add('starships_info_style')
  let vehicles_h = document.createElement('h3')
  vehicles_h.textContent = 'Vehicles Information'
  $vehicles_info.appendChild(vehicles_h)
  showData3(loadData(person2.vehicles));

  $films_info.innerHTML = "";
  $films_info.classList.add('films_info_style')
  let films_h = document.createElement('h3')
  films_h.textContent = 'Films Information'
  $films_info.appendChild(films_h)
  showData4(loadData(person2.films[0]));
  showData4(loadData(person2.films[1]));
  showData4(loadData(person2.films[2]));
});
