import config from "../../component-config";
import Component from "../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2015/11/25
//	
//	author: yonglu.xie
//	
//	description: Progress Component Class
//-----------------------------------------------------------------------------------------------
export default class Progress extends Component {
	
	render() {
		return (
			<div className={"progress" + this.getStripedStyleClass() + this.getActiveStyleClass()}>
				{this.renderProgressBar()}
			</div>
		);
	}
	
	/**
	 * Render progress bar
	 */
	renderProgressBar(){
		return (
			<div className={"progress-bar progress-bar-" + this.props.styleClass} role="progressbar" aria-valuenow="60" 
				aria-valuemin={this.props.minValue} aria-valuemax={this.props.maxValue} style={this.getStyle()}>
				<span className="sr-only">40% 完成</span>
			</div>
		);
	}
	
	getStyle(){
		let {style, value} = this.props;
		if(value != null && value != undefined){
			style.width = value + "%";
		}
		
		return style;
	}
	
	getStripedStyleClass(){
		if(this.parseBool(this.props.striped)){
			return " progress-striped";
		}
		return "";
	}
	
	getActiveStyleClass(){
		if(this.parseBool(this.props.activeable)){
			return " active";
		}
		return "";
	}
	
};


/**
 * Progress component prop types
 */
Progress.propTypes = {
	id: React.PropTypes.string.isRequired,
	striped: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	activeable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	
	// progress bar
	value: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	minValue: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	maxValue: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	style: React.PropTypes.object,
	styleClass: React.PropTypes.oneOf(["default", "primary", "success", "warning", "danger", "info"]),
};

/**
 * Get Progress component default props
 */
Progress.defaultProps = {
	striped: true,
	activeable: true,
	
	value: 0,
	minValue: 0,
	maxValue: 100,
	style: {},
	styleClass: config.DEFAULT_STYLE_CLASS,
};
