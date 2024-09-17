import Verf from "./components/List"
function CompP(){
  const SelectE=(nombre: string)=>{
    console.log("imprimiendo",nombre)
  }
let vec:{id: number, nomb: string, autntcn: boolean, verf:boolean }[]=[
  {id: 0, nomb: "brian", autntcn:true, verf:false },
  {id: 1, nomb: "leonel", autntcn:false, verf:false }
];
return(
  <Verf data={vec} onSelect={SelectE}></Verf>
);
}
export default CompP