//pallidrome 
function pallidrome (mot){
    for( let i=0;i<mot.length/2;i++){
    if(mot[i]!== mot[mot.length-1-i]){
        return false
    }
    }
     return true 
}
console.log(pallidrome("radar"))
console.log(pallidrome("kayak"))