//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Cell Component Class
//-----------------------------------------------------------------------------------------------
export default class Cell extends React.Component {
	
	render(){
		return (
			<div className={this.getClassName() + this.getWidthClass()} style={this.props.style}>
				{this.props.children}
			</div>
		);
	}
	
	getClassName(){
		if(this.props.className){
			return this.props.className + " ";
		}
		return "";
	}
	
	getWidthClass(){
		let width = this.props.width;
		
		//if(12 == parseInt(this.props.width)){
		//	return "row";
		//}
		return "col-sm-" + width + " col-md-" + width + " col-lg-" + width;
	}
	
};


/**
 * Cell component prop types
 */
Cell.propTypes = {
	id: React.PropTypes.string,
	value: React.PropTypes.string,
	colspan: React.PropTypes.string,
	width: React.PropTypes.string,
	className: React.PropTypes.string
};

/**
 * Get Cell component default props
 */
Cell.defaultProps = {
	componentType: "Cell",
	width: 12,
};
