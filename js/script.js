let team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
]

let container = document.getElementById('team-container');

for(let i = 0; i<team.length; i++){
    //CONSOLE.LOGS ALL THE DATA IN team ARRAY SEPARATELY
    for(let x in team[i]){
        console.log(team[i][x]);
    }

    //CREATES EMPTY CARD TO ATTACH IN DOM CONTAINER
    let card = document.createElement('div');
    card.classList.add('col-4', 'text-center', 'd-flex', 'flex-column');

    for(let x in team[i]){
        //CREATES EMPTY DATUM TO ATTACH INSIDE CARD
        let datum;

        //IMAGES HAVE TO BE GENERATED IN A DIFFERENT WAY THAN STRING DATA
        if(x == 'image'){
            datum = document.createElement('img');
            datum.src = `./img/${team[i][x]}`;
            datum.classList.add('order-1');
        }
        else{
            datum = document.createElement('div');
            datum.innerHTML += team[i][x];
            datum.classList.add('order-3', 'py-2');
        }

        //ATTACH DATUM INSIDE CARD
        datum.classList.add('bg-white');
        card.appendChild(datum);
    }

    //ATTACH FILLED CARD IN DOM CONTAINER
    container.appendChild(card);

    // ALT CARD-CREATING VERSION
    // let card = `<div class='col-4 text-center'>`;
    
    // card += `<img src='./img/${team[i].image}'>`
    // card += `<h6>${team[i].name}</h6>`
    // card += `<h6>${team[i].role}</h6>`
    
    // card += `</div>`

    // container.innerHTML += card;
}