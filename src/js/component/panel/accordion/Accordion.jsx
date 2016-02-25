import config from "../../../component-config";
import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2015/10/23
//	
//	author: yonglu.xie
//	
//	description: Accordion Component Class
//-----------------------------------------------------------------------------------------------
export default class Accordion extends Component {
	
	render(){
		let children = this.props.children;
		let _self = this, sectionArray = [];
		
		if(React.Children.count(children) == 0){
			return null;
		}
		
		else if(React.Children.count(children) == 1){
			sectionArray.push(this.getSectionElement(children, 0));
		}
		
		else {
			children.map(function(child, index){
				sectionArray.push(_self.getSectionElement(child, index));
			});
		}
		
		return (<div className="panel-group" id={this.componentId}>{sectionArray}</div>);
	}
	
	/**
	 * Get section element
	 */
	getSectionElement(child, index){
		let _self = this;
		
		return (
			<div className={"panel panel-" + _self.props.styleClass}>
				<div className="panel-heading">
					<h4 className="panel-title">
						<a data-toggle="collapse" data-parent={"#" + this.componentId} href={"#accordion_" + this.componentId + index}>
							{child.props.accordionTitle}
						</a>
					</h4>
				</div>
				
				<div id={"accordion_" + this.componentId + index} className={"panel-collapse collapse " + _self.getCollapseStatus(index)}>
					<div className="panel-body">
						{child.props.children}
					</div>
				</div>
			</div>
		);
	}
	
	/**
	 * Get collapse status
	 */
	getCollapseStatus(index){
		return (index + 1 == parseInt(this.props.activeIndex)) ? "in" : "";
	}
	
};


/**
 * Accordion component prop types
 */
Accordion.propTypes = {
	id: React.PropTypes.string.isRequired,
	styleClass: React.PropTypes.oneOf(["default", "primary", "success", "info", "warning", "danger"]),
	activeIndex: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
};

/**
 * Get Accordion component default props
 */
Accordion.defaultProps = {
	activeIndex: 1,
	styleClass: config.DEFAULT_STYLE_CLASS,
};
