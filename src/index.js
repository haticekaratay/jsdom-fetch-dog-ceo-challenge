console.log('%c HI', 'color: firebrick')

function filterBreeds() {
    const breedsSelect = document.querySelector("#breed-dropdown")
    breedsSelect.addEventListener("change",(event) => {
        Array.from(document.querySelectorAll("ul#dog-breeds li")).forEach(li => {
            if(li.innerText[0] === event.target.value){
                li.style.display = "block"
            }else {
                li.style.display = "none"
            }
        })
    })
};

function fetchDogs() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
    fetch(imgUrl) .then(response => response.json())
    .then(data => renderEachImage(data));
};

function renderEachImage(data){
    let container = document.querySelector("#dog-image-container")
    data.message.forEach(imageSource => {
        let image = document.createElement("img")
        image.src = imageSource,
        container.append(image)
    })
};

function fetchDogBreeds(){
    const breedsUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedsUrl) .then(response => response.json())
    .then(data => renderEachDogBreed(data));
};

function renderEachDogBreed(data){
    let breedUl= document.querySelector("#dog-breeds")
    let breeds = Object.keys(data.message)
 
    for(const breed of breeds){
        let li = document.createElement("li");
        li.innerText = breed;
        li.addEventListener("click",() =>{
            li.style.color = "blue"
        })
        breedUl.append(li);  
    }
};

const breedDropdown = 
Array.from(document.querySelectorAll("li"))

document.addEventListener("DOMContentLoaded", () => {
    fetchDogs();
    fetchDogBreeds();
    filterBreeds();
});

