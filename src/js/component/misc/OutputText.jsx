//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: OutputText Component Class
//-----------------------------------------------------------------------------------------------
export default class OutputText extends React.Component {
	
	render(){
		return (
			<span style={{color: '#337ab7'}}>{this.props.value}</span>
		);
	}
	
};

/**
 * OutputText component prop types
 */
OutputText.propTypes = {
	value: React.PropTypes.string
};

/**
 * Get OutputText component default props
 */
OutputText.defaultProps = {
	
};
