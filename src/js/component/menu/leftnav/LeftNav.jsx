import Component from "../../../common/Component";
import MenuItem from "../MenuItem";

//-----------------------------------------------------------------------------------------------
//	date: 2015/11/07
//	
//	author: yonglu.xie
//	
//	description: LeftNav Component Class
//-----------------------------------------------------------------------------------------------
export default class LeftNav extends Component {
	
	static toggle(leftNavId){
		$("#" + leftNavId + "_openBtn").click();
	}
	
	render(){	
		return (
			<div id={this.componentId} className="ui-leftnav-container">
				<div className="menu-wrap">
					<div id={this.componentId + "_aa"} className="icon-list">
						{this.renderLeftNav(this, this.componentId)}
					</div>
					<button className="close-button" id={this.componentId + "_closeBtn"} onClick={this.clickButton.bind(this)}>Close Menu</button>
				</div>
				
				<button className="menu-button" id={this.componentId + "_openBtn"} onClick={this.clickButton.bind(this)} style={{display: 'none'}}>Open Menu</button>
			</div>
		);
	}
	
	renderLeftNav(component, componentId){
		if(!this.props.dataSource){
			var _self = this;
			if(React.Children.count(component.props.children) == 1){
				return this.renderLeftNavChildren(component.props.children, componentId);
			} else {
				return component.props.children.map(function(child, index){
					return _self.renderLeftNavChildren(child, componentId + "_" + index);
				});
			}
		}
	}
	
	renderLeftNavChildren(component, componentId){
		var _self = this;
	
		// if component is "MenuItem"
		if(component.props.componentType == "MenuItem"){
			/*return (
				<li>
					<a href="javascript:void(0);" onClick={component.props.onClick}>
						{_self.getIcon(component)}{component.props.value}
					</a>
				</li>
			);*/
			return component;
		}
		
		// if component is "Separator"
		else if(component.props.componentType == "Separator"){
			//return component;
			//return (<li className="divider" />);
		}
		
		// if component is "SubMenu"
		else if(component.props.componentType == "SubMenu"){
			componentId = componentId + "_d"
			
			return (
				<div className="accordion-group">
					<div className="accordion-heading">
						<a className="accordion-toggle" data-toggle="collapse" data-parent="#leftMenu" href={"#" + componentId}>
							<i className={component.props.icon} />{component.props.value}
						</a>
					</div>
					<div id={componentId} className="accordion-body collapse">
						<div className="accordion-inner">
							<ul style={{paddingLeft: "10px"}}>
								{this.renderLeftNav(component, componentId)}
	            </ul>
	          </div>
	        </div>
	      </div>
			);
		}
	}
	
	//=======================================================================================================
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
				let value = dataSource[i]["value"];
				let icon = dataSource[i]["icon"];
				
				if(pId == null){
					if(this.isLeaf(dataSource, id)){
						$("#" + this.componentId + "_aa").append(React.renderToString(<MenuItem id={id} value={value} icon={icon} />));
					} else {
						$("#" + this.componentId + "_aa").append(React.renderToString(this.getLeftNav({id: id, value: value, icon: icon})));
					}
				} else if(pId != null){
					if(this.isLeaf(dataSource, id)){
						$("#" + pId).append(React.renderToString(<MenuItem id={id} value={value} icon={icon} />));
					} else {
						$("#" + pId).append(React.renderToString(this.getLeftNav({id: id, value: value, icon: icon})));
					}
				}
			}
		}
	}
	
	getLeftNav(config){
		return (
			<div className="accordion-group">
				<div className="accordion-heading">
					<a className="accordion-toggle" data-toggle="collapse" data-parent="#leftMenu" href={"#accordion_" + config.id}>
						<i className={config.icon} />{config.value}
					</a>
				</div>
				<div id={"accordion_" + config.id} className="accordion-body collapse">
					<div className="accordion-inner">
						<ul id={config.id} style={{paddingLeft: "10px"}} />
					</div>
				</div>
			</div>
		);
	}
	
	isLeaf(dataSource, id){
		for(let i=0; i<dataSource.length; i++){
			if(dataSource[i]["pId"] == id){
				return false;
			}
		}
		return true;
	}
	
	componentDidMount(){
		this.initComponent();
		
		document.getElementById(this.componentId + "_openBtn").addEventListener("click", this.toggleLeftNav.bind(this));
		document.getElementById(this.componentId + "_closeBtn").addEventListener("click", this.toggleLeftNav.bind(this));
		this.isOpen = false;
	}

	toggleLeftNav() {
		if(this.isOpen){
			$("#" + this.componentId).removeClass("show-menu");
		} else {
			$("#" + this.componentId).addClass("show-menu");
		}
		this.isOpen = !this.isOpen;
	}
	
	clickButton(event){event.preventDefault();}
	
};


/**
 *LeftNav component prop types
 */
LeftNav.propTypes = {
	id: React.PropTypes.string,
	dataSource: React.PropTypes.array,
};

/**
 * Get leftNav component default props
 */
LeftNav.defaultProps = {
	
};
