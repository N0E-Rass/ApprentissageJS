//forme d'uun objet 
const etudiant = {
nom: 'Alice',
age: 21,
notes: [14, 16, 18],
sePresenter() {
return `Je suis ${this.nom}, j'ai ${this.age} ans.`;
}
};
on doit utiliser 
This.nom
//appelle
console.log(etudiant.age)