import "../../../../../plugin/jquery-picklist/jquery.ui.widget";
import "../../../../../plugin/jquery-picklist/jquery-picklist";
import "../../../../../plugin/jquery-picklist/jquery-picklist.css";

import Component from "../../../common/Component";


//-----------------------------------------------------------------------------------------------
//	date:		2015/11/07
//	
//	author: yonglu.xie
//	
//	description: PickList Class
//-----------------------------------------------------------------------------------------------
export default class PickList extends Component {

	/**
	 * Get source list
	 */
	static getSourceList(pickListId){
		var itemIds = [];
		$("#" + pickListId + "_source_ul li").each(function(){
			itemIds.push($(this).attr("data-value"));
		});
		return itemIds;
	}
	
	/**
	 * Get target list
	 */
	static getTargetList(pickListId){
		var itemIds = [];
		$("#" + pickListId + "_target_ul li").each(function(){
			itemIds.push($(this).attr("data-value"));
		});
		return itemIds;
	}
	
	render(){
		return (
			<div className="row">
				<select id={this.componentId} name={this.getName()} multiple="multiple" />
	    </div>
		);
	}
	
	componentDidMount(){
		this.initComponent();
	}
	
	initComponent(){
		$("#" + this.componentId).pickList({
			id: this.componentId,
			sourceListLabel: this.props.sourceListLabel,
			targetListLabel: this.props.targetListLabel,
			addAllLabel: this.props.addAllLabel,
			addLabel: this.props.addLabel,
			removeAllLabel: this.props.removeAllLabel,
			removeLabel: this.props.removeLabel,
			sortAttribute: "value",
			value: 7,
			label: "Afterwards #2",
			selected: true,
			items: this.getDataSource(),
				
			beforeBuild: this.handlerEvent,
			afterBuild: this.handlerEvent,
			beforePopulate: this.handlerEvent,
			afterPopulate: this.handlerEvent,
			beforeAddAll: this.handlerEvent,
			afterAddAll: this.handlerEvent,
			beforeAdd: this.handlerEvent,
			afterAdd: this.handlerEvent,
			beforeRemove: this.handlerEvent,
			afterRemove: this.handlerEvent,
			beforeRemoveAll: this.handlerEvent,
			afterRemoveAll: this.handlerEvent,
			beforeRefresh: this.handlerEvent,
			afterRefresh: this.handlerEvent,
			beforeRefreshControls: this.handlerEvent,
			afterRefreshControls: this.handlerEvent,
			onDestroy: this.handlerEvent
		}).bind("picklist_onchange", function(event, obj){
			var itemIds = [];
			
			obj.items.each(function(){
				itemIds.push($(this).attr("data-value"));
			});
			
			//console.log(event.type.replace("picklist_", "") + " [" + obj.type + ": " + itemIds.join(", ") + "]");
		});
	}
	
	handlerEvent(event){
		//console.log(event.type.replace("picklist_", ""));
	}
	
	getDataSource(){
		var dataSource = this.props.dataSource;
		return this.isFunction(dataSource) ? dataSource() : dataSource;
	}
	
};


/**
 * PickList component prop types
 */
PickList.propTypes = {
	id: React.PropTypes.string.isRequired,
	dataSource: React.PropTypes.object,
	sourceListLabel: React.PropTypes.string,
	targetListLabel: React.PropTypes.string,
	addAllLabel: React.PropTypes.string,
	addLabel: React.PropTypes.string,
	removeAllLabel: React.PropTypes.string,
	removeLabel: React.PropTypes.string,
};

/**
 * Get pickList component default props
 */
PickList.defaultProps = {
	sourceListLabel: "Unadded",
	targetListLabel: "Added",
	addAllLabel: ">>",
	addLabel: ">",
	removeAllLabel: "<<",
	removeLabel: "<",
};
