import Command from "../Command";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Link Component Class
//-----------------------------------------------------------------------------------------------
export default class Link extends Command {
	
	renderComponent(){
		return (
			<a {...this.props} href="javascript: void(0);"
				onClick={this.onClick.bind(this)} disabled={this.props.disabled}
				style={this.props.style != null && this.props.style != undefined ? this.props.style : null}
				className={this.getDisabled()}>
				{this.renderIcon()}
				
				<span style={{padding: "0px", marginRight: "10px", textDecoration: "underline"}}>{this.props.value}</span>
			</a>
		)
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
