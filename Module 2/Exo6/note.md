// map : transformer chaque élément
const prixTTC = prix.map(p => p * 1.2);
// filter : garder les éléments selon un critère
const chers = prix.filter(p => p > 15);
// reduce : réduire a sommer tt les valeur d'un tableau 
