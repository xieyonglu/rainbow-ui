import OnClickEvent from "../../../event/OnClickEvent";
import Param from "../../misc/Param";

//-----------------------------------------------------------------------------------------------
//	date: 2015/12/28
//	
//	author: yonglu.xie
//	
//	description: FloatMenu Component Class
//-----------------------------------------------------------------------------------------------
export default class FloatMenu extends React.Component {
	
	render(){
		return (
			<div id={this.props.id} className="ui-floatmenu">
				{this.renderFloatMenu()}
			</div>
		);
	}
	
	renderFloatMenu() {
		let _self = this, {children} = this.props;
		
		if(React.Children.count(children) == 0){}
		else if(React.Children.count(children) == 1){
			return null;
		}
		
		else {
			return children.map(function(child, index){
				if(child.props.componentType == "FloatMenuGroup"){
					child.props.id = _self.props.id + "_list_" + index;
					return child;
				} else {
					return (
						<span className="ui-floatmenu-item">
							<a href="javascript:void(0);" title={child.props.title} onClick={_self.onClickMenuItem.bind(child)}>
								<span className={"ui-floatmenu-item-text " + child.props.icon} style={{color: "#FFFFFF"}}>
									{child.props.value}
								</span>
							</a>
						</span>
					) 
				}
			});
		}
	}
	
	onClickMenuItem(event){
		if(this.props.onClick != undefined){
			this.props.onClick(new OnClickEvent(this, event, Param.getParameter(this)));
		}
	}
	
	componentDidMount(){
		$("#" + this.props.id).css({right: this.props.right, top: this.props.top});
	}

};


FloatMenu.propTypes = {
	id: React.PropTypes.string,
	top: React.PropTypes.string,
	right: React.PropTypes.string
};

FloatMenu.defaultProps = {
	top: $(document).height()/2,
	right: -5
};


/*
	$(window).scroll(function(e){
	    var showDistance=280;
	    var  t=$(document).scrollTop();
	    if(t > showDistance){
	          $('.floating-menu').fadeIn(500);
	          $('.floating-menu-popup1').fadeOut(500);
	    }else{
	         $('.floating-menu').fadeOut(500);
	         $('.floating-menu-popup').fadeOut(500);

	    }
  });
*/
