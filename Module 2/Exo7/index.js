const tabprod =[
    {nom : "couche bebe ",
     prix: "1500",
     quantite : 50
    },
    {nom :" Perfite ",
     prix : "3500" ,
     quantite : 70
    },
    {nom : "Vary",
     prix: "15000",
     quantite : 0
    }
]
const filtre = tabprod.filter(q => q.quantite ===0)
console.log("le produit en rupture de stockest :"+ filtre[0].nom)
console.log(filtre)
const totale = tabprod.reduce((a,b)=>{
    return a+(b.prix* b.quantite)
},0)
console.log("le valuer totale des stock est"+totale)