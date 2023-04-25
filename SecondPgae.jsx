import React,{Component} from"reaact";
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
                "name":"Mahesh"
                },
                {
              "name":"ajay"
              }


            ]




        }
    }
render(){
    return(
        <div>
            <PersonName/>
            <ul>
                {this.state.data.map((item)=><list data ={item}/>)}
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