const produit ={
   nom: 'Gouty beure',
   prix:  1500,
   stock : 50,
   Categorie: 'A emporter',
   estDisponible(){
    if(this.stock>0){
        console.log('il y a stock encore')
        return true
    }return false
   },
   appliquerRemise(pourcent){
    let remise = this.prix * pourcent/100
    let nouveauprix = this.prix- remise
    return nouveauprix
   }
}
console.log(produit.nom)
console.log(produit.prix)
console.log(produit.stock)
console.log(produit.Categorie)
console.log(produit.estDisponible())
console.log(produit.appliquerRemise(50))