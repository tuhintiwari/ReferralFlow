var React = require("react");
var SchoolInfo = require("./SchoolInfo.jsx")
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    render: function () {
        return (
            <div className="container">
            <center><h2>ReferralFlow</h2></center>
            <ul className="nav nav-pills nav-justified">
              <li className="active"><a href="#">Patient </a></li>
              <li><a href="#">Physician </a></li>
              <li><a href="#">Reception </a></li>
              <li><a href="#">Specialist </a></li>
            </ul>
          </div>

        )
    }
})
