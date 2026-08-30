reduce = prendre plusiers de tableau et les transformer en une seule valeur 
let somme = nombres.reduce((total, nombre) => {
    return total + nombre;
},0 si addition et 1 si multiplication);

Sort = pour trier un tableau 
En ordre alphabetique ex: fruits.sort()
Mais avec les nombres 
nombres.sort((a, b) => {
    return a - b;// croissant 
    return b - a;// decroissant 
});

Max et min
nombre < minimum ? nombre : minimum
       > maximum            minimum
condition ? valeur_si_oui : valeur_si_non = « si la condition est vraie, prends ceci, sinon prends cela ».
