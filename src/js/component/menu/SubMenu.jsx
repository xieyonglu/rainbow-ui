//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: SubMenu Component Class
//-----------------------------------------------------------------------------------------------
export default class SubMenu extends React.Component {
	
	render(){
		return null;
	}
	
};


/**
 * SubMenu component prop types
 */
SubMenu.propTypes = {
	id: React.PropTypes.string,
	value: React.PropTypes.string,
	icon: React.PropTypes.string
};

/**
 * Get SubMenu component default props
 */
SubMenu.defaultProps = {
	componentType: "SubMenu"
};
