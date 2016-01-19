//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: WizardStep Component Class
//-----------------------------------------------------------------------------------------------
export default class WizardStep extends React.Component {
	
	render(){
		return this.props.children;
	}
	
};


/**
 * WizardStep component prop types
 */
WizardStep.propTypes = {
	id: React.PropTypes.string,
	title: React.PropTypes.string,
	description: React.PropTypes.string,
	stepName: React.PropTypes.string
};

/**
 * Get wizardStep component default props
 */
WizardStep.defaultProps = {
	
};
