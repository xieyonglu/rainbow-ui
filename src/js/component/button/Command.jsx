import Component from "../../common/Component";

import OnClickEvent from "../../event/OnClickEvent";
import ValidatorContext from "../../context/ValidatorContext";
import UpdateContext from "../../context/UpdateContext";
import Param from "../misc/Param";
//import config from "../../component-config";

// Use for onComplete
//import UIDialog from "../overlay/dialog/Dialog";
//import UIConfirmDialog from "../overlay/confirmdialog/ConfirmDialog";

//-----------------------------------------------------------------------------------------------
//	date: 2015/09/23
//	
//	author: yonglu.xie
//	
//	description: Command Component Class
//-----------------------------------------------------------------------------------------------
export default class Command extends Component {
	
	constructor(props){
    super(props);
  }
	
	getSize(){
		if(this.props.size != null && this.props.size != undefined){
			return "btn-" + this.props.size;
		}
		return "";
	}
	
	/**
	 * Render icon
	 */
	renderIcon(){
		if(this.props.icon != null && this.props.icon != undefined){
			if(this.props.value != null && this.props.value != undefined){
				return (<span className={this.props.icon} style={{paddingRight: "5px"}} />);
			}
			return (<span className={this.props.icon} />);
		}
		return null;
	}
	
	onClick(event){
		event.preventDefault();
		if(this.getDisabled() == "disabled"){
			return;
		}
		
		if(!ValidatorContext.validate(this.props.causeValidation, this.props.validationGroup)){
			return;
		}
		
		// handler onClick
		if(this.props.onClick != undefined){
			this.props.onClick(new OnClickEvent(this, event, Param.getParameter(this)));
		}
		
		// handler onComplete
		if(this.props.onComplete != undefined){
			eval(this.props.onComplete);
		}
		
		// handler update
		if(this.props.update != undefined){
			UpdateContext.forceUpdate(this.props.update);
		}
	}
	
};


/**
 * Command component prop types
 */
Command.propTypes =  $.extend({}, Component.propTypes, {
	//id: React.PropTypes.string,
	//value: React.PropTypes.string,
	//style: React.PropTypes.string,
	//styleClass: React.PropTypes.oneOf(["default", "primary", "success", "warning", "danger", "info"]),
	icon: React.PropTypes.string,
	size: React.PropTypes.oneOf(["lg", "sm", "xs", "block"]),
	//disabled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	visibled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	
	//onClick: React.PropTypes.func
});

/**
 * Get Command component default props
 */
Command.defaultProps = $.extend({}, Component.defaultProps, {
	//disabled: null,
	//styleClass: config.DEFAULT_STYLE_CLASS,
	size: null,
	visibled: true
});
