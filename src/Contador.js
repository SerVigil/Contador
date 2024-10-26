import React, {useState} from 'react';

function MiContador(){
    const [contador, setContador] = useState(0);


return(
    <div>
        <p>{contador}</p>
        <button onClick={()=> setContador(contador + 1)}>Incrementar</button>
        <button onClick={()=> setContador(contador - 1)}>Decrementar</button>
    </div>
);
}
export default MiContador;