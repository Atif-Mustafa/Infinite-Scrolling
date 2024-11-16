let apiKey = "TJR40mpdGhloK_J7TpKDWngDwD_AQ-jtD-aB12TAfs0";
let count = 10;
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`



async function getPhotos(){
    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data);
    

    let imageContainer = document.querySelector(".image-container");

    data.forEach(photo => {
        try{
            let img = document.createElement("img");
            img.src = photo.urls.regular;
            img.style.height = "200px";
            img.style.width = "200px";
            img.style.marginBottom = "200px";

            imageContainer.appendChild(img);
        }
        catch(error){
            console.log(error);
            
        }
    });

}

window.addEventListener("scroll", function(){
    if(window.scrollY + window.innerHeight + 50 >= document.body.offsetHeight){
        getPhotos();
    }
})

getPhotos();