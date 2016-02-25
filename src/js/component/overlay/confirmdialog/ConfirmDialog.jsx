import Component from "../../../common/Component";
import Button from "../../button/button/Button";


//-----------------------------------------------------------------------------------------------
//	date: 2015/08/29
//	
//	author: yonglu.xie
//	
//	description: ConfirmDialog Component Class
//-----------------------------------------------------------------------------------------------
export default class ConfirmDialog extends Component {

	/**
	 * Get dialog
	 */
	static getDialog(dialogId){
		return $("#" + dialogId);
	}
	
	/**
	 * Add data to confirm dialog
	 */
	static addData(dialogId, data){
		this.getDialog(dialogId).attr("data-hiddenValue", JSON.stringify(data));
	}
	
	/**
	 * Get data from confirm dialog
	 */
	static getData(dialogId){
		return JSON.parse(this.getDialog(dialogId).attr("data-hiddenValue"));
	}
	
	/**
	 * Remove data from confirm dialog
	 */
	static removeData(dialogId){
		this.getDialog(dialogId).removeAttr("data-hiddenValue");
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
		this.removeData(dialogId);
		
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
			<div id={this.componentId} className="modal fade" tabindex="-1" role="dialog" 
				aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop={this.props.backdrop}>
				<div className="modal-dialog" style={{width: this.props.width, height: this.props.height}}>
					{this.renderDialogContent()}
				</div>
				
				<button id={this.componentId + "_hiddenBtn"} type="button" style={{display: 'none'}} />
			</div>
		);
	}
	
	/**
	 * Render dialog content
	 */
	renderDialogContent(){
		if(this.state.status == "show"){
			return (
				<div className="modal-content">
					{this.renderDialogHeader()}
						
					{this.renderDialogBody()}
						
					{this.renderDialogButton()}
				</div>
			);
		}
	}
	
	/**
	 * Render dialog header
	 */
	renderDialogHeader(){
		return (
			<div className="modal-header">
				{this.parseBool(this.props.closeable) ? (<button type="button" className="close" onClick={this.onClose.bind(this)}>&times;</button>) : null}
				<h4 className="modal-title" id="myModalLabel">{this.props.title}</h4>
			</div>
		);
	}
	
	//<span className="fa fa-exclamation-triangle fa-3x" style={{color: '#FFCC33'}}/>
	/**
	 * Render dialog body
	 */
	renderDialogBody(){
		return (
			<div className="modal-body">
				<div className="message">
					{this.renderDialogIcon()}
					
					<span style={{verticalAlign: 'top', paddingLeft: '10px'}}>
						{this.getProperty("message")}
					</span>
				</div>
			</div>
		);
	}
	
	/**
	 * Render dialog icon
	 */
	renderDialogIcon(){
		switch(this.props.styleClass){
			case ("success"):
				return (<span className="fa fa-check-circle fa-3x" style={{color: '#4caf50'}} />);
			case ("info"):
				return (<span className="fa fa-info-circle fa-3x" style={{color: '#9c27b0'}} />);
			case ("warning"):
				return (<span className="fa fa-exclamation-circle fa-3x" style={{color: '#ff9800'}} />);
			case ("danger"):
				return (<span className="fa fa-ban fa-3x" style={{color: '#e51c23'}} />);
			default:
				return null;
		}
	}
	
	/**
	 * Render dialog button
	 */
	renderDialogButton(){
		return (
			<div className="modal-footer">
				{this.parseBool(this.props.confirmButton)?(<Button value={this.props.confirmText} styleClass="success" icon="fa fa-check" onClick={this.onConfirm.bind(this)} />): null}
				
				{this.parseBool(this.props.cancelButton)?(<Button value={this.props.cancelText} styleClass="danger" icon="fa fa-ban" onClick={this.onCancel.bind(this)} />): null}
			</div>
		);
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
	
	onConfirm(){
		if(this.props.onConfirm != undefined){
			this.props.onConfirm.call();
		}
		
		ConfirmDialog.hide(this.componentId);
	}
	
	onCancel(){
		if(this.props.onCancel != undefined){
			this.props.onCancel.call();
		}
		
		ConfirmDialog.hide(this.componentId);
	}
	
	onClose(){
		if(this.props.onClose != undefined){
			this.props.onClose.call();
		}
		
		ConfirmDialog.hide(this.componentId);
	}
	
};


/**
 * ConfirmDialog component prop types
 */
ConfirmDialog.propTypes = {
	id: React.PropTypes.string.isRequired,
	title: React.PropTypes.string,
	//modal: React.PropTypes.string,
	width: React.PropTypes.string,
	height: React.PropTypes.string,
	styleClass: React.PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
	//backdrop: React.PropTypes.oneOf(['static', 'true', 'false']),
	//keyboard: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	message: React.PropTypes.string,
	
	confirmText: React.PropTypes.string,
	cancelText: React.PropTypes.string,
	confirmButton: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	cancelButton: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	closeable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	
	// confirm dialog event
	onConfirm: React.PropTypes.func,
	onCancel: React.PropTypes.func,
	onClose: React.PropTypes.func
};

/**
 * Get confirmDialog component default props
 */
ConfirmDialog.defaultProps = {
	modal: true,
	width: "500px",//"auto !important",
	height: "auto !important",
	backdrop: "static",
	confirmButton: true,
	cancelButton: true,
	closeable: true,
	confirmText: "Yes",
	cancelText: "No",
	styleClass: "warning"
};
