import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2016/01/17
//	
//	author: yonglu.xie
//	
//	description: ToolTip Component Class
//-----------------------------------------------------------------------------------------------
export default class ToolTip extends Component {
	
	/**
	 * Toggle
	 */
	static toggle(tooltipId){
		$("#" + tooltipId).tooltip("toggle");
	}
	
	/**
	 * Show
	 */
	static show(){
		$("#" + tooltipId).tooltip("show");
	}
	
	/**
	 * Hide
	 */
	static hide(){
		$("#" + tooltipId).tooltip("hide");
	}
	
	/**
	 * Destroy
	 */
	static destroy(){
		$("#" + tooltipId).tooltip("destroy");
	}
	
	componentDidMount(){
		this.initComponent();
	}
	
	initComponent(){
		let _self = this;
		$("#" + this.props.for).tooltip({
			animation: true,
			html: false,
			placement: this.props.placement, //top|bottom|left|right|auto
			selector: false,
			title: this.props.title,
			trigger: "hover",
			content: "yyyyyyyyyyyy",
			delay: 0,
			container: false
		})
		
		.on("show.bs.tooltip", function(){
			console.log("==show.bs.tooltip==");
			if(_self.props.onShow){
				_self.props.onShow();
			}
		})
		
		.on("shown.bs.tooltip", function(){
			console.log("==shown.bs.tooltip==");
			if(_self.props.onShown){
				_self.props.onShown();
			}
		})
		
		.on("hide.bs.tooltip", function(){
			console.log("==hide.bs.tooltip==");
			if(_self.props.onHide){
				_self.props.onHide();
			}
		})
		
		.on("hidden.bs.tooltip", function(){
			console.log("==hidden.bs.tooltip==");
			if(_self.props.onHiden){
				_self.props.onHiden();
			}
		});
	}
	
};


/**
 * ToolTip component prop types
 */
ToolTip.propTypes = {
	id: React.PropTypes.string.isRequired,
	for: React.PropTypes.string,
	title: React.PropTypes.string,
	placement: React.PropTypes.oneOf(["top", "bottom", "left", "right", "auto"]),
	
	showEvent: React.PropTypes.oneOf(["click", "hover", "focus", "manual"]),
	hideEvent: React.PropTypes.string,
	showEffect: React.PropTypes.string,
	hideEffect: React.PropTypes.string,
	
	//trackMouse: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	
	// Tooltip event
	onShow: React.PropTypes.func,
	onShown: React.PropTypes.func,
	onHide: React.PropTypes.func,
	onHiden: React.PropTypes.func,
};

/**
 * Get toolTip component default props
 */
ToolTip.defaultProps = {
	placement: "top"
};
