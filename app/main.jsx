var React = require("react");
var ReactDOM = require("react-dom");
var SchoolsList = require("./components/SchoolsList.jsx");

var _schools = [{name:"Lovedale",tagline:"this is a wonderful school"},
                {name:"Bishop",tagline:"Another great school"}];
                
function render(){
    ReactDOM.render(<SchoolsList schools={_schools} />, document.getElementById("container"));    
}
render();
