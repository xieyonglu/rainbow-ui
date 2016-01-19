import Input from "../Input";

//-----------------------------------------------------------------------------------------------
//	date:
//
//	author: yonglu.xie
//
//	description: Password Component Class
//-----------------------------------------------------------------------------------------------
export default class Password extends Input {

	constructor(props) {
    super(props);

    this.state = {
    	showPassword: false
    };
  }

	renderInput(){
		if(!this.parseBool(this.props.showPassword)){
			return this.renderInputPassword();
		} else if(this.state.showPassword){
			return (<div className="input-group">{this.renderInputText()}{this.renderIcon()}</div>);
		} else {
			return (<div className="input-group">{this.renderInputPassword()}{this.renderIcon()}</div>);
		}
	}

	renderInputText(){
		return (
			<input id={this.componentId} name={this.getName()} type="text" className="form-control"
				placeholder={this.props.placeHolder} ref={this.componentId + "_ref"} />
		);
	}

	renderInputPassword(){
		return (
			<input id={this.componentId} name={this.getName()} type="password" className="form-control"
				placeholder={this.props.placeHolder} ref={this.componentId + "_ref"} />
		);
	}

	renderIcon(){
		if(this.state.showPassword){
			return (
				<span className="input-group-addon pickerposition">
					<span className="glyphicon glyphicon-eye-open" onClick={this.onCloseShowPassword.bind(this)} style={{cursor: "pointer"}} />
				</span>
			);
		} else {
			return (
				<span className="input-group-addon pickerposition">
					<span className="glyphicon glyphicon-eye-close" onClick={this.onOpenShowPassword.bind(this)} style={{cursor: "pointer"}} />
				</span>
			);
		}
	}

	onOpenShowPassword(){this.setState({showPassword: true});}

	onCloseShowPassword(){this.setState({showPassword: false});}

};


/**
 * Password component prop types
 */
Password.propTypes = $.extend({}, Input.propTypes, {
	showPassword: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
});

/**
 * Get Password component default props
 */
Password.defaultProps = $.extend({}, Input.defaultProps, {
	showPassword: false
});
