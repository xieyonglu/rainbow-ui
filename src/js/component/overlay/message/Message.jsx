import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2015/09/17
//	
//	author: yonglu.xie
//	
//	description: Message Component Class
//-----------------------------------------------------------------------------------------------
export default class Message extends Component {
	
	//<a href="javascript:void(0);" className="alert-link">{this.props.title}</a>
	//fa-check-circle
	//fa-info-circle
	/*
		<div className="row col-sm-12 col-md-12 col-lg-12" style={{float: 'none', padding: '0px'}}>
			<div className="col-sm-1 col-md-1 col-lg-1">
				<span className="fa fa-check-circle fa-2x"></span>
			</div>
			<div className="col-sm-11 col-md-11 col-lg-11" style={{paddingRight: '0px'}}>
				{this.props.message}
			</div>
		</div>
	*/
	render(){
		return (
			<div id={this.componentId} className={"alert alert-" + this.getProperty("styleClass") + " alert-dismissible"} role="alert">
				{this.renderCloseBtn()}
				{this.renderContent()}
			</div>
		);
	}
	
	/**
	 * Render close button
	 */
	renderCloseBtn(){
		if(this.parseBool(this.props.closeable)){
			return (
				<button type="button" className="close" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			);
		}
		return null;
	}
	
	/**
	 * Render content
	 */
	renderContent(){
		return (
			<div className="row col-sm-12 col-md-12 col-lg-12" style={{float: 'none', padding: '0px'}}>
				<div className="col-sm-1 col-md-1 col-lg-1" style={{width: '30px'}}>
					{this.renderIcon()}
				</div>
				<div className="col-sm-11 col-md-11 col-lg-11" style={{paddingRight: '0px'}}>
					{this.renderTitle()}
					{this.renderMessage()}
				</div>
			</div>
		);
	}
	
	/**
	 * Render icon
	 */
	renderIcon(){
		switch(this.props.styleClass){
			case ("success"):
				return (<span className="fa fa-check-circle fa-2x" />);
			case ("info"):
				return (<span className="fa fa-info-circle fa-2x" />);
			case ("warning"):
				return (<span className="fa fa-exclamation-circle fa-2x" />);
			case ("danger"):
				return (<span className="fa fa-ban fa-2x" />);
			default:
				return null;
		}
	}
	
	/**
	 * Render title
	 */
	renderTitle(){
		if(this.props.title){
			return (<strong style={{paddingRight: "5px"}}>{this.getProperty("title")}</strong>);
		}
	}
	
	/**
	 * Get alert message
	 */
	renderMessage(){
		var message = null;
		if(this.isFunction(this.props.message)){
			message = [];
			$.each(this.props.message(), function(index, element){
				message.push(<div>{element}</div>);
			});
		} else {
			message = this.props.message;
		}
		
		return message;
	}
	
	componentDidMount(){
		var _self = this;
		$("#" + this.componentId).bind("closed.bs.alert", function () {
      if(_self.props.onClose != undefined){
				_self.props.onClose();
			}
   	});
	}
	
};


/**
 * Message component prop types
 */
Message.propTypes = {
	id: React.PropTypes.string.isRequired,
	title: React.PropTypes.string,
	message: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array]),
	styleClass: React.PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
	closeable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	
	onClose: React.PropTypes.func
};

/**
 * Get Message component default props
 */
Message.defaultProps = {
	closeable: false
};

