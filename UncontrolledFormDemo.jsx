import React,{Component} from "react";

class UncontrolledFormDemo extends React.Component{
    constructor(props){
        super(props);
        this.displaySubmit=this.displaySubmit.bind(this);
        this.input=React.createRef();
    }
    displaySubmit(e1){
        alert("You have entered the First name and Last Name successfully.");
        e1.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.displaySubmit}>
                <h1>Demo Form</h1>
                <label>Frist Name : <input type="text" ref={this.input}></input>
                </label><br/><br/>
                <label>Last Name : <input type="text" ref={this.input}></input>
                </label><br/><br/>
                <input type="submit" value="submit"></input>
            </form>
        );
    }
}
export default UncontrolledFormDemo;