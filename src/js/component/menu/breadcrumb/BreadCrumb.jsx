import Link from "../../button/link/Link";
import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: BreadCrumb Component Class
//-----------------------------------------------------------------------------------------------
export default class BreadCrumb extends Component {
	
	render(){
		return (
			<ol className="breadcrumb" style={{margin: "0px", paddingLeft: "10px"}}>
			 {this.renderMenuItem()}
			</ol>
		);
	}
	
	/**
	 * Render menu item
	 */
	renderMenuItem(){
		var _self = this;
		var children = this.props.children;
		
		if(React.Children.count(children) == 0){
			return null;
		}
		
		else if(React.Children.count(children) == 1){
			return this.renderChildren(children);
		}
		
		else {
			return children.map(function(child, index){
				return _self.renderChildren(child);
			}.bind(this));
		}
	}
	
	/**
	 * Render children
	 */
	renderChildren(children){
		if(this.parseBool(children.props.activeable)){
			return (
				<li className="active">{children.props.value}</li>
			);
		} else {
			return (
				<li><Link {...children.props} /></li>
			);
		}
	}
	
	componentDidMount(){}
	
};


/**
 * BreadCrumb component prop types
 */
BreadCrumb.propTypes = {
	id: React.PropTypes.string,
	activeable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string])
};

/**
 * Get BreadCrumb component default props
 */
BreadCrumb.defaultProps = {
	activeable: false
};
