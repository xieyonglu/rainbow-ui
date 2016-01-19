import Component from "../../common/Component";

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
