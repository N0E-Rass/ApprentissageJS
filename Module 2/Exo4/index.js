// tri et rechercher
const tab = [50,80,3,56,5,60]
 tab.sort((a,b)=>{
    return a-b 
 })
 console.log(tab)
 let dec=tab.sort((a,b) => {
    return b-a 
 })
 console.log(dec)
 //max avec reduce 
 let max = tab.reduce((max,tab)=> {
   return  tab > max ? tab : max
 },tab[0])
 console.log(max)
 // min en utilisant le sort
 console.log(dec[dec.length-1])