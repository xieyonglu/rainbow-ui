//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Separator Component Class
//-----------------------------------------------------------------------------------------------
export default class Separator extends React.Component {
	
	render(){
		return (
			<li role="presentation" className="divider" />
		)
	}
	
};

/**
 * Separator component prop types
 */
Separator.propTypes = {
	id: React.PropTypes.string
};

/**
 * Get Separator component default props
 */
Separator.defaultProps = {
	componentType: "Separator"
};
