import Command from "../Command";
import OnClickEvent from "../../../event/OnClickEvent";
import Param from "../../misc/Param";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: MenuButton Component Class
//-----------------------------------------------------------------------------------------------
export default class MenuButton extends Command {

	renderComponent(){
		return (
    	<div className="btn-group">
			   <button type="button" className={"btn btn-" + this.props.styleClass + " dropdown-toggle" + " " + this.getSize()}
			   	data-toggle="dropdown" disabled={this.getDisabled()} onClick={this.onClick.bind(this)}>
				   {this.renderIcon()}
				   {this.props.value}
			   	&nbsp;<span className="caret"></span>
			   </button>

			   <ul className="dropdown-menu" role="menu">
			   	{this.renderMenuButtonItem()}
			   </ul>
			</div>
		);
	}
	
	/**
	 * Render menu button item
	 */
	renderMenuButtonItem(){
		return this.props.children.map(function(children, index){
			return children;
		});
	}
	
	onClick(event){
		event.preventDefault();
		if(this.props.onClick != undefined){
			this.props.onClick(new OnClickEvent(this, event, Param.getParameter(this)));
		}
	}

};

/**
 * MenuButton component prop types
 */
MenuButton.propTypes = $.extend({}, Command.propTypes, {
	size: React.PropTypes.oneOf(["lg", "sm", "xs"]),
});

/**
 * Get MenuButton component default props
 */
MenuButton.defaultProps = $.extend({}, Command.defaultProps, {

});
