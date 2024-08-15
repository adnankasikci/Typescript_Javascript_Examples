import { Lig } from "./lig.js";
import { LigAPI, LigAPI_Key } from "./constants.js";

const LigBox = new Lig(LigAPI, LigAPI_Key)


window.addEventListener("load", LigRender)

async function LigRender(){

    const { competitions: LigResult } = await LigBox.fetchData();
    LigResult.forEach(item => createLigCard(item));

}


async function createLigCard(lig){
    console.log(lig)

    const { name, type, emblem, code } = lig;

    const LigCard = document.createElement("div");
    LigCard.className = "ligCard";
    LigCard.innerHTML = `
    <div class="ligCard shadow-[_0_0_5px_rgb(0_0_0/_10%)] rounded-md bg-white relative">
        <div class="cardHeader bg-gradient-to-tr to-slate-100 from-slate-300 p-5 rounded-t-md flex items-center justify-center">
            <img class="object-cover w-36 h-36" src="${emblem}" alt="">
        </div>
        <div class="cardBody p-4 flex items-center justify-center">${name} - ${code}</div>
            <div class="absolute top-3 left-3">
                <div class="bg-rose-800 text-white w-16 flex items-center justify-center rounded-sm">${type}</div>
        </div>
    </div>
    `

    document.getElementById("LigCard-container").appendChild(LigCard);
}


document.getElementById("searchBar").addEventListener("input", async ()=> {

    const searchBar = document.getElementById("searchBar");
    const container = document.getElementById("LigCard-container");

    if(searchBar.value.length >= 3) {
        const filteredLigs = await LigBox.searchLig(searchBar.value);
        container.innerHTML = '';
        filteredLigs.forEach(item => createLigCard(item));
    } else if (searchBar.value.length == 0) {
        LigRender();
    }

} )






















// fetch("https://api.football-data.org/v4/competitions",
// {
//     method: "GET",
//     headers: {
//         "X-Auth-Token": "88ed114005174792b2b738e501d4fff9"
//     }
// })
// .then(response=> response.json()).then(data => console.log(data));
