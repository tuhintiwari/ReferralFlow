var React = require("react");
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                </div>
                <div className="panel-body">
                    {this.props.info.tagline}
                </div>
            </div>
        )
    }
})
