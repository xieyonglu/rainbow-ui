import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Fieldset Component Class
//-----------------------------------------------------------------------------------------------
export default class Fieldset extends Component {
	
	//<a id="fieldset_toggler" href="javascript:void(0);">+</a>
	render(){
		return (
			<fieldset id={this.componentId}>
				<legend id="fieldset_legend">
					{this.props.legend}
				</legend>
				<div id="fieldset_content" className="fieldset-content" styleName="min-height: 100px;">
					{this.props.children}
				</div>
			</fieldset>
		);
	}
	
};

/**
 * Fieldset component prop types
 */
Fieldset.propTypes = {
	//id: React.PropTypes.string.isRequired,
	legend: React.PropTypes.string,
	
	//toggleable="true" toggleSpeed="500"
};

/**
 * Get Fieldset component default props
 */
Fieldset.defaultProps = {
	
};
