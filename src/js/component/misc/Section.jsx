//-----------------------------------------------------------------------------------------------
//	date: 2015/10/23
//	
//	author: yonglu.xie
//	
//	description: Section Component Class
//-----------------------------------------------------------------------------------------------
export default class Section extends React.Component {
	
	render(){
		return null;//(<div>{this.props.children}</div>);
	}
	
};

/**
 * Section component prop types
 */
Section.propTypes = {
	id: React.PropTypes.string.isRequired
};

/**
 * Get Section component default props
 */
Section.defaultProps = {
	
};
