import "../../../../../node_modules/ztree/css/metroStyle/metroStyle.css";
import "../../../../../node_modules/ztree/js/jquery.ztree.all-3.5.min";

import OnClickEvent from "../../../event/OnClickEvent";
import Param from "../../misc/Param";
import Component from "../../../common/Component";
import UpdateContext from "../../../context/UpdateContext";


//-----------------------------------------------------------------------------------------------
//	date: 2015/09/05
//	
//	author: yonglu.xie
//	
//	description: Tree Component Class
//-----------------------------------------------------------------------------------------------
export default class Tree extends Component {
	
	/**
	 * Get checked node
	 */
	static getCheckedNode(treeId, checked){
		return this.getTree(treeId).getCheckedNodes(checked);
	}
	
	/**
	 * Get selected node
	 */
	static getSelectedNode(treeId){
		return this.getTree(treeId).getSelectedNodes();
	}
	
	/**
	 * Get tree
	 */
	static getTree(treeId){
		return $.fn.zTree.getZTreeObj(treeId);
	}
	
	render(){
		if(this.parseBool(this.props.searchable)){
			return (
				<div>
					<input type="text" id={this.componentId + "_keyword"} className="empty" /><br/>
					<ul id={this.componentId} className="ztree" />
				</div>
			);
		} else {
			return (<ul id={this.componentId} className="ztree" />);
		}
	}
	
	componentDidMount(){
    this.handlerComponent();
    
    UpdateContext.put(this.componentId, this);
	}
	
	componentDidUpdate(prevProps, prevState){
		this.handlerComponent();
	}
	
	handlerComponent(){
		let _self = this;
		let setting = {
    	callback: {
    		onCheck: function(event){
    			let treeObj = $.fn.zTree.getZTreeObj(_self.componentId);
    			let nodes = treeObj.getCheckedNodes(true);
    		}
    	}
    };
    
    $.extend(true, setting, this.getViewJson(), this.getCheckJson(), this.getDataJson(), this.getEditJson(), this.getCallBackJson());
    //$.fn.zTree.init($("#" + this.componentId), setting, this.props.dataSource);
    $.fn.zTree.init($("#" + this.componentId), setting, this.getProperty("dataSource"));
    
    if(this.parseBool(this.props.searchable)){
    	$("#" + this.componentId + "_keyword").bind("input", this.searchNode.bind(this));
    }
	}
	
	getViewJson(){
		return {
			view: {
				addDiyDom: null,
				addHoverDom: null,
				autoCancelSelected: true,
    		dblClickExpand: false,//双击节点时，是否自动展开父节点的标识
    		expandSpeed: "fast",
        //fontCss: {'color':'black', 'font-weight':'normal'},
        fontCss: this.getFontCSS,
       	nameIsHTML: false,
       	removeHoverDom: null,
        selectedMulti: false,
        showIcon: true,
        showLine: true,
        showTitle: true,
        txtSelectedEnable: false
      },
		};
	}
	
	getCheckJson(){
		return {
      check: {
      	autoCheckTrigger: false,
        chkboxType: { "Y": "ps", "N": "ps" },
        chkStyle: "checkbox",
        enable: this.parseBool(this.props.checkable),
        nocheckInherit: false,
        chkDisabledInherit: false,
        radioType: "level"
      }
    };
	}
	
	getDataJson(){
		return {
			data: {
				keep:{
					leaf: true,
					parent: true
				},
				key: {
					checked: "checked",
					children: "children",
					name: "name",
					title: "",
					url: "url"
				},
				simpleData: {
					enable: true,
					idKey: "id",
					pIdKey: "pId",
					rootPId: null
				}
			}
		};
	}
	
	getEditJson(){
		return {
			edit: {
				drag: {
					autoExpandTrigger: true,
					isCopy: false,
					isMove: this.parseBool(this.props.moveable),
					prev: true,
					next: true,
					inner: true,
					borderMax: 10,
					borderMin: -5,
					minMoveSize: 5,
					maxShowNodeNum: 5,
					autoOpenTime: 500
				},
			
				enable: this.parseBool(this.props.editable),
				editNameSelectAll: true,
				removeTitle: "remove",
				renameTitle: "rename",
				showRemoveBtn: this.parseBool(this.props.removeable),
				showRenameBtn: this.parseBool(this.props.renameable)
			}
		};
	}
	
	getCallBackJson(){
		return {
			callback:{
				//beforeRemove:beforeRemove,//点击删除时触发，用来提示用户是否确定删除
				//beforeEditName: beforeEditName,//点击编辑时触发，用来判断该节点是否能编辑
				//beforeRename:beforeRename,//编辑结束时触发，用来验证输入的数据是否符合要求
				//onRemove:onRemove,//删除节点后触发，用户后台操作
				//onRename:onRename,//编辑后触发，用于操作后台
				//beforeDrag:beforeDrag,//用户禁止拖动节点
				onClick: this.onClickNode.bind(this)//点击节点触发的事件
			}
		};
	}
	
	beforeRemove(e, treeId, treeNode){
		return confirm("你确定要删除吗？");
	}
	
	onRemove(e, treeId, treeNode){
		if(treeNode.isParent){
			let childNodes = zTree.removeChildNodes(treeNode);
			let paramsArray = new Array();
			for(let i = 0; i < childNodes.length; i++){
				paramsArray.push(childNodes[i].id);
			}
			alert("删除父节点的id为："+treeNode.id+"\r\n他的孩子节点有："+paramsArray.join(","));
			return;
		}
		alert("你点击要删除的节点的名称为："+treeNode.name+"\r\n"+"节点id为："+treeNode.id);
	}
	
	beforeEditName(treeId, treeNode){
		if(treeNode.isParent){
			alert("不准编辑非叶子节点！");
			return false;
		}
		return true;
	}
	
	beforeRename(treeId, treeNode, newName, isCancel){
		if(newName.length < 3){
			alert("名称不能少于3个字符！");
			return false;
		}
		return true;
	}
	
	onRename(event, treeId, treeNode, isCancel){
		alert("修改节点的id为："+treeNode.id+"\n修改后的名称为："+treeNode.name);
	}
	
	onClickNode(event, treeId, treeNode){
		event.preventDefault();
		
		if(this.props.onClick != undefined){
			this.props.onClick(new OnClickEvent(this, event, Param.getParameter(this)), treeId, treeNode);
			//this.props.onClick(event, treeId, treeNode);
		}
	}
	
	searchNode(event) {
		var treeObj = $.fn.zTree.getZTreeObj(this.componentId);
		var value = $.trim($("#" + this.componentId + "_keyword").val());
		
    this.updateNodes(false, treeObj.transformToArray(treeObj.getNodes()));
    if (value === "") return;
		
		var keyType = "name";
		this.updateNodes(true, treeObj.getNodesByParamFuzzy(keyType, value));
	}
	
	updateNodes(highlight, nodeList) {
		let treeObj = $.fn.zTree.getZTreeObj(this.componentId);
		for(var i=0, l=nodeList.length; i<l; i++) {
			nodeList[i].highlight = highlight;
			treeObj.updateNode(nodeList[i]);
		}
	}
	
	getFontCSS(treeId, treeNode) {
		//return (!!treeNode.highlight) ? {color:"#A60000", "font-weight":"bold"} : {color:"#333", "font-weight":"normal"};
		return treeNode.font ? treeNode.font :
			(!!treeNode.highlight) ? {color:"#A60000", "font-weight":"bold"} : {color:"#333", "font-weight":"normal"};  
	}
	
};


/**
 * Tree component prop types
 */
Tree.propTypes = {
	id: React.PropTypes.string,
	value: React.PropTypes.object,
	dataSource: React.PropTypes.object,
	
	checkable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	
	searchable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	editable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	removeable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	renameable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	moveable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	
	onClick: React.PropTypes.func
};

/**
 * Get tree component default props
 */
Tree.defaultProps = {
	checkable: false,
	searchable: false,
	editable: false,
	removeable: true,
	renameable: true,
	moveable: true,
};
