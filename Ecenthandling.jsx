import React,{Component} from "react";
class Ecenthandling extends React.Component(props){
    super(props);
    this.state ={cityName:
    ''};

changeCity(event){
    this.setstate
    ({cityName:event.target.value
    });
}
    }
    changeCity(event){
this.setState({cityName:event.target.value});

    }
render(){
    return(
        <div>
            <h1>React Event Example</h1>
            <label> htmlFor="city">Enter City Name </label>
            <input type="text" id="cityName" onChange={this.changeCity.bind(this)}/>
            <h4> you Entered{this.state.cityName}</h4>
        </div>
    );
}
export default Ecenthandling;

