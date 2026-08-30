fruits	["pomme", "banane", "orange"]
fruits.length	3
fruits[0]	"pomme"
fruits[1]	"banane"
fruits[2]	"orange"
fruits[fruits.length - 1]	"orange"
fruits[3]	undefined

TABLEAU
   ↓
let fruits = ["pomme", "banane", "orange"];

ACCÉDER => fruits[0]

NOMBRE D'ÉLÉMENTS => fruits.length

DERNIER ÉLÉMENT => fruits[fruits.length - 1]

AJOUTER À LA FIN => push()

SUPPRIMER À LA FIN => pop()

AJOUTER AU DÉBUT => unshift()

SUPPRIMER AU DÉBUT => shift()

CHERCHER LA POSITION => tableau.indexOf()

VÉRIFIER SI ÇA EXISTE => tableau.includes()

PRENDRE UNE PARTIE  => slice()
slice(debut, fin) NB:Le début est inclus, mais la fin est exclue.

AJOUTER / SUPPRIMER AU MILIEU => splice()
supprimer (de cette elmnt,q cete elmnt)
ajouter(indexde place d'ajout,0 si on supp rien et 1 si on changer la valeur," elemnet a ajputer ")

CHERCHER LE PREMIER ÉLÉMENT
QUI RESPECTE UNE CONDITION =>  find()