//pallidrome 
function pallidrome (mot){
    for(i=0;i<mot.length/2;i++){
    if(mot[i]!== mot[mot.length-1-i]){
        return false
    }
    }
}