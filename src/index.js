function fetchUsers(){
    fetch (" http://localhost:3000/users") 
    .then((resp) =>resp.json())
    .then(getInfo);
    }

function getInfo(users){

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const signIn =document.getElementById('signInBtn');
    const loginForm = document.getElementById('loginPrompt');
    const welcome = document.getElementById('welcomeMsg');
   

    for (i=0; i<users.length; i++) {
        if(username==users[i].name && password == users[i].password){
            welcome.innerHTML= ('Welcome '+ username )
            signIn.remove();
            loginForm.remove();
            return;
        }
    }
    alert('incorrect username or password')
}

const login=document.getElementById('submitBtn')
login.addEventListener('click',(event)=>{
    event.preventDefault();
    fetchUsers();
})


function fetchRestaurants(){
    fetch (" http://localhost:3000/restaurants") 
    .then((resp) =>resp.json())
    .then(searchRestaurants)
    }


function searchRestaurants(restaurants){
    const searchItem = document.getElementById('searchBar').value;
    const searchResults= document.getElementById('result');

    for (i=0; i<restaurants.length; i++) {
        if(searchItem==restaurants[i].name){

            const hotelName = document.createElement("h2");
            hotelName.innerText= (restaurants.name);
            const hotelDetails = document.createElement("p");
            hotelDetails.innerText = (restaurants.description);
            
            searchResults.appendChild(hotelName);
            searchResults.appendChild(hotelDetails);

            return;
        }
    } alert("Not Found") 
    };


const searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    searchRestaurants();
})    



function fetchBBQ(){
    fetch (" http://localhost:3000/restaurants/1") 
    .then((resp) =>resp.json())
    .then(getHotel)
    }


function getHotel(restaurants){
    const hotelSct = document.getElementById('insertHotel');
    let hotelPic = document.createElement('img');
    let hotelDescription = document.createElement('p');
    let hotelCategory = document.createElement('p');
    let hotelName = document.createElement('h1');

    hotelName.setAttribute("class","hotelName");
    hotelPic.setAttribute("class","hotelPic");
    hotelDescription.setAttribute("class","hotelDescription");
    hotelCategory.setAttribute("class","hotelCategory");


    hotelPic.src = restaurants.image
    hotelName.innerText = restaurants.name;
    hotelCategory.innerText = restaurants.category;
    hotelDescription.innerText = restaurants.description;
    
    hotelSct.appendChild(hotelPic);
    hotelSct.appendChild(hotelName);
    hotelSct.appendChild(hotelDescription);
    hotelSct.appendChild(hotelCategory);
};

    
const bbqBtn = document.getElementById('BBQ');
bbqBtn.addEventListener('click',()=>{
    fetchBBQ();
});

// function fetchDrinks(){
//     fetch (" http://localhost:3000/restaurants/2") 
//     .then((resp) =>resp.json())
//     .then(getHotel)
//     }
// const drinksBtn = document.getElementById('drinks');
//     bbqBtn.addEventListener('click',()=>{
//         fetchDrinks();
//     });

document.addEventListener('DOMContentLoaded',()=>{

    const footerInfo = document.getElementById('closer')

    const Us = document.createElement('h3')
    Us.setAttribute('id','ourName')
    Us.innerText=('Tulewapi')

    const about = document.createElement('p')
    about.setAttribute('id','abt')
    about.innerText = ('Helping You Find Culinary Perfection')

    const contactBtn = document.createElement('button')
    contactBtn.setAttribute('class','btn btn-warning')
    contactBtn.innerText=(`Contact Us`)
 

    footerInfo.appendChild(Us)
    footerInfo.appendChild(about)
    footerInfo.appendChild(contactBtn)

})


