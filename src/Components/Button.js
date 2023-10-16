import React from 'react'
function But({color,name})
{
    return(
        <>
        <button onClick={()=>{
             document.body.style.background=color
        }}> {name} </button>
        

        </>
    )
}
export default But