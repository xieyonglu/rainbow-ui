//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: TabItemList Component Class
//-----------------------------------------------------------------------------------------------
export default class TabItemList extends React.Component {
	
	render(){
		return null;
	}
	
};

/**
 * TabItemList component prop types
 */
TabItemList.propTypes = {
	id: React.PropTypes.string,
	title: React.PropTypes.string,
	icon: React.PropTypes.string,
	badge: React.PropTypes.string,
	style: React.PropTypes.string
};

/**
 * Get tabItemList component default props
 */
TabItemList.defaultProps = {
	componentType: "TabItemList"
};
