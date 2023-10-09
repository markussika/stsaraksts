// const { default: Stunda } = require("./Stunda");
import Stunda from "./Stunda";

function Diena(props){
    const stundaJSX = props.stundas.map((stunda, indekss) => {
        return <Stunda key = {indekss} nosaukums = {stunda}/>
    });
    return (
        <>
        <h2>{props.diena}</h2>
        <ul>
        {stundaJSX}
        </ul>
    
        
        </>
    )
}

export default Diena;