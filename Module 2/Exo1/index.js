// gestion de panier 
const panier =[]
panier.push("pomme")
panier.push("banane")
panier.push("annas")
console.log(panier)
console.log(panier.length)
let suppdernier = panier.pop()
console.log(suppdernier)
console.log(panier.length)
console.log(panier.includes('pomme'))