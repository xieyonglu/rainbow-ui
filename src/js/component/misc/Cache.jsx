import Component from "../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2016/01/11
//	
//	author: yonglu.xie
//	
//	description: Cache Component Class
//-----------------------------------------------------------------------------------------------
export default class Cache extends Component {
	
	componentDidMount(){
		
	}
	
};


/**
 * Cache component prop types
 */
Cache.propTypes = {
	region: React.PropTypes.string,
	key: React.PropTypes.string,
};

/**
 * Get cache component default props
 */
Cache.defaultProps = {
	
};
