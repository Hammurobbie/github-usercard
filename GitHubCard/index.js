/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios
  .get(`https://api.github.com/users/Hammurobbie`)
  .then(response => {
    // console.log(response.data);
    entryPoint.appendChild(createComponent(response.data));
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "https://api.github.com/users/bamfranceschi",
  "https://api.github.com/users/michelangelo17",
  "https://api.github.com/users/phil-mac",
  "https://api.github.com/users/taylorbcool",
  "https://api.github.com/users/bseverino"
];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const createComponent = function(obj) {
  //create de babies
  console.log(obj);
  const cardDiv = document.createElement("div"),
    img = document.createElement("img"),
    infoDiv = document.createElement("div"),
    name = document.createElement("h3"),
    userName = document.createElement("p"),
    location = document.createElement("p"),
    profile = document.createElement("p"),
    URL = document.createElement("a"),
    followers = document.createElement("p"),
    following = document.createElement("p"),
    bio = document.createElement("p");

  //nest de babies
  cardDiv.appendChild(img);
  cardDiv.appendChild(infoDiv);
  infoDiv.appendChild(name);
  infoDiv.appendChild(userName);
  infoDiv.appendChild(location);
  infoDiv.appendChild(profile);
  profile.appendChild(URL);
  infoDiv.appendChild(followers);
  infoDiv.appendChild(following);
  infoDiv.appendChild(bio);

  //give de babies classes
  cardDiv.classList.add("card");
  infoDiv.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");

  //give de babies contnent
  img.src = obj.avatar_url;
  name.textContent = `Name: ${obj.name}`;
  userName.textContent = `Username: ${obj.login}`;
  location.textContent = `Location: ${obj.location}`;
  URL.textContent = `Profile: ${obj.html_url}`;
  URL.href = obj.html_url;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = `Bio: ${obj.bio}`;

  return cardDiv;
};

const entryPoint = document.querySelector(".cards");

followersArray.forEach(item => {
  axios
    .get(item)
    .then(response => {
      // console.log(response.data);
      entryPoint.appendChild(createComponent(response.data));
    })
    .catch(error => {
      console.log("The data was not returned", error);
    });
});
