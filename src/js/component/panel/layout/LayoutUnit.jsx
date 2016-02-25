//-----------------------------------------------------------------------------------------------
//	date: 2015/11/28
//	
//	author: yonglu.xie
//	
//	description: LayoutUnit Component Class
//-----------------------------------------------------------------------------------------------
export default class LayoutUnit extends React.Component {
	
	render(){
		return (
			<div className={"ui-layout-" + this.props.position}>{this.props.children}</div>
		);
	}
	
};


/**
 * LayoutUnit component prop types
 */
LayoutUnit.propTypes = {
	position: React.PropTypes.oneOf(["center", "north", "south", "east", "west"]),
	resizable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	size: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	minSize: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	maxSize: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	
	// header="Bottom" resizable="true" closable="true" collapsible="true"
};

/**
 * Get LayoutUnit component default props
 */
LayoutUnit.defaultProps = {
	position: "center"
};
