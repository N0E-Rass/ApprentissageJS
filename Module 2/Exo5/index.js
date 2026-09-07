const etud = [
   { nom: "fela" ,
    age :'23',
    situation : "celibataire",
    note : [12,3,16]
    },
    { nom: "ela" ,
    age :'3',
    situation : "celibataire",
    note : [0,3,16]
    }
]
let meilleurnote = 10
let meilleuretudiant= 0;

for(let etudiant of etud){
    let somme =0 
    for (let note of etudiant.note){
        somme =somme + note;
    }
    let moyenne = somme /etudiant.note.length
console.log("la moyenne du "+etudiant.nom+"a une moyenne de  "+ moyenne)

if (moyenne >meilleurnote){
    meilleurnote = moyenne;
    meilleuretudiant= etudiant;
   
}
}
console.log("le meilleurnote:"+meilleurnote)
console.log( "l'etudiant qui a la meilleur note  est "+meilleuretudiant.nom)
