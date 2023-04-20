// in this cotract we are saying that if you use this you  need to follow this rule created inside the interface 

//============== interface ===============
interface Diamention{
    width:string;
    height:string
}
interface CardDiamention extends Diamention{
    borders:boolean
}
const diamention :Diamention= {
    width:"",
    height:""
}
//=============== type ==============
type TypeDiamention = {
    width:string;
    height:string
}
type TypeCardDiamention = TypeDiamention & {
    borders:boolean
}







// interface User{
//     id:number
//     fName:string
//     getData():string
// }