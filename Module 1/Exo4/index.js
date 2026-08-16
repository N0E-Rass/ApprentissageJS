//Calculateur IMC 
let poids = 37;
let taille = 1.50
let imc= poids /(taille *taille )
console.log("votre IMC est "+imc.toFixed(2));

let categorie = 
 imc <18.5 ?"sous poid ":
 imc >18.5 &&  imc < 24.9 ?" normal ":
 imc >25 &&  imc < 29.9 ?" Surpoids  ":
 imc<=30 ? "obese": "obesite trop"
 console.log(categorie);