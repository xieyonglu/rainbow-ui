//https://github.com/hizzgdev/jsmind

import "../../../../../plugin/jsmind/style/jsmind.css";
import "../../../../../plugin/jsmind/js/jsmind";
//import "../../../../../plugin/jsmind/js/jsmind.draggable";
//import "../../../../../plugin/jsmind/js/jsmind.screenshot";
//import "../../../../../plugin/jsmind/features/jsmind.shell";


import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date:		2015/11/22
//	
//	author: yonglu.xie
//	
//	description: MindMap Component Class
//-----------------------------------------------------------------------------------------------
export default class MindMap extends Component {
	
	static getMindMap(mindMapId){
		return jsMind.current;
	}
	
	// Find Node
	static getRoot(){}
	static getNode(nodeId){}
	static getSelectedNode(){}
	static findNodeBefore(){}
	static findNodeAfter(){}
	
	// Operate Node
	static selectNode(){}
	static collapseNode(){}
	static expandNode(){}
	static toggleNode(){}
	static moveNode(){}
	static enableEdit(){}
	static disableEdit(){}
	static beginEdit(){}
	static endEdit(){}
	
	// Edit Node
	static addNode(){}
	static insertNodeBefore(){}
	static insertNodeAfter(){}
	static removeNode(){}
	static updateNode(){}
	
	// Get Data
	static getMeta(){}
	static getData(){}
	
	// Other Operate
	static setTheme(){}
	static selectClear(){}
	static isNodeVisible(){}
	
	
	constructor(props){
    super(props);
  }
	
	render() {
		return (<div id={this.componentId} className="ui-mindmap" style={{height: this.props.height}} />);
	}
	
		
	componentDidMount(){
		this.initComponent();
	}
	
	initComponent() {
		let mind = {
			meta: {
				name: "demo",
				author: "hizzgdev@163.com",
				version: "0.2",
			},
			format: this.getFormat(),
			data: this.getDataSource()
			
			/*data: [
				{id: "root", isroot: true, topic: "jsMind"},
				
				{id: "sub1", parentid: "root", topic: "sub1"},
				{id: "sub11", parentid: "sub1", topic: "sub11"},
				{id: "sub12", parentid: "sub1", topic: "sub12"},
				{id: "sub13", parentid: "sub1", topic: "sub13"},
				
				{id: "sub2", parentid: "root", topic: "sub2"},
				{id: "sub21", parentid: "sub2", topic: "sub21"},
				{id: "sub22", parentid: "sub2", topic: "sub22"},
				
				{id: "sub3", parentid:"root", topic: "sub3"},
			]*/
			
			
			/*data: {
				"id": "root", "topic": "jsMind", "children":[
	      {"id":"easy","topic":"Easy","direction":"left","children":[
	            {"id":"easy1","topic":"Easy to show"},
	            {"id":"easy2","topic":"Easy to edit"},
	            {"id":"easy3","topic":"Easy to store"},
	            {"id":"easy4","topic":"Easy to embed"}
	        ]},
	        {"id":"open","topic":"Open Source","direction":"right","children":[
	            {"id":"open1","topic":"on GitHub"},
	            {"id":"open2","topic":"BSD License"}
	        ]},
	        {"id":"powerful","topic":"Powerful","direction":"right","children":[
	            {"id":"powerful1","topic":"Base on Javascript"},
	            {"id":"powerful2","topic":"Base on HTML5"},
	            {"id":"powerful3","topic":"Depends on you"}
	        ]},
	        {"id":"other","topic":"test node","direction":"left","children":[
	            {"id":"other1","topic":"I'm from ajax"},
	            {"id":"other2","topic":"I can do everything"}
	        ]
       }
    	]}*/
    	
    	//data: "<map version=\"1.0.1\"> <node ID=\"root\" TEXT=\"jsMind\" > <node ID=\"easy\" POSITION=\"left\" TEXT=\"Easy\" > <node ID=\"easy1\" TEXT=\"Easy to show\" /> <node ID=\"easy2\" TEXT=\"Easy to edit\" /> <node ID=\"easy3\" TEXT=\"Easy to store\" /> <node ID=\"easy4\" TEXT=\"Easy to embed\" /> </node> <node ID=\"open\" POSITION=\"right\" TEXT=\"Open Source\" > <node ID=\"open1\" TEXT=\"on GitHub\" /> <node ID=\"open2\" TEXT=\"BSD License\" /> </node> <node ID=\"powerful\" POSITION=\"right\" TEXT=\"Powerful\" > <node ID=\"powerful1\" TEXT=\"Base on Javascript\" /> <node ID=\"powerful2\" TEXT=\"Base on HTML5\" /> <node ID=\"powerful3\" TEXT=\"Depends on you\" /> </node> <node ID=\"other\" POSITION=\"left\" TEXT=\"test node\" > <node ID=\"other1\" TEXT=\"I'm from local variable\" /> <node ID=\"other2\" TEXT=\"I can do everything\" /> </node> </node> </map>";
		};
		
		let options = {
			container: this.componentId,
			editable: this.props.editable,
			theme: this.props.styleClass,
			mode: 'full',
			support_html: true,
			view: {
				hmargin: 0,        // 思维导图距容器外框的最小水平距离
				vmargin: 0,         // 思维导图距容器外框的最小垂直距离
				line_width: 2,       // 思维导图线条的粗细
				line_color: '#555'   // 思维导图线条的颜色
			},
			layout: {
				hspace: 30,          // 节点之间的水平间距
				vspace: 20,          // 节点之间的垂直间距
				pspace: 13           // 节点收缩/展开控制器的尺寸
			},
			shortcut: {
				handles: {
					test: function(j,e){
						console.log(j);
					}
				},
				mapping: {
					test: 89
				}
			}
		}
		
		let jm = jsMind.show(options, mind);
		//jm.set_readonly(true);
		//var mind_data = jm.get_data();
		//alert(mind_data);
	}
	
	getFormat(){
		let formatArray = ["node_tree", "node_array", "freemind"];
		
		switch(this.props.format){
			case ("tree"): return formatArray[0];
			case ("array"): return formatArray[1];
			case ("freemind"): return formatArray[2];
			default: return formatArray[0];
		}
	}
	
	getDataSource(){
		let {dataSource} = this.props;
		return this.isFunction(dataSource) ? dataSource() : dataSource;
	}
	
};


/**
 * MindMap component prop types
 */
MindMap.propTypes = {
	id: React.PropTypes.string.isRequired,
	styleClass: React.PropTypes.oneOf(["primary", "warning", "danger", "success", "info", "greensea", "nephrite", "belizehole", "wisteria", "asphalt", "orange", "pumpkin", "pomegranate", "clouds", "asbestos"]),
	editable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	format: React.PropTypes.oneOf(["array", "tree", "freemind"]),
	dataSource: React.PropTypes.object
};

/**
 * Get MindMap component default props
 */
MindMap.defaultProps = {
	styleClass: "primary",
	editable: false,
	format: "tree"
};
