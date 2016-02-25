import Command from "../Command";


//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Button Component Class
//-----------------------------------------------------------------------------------------------
export default class Button extends Command {
	
	renderComponent(){
		if(this.props.role == "button") {
			return (
	    	<button id={this.componentId} className={this.getStyleClass() + " " + this.getSize() + " " + this.getDisabled()} 
	    		disabled={this.getDisabled()} type={this.props.type}
	    		onClick={this.onClick.bind(this)}
	    		style={this.props.style != null && this.props.style != undefined ? this.props.style : null}
	    		data-dismiss={this.props.buttonType == "cancel" ? "modal" : null}>
	    		{this.renderIcon()}
	    		<span>{this.getProperty("value")}</span>
	    	</button>
			);
		} else if(this.props.role == "link") {
			return (
	    	<a href="javascript: void(0);" className={this.getStyleClass()}
	    		role="button" disabled={this.getDisabled()} onClick={this.onClick.bind(this)}>
	    		{this.props.value}
	    	</a>
			);
		}
	}
	
	//btn-lg, btn-sm, btn-xs, btn-block
	//DEFAULT: "default", PRIMARY: "primary", SUCCESS: "success", INFO: "info", WARNING: "warning", DANGER: "danger", LINK: "link",
	//LG: "lg", SM: "sm", XS: "xs", BLOCK: "block",
	
	/**
	 * Get style class
	 */
	getStyleClass(){
		switch(this.props.styleClass){
			case (/*this.DEFAULT*/"default"):
				return "btn btn-default";
			case (/*this.PRIMARY*/"primary"):
				return "btn btn-primary";
			case (/*this.SUCCESS*/"success"):
				return "btn btn-success";
			case (/*this.INFO*/"info"):
				return "btn btn-info";
			case (/*this.WARNING*/"warning"):
				return "btn btn-warning";
			case (/*this.DANGER*/"danger"):
				return "btn btn-danger";
			case (/*this.LINK*/"link"):
				return "btn btn-link";
			case (undefined):
				return "btn btn-primary";
			default:
				return this.props.styleClass;
		}
	}
	
};


/**
 * Button component prop types
 */
Button.propTypes = $.extend({}, Command.propTypes, {
	role: React.PropTypes.oneOf(["button", "link"]),
	type: React.PropTypes.oneOf(["button", "submit"]),
	causeValidation: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	validationGroup: React.PropTypes.string,
	update: React.PropTypes.string,
	
	onComplete: React.PropTypes.string
}),

/**
 * Get Button component default props
 */
Button.defaultProps = $.extend({}, Command.defaultProps, {
	role: "button",
	causeValidation: false
});
