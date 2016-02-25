//import Util from "../../../util/Util";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: TabItem Component Class
//-----------------------------------------------------------------------------------------------
export default class TabItem extends React.Component {
	
	render(){
		return null;
	}
	
};

/**
 * TabItem component prop types
 */
TabItem.propTypes = {
	id: React.PropTypes.string,
	title: React.PropTypes.string,
	icon: React.PropTypes.string,
	badge: React.PropTypes.string,
	style: React.PropTypes.string,
};

/**
 * Get tabItem component default props
 */
TabItem.defaultProps = {
	componentType: "TabItem"
};
