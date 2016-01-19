import OnClickEvent from "../../../event/OnClickEvent";
import Param from "../../misc/Param";

//-----------------------------------------------------------------------------------------------
//	date: 2015/12/28
//	
//	author: yonglu.xie
//	
//	description: FloatMenuGroup Component Class
//-----------------------------------------------------------------------------------------------
export default class FloatMenuGroup extends React.Component {
	
	render(){
		return (
			<span>
				<span className="ui-floatmenu-item">
					<a href="javascript:void(0);" title="MORE" onClick={this.showPopupMenu.bind(this)}>
						<span className="ui-floatmenu-item-text" style={{color: "#FFFFFF"}}>...</span>
					</a>
				</span>
				
				<div id={this.props.id} className="ui-floatmenu-list-container">
					<div className="pull-right">
						<span style={{cursor: "pointer"}} onClick={this.closePopupMenu.bind(this)}>X</span>
					</div>
					<div>{this.renderContent()}</div>
	  		</div>
  		</span>
		);
	}
	
	renderContent(){
		let _self = this;
		return this.props.children.map(function(children, index){
			return (
				<span>
					<a href="javascript:void(0);" title={children.props.title} onClick={_self.onClickMenuItem.bind(children, _self)}>
						<span className={"ui-floatmenu-list-item-text " + children.props.icon}>
							{children.props.value}
						</span>
					</a>
				</span>
			)
		});
	}
	
	onClickMenuItem(_self, event){
		if(this.props.onClick != undefined){
			this.props.onClick(new OnClickEvent(this, event, Param.getParameter(this)));
		}
		
		// close popup menu
		_self.closePopupMenu(event);
	}
	
	showPopupMenu(event){
		$("#" + this.props.id).css({left: event.clientX - 200, top: event.clientY}).show();
  }
	
	closePopupMenu(event){
		$("#" + this.props.id).hide();
  }
  
};


FloatMenuGroup.propTypes = {
	id: React.PropTypes.string
};


FloatMenuGroup.defaultProps = {
	componentType: "FloatMenuGroup"
}