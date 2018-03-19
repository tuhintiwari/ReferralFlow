var React = require("react");
var ReactDOM = require("react-dom");
var SchoolsList = require("./components/SchoolsList.jsx");
var SchoolInfo = require("./components/SchoolInfo.jsx");

var _schools = [{name:"Lovedale",tagline:"this is a wonderful school"},
                {name:"Bishop",tagline:"Another great school"}];
                
function render(){
    ReactDOM.render(<SchoolsList/>, document.getElementById("userType"));    
    ReactDOM.render(<SchoolInfo/>, document.getElementById("userLogin"));
}
render();
