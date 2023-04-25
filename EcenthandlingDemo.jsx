import React,{Component} from "react";
class EcenthandlingDemo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cityName:''
        };
    }
    changeCity(event){
        this.setState({
            cityName:event.target.value
        });
    }

    render(){
        return(
            <div>
                <h1>React Event Example</h1>
                <label htmlFor="city">Enter City Name : </label>
                <input type="text" id="cityName" onChange={this.changeCity.bind(this)} />
                <h4>You Entered: {this.state.cityName}</h4>
            </div>
        );
    }
}
export default EcenthandlingDemo;