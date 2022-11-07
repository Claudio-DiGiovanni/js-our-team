const eleCards = document.querySelector(".cards")

const arrTeam = [
    {
        name: "Wayne Barnett",
        occupation: "Founder & CEO",
        photo: "img/wayne-barnett-founder-ceo.jpg"  
    },
    {
        name: "Angela Caroll",
        occupation: "Chief Editor",
        photo: "img/angela-caroll-chief-editor.jpg" 
    },
    {
        name: "Walter Gordon",
        occupation: "Office Manager",
        photo: "img/walter-gordon-office-manager.jpg" 
    },
    {
        name: "Angela Lopez",
        occupation: "Social Media Manager",
        photo: "img/angela-lopez-social-media-manager.jpg" 
    },
    {
        name: "Scott Estrada",
        occupation: "Developer",
        photo: "img/scott-estrada-developer.jpg" 
    },
    {
        name: "Barabara Ramos",
        occupation: "Graphic Designer",
        photo: "img/barbara-ramos-graphic-designer.jpg" 
    },
];

console.table(arrTeam)

for (let i = 0; i < arrTeam.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("col-3")
    card.innerHTML = `<img src="${arrTeam[i].photo}" class="card-img-top">
    <div class="card-body">
      <p class="card-text text-center name">${arrTeam[i].name}</p>
      <p class="card-text text-center occupation">${arrTeam[i].occupation}</p>
    </div>`;
    eleCards.append(card)
}