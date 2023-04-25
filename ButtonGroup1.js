import React,{userState} from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from "react";

const ButtonGroup1= () =>{
    const[meassage, setMessage]= useState('')
    return(
        <div>
            <h2> GroupButton Example</h2>
            <ButtonGroup color="primary" aria-label="outlined primary button group"></ButtonGroup>
            <Button onClick={ () => {
                setMessage('You just click on First Button')
            }}>First Button</Button>
            <Button onClick={ () => {
                setMessage('You just click on Second Button')
            }}>Second Button</Button>
             <Button onClick={ () => {
                setMessage('You just click on Thired Button')
            }}>Thired Button</Button>
            <h2>{meassage}</h2>
        </div>
    )
}
export default ButtonGroup1