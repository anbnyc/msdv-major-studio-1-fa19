const searchUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers';
const objectBaseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

fetchMuseumData(searchUrl);

let metData;
let queryObjects = [];

// fetch a query
function fetchMuseumData(url) {
  window
    .fetch(url)
    .then(data => data.json())
    .then(data => {
      // console.log(data);
      fetchObjects(data);
    });
}

// from the response, fetch objects
function fetchObjects(data){
  let objectIDs = data.objectIDs;
  objectIDs.forEach(function(n) {
    // console.log(objectBaseUrl + n);
    let objUrl = objectBaseUrl + n;
    window
      .fetch(objUrl)
      .then(data => data.json())
      .then(data => {
        // console.log(data);
        addObject(data);
      });
  });
}

// create your own array using just the data you need
function addObject(objectData){
    var currentID = objectData.objectID;
    var currentTitle = objectData.title;
    var currentDate = objectData.objectBeginDate;
    var imgUrl = objectData.primaryImage;
    queryObjects[currentID] = {};
    queryObjects[currentID]["title"] = currentTitle;
    queryObjects[currentID]["date"] = currentDate;
    queryObjects[currentID]["image"] = imgUrl;
    console.log(queryObjects[currentID]);
}
