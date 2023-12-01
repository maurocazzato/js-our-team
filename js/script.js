// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sotto forma di stringhe

//  Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
const teamMember = {
    "nome": "",
    "ruolo": "",
    "foto": "",
};

for (let key in teamMember ){
    console.log(key, teamMember[key]);
};

// creare un array di oggetti per rappresentare i membri del team.
const arrayTeamMember = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "img": "wayne-barnett-founder-ceo.jpg",

    },
    {
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor",
        "img": "angela-caroll-chief-editor.jpg",

    },
    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "img": "walter-gordon-office-manager.jpg",

    },
    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "img": "angela-lopez-social-media-manager.jpg",

    },
    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "img": "scott-estrada-developer.jpg",

    },
    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "img": "barbara-ramos-graphic-designer.jpg",

    },
]

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for(i= 0; i<arrayTeamMember.length; i++){
    
    let teamMemberIesimo = arrayTeamMember[i];
    console.log(teamMemberIesimo);
}