import KeyCode from "../../../constant/KeyCode";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Form Component Class
//-----------------------------------------------------------------------------------------------
export default class Form extends React.Component {
	
	render(){
		return (
			<form id={this.props.id} className="form-horizontal validation-form" role="form">
        {this.props.children}
			</form>
		);
	}
	
	componentWillMount(){}
	
	componentDidMount(){
		// Init keydown event
		$("#" + this.props.id).keydown((event) => {
			if(event.keyCode == KeyCode.ENTER){
				return false;
			}
		});
	}
	
};


/**
 * Form component prop types
 */
Form.propTypes = {
	id: React.PropTypes.string.isRequired
};

/**
 * Get Form component default props
 */
Form.defaultProps = {
	
};
