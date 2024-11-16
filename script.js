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
            let div = document.createElement("div");
            div.classList.add('imgC');


            let tc = document.createElement("div");
            let img = document.createElement("img");
            img.src = photo.urls.regular;
            img.classList.add('decorate');
            tc.appendChild(img);
            
            let bc = document.createElement("div");
            let lc = document.createElement("span");
            let likes = document.createElement("span");
            likes.innerHTML = `<i class="fa-regular fa-thumbs-up"></i>`;
            let heart = document.createElement("span");
            heart.innerHTML = `<i class="fa-regular fa-heart fa-shake"></i>`
            
            lc.appendChild(likes);
            lc.appendChild(heart);

            likes.style.marginInline = ".5rem";

            bc.appendChild(lc);
            bc.classList.add("bc")
            
            let rc = document.createElement("span");
            let views = document.createElement("p");
            views.innerText = photo.views;
            rc.appendChild(views);
            bc.appendChild(rc);

            
            
            
            img.addEventListener("click", () => {
                
            })

            div.appendChild(tc);
            div.appendChild(bc);        
            imageContainer.appendChild(div);
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