import Util from "../../util/Util";
import OnClickEvent from "../../event/OnClickEvent";
import Param from "../misc/Param";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: MenuItem Component Class
//-----------------------------------------------------------------------------------------------
export default class MenuItem extends React.Component {
	
	render(){
		if(this.props.role == "header"){
			return (<li id={this.props.id} role="presentation" className="dropdown-header">{this.props.value}</li>);
		} else {
			return (
				<li id={this.props.id} role="presentation" className={"ui-menuitem" + this.getDisabled()}>
					<a href="javascript:void(0);" disabled={this.getDisabled()} onClick={this.onClickItem.bind(this)}>
						{this.renderIcon()}
						{this.props.value}
					</a>
				</li>
			);
		}
	}
	
	getDisabled(){
		if(Util.parseBool(this.props.disabled)){
			return " disabled";
		}
		return "";
	}
	
	renderIcon(){
		if(this.props.icon != null && this.props.icon != undefined){
			if(this.props.value != null && this.props.value != undefined){
				return (<span className={this.props.icon} style={{paddingRight: '5px'}} />);
			}
			return (<span className={this.props.icon} />);
		}
		return null;
	}
	
	onClickItem(event){
		event.preventDefault();
		
		if(this.getDisabled() == "disabled"){
			return;
		}
		
		if(this.props.onClick != undefined){
			this.props.onClick(new OnClickEvent(this, event, Param.getParameter(this)));
		}
	}
	
};


/**
 * MenuItem component prop types
 */
MenuItem.propTypes = {
	id: React.PropTypes.string,
	value: React.PropTypes.string,
	//text: React.PropTypes.string,
	icon: React.PropTypes.string,
	role: React.PropTypes.string,
	disabled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
		
	onClick: React.PropTypes.func
};

/**
 * Get MenuItem component default props
 */
MenuItem.defaultProps = {
	componentType: "MenuItem",
	role: null,
	disabled: null,
};
