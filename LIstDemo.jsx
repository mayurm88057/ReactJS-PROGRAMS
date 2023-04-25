import React from "react";
import { ReactDOM } from "react";

function Mutliplt(props){
return props.num
}
function Number(){
    const num=[1,2,3,4,5];
    return(
        num.map((num)=> num.valueOf)
    )
}