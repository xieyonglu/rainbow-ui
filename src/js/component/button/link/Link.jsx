import Command from "../Command";
import OnClickEvent from "../../../event/OnClickEvent";
import UpdateContext from "../../../context/UpdateContext";
import Param from "../../misc/Param";

//-----------------------------------------------------------------------------------------------
//	date: 2015/11/24
//	
//	author: yonglu.xie
//	
//	description: CarouselItem Component Class
//-----------------------------------------------------------------------------------------------
export default class Link extends Command {
	
	render(){
		return (
			<a {...this.props} href="javascript:void(0);"
				onClick={this.handlerOnClick.bind(this)} disabled={this.props.disabled}
				style={this.props.style != null && this.props.style != undefined ? this.props.style : null}
				className={this.getDisabled()} >
				{this.renderLinkIcon()}
				
				<span style={{padding: "0px",marginRight: "10px",textDecoration:"underline"}}>{this.props.value}</span>
			</a>
		)
	}
	
	renderLinkIcon(){
		if(this.props.icon != null && this.props.icon != undefined){
			return (<span className={this.props.icon} style={{paddingRight: "5px"}}></span>);
		}
		return null;
	}
	
	handlerOnClick(event){
		event.preventDefault();
		if(this.getDisabled() == "disabled"){
			return;
		}
		
		// handler onClick
		if(this.props.onClick != undefined){
			this.props.onClick(new OnClickEvent(this, event, Param.getParameter(this)));
		}
		
		// handler update
		if(this.props.update != undefined){
			UpdateContext.forceUpdate(this.props.update);
		}
	}
	
};

/**
 * Link component prop types
 */
Link.propTypes = $.extend({}, Command.propTypes, {
	update: React.PropTypes.string,
});

/**
 * Get Link component default props
 */
Link.defaultProps = $.extend({}, Command.defaultProps, {
	
});
