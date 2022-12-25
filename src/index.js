//login section configuration

function fetchUsers(){
    fetch (" http://localhost:3000/user") 
    .then((resp) =>resp.json())
    .then(getInfo);
    }

function getInfo(user){

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const signIn = document.getElementById('signInBtn');
    const loginForm = document.getElementById('loginPrompt');
    const welcome = document.getElementById('welcomeMsg');
   
    for (i=0; i<user.length; i++) {
        if(username==user[i].name && password == user[i].password){
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


//sign up as a user section
const signUp=document.getElementById('signup')
signUp.addEventListener('click',(event)=>{
    event.preventDefault()
    registerUser()
})



function registerUser(){
    const userName = document.getElementById('user').value
    const userpswd = document.getElementById('userpswd').value
    const RptUserpswd = document.getElementById('RptUserpswd').value

    if (userpswd==RptUserpswd){
        
        const configurationObject = {
            method: "POST",
            headers:{
                "content-Type":"application/json",
            },
            body:JSON.stringify(
                {
                    name:userName,
                    password:userpswd
                }
            )

        }
        fetch("http://localhost:3000/user",configurationObject)
        .then(resp=>resp.json())
        .then(data=>console.log(data))
        .catch (error=>console.log(error))
        };
    }



//configure search section
function fetchRestaurants(){
    fetch (" http://localhost:3000/restaurant") 
    .then((resp) =>resp.json())
    .then(json=>{
        json.map(data=>{

        searchRestaurant(data)
    });
    })
}



 function searchRestaurant(data){
    const searchItem = document.getElementById('searchBar').value;
    const searchResults= document.getElementById('searchResults')

     //for (i=0; i<data.length; i++){
        if(searchItem.toLocaleLowerCase()===data.name.toLocaleLowerCase()){
            const hotelName = searchResults.querySelector('.searchHotel');
            hotelName.innerText= (data.name);
            const hotelDetails = searchResults.querySelector('.searchDescription');
            hotelDetails.innerText = (data.description);
            const hotelCategory = searchResults.querySelector('.searchCategory');
            hotelCategory.innerText = (data.category);
            const hotelImage=searchResults.querySelector('.searchPic')
            hotelImage.src =(data.image);
            searchResults.classList.remove('hide')
        }
 }

const searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    fetchRestaurants();
});    


//configuring category buttons
function fetchBBQ(){
    fetch (" http://localhost:3000/restaurant?category=BBQ") 
    .then((resp) =>resp.json())
    .then(json=>{
        json.map(data=>{
        console.log(data)
        getHotel(data)
    });
    })
}   
    

function fetchDrinks(){
    fetch (" http://localhost:3000/restaurant?category=cocktails") 
     .then((resp) =>resp.json())
    .then(json=>{
        json.map(data=>{
            console.log(data)
            getHotel(data)
        });
        })
};

function fetchChinese(){
    fetch (" http://localhost:3000/restaurant?category=chinese") 
     .then((resp) =>resp.json())
    .then(json=>{
        json.map(data=>{
            console.log(data)
            getHotel(data)
        });
        })
}
function fetchfastFood(){
    fetch (" http://localhost:3000/restaurant?category=fastFood") 
     .then((resp) =>resp.json())
    .then(json=>{
        json.map(data=>{
            console.log(data)
            getHotel(data)
        });
        })
}
function fetchSoup(){
    fetch (" http://localhost:3000/restaurant?category=soup") 
     .then((resp) =>resp.json())
    .then(json=>{
        json.map(data=>{
            console.log(data)
            getHotel(data)
        });
        })
}


function getHotel(data){
    const hotelSct = document.getElementById('insertHotel');
    let hotelPic = document.createElement('img');
    hotelPic.setAttribute('class','hotelPic')
    let hotelDescription = document.getElementsByClassName('hotelDescription');
    let hotelCategory = document.getElementsByClassName('hotelCategory');
    let hotelName = document.getElementsByClassName('hotelName');

    

     hotelPic.src = data.image
     hotelName.innerText = data.name;
     hotelCategory.innerText = data.category;
     hotelDescription.innerText = data.description;

     hotelSct.appendChild(hotelPic)

};

const bbqBtn = document.getElementById('BBQ');
bbqBtn.addEventListener('click',()=>{
    fetchBBQ()
});

const chineseBtn = document.getElementById('chinese');
chineseBtn.addEventListener('click',()=>{
    fetchChinese()
});


const pizzaBtn = document.getElementById('fastFood');
pizzaBtn.addEventListener('click',()=>{
    fetchfastFood()
});

const soupBtn = document.getElementById('soup');
soupBtn.addEventListener('click',()=>{
    fetchSoup()
});
const drinksBtn = document.getElementById('drinks');
    drinksBtn.addEventListener('click',()=>{
    fetchDrinks()
});



//configure footer section
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


//cuisines
const Arabian = document.getElementById('arbFood')
Arabian.addEventListener('click',()=>{
    fetchArabian()
    alert("ok")
}
);

const Ethiopian = document.getElementById('ethFood')
Ethiopian.addEventListener('click',()=>{
    alert("ok")
}
);

const Indian = document.getElementById('indFood')
Indian.addEventListener('click',()=>{
    alert("ok")
}
);

const Italian = document.getElementById('itnFood')
Italian.addEventListener('click',()=>{
    alert("ok")
}
);

const Mexican = document.getElementById('mexFood')
Mexican.addEventListener('click',()=>{
    alert("ok")
}
);

function fetchArabian(){
    fetch (" http://localhost:3000/restaurant?cuisine=Arabian") 
     .then((resp) =>resp.json())
    .then(json=>{
        json.map(data=>{
            console.log(data)
            showCuisine(data)
        });
        })
}

function showCuisine(data){

}
