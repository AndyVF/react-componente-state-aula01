import React, { useState } from "react"

export default function Contador() {
    const [num, setNum] = useState (0);
    return(
        <div>
            <h1>Contador {num}</h1>
        <button onClick={() => setNum(num + 5)}>Somar</button>
        <br/><br/>
        <button onClick={() => setNum(num - 3)}>Subtrair</button>
        <br/><br/>
        <button onClick={() => setNum(0)}>Zerar</button>
        </div>
    )
}