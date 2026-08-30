const note = [12.4,5,15.5,0,3,9.75,16,20]
let somme = note.reduce((a,b) => {
 return a+b
},0)
console.log(somme)
let moyenne = somme/note.length
console.log(moyenne)
let notesupmoyenne = note.filter(note => note > moyenne)
console.log(notesupmoyenne)