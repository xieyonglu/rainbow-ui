//-----------------------------------------------------------------------------------------------
//	date: 2015/10/17
//	
//	author: yonglu.xie
//	
//	description: Column Component Class
//-----------------------------------------------------------------------------------------------
export default class Column extends React.Component {
	
	render(){
		return this.props.value;
	}
	
};


/**
 * Column component prop types
 */
Column.propTypes = {
	value: React.PropTypes.string,
	width: React.PropTypes.string,
	selectionMode: React.PropTypes.oneOf(["single", "multiple"]),
	sortable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
};

/**
 * Get Column component default props
 */
Column.defaultProps = {
	width: "auto"
};
