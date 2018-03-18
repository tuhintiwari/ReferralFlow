var React = require("react");
var SchoolInfo = require("./SchoolInfo.jsx")
var createReactClass = require('create-react-class');

module.exports = createReactClass({
   render:function(){
       return(
           <div className="row">
                <div className="col-md-6">
                    //We will add addSchool functionality here
                </div>
                <div className="col-md-6">
                    {
                        this.props.schools.map(function(s,index){
                            return(
                                <SchoolInfo info={s} key={"school"+index} />
                            )
                        })
                    }
                </div>
           </div>
       )
   }
})
