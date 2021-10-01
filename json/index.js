/*
JSON:
every key must be a string
*/

// XMLHttpRequest
const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", function () {
  console.log("it worked");
  const data = JSON.parse(this.responseText); // parse the JSON
  console.log(data);
  for (let planet of data.results) {
    console.log(planet.name);
  }
});
firstReq.addEventListener("error", () => {
  console.log("error");
});
firstReq.open("GET", "https://swapi.dev/api/planets/");
firstReq.send();

// fetch
fetch("https://swapi.dev/api/planets/")
  .then((response) => {
    console.log(response); // returns a readable stream
    response.json().then((data) => {
      console.log(data);
      for (let planet of data.results) {
        console.log(planet.name);
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
