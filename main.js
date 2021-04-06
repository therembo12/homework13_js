let $person = document.querySelector(".person");
let $person_info = document.querySelector(".person_info");
let $homeworld_info = document.querySelector(".homeworld_info");
let $starships_info = document.querySelector(".starships_info");
let $vehicles_info = document.querySelector(".vehicles_info");
let $films_info = document.querySelector(".films_info");
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
function showFilmsData(obj, $place) {
  for (i = 0; i < obj.length; i++) {
    let x = loadData(obj[i]);
    let list = ["edited", "created", "url"];
    for (key in x) {
      if (!list.includes(key) && !Array.isArray(x[key])) {
        writeData(key, x[key], $place);
      }
    }
  }
}

function showData(obj, $place) {
  for (key in obj) {
    if (
      !obj[key].includes("2014") &&
      !obj[key].includes("http") &&
      !Array.isArray(obj[key])
    )
      writeData(key, obj[key], $place);
  }
}
function writeData(key, value, place) {
  let html = `</br><b>${key} :</b> <i> ${value}</i>`;
  place.insertAdjacentHTML("beforeend", html);
}

btn1.addEventListener("click", () => {
  $person_info.innerHTML = "";
  $person_info.classList.add("person_info_style");
  let person_h = document.createElement("h3");
  person_h.textContent = "Person Information";
  $person_info.appendChild(person_h);
  showData(person3, $person_info);

  $homeworld_info.innerHTML = "";
  $homeworld_info.classList.add("homeworld_info_style");
  let homew_h = document.createElement("h3");
  homew_h.textContent = "Homeworld";
  $homeworld_info.appendChild(homew_h);
  showData(loadData(person3.homeworld), $homeworld_info);

  $starships_info.innerHTML = "";
  $starships_info.classList.add("starships_info_style");
  let starship_h = document.createElement("h3");
  starship_h.textContent = "Starship Information";
  $starships_info.appendChild(starship_h);
  showData(loadData(person3.starships), $starships_info);

  $vehicles_info.innerHTML = "";
  $vehicles_info.classList.add("starships_info_style");
  let vehicles_h = document.createElement("h3");
  vehicles_h.textContent = "Vehicles Information";
  $vehicles_info.appendChild(vehicles_h);
  showData(loadData(person3.vehicles), $vehicles_info);

  $films_info.innerHTML = "";
  $films_info.classList.add("films_info_style");
  let films_h = document.createElement("h3");
  films_h.textContent = "Films Information";
  $films_info.appendChild(films_h);
  showFilmsData(person3.films, $films_info);
});
btn2.addEventListener("click", () => {
  $person_info.innerHTML = "";
  $person_info.classList.add("person_info_style");
  let person_h = document.createElement("h3");
  person_h.textContent = "Person Information";
  $person_info.appendChild(person_h);
  showData(person1, $person_info);

  $homeworld_info.innerHTML = "";
  $homeworld_info.classList.add("homeworld_info_style");
  let homew_h = document.createElement("h3");
  homew_h.textContent = "Homeworld";
  $homeworld_info.appendChild(homew_h);
  showData(loadData(person1.homeworld), $homeworld_info);

  $starships_info.innerHTML = "";
  $starships_info.classList.add("starships_info_style");
  let starship_h = document.createElement("h3");
  starship_h.textContent = "Starship Information";
  $starships_info.appendChild(starship_h);
  showData(loadData(person1.starships), $starships_info);

  $vehicles_info.innerHTML = "";
  $vehicles_info.classList.add("starships_info_style");
  let vehicles_h = document.createElement("h3");
  vehicles_h.textContent = "Vehicles Information";
  $vehicles_info.appendChild(vehicles_h);
  showData(loadData(person1.vehicles), $vehicles_info);

  $films_info.innerHTML = "";
  $films_info.classList.add("films_info_style");
  let films_h = document.createElement("h3");
  films_h.textContent = "Films Information";
  $films_info.appendChild(films_h);
  showFilmsData(person1.films, $films_info);
});
btn3.addEventListener("click", () => {
  $person_info.innerHTML = "";
  $person_info.classList.add("person_info_style");
  let person_h = document.createElement("h3");
  person_h.textContent = "Person Information";
  $person_info.appendChild(person_h);
  showData(person2, $person_info);

  $homeworld_info.innerHTML = "";
  $homeworld_info.classList.add("homeworld_info_style");
  let homew_h = document.createElement("h3");
  homew_h.textContent = "Homeworld";
  $homeworld_info.appendChild(homew_h);
  showData(loadData(person2.homeworld), $homeworld_info);

  $starships_info.innerHTML = "";
  $starships_info.classList.add("starships_info_style");
  let starship_h = document.createElement("h3");
  starship_h.textContent = "Starship Information";
  $starships_info.appendChild(starship_h);
  showData(loadData(person2.starships), $starships_info);

  $vehicles_info.innerHTML = "";
  $vehicles_info.classList.add("starships_info_style");
  let vehicles_h = document.createElement("h3");
  vehicles_h.textContent = "Vehicles Information";
  $vehicles_info.appendChild(vehicles_h);
  showData(loadData(person2.vehicles), $vehicles_info);

  $films_info.innerHTML = "";
  $films_info.classList.add("films_info_style");
  let films_h = document.createElement("h3");
  films_h.textContent = "Films Information";
  $films_info.appendChild(films_h);
  showFilmsData(person2.films, $films_info);
});
