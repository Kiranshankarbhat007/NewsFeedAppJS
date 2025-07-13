document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.querySelector(".burger-menu");
    const navItems = document.querySelector(".nav-items");

    burgerMenu.addEventListener("click", () => {
        navItems.classList.toggle("show");
    });
});


const apiKey = '2a80edac8f8e47e2a3b302278c57af8b';

const news = document.getElementById("news-container");

async function fetchRandomNews(){
    try{
        const apiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=10&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log('data', data);
        return data;
    }
    catch(error){
        console.error("Error fetching random News", error)
        return [];
    }
}

(async () =>{
    try{
        const articals = await fetchRandomNews();
        console.log('articals', articals);

    }
    catch{

    }
})