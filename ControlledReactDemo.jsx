import React,{Component} from "react";

class ControlledReactDemo extends React.Component{
    constructor(props){
        super(props);
        this.state= {value: ''};
        this.handelChange= this.handelChange.bind(this);
        this.displaySubmit = this.displaySubmit.bind(this);
    }
    handelChange(event){
    this.setState({value: event.target.value})
    }
    displaySubmit(event){
        alert('You have Entered Name Successfully: ' +this.state.value)
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.displaySubmit}>
                <h1>Controlled Componant Exalmple</h1>
                <label>Name :
                    <input type="text" value={this.state.value} onChange={this.handelChange}></input>
                </label><br/><br/>
                <input type="submit" value="submit"></input>
            </form>
        )
    }
}
export default ControlledReactDemo;