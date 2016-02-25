import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Dialog Component Class
//-----------------------------------------------------------------------------------------------
export default class Dialog extends Component {
	
	/**
	 * Get dialog
	 */
	static getDialog(dialogId){
		return $("#" + dialogId);
	}
	
	/**
	 * Show dialog
	 */
	static show(dialogId){
		$("#" + dialogId + "_hiddenBtn").trigger("click", {status: "show"});
		
		this.getDialog(dialogId).modal("show");
	}
	
	/**
	 * Hide dialog
	 */
	static hide(dialogId){
		$("#" + dialogId + "_hiddenBtn").trigger("click", {status: "hide"});
		
		this.getDialog(dialogId).modal("hide");
	}
	
	/**
	 * Toggle dialog
	 */
	static toggle(dialogId){
		$("#" + dialogId + "_hiddenBtn").trigger("click", {status: "toggle"});
		
		this.getDialog(dialogId).modal("toggle");
	}
	
	constructor(props) {
    super(props);
    
    this.state = {
    	status: "hide"
    };
  }
	
	render(){
		return (
			<div id={this.componentId} className="modal fade2" tabindex="-1" role="dialog" 
				aria-labelledby="myModalLabel" aria-hidden="true"
				data-backdrop={this.props.backdrop} data-keyboard="true" data-show="true">
				
				<div className="modal-dialog" style={{width: this.props.width, height: this.props.height}}>
					{this.renderDialogContent()}
				</div>
				
				<button id={this.componentId + "_hiddenBtn"} type="button" style={{display: "none"}} />
			</div>
		);
	}
	
	/**
	 * Render dialog header
	 */
	renderDialogHeader(){
		return (
			<div className="modal-header">
				{this.parseBool(this.props.closeable) ? (<button type="button" className="close" onClick={this.onCloseDialog.bind(this)}>&times;</button>) : null}
				
				<h4 className="modal-title">{this.props.title}</h4>
			</div>
		);
	}
	
	/**
	 * Render dialog content
	 */
	renderDialogContent(){
		if(this.state.status == "show"){
			let dialogArray = this.getDialogArray();
			//this.stepNumber = (this.stepNumber != undefined) ? (this.stepNumber + 1) : 0;
			
			//if(this.stepNumber % 2 == 0){
				return (
					<div className="modal-content">
						{this.renderDialogHeader()}
						
						<div className="modal-body">{dialogArray[0]}</div>
						
						{dialogArray[1]}
					</div>
				);
			/*} else {
				return (
					<div>
						<div className="modal-content">
							{this.renderDialogHeader()}
							
							<div className="modal-body">{dialogArray[0]}</div>
							
							{dialogArray[1]}
						</div>
					</div>
				);
			}*/
		}
	}
	
	/**
	 * Get dialog content and footer element 
	 */
	getDialogArray(){
		var dialogArray = [[],[]];
		React.Children.forEach(this.props.children, function(child){
			if(child.props.componentType == "DialogFooter") {
				dialogArray[1].push(child);
			} else {
				dialogArray[0].push(child);
			}
    });
    
    return dialogArray;
	}
	
	componentDidMount(){
		var _self = this;
		
		$("#" + this.componentId + "_hiddenBtn").click(function(event, data){
			event.preventDefault();
			
			if(data.status == "toggle"){
				if(_self.state.status == "show"){
					_self.setState({status: "hide"});
				} else {
					_self.setState({status: "show"});
				}
			} else {
				_self.setState({status: data.status});
			}
		});
	}
	
	onCloseDialog(){
		if(this.props.onClose != undefined){
			this.props.onClose.call();
		}
		
		Dialog.hide(this.componentId);
	}
	
};


/**
 * Dialog component prop types
 */
Dialog.propTypes = {
	id: React.PropTypes.string.isRequired,
	title: React.PropTypes.string,
	modal: React.PropTypes.string,
	width: React.PropTypes.string,
	height: React.PropTypes.string,
	backdrop: React.PropTypes.oneOf(["static", "true", "false"]),
	keyboard: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	closeable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	
	onClose: React.PropTypes.func
};

/**
 * Get dialog component default props
 */
Dialog.defaultProps = {
	modal: true,
	width : "auto !important",
	height: "auto !important",
	backdrop: "static",
	closeable: true
};

