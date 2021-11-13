import React from 'react';

const Resultado = ({total, plazo, cantidad}) => (

<div className = " u-full-width resultado">

<h2> resumen </h2>
<p> la cantidad solicitada es ${cantidad} </p>
<p> a pagar en: ${plazo} Meses </p>
<p> su pago mensual es de: ${(total/plazo).toFixed(2)} </p>
<p> Total a pagar: ${total}</p>
</div>

)
 
export default Resultado ;