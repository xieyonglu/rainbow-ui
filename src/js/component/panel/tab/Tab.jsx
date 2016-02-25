import OnTabChangeEvent from "../../../event/OnTabChangeEvent";
//import TabItem from "./TabItem";
import Param from "../../misc/Param";
import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Tab Component Class
//-----------------------------------------------------------------------------------------------
export default class Tab extends Component {
	
	//<li><a href="javascript:void(0);" className="ui-tab-add fa fa-plus" /></li>
	render(){
		return (
			<div>
				<ul id={this.componentId} className={"nav nav-" + this.props.type}>
					{this.renderTab()}	
				</ul>
				
				<div id={this.componentId + "_content"} className="tab-content">
				  {this.renderTabContent()}
				</div>
			</div>
		);
	}
	
	/**
	 * Render tab
	 */
	//<a href="javascript:void(0);" className="ui-tab-delete"><span className="fa fa-fw fa-times" /></a>
	renderTab(){
		let _self = this;
		return this.props.children.map(function(child, index){
			let tabItemContentId = "#" + this.getTabItemContentId(index);
			
			// if children is "TabItem"
			if(child.props.componentType == "TabItem") {
				if(this.props.activeIndex == index + 1){
					return (
						<li className="active">
							<a href={tabItemContentId} style={child.props.style} onClick={_self.onClickTabItem.bind(child, _self)}>
								{_self.renderTabTitle(child)}
							</a>
						</li>
					);
				}
				
				return (
					<li>
						<a href={tabItemContentId} style={child.props.style} onClick={_self.onClickTabItem.bind(child, _self)}>
							{_self.renderTabTitle(child)}
						</a>
					</li>
				);
			}
			
			// if chilren is "TabItemList"
			else if(child.props.componentType == "TabItemList") {
				return (
					<li className="dropdown">
			      <a id={this.componentId + "_dropdown"} href={tabItemContentId} className="dropdown-toggle" data-toggle="dropdown" style={child.props.style}>
			      	{_self.renderTabTitle(child)}
			      	<b className="caret" />
			      </a>
			      <ul className="dropdown-menu" role="menu" aria-labelledby={this.componentId + "_dropdown"}>
			         {this.renderTabItemList(child, index)}
			      </ul>
			   	</li>
				);
			}
			
		}.bind(this));
	}
	
	/**
	 * Render tab item list
	 */
	renderTabItemList(children, index){
		let _self = this;
		return children.props.children.map(function(child, subIndex){
			if(child.props.componentType == 'TabItem') {
				let tabItemListContentId = "#" + this.getTabItemListContentId(index, subIndex);
				let tabItemIndex = index + subIndex;
				
				if(this.props.activeIndex == (index + subIndex + 1)){
					return (
						<li className="active">
				      <a href={tabItemListContentId} style={child.props.style} onClick={_self.onClickTabItem.bind(child, _self)}>
				      	{_self.renderTabTitle(child)}
			      	</a>
				   	</li>
					);
				}
				
				return (
					<li>
				     <a href={tabItemListContentId} style={child.props.style} onClick={_self.onClickTabItem.bind(child, _self)}>
				     	{_self.renderTabTitle(child)}
				     </a>
				  </li>
				);
			}
		}.bind(this));
	}
	
	/**
	 * Render tab content
	 */
	renderTabContent(){
		return this.props.children.map(function(child, index){
			// if children is "TabItem"
			if(child.props.componentType == "TabItem") {
				let tabItemContentId = this.getTabItemContentId(index);
				
				if(this.props.activeIndex == index + 1){
					return (
						<div className="tab-pane fade in active" id={tabItemContentId}>
				      <p>{child.props.children}</p>
				   	</div>
					);
				}
				return (
					<div className="tab-pane fade" id={tabItemContentId}>
						<p>{child.props.children}</p>
				  </div>
				);
			}
			
			// if children is "TabItemList"
			else if(child.props.componentType == "TabItemList") {
				return this.renderTabItemListContent(child, index);
			}
		}.bind(this));
	}
	
	/**
	 * Render tab item list content
	 */
	renderTabItemListContent(children, index){
		let activeIndex = this.props.activeIndex;
		//let _self = this;
		
		return children.props.children.map(function(child, subIndex){
			if(child.props.componentType == "TabItem") {
				let tabItemListContentId = this.getTabItemListContentId(index, subIndex);
				
				if(activeIndex == (index + subIndex + 2)){
					return (
						<div className="tab-pane fade in active" id={tabItemListContentId}>
							<p>{child.props.children}</p>
					  </div>
					);
				} else {
					return (
						<div className="tab-pane fade" id={tabItemListContentId}>
							<p>{child.props.children}</p>
					  </div>
					);
				}
			}
		}.bind(this));
	}
	
	/**
	 * Render tab title
	 */
	renderTabTitle(child){
		let titleArray = [];
		
		if(child.props.icon){
			titleArray.push(<span className={child.props.icon} style={{padding: "0px 5px 0px 5px"}} />);
		}
		if(child.props.title){
			titleArray.push(child.props.title);
		}
		if(child.props.badge){
			titleArray.push(<span className="badge">{child.props.badge}</span>);
		}
		
		return titleArray;
	}
	
	onClickTabItem(_self, event){
		event.preventDefault();
		
		let target = $(event.target).parent("a").attr("href") == undefined ? $(event.target) : $(event.target).parent("a");
		
		// handler before tab change event
		if(_self.props.onBeforeTabChange){
			if(!_self.props.onBeforeTabChange()){
				return;
		  }
		}
		
		// handler tab change event
		if(_self.props.onTabChange){
			let hrefArray = target.attr("href").split("_");
			let tabItemIndex = hrefArray[1];
			if(hrefArray.length == 3){
				tabItemIndex = parseInt(tabItemIndex) + parseInt(hrefArray[2]) - 1;
			}
			
			_self.props.onTabChange(new OnTabChangeEvent(this, event, Param.getAttributeParameter(this), tabItemIndex, _self.onTabChangeEvent.newActiveIndex));
			_self.onTabChangeEvent = {newActiveIndex: tabItemIndex, oldActiveIndex: _self.onTabChangeEvent.newActiveIndex};
		}
		
		// handler after tab change event
		if(_self.props.onAfterTabChange){
			_self.props.onAfterTabChange();
		}
		
		target.tab("show");
	}
	
	componentDidMount(){
		this.onTabChangeEvent = {newActiveIndex: null, oldActiveIndex: this.getInitIndex()};
		
		$("#" + this.componentId + " a").click(function(event) { 
       $(this).tab("show");
    });
	}
	
	getInitIndex(){
		return this.props.activeIndex == null ? 1 : this.props.activeIndex;
	}
	
	/**
   * Get tab item content id
   * @param index
   */
	getTabItemContentId(index){
		return this.componentId + "_" + (index + 1);
	}
	
	/**
   * Get tab item list content id
   * @param index
   * @param subIndex
   */
	getTabItemListContentId(index, subIndex){
		return this.componentId + "_" + (index + 1) + "_" + (subIndex + 1);
	}
	
};

/**
 * Tab component prop types
 */
Tab.propTypes = {
	id: React.PropTypes.string.isRequired,
	type: React.PropTypes.oneOf(['tabs', 'pills']),
	activeIndex: React.PropTypes.string,
		
	onTabChange: React.PropTypes.func,
	onBeforeTabChange: React.PropTypes.func,
	onAfterTabChange: React.PropTypes.func,
};

/**
 * Get tab component default props
 */
Tab.defaultProps = {
	type: "tabs",
	activeIndex: 1
};