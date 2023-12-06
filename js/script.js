// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sotto forma di stringhe



//  Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// const teamMember = {
//     "nome": "",
//     "ruolo": "",
//     "foto": "",
// };



// creare un array di oggetti per rappresentare i membri del team.
const member = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "img": "/Users/maurocazzato/Desktop/CORSO WEB/js-our-team/img/wayne-barnett-founder-ceo.jpg",

    },
    {
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor",
        "img": "/Users/maurocazzato/Desktop/CORSO WEB/js-our-team/img/angela-caroll-chief-editor.jpg",

    },
    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "img": "/Users/maurocazzato/Desktop/CORSO WEB/js-our-team/img/walter-gordon-office-manager.jpg",

    },
    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "img": "/Users/maurocazzato/Desktop/CORSO WEB/js-our-team/img/angela-lopez-social-media-manager.jpg",

    },
    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "img": "/Users/maurocazzato/Desktop/CORSO WEB/js-our-team/img/scott-estrada-developer.jpg",

    },
    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "img": "/Users/maurocazzato/Desktop/CORSO WEB/js-our-team/img/barbara-ramos-graphic-designer.jpg",

    },
    
];

// contenitore dove aggiungere il div
const container = document.getElementById('container');

// funzione per creare la card
function generateMemberCard(member) {
    return `
        <div class="card">
            <img class="cardimg" src="${member.img}" alt="${member.nome}">
            <h2>${member.nome}</h2>
            <p>${member.ruolo}</p>
        </div>
    `;
}

// aggiungo i div al container
member.forEach(member => {
    container.innerHTML += generateMemberCard(member);
});










   