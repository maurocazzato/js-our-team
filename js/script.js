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

    }
]