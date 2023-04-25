import React,{Component} from "react";

class FunctionalComponent extends React.Component{
render(){
    return(
        <div>
            <First></First>
            <Second></Second>
        </div>
    );
}
}
class First extends React.Component{
    render(){
return(
    <div>
<h1>Mayur mogre</h1>
    </div>
);
    }
}
class Second extends React.Component{
render(){
return(
    <div>
        <h2>MCS is computer engernerring </h2>
    </div>
);
}

}
export default FunctionalComponent;