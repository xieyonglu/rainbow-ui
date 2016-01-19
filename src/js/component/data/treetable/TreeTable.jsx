import "../../../../../plugin/jquery-treetable/css/jquery.treetable.css";
import "../../../../../plugin/jquery-treetable/css/jquery.treetable.theme.default.css";
import "../../../../../plugin/jquery-treetable/jquery.treetable";


import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: TreeTable Class
//-----------------------------------------------------------------------------------------------
export default class TreeTable extends Component {
	
	/**
	 * Expand all
	 */
	static expandAll(treeTableId){
		$("#" + treeTableId).treetable("expandAll");
	}
	
	/**
	 * Collapse all
	 */
	static collapseAll(treeTableId){
		$("#" + treeTableId).treetable("collapseAll")
	}
	
	render(){
		return (
			<table id={this.componentId}>
				<thead><tr>{this.renderHeader()}</tr></thead>
				
				<tbody>{this.renderBody()}</tbody>
	    </table>
    );
	}
	
	renderHeader(){
		let _self = this, tableHeaderArray = [];
    
    // handler page index
    if(this.parseBool(this.props.indexable)){
    	tableHeaderArray.push(<th style={{width: "20px"}} />);
    }
    
		this.props.children.map(function(children, index){
			tableHeaderArray.push(<th width={children.props.width}>{children.props.headerTitle}</th>);
		});
		
		return tableHeaderArray;
	}
	
	renderBody(){
		let _self = this, tableBodyArray = [];
		
		if(this.props.dataSource){
			$.each(this.props.dataSource, function(key, value){
				tableBodyArray.push(
					<tr data-tt-id={value.id} data-tt-parent-id={value.pId}>
						{_self.renderTableData(key, value)}
			    </tr>
				);
			});
		}
		return tableBodyArray;
	}
	
	renderTableData(index, data){
		let _self = this, tableDataArray = [];
		
		// handler page index
		if(_self.parseBool(_self.props.indexable)){
			tableDataArray.push(<td>{index + 1}</td>);
		}
		
		this.props.children.map(function(children, index){
			let value = data[children.props.value];
			
			if(React.isValidElement(children.props.children)){
				var cloneChildren = React.cloneElement(children.props.children);
				
				//if(children.props.children.props.io == "in"){
				//	cloneChildren.props.id = children.props.children.props.id + "_" + index;
				//	cloneChildren.props.value = (_self.props.var != undefined) ? "#{" + _self.props.var + "[" + index + "]." + children.props.value + "}" : value;
				//} else {
				cloneChildren.props.value = value;
				//}
				tableDataArray.push(<td>{cloneChildren}</td>);
			}
			
			else if(children.props.render != undefined){
				let render = children.props.render;
				if (typeof render === "function") {
					data.dataIndex = index;
					tableDataArray.push(<td>{render(data)}</td>);
				} else {
					tableDataArray.push(<td>==None==</td>);
				}
			}
			
			else {
				tableDataArray.push(<td>{value}</td>);
			}
			
			//radioArray.push(
			//	<td><span className={_self.getTableDataClassName(index, data)}>{value}</span></td>
			//);
		});
		return tableDataArray;
	}
	
	/*getTableDataClassName(index, data){
		if(index == 0 && this.props.dataSource){
			for(let value of this.props.dataSource){
				if(value.pId == data.id){
					return "folder";
				}
			}
		}
		
		return null;
	}*/
	
	componentDidMount(){
		let _self = this;
		$("#" + this.componentId).treetable({
			clickableNodeNames: true,
			column: this.parseBool(this.props.indexable) ? 1 : 0,
			expandable: this.parseBool(this.props.expandable),
			initialState: this.props.initialState,
			//expanderTemplate: "<a href='#'>&nbsp;</a>",
			indenterTemplate: this.getIndenterTemplate(),
			stringCollapse: this.props.stringCollapse,
			stringExpand: this.props.stringExpand,
			indent: 19,
			
			// Callback function fired when the tree has been initialized.
			onInitialized: function(){
				if(_self.props.onInitialized != undefined){
					_self.props.onInitialized.call(_self);
				}
			},
			
			// Callback function fired when a branch is collapsed.
			onNodeCollapse: function(){
				if(_self.props.onNodeCollapse != undefined){
					_self.props.onNodeCollapse.call(_self);
				}
			},
			
			// Callback function fired when a branch is expanded.
			onNodeExpand: function(){
				if(_self.props.onNodeExpand != undefined){
					_self.props.onNodeExpand.call(_self);
				}
			},
			
			// Callback function fired when a node has been initialized.
			onNodeInitialized: function(){
				if(_self.props.onNodeInitialized != undefined){
					_self.props.onNodeInitialized.call(_self);
				}
			}
		});

		// Highlight selected row
		/*$("#" + this.componentId + " tbody").on("mousedown", "tr", function() {
		  $(".selected").not(this).removeClass("selected");
		  $(this).toggleClass("selected");
		});*/
	}
	
	getIndenterTemplate(){
		if(this.parseBool(this.props.expandable)){
			return "<span class='indenter' />";
		}
		return "<span />";
	}
	
};


/**
 * TreeTable component prop types
 */
TreeTable.propTypes = {
	id: React.PropTypes.string,
	value: React.PropTypes.string,
	dataSource: React.PropTypes.string,
	indexable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	expandable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	initialState: React.PropTypes.oneOf(["expanded", "collapsed"]),
	stringCollapse: React.PropTypes.string,
	stringExpand: React.PropTypes.string,
	
	// treetable event
	onInitialized: React.PropTypes.func,
	onNodeCollapse: React.PropTypes.func,
	onNodeExpand: React.PropTypes.func,
	onNodeInitialized: React.PropTypes.func,
};

/**
 * Get TreeTable component default props
 */
TreeTable.defaultProps = {
	indexable: false,
	expandable: true,
	initialState: "collapsed",
	stringCollapse: "Collapse",
	stringExpand: "Expand",
	
	// treetable event
	onInitialized: () => {},
	onNodeCollapse: () => {},
	onNodeExpand: () => {},
	onNodeInitialized: () => {},
};
