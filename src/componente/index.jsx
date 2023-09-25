import { useState } from "react"

function Main() {

const[luz, setLuz] = useState ('https://mariaccarolina.github.io/L-mpada/img/lamp.jpg')

const MudarLuz = () => {
    if (luz === 'https://mariaccarolina.github.io/L-mpada/img/lamp.jpg') {setLuz ('https://mariaccarolina.github.io/L-mpada/img/acesa.jpg')}
    else if ( luz === 'https://mariaccarolina.github.io/L-mpada/img/acesa.jpg') { setLuz ('https://mariaccarolina.github.io/L-mpada/img/lamp.jpg')}
}


return(
<>
<h1>Lampada</h1>
<p>Clique para acender ou apagar!</p>

<section className="Img">
<img src= {luz} alt="Luz" />
</section>



<button onClick={MudarLuz}>Clique</button>




</>
)

}

export default Main