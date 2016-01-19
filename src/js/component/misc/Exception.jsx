import Util from "../../util/Util";
import HttpStatus from "../../constant/HttpStatus";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Exception Component Class
//-----------------------------------------------------------------------------------------------
export default class Exception extends React.Component {
	
	/**
	 * Throw exception
	 * @Param: status
	 * @Param: responseText
	 */
	static throw(status, responseText){
		React.render(<Exception />, document.getElementById("exception_container")).show(status, responseText);
	}
	
	constructor(props) {
    super(props);
    
    this.state = {
    	visible: false,
			status: null,
			message: null
    };
  }
	
	render(){
		let status = this.state.status;
		let statusMessage = HttpStatus[status];
		let message = this.state.message;
		
		return (
			<div id={this.props.id} className="modal fade" tabindex="-1" role="dialog" 
				aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
							<h4 className="modal-title" id="myModalLabel">{this.props.title}</h4>
						</div>
						
						<div className="modal-body">
							<div>
								<h6>{status}: {statusMessage}</h6>
								{message != null ? (<pre className="ui-exception-message"><code>{message}</code></pre>) : null}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	
	componentDidMount(){}
	
	componentDidUpdate(){
		if(this.state.visible){
			$("#" + this.props.id).modal("show");
		}
	}
	
	/**
	 * hide dialog
	 */
	hide() {
		this.setState({visible: false, status: null, message: null});
	}
	
	/**
	 * show dialog
	 * @param status http status
	 * @param message error message
	 */
	show(status, message) {
		this.setState({visible: true, status: status, message: message});
	}
	
};


/**
 * Exception component prop types
 */
Exception.propTypes = {
	id: React.PropTypes.string.isRequired,
	title: React.PropTypes.string
};

/**
 * Get exception component default props
 */
Exception.defaultProps = {
	id: "exceptionDialog",
	title: "Exception..."
};
