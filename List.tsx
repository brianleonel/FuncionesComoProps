import { useState } from "react";

interface Usuario{
    id: number, 
    nomb: string, 
    autntcn: boolean, 
    verf:boolean;
}
interface VecU{
    data: Usuario[];
    onSelect?:(usuarioN: string)=>void /*declaro la estructura de la funcion y 
    el signo me indica que esta funcion puede ser usada o no*/
}
function Verf({data, onSelect}: VecU){
  const [index,setIndex]=useState(-1)
  const SelectE=(i: number, usuarioN: string)=>{
    setIndex(i)
    onSelect?.(usuarioN)/*la funcion puede estar definida o no */
  }
    return (<>
        <ul 
            className="list-group"
        >
          {data.map((usuario,i) => (
            <li key={usuario.id}
                onClick={()=>SelectE(i,usuario.nomb)}
                className={`list-group-item ${index === i ? "active" : ""}`}
            >
              {usuario.autntcn==true ? usuario.verf = true : null}
              {usuario.nomb}
              {/* Puedes actualizar "verf" condicionalmente usando un operador ternario */} 
            </li>
            
          ))
          }
          
        </ul>
        {console.log(data)}
        </>
      );
}
export default Verf
