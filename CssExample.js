import React from 'react';
import ReactDOM  from 'react-dom';
import  './CssExternalDemo.css'

class CssExample extends React.Component{

    render(){
      return(
          <div style={{backgroundImage:"url(image/tr.jpg)",height:'500px',backgroundRepeat:"no-repeat"}}>
            <h1 style ={{color:"red"}}>payas Technology,pune</h1>
               <p style={{fontFamily:"cursive",color:"blue"}}>Welcome to all </p>
               <p style={{backgroundColor:"aqua"}}>*Course Offered*</p>
               <h4 style={{backgroundColor:"cyan"}}>C</h4>
               <h4 style={{backgroundColor:"crimson"}}>C++</h4>
               <h4 style={{backgroundColor:"hotpink"}}>JAVA</h4>
               <h4 style={{backgroundColor:"indigo"}}>PHP</h4>
               <h4 style={{backgroundColor:"khaki"}}>SQL</h4>
             
             <div style={{backgroundImage:"url(image/nbb.jpg)"}}>
              <h1>Mayur Mogre</h1>
             </div>
             </div>

    );
      }
}
export default CssExample;