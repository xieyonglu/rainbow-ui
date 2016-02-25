import OnToggleEvent from "../../../event/OnToggleEvent";
import config from "../../../component-config";
import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Panel Component Class
//-----------------------------------------------------------------------------------------------
export default class Panel extends Component {
	
	render(){
		return (
			<div className={"panel panel-" + this.props.styleClass} style={this.props.style}>
				{this.renderPanelHeader()}
				
				{this.renderPanelBody()}
				
				{this.renderPanelFooter()}
			</div>
		);
	}
	
	/**
	 * Render panel header
	 */
	renderPanelHeader(){
		if(this.parseBool(this.props.headerable)){
			return (
				<div className="panel-heading">
					<span className="panel-title">
						{this.renderToggle()}
            {this.getProperty("panelTitle")}
          </span>
          
					{this.renderPanelRightHeader()}
				</div>
			);
		}
	}
	
	/**
	 * Render panel right header
	 */
	renderPanelRightHeader(){
		if(this.props.panelHeader != null && this.props.panelHeader != undefined){
			return (
				<span style={{float: "right"}}>{this.props.panelHeader}</span>
			);
		}
		
		return null;
	}
	
	/**
	 * Render panel body
	 */
	renderPanelBody(){
		if(this.parseBool(this.props.toggleable)){
			return (
				<div id={this.componentId + "_collapse"} className={"panel-collapse collapse " + this.getExpendStatus()}>
					<div className="panel-body">{this.props.children}</div>
				</div>
			);
		} else {
			return (<div className="panel-body">{this.props.children}</div>);
		}
	}
	
	/**
	 * Render panel footer
	 */
	renderPanelFooter(){
		if(this.props.panelFooter != null && this.props.panelFooter != undefined){
			return (
				<div className="panel-footer">{this.props.panelFooter}</div>
			);
		}
		
		return null;
	}
	
	/**
	 * Render toggle link
	 */
	renderToggle(){
		if(this.parseBool(this.props.toggleable)){
			return (
				<a data-toggle="collapse" data-parent="#accordion in" href={"#" + this.componentId + "_collapse"}
					className={"fa " + this.getExpendStyleClass()} onClick={this.onToggle.bind(this)}
					style={{paddingRight: "5px", textDecoration: "none"}} />
			);
		}
	}
	
	/**
	 * Get expend status
	 */
	getExpendStatus(){
		if(this.parseBool(this.props.expendOnPageLoad)){
			return "in";
		} else {
			return "";
		}
	}
	
	/**
	 * Get expend style class
	 */
	getExpendStyleClass(){
		if(this.parseBool(this.props.expendOnPageLoad)){
			return Panel.EXPEND_STATUS;
		} else {
			return Panel.COLLAPSE_STATUS;
		}
	}
	
	/**
	 * On toggle event
	 */
	onToggle(event){
		// get expend flag
		this.expendFlag = this.expendFlag != undefined ? this.expendFlag : this.parseBool(this.props.expendOnPageLoad);
	
		if(this.expendFlag){
			$(event.target).removeClass(Panel.EXPEND_STATUS).addClass(Panel.COLLAPSE_STATUS);
		} else {
			$(event.target).removeClass(Panel.COLLAPSE_STATUS).addClass(Panel.EXPEND_STATUS);
		}
		
		// handler toggle event
		if(this.props.onToggle != undefined){
			this.props.onToggle(new OnToggleEvent(this, this.expendFlag ? "collapse" : "expend"));
		}
		
		this.expendFlag = !this.expendFlag;
	}
	
};

Panel.COLLAPSE_STATUS = "fa-chevron-circle-right";
Panel.EXPEND_STATUS = "fa-chevron-circle-down";

/**
 * Panel component prop types
 */
Panel.propTypes = $.extend({}, Component.propTypes, {
	id: React.PropTypes.string.isRequired,
	panelTitle: React.PropTypes.string,
		
	panelHeader: React.PropTypes.object,
	panelFooter: React.PropTypes.object,
		
	styleClass: React.PropTypes.oneOf(["default", "primary", "success", "warning", "danger", "info"]),
	headerable: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
	toggleable: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
	expendOnPageLoad: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
	
	onToggle: React.PropTypes.func
});

/**
 * Get dynamicSection component default props
 */
Panel.defaultProps = $.extend({}, Component.defaultProps, {
	styleClass: config.DEFAULT_STYLE_CLASS,
	headerable: true,
	toggleable: false,
	expendOnPageLoad: true
});

