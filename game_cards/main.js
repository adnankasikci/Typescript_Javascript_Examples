import { RWG_API_KEY, BASE_API_URL, colors } from "./constants.js"; // Sabitleri dahil ediyorum.
import { RWG } from "./rwg.js"; // Veri çekme sınıfımı dahil ediyorum.



const rwgControl = new RWG(`${BASE_API_URL}?key=${RWG_API_KEY}`); // Veri çekme sınıfımdan verileri çekiyorum.



// HTML nesnelerini sayfa içerisinden alıyorum.
const rwgCards = document.querySelector(".cards");
const searchInput = document.querySelector("#searchButton");
const loadButton = document.querySelector(".loadButton").addEventListener("click", loadPageRender);



// Sayfa yüklendiğinde şu işlemleri yap.
window.addEventListener('load', loadPageRender);

async function loadPageRender() {
    const { results } = await rwgControl.fetchData();
    results.forEach(createGame); // Her oyunu tek tek render et
}



function createGame(deneme) {

    // Oyun Kategorilerini Getir
    const { name, image_background, games } = deneme;

    console.log(games);

    const gameElement = document.createElement("div");
    gameElement.classList.add("gameCategory");
    gameElement.innerHTML = buildHtmlOfGame(name, image_background, games);

    rwgCards.appendChild(gameElement);

}

function buildHtmlOfGame(categoryName, categoryImageUrl, games) {
    return `
    <div class="category">
        <img class="categoryImage" src="${categoryImageUrl}" alt="${categoryName}" />
        <div class="categoryBackground">
            <div>${categoryName}</div>
        </div>
    </div>
    <div class="blocks">
        ${games.map(game => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            return `<div class="block" style="background-color: ${randomColor}">${game.name}</div>`;
        }).join('')}
    </div>
    `;
}


// searchInput.addEventListener("input", () => {
//     rwgCards.innerHTML = "";
//     rwgControl.findByName(searchInput.value).forEach(createGame);
// });