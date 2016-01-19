import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2015/10/24
//	
//	author: yonglu.xie
//	
//	description: Jumbotron Component Class
//-----------------------------------------------------------------------------------------------
export default class Jumbotron extends Component {
	
	render(){
		let {children} = this.props;
		
		// render children
		if(React.Children.count(children) != 0){
			return (
				<div className="container">
				   <div className="jumbotron">
				      <h3>{this.props.title}</h3>
				      {children.props.children}
				   </div>
				</div>
			);
		}
		
		// render content
		else {
			return (
				<div className="container">
				   <div className="jumbotron">
				      <h3>{this.props.title}</h3>
				      {this.getContent()}
				   </div>
				</div>
			);
		}
	}
	
	getContent(){
		let {content} = this.props;
		return this.isFunction(content) ? content(this) : content;
	}
	
};

/**
 * Jumbotron component prop types
 */
Jumbotron.propTypes = {
	id: React.PropTypes.string.isRequired,
	title: React.PropTypes.string,
	content: React.PropTypes.array,
};

/**
 * Get Jumbotron component default props
 */
Jumbotron.defaultProps = {
	
};
