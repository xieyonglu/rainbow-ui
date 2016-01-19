import Command from "../Command";
import OnClickEvent from "../../../event/OnClickEvent";
import Param from "../../misc/Param";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: SplitButton Component Class
//-----------------------------------------------------------------------------------------------
export default class SplitButton extends Command {
	
	render(){
		return (
    	<div className="btn-group">
			   <button type="button" className={"btn btn-" + this.props.styleClass + " " + this.getSize()} disabled={this.getDisabled()} onClick={this.onClickButton.bind(this)}>
				   {this.renderButtonIcon()}
				   {this.props.value}
			   </button>
			   <button type="button" className={"btn btn-" + this.props.styleClass + " dropdown-toggle" + " " + this.getSize()} disabled={this.getDisabled()} data-toggle="dropdown">
			      <span className="caret"></span>
			      <span className="sr-only">Toggle dropdown menu</span>
			   </button>
			   <ul className="dropdown-menu" role="menu">
			      {this.renderSplitButtonItem()}
			   </ul>
			</div>
		);
	}
	
	renderSplitButtonItem(){
		return this.props.children.map(function(children, index){
			return children;
		});
	}
	
	renderButtonIcon(){
		if(this.props.icon != null && this.props.icon != undefined){
			if(this.props.value != null && this.props.value != undefined){
				return (<span className={this.props.icon} style={{paddingRight: '5px'}} />);
			}
			return (<span className={this.props.icon} />);
		}
		return null;
	}
	
	onClickButton(event){
		event.preventDefault();
		
		if(this.props.onClick != undefined){
			this.props.onClick(new OnClickEvent(this, event, Param.getParameter(this)));
		}
	}
	
};

/**
 * SplitButton component prop types
 */
SplitButton.propTypes = $.extend({}, Command.propTypes, {
	size: React.PropTypes.oneOf(["lg", "sm", "xs"]),
});

/**
 * Get SplitButton component default props
 */
SplitButton.defaultProps = $.extend({}, Command.defaultProps, {
	
});
