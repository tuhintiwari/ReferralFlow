var React = require("react");
var createReactclassName = require('create-react-class');

module.exports = createReactclassName({
    render:function(){
        return(
            <div className="wrap-login100">
				<form className="login100-form validate-form">
					<center><img className = "dimensions" src="images/Red-Cross.png"/></center>
				

					<span className="login100-form-title p-b-34 p-t-27">
						Patient LOG IN	
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Enter UserID">
						<input className="input100" type="text" name="userId" placeholder="User ID"/>
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<input className="input100" type="password" name="pass" placeholder="Password"/>
						<span className="focus-input100" data-placeholder="&#xf191;"></span>
					</div> 

					<div className="contact100-form-checkbox">
						<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
						<label className="label-checkbox100" for="ckb1">
							Remember me
						</label>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Login
						</button>
					</div>

					<div className="text-center p-t-90">
						<a className="txt1" href="#">
							Forgot Password?
						</a>
					</div>
				</form>
			</div>
        )
    }
})
