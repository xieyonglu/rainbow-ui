import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: MenuBar Component Class
//-----------------------------------------------------------------------------------------------
export default class MenuBar extends Component {
	
	/*
		<ul className="nav navbar-nav pull-right">
			<li className="dropdown">
				<a href="#" className="dropdown-toggle" data-toggle="dropdown">
					Multi Level<b className="caret"></b>
				</a>
				<ul className="dropdown-menu menu-top">
					<li><a href="#">Level 1</a></li>
				</ul>
			</li>
		</ul>
	*/
	render(){
		return (
			<nav className={"navbar navbar-" + this.props.styleClass} role="navigation">
				{this.renderMenuBarHeader()}
			
				<div id={this.componentId}>
					<ul id={this.componentId + "_navbar"} className="nav navbar-nav">
						{this.renderMenuBar(this)}
					</ul>
				</div> 
			</nav>
		)
	}
	
	renderMenuBarHeader(){
		return (
			<div className="navbar-header">
				<button type="button" className="navbar-toggle" data-toggle="collapse" data-target={"#" + this.componentId}>
					<span className="icon-bar" />
					<span className="icon-bar" />
					<span className="icon-bar" />
				</button>
				<a className="navbar-brand" href="javascript:void(0);">{this.props.headerTitle}</a>
			</div>
		);
	}
	
	renderMenuBar(component){
		if(!this.props.dataSource){
			var _self = this;
			if(React.Children.count(component.props.children) == 1){
				return this.renderMenuBarChildren(component.props.children);
			} else {
				return component.props.children.map(function(child, index){
					return _self.renderMenuBarChildren(child);
				});
			}
		}
	}
	
	renderMenuBarChildren(component){
		var _self = this;
		
		// if component is 'MenuItem'
		if(component.props.componentType == "MenuItem") {
			/*return (
				<li>
					<a href="javascript:void(0);" onClick={component.props.onClick}>
						{_self.getIcon(component)}{component.props.value}
					</a>
				</li>
			);*/
			return component;
		} 
		
		// if component is 'Separator'
		else if(component.props.componentType == "Separator"){
			return component;
			//return (<li className="divider" />);
		}
		
		// if component is 'SubMenu'
		else if(component.props.componentType == "SubMenu") {
			return (
				<li className="dropdown">
					<a href="#" className="dropdown-toggle" data-toggle="dropdown">
						{_self.getIcon(component)}{component.props.value}<b className="caret"/>
					</a>
					<ul className="dropdown-menu menu-top">
						{this.renderSubMenuBar(component)}
					</ul>
				</li>
			);
		}
	}
	
	renderSubMenuBar(component){
		var _self = this;
		
		if(React.Children.count(component.props.children) == 1){
			return this.renderSubMenuBarChildren(component.props.children);
		} else {
			return component.props.children.map(function(child, index){
				return _self.renderSubMenuBarChildren(child);
			});
		}
	}
	
	renderSubMenuBarChildren(component){
		var _self = this;
		
		// if component is 'MunuItem'
		if(component.props.componentType == "MenuItem") {
			return component;
			/*return (
				<li>
					<a data-param={component.props.dataParam} href="javascript:void(0);" onClick={component.props.onClick}>
						{_self.getIcon(component)}{component.props.value}
					</a>
				</li>
			);*/
		} 
		
		// if component is 'Separator'
		else if(component.props.componentType == "Separator"){
			return component;
			//return (<li className="divider" />);
		} 
		
		// if componnet is 'SubMenu'
		else if(component.props.componentType == "SubMenu"){
			return (
				<li className="dropdown-submenu">
					<a href="#" className="dropdown-toggle" data-toggle="dropdown">
						{_self.getIcon(component)}{component.props.value}
					</a>
					<ul className="dropdown-menu">
						{this.renderSubMenuBar(component)}
					</ul>
				</li>
			);
		}
	}
	
	getIcon(component){
		if(component.props.icon != null && component.props.icon != '' && component.props.icon != undefined){
			return (<span className={component.props.icon} style={{paddingRight: "5px"}} />);
		}
		
		return null;
	}
	
	//=======================================================================================================
	componentDidMount(){
		this.initComponent();
	}
	
	getDataSource(){
		let {dataSource} = this.props;
		return this.isFunction(dataSource) ? dataSource() : dataSource;
	}
	
	initComponent(){
		if(this.props.dataSource){
			let dataSource = this.getDataSource();
			
			for(let i=0; i<dataSource.length; i++){
				let id = dataSource[i]["id"];
				let pId = dataSource[i]["pId"];
				let text = dataSource[i]["value"];
				let icon = dataSource[i]["icon"];
				
				if(icon != null && icon != undefined){
					text = React.renderToString(<span className={icon} style={{paddingRight: "5px"}} />) + text;
					//text = "<span class=" + icon + " style='padding-right: 5px;' />" + text;
				}
				
				if(pId == null){
					if(this.isLeaf(dataSource, id)){
						$("#" + this.componentId + "_navbar").append("<li id="+ id +"><a href='#'>" + text + "</a></li>");
					} else {
						$("#" + this.componentId + "_navbar").append("<li class='dropdown'><a href='#' class='dropdown-toggle' data-toggle='dropdown'>" + text + "<b class='caret'></b></a><ul class='dropdown-menu' id="+ id +"></ul></li>");
					}
				} else if(pId != null){
					if(this.isLeaf(dataSource, id)){
						$("#" + pId).append("<li id=" + id + "><a href='#'>" + text + "</a></li>");
					} else {
						$("#" + pId).append("<li class='dropdown-submenu'><a href='#' class='dropdown-toggle' data-toggle='dropdown'>" + text + "</a><ul id="+ id +" class='dropdown-menu'></ul></li>");
					}
				}
			}
		}
	}
	
	isLeaf(dataSource, id){
		for(let i=0; i<dataSource.length; i++){
			if(dataSource[i]["pId"] == id){
				return false;
			}
		}
		return true;
	}
	
};


/**
 * MenuBar component prop types
 */
MenuBar.propTypes = {
	id: React.PropTypes.string,
	headerTitle: React.PropTypes.string,
	styleClass: React.PropTypes.oneOf(["default", "primary", "success", "info", "warning", "danger"]),
	dataSource: React.PropTypes.array
};

/**
 * Get MenuBar component default props
 */
MenuBar.defaultProps = {
	styleClass: "primary"
};
