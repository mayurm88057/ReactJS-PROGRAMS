import React,{Component} from"react";
class DemoClass extends React.Component{
    constructor(){
        super();
        this.state={
            data:
             [
                {
                    "name" : "Amol"
                },
                {
                    "name" : "Mahesh"
                },
                {
                    "name":"Ajay"
              }
            ]
        }
    }
render(){
    return(
        <div>
            <PersonName/>
            <ul>
                {this.state.data.map((item)=><List data ={item}/>)}
             </ul>

        </div>
    )
    }  }    
    class PersonName extends React.Component{
     render(){
        return(
            <div>
                <h1> Person name Details</h1>
            </div>
        )
     }

    }
    class List extends React.Component{
        render(){
            return(
                <ul>
                    <li>{this.props.data.name} </li>
                  </ul>
            );
        }
    }
    export default DemoClass;