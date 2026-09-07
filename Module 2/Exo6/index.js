const temperature =[23,28,30,46,38]
const  convertion = temperature.map(F => F*9/5 + 32)
const filtre = convertion.filter(t => t> 80)
console.log( "En farnheit :"+" "+convertion)
console.log("les temperature sup a 80 C :"+" "+filtre)