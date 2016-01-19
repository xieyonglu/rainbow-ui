import Data from "../Data";
import OnRowSelectEvent from "../../../event/OnRowSelectEvent";
import UpdateContext from "../../../context/UpdateContext";
import SelectionMode from "./SelectionMode";
import i18n from "../../../i18n/reactjs-tag.i18n";

//-----------------------------------------------------------------------------------------------
//	date: 2015/10/17
//	
//	author: yonglu.xie
//	
//	description: DataTable Component Class
//-----------------------------------------------------------------------------------------------
export default class DataTable extends Data {
	
	constructor(props){
    super(props);
  }
  
  /**
	 * Get selected record
	 */
	static getSelectedRecord(dataTableId){
		let recordArray = [];
		
		// handler single select
		$("input:radio[name=" + dataTableId + "_single" + "]").each(function(index, element){
			if(element.checked){
				let tableRow = $(element).closest("tr");
				recordArray.push(JSON.parse($(tableRow).attr("data-value")));
			}
		});
		
		// handler multiple select
		$("input:checkbox[name=" + dataTableId + "_multiple" + "]").each(function(index, element){
			if(element.checked){
				let tableRow = $(element).closest("tr");
				recordArray.push(JSON.parse($(tableRow).attr("data-value")));
			}
		});
		
		return recordArray;
	}
	
  renderData(){
    return (
    	<div style={{width: "auto"}}>
    		{this.renderBeforeData()}
    		
    		{this.renderTable()}
    	</div>
    );
  }
  
  /**
   * Render table
   */
  renderTable(){
  	//<caption />
    return (
    	<table id={this.props.id} className="table table-hover">
    		<thead><tr>{this.renderTableHeader()}</tr></thead>
    		
    		<tbody>{this.renderTableBody()}</tbody>
    	</table>
    );
  }
  
  /**
   * Render table header
   */
  renderTableHeader(){
  	let _self = this, tableHeaderArray = [];
    
    // handler page index
    if(this.parseBool(this.props.indexable)){
    	tableHeaderArray.push(<th style={{width: "20px"}} />);
    }
    
    // handler single and multiple selected
    if(this.props.selectionMode == "single"){
    	tableHeaderArray.push(<th style={{width: "70px"}}>{i18n.DataTable.SingleSelect}</th>);
    } else if(this.props.selectionMode == "multiple"){
    	tableHeaderArray.push(
    		<th style={{width: "70px"}}>
    			<input type="checkbox" id={this.props.id + "_multiple_selectall"} name={this.props.id + "_multiple_selectall"} />{i18n.DataTable.SelectAll}
    		</th>
    	);
    }
    
    // handler row detail
    if(this.parseBool(this.props.detailable)){
    	tableHeaderArray.push(<th style={{width: "70px"}} />);
    }
    
    React.Children.forEach(this.props.children, function(child){
	    if(child.props.selectionMode == "single"){
		    tableHeaderArray.push(<th style={{width: "70px"}}>{i18n.DataTable.SingleSelect}</th>);
		  }
		  
		  else if(child.props.selectionMode == "multiple"){
		  	tableHeaderArray.push(
		  		<th style={{width: "70px"}}>
		  			<input type="checkbox" id={_self.props.id + "_multiple_selectall"} name={_self.props.id + "_multiple_selectall"} disabled={_self.getDisabledStyleClass()} />{i18n.DataTable.SelectAll}
		    	</th>
		    );
		  }
		  
		  else if(child.props.render != undefined){
		  	tableHeaderArray.push(
	    		<th style={{width: child.props.width}}>
	    			{child.props.headerTitle}
	    		</th>
	    	);
		  }
		  
		  else {
	    	tableHeaderArray.push(
	    		<th style={{width: child.props.width}}>
	    			{child.props.headerTitle}
	    			{_self.renderTableHeaderSortIcon(child)}
	    		</th>
	    	);
	    }
    });
    
    return tableHeaderArray;
  }
  
  /**
   * Render table header sort icon
   */
  renderTableHeaderSortIcon(column){
    if(this.parseBool(column.props.sortable) || (column.props.sortable == undefined && this.parseBool(this.props.sortable))){
	    let value = column.props.value;
	    
	    if(this.state.sortColumn == value){
	    	if(this.state.sortWay == "desc"){
	    		// 降序 => 从大到小
	    		return (<a href="javascript:void(0);" data-value={value} onClick={this.onSort.bind(this)} className="ui-table-header-sort pull-right fa fa-angle-down datatable-sort-icon-position"/>);
		    } else if(this.state.sortWay == "asc"){
		    	// 升序 => 从小到大
		    	return (<a href="javascript:void(0);" data-value={value} onClick={this.onSort.bind(this)} className="ui-table-header-sort pull-right fa fa-angle-up datatable-sort-icon-position"/>);
		    }
		  }
		  return (<a href="javascript:void(0);" data-value={value} onClick={this.onSort.bind(this)} className="ui-table-header-sort pull-right fa fa-sort datatable-sort-icon-position"/>);
    }
  }
  
  /**
   * Render table body
   */
  renderTableBody(){
    let _self = this;
    let tableBodyArray = [], tableTD = [];
    //let value = this.pageValue;
    
    if(this.pageValue != undefined){
    	let selectState = this.getProperty("selectState");
    	
	    $.each(this.pageValue, function(index, element){
	    	tableTD = [];
	    	element.dataIndex = index;
	   		
	    	// handler page index
	    	if(_self.parseBool(_self.props.indexable)){
		    	tableTD.push(<td>{index + 1}</td>);
		    }
		    
		    // handler single and multiple select
		    if(_self.props.selectionMode == "single"){
		    	//tableTD.push(<td><input type="radio" name={_self.props.id + "_single"} disabled={_self.getDisabledStyleClass()} /></td>);
		    	let value = (selectState != null && selectState != undefined && $.inArray(index, selectState) != -1) ? 1 : 0;
					tableTD.push(<td><SelectionMode id={_self.props.id + "_single" + index} name={_self.props.id + "_single"} value={value} selectionMode="single" /></td>);
		    } else if(_self.props.selectionMode == "multiple"){
		    	//tableTD.push(<td><input type="checkbox" name={_self.props.id + "_multiple"} disabled={_self.getDisabledStyleClass()} /></td>);
		    	let value = (selectState != null && selectState != undefined && $.inArray(index, selectState) != -1) ? 1 : 0;
		    	tableTD.push(<td><SelectionMode id={_self.props.id + "_multiple" + index} name={_self.props.id + "_multiple"} value={value} selectionMode="multiple" /></td>);
		    }
		    
		    // handler row detail
		    if(_self.parseBool(_self.props.detailable)){
		    	tableTD.push(<td className="details-control" />);
	    	}
	    	
	    	React.Children.forEach(_self.props.children, function(child){
					let value = _self.getColumnValue(element, child.props.value);
					
					//if(value != undefined && React.Children.count(child.props.children) == 0){
					//	tableTD.push(<td>{value}</td>);
					//}
					
					if(React.isValidElement(child.props.children)){
						let cloneChildren = React.cloneElement(child.props.children);
						if(child.props.children.props.io == "in"){
							cloneChildren.props.id = child.props.children.props.id + "_" + index;
							
							cloneChildren.props.value = (_self.props.var != undefined) ? "#{" + _self.props.var + "[" + index + "]." + child.props.value + "}" : value;
						} else {
							cloneChildren.props.value = value;
						}
						
						tableTD.push(<td>{cloneChildren}</td>);
					}
					
					else if(child.props.selectionMode == "single"){
						//tableTD.push(<td><input type="radio" name={_self.props.id + "_single"} checked={(1 == value || "1" == value) ? "checked" : null} /></td>);
						value = (selectState != null && selectState != undefined && $.inArray(index, selectState) != -1) ? 1 : value;
						
						tableTD.push(<td><SelectionMode id={_self.props.id + "_single" + index} name={_self.props.id + "_single"} value={value} selectionMode="single" enabled={child.props.enabled} /></td>);
				  }
				  
				  else if(child.props.selectionMode == "multiple"){
				  	//tableTD.push(<td><input type="checkbox" name={_self.props.id + "_multiple"} checked={(1 == value || "1" == value) ? "checked" : null} /></td>);
				  	value = (selectState != null && selectState != undefined && $.inArray(index, selectState) != -1) ? 1 : value;
				  	
				  	tableTD.push(<td><SelectionMode id={_self.props.id + "_multiple" + index} name={_self.props.id + "_multiple"} value={value} selectionMode="multiple" enabled={child.props.enabled} /></td>);
				  }
					
					else if(child.props.render != undefined){
						let render = child.props.render;
		      	if(typeof render == "function") {
		      		tableTD.push(<td>{render(element)}</td>);
		      	} else {
		      		tableTD.push(<td>==None==</td>);
		      	}
					}
					
					else {
						tableTD.push(<td>{value}</td>);
					}
			  });
			  
			  tableBodyArray.push(<tr id={_self.props.id + "_tr_" + index} value={JSON.stringify(element)} data-value={JSON.stringify(element)}>{tableTD}</tr>);
	   });
	  }
   	
    return tableBodyArray;
  }
  
  componentDidMount(){
		this.initEvent();
		this.initDetailEvent();
		
		UpdateContext.put(this.props.id, this);
	}
	
	componentWillUpdate(){
		if(this.updateStatus != "Sort" && this.updateStatus != "Page" && this.updateStatus != "DropDownChange" && this.updateStatus != "Search"){
			this.currentPageIndex = 1;
		}
		this.updateStatus = null;
		
		this.clearDetail();
	}
	
	componentWillReceiveProps(nextProps) {
	  //console.log("==componentWillReceiveProps==");
	}
	
	componentWillUnmount(){
		//console.log(this.props.id + "==componentWillUnmount==");
	}
	
	componentDidUpdate(){
		this.initEvent();
		//console.log("==componentDidUpdate==");
	}
	
	/**
	 * Init event
	 */
	initEvent(){
		let _self = this;
		
		// Clear single & multiple change event
		$("input:radio[name=" + this.props.id + "_single" + "]").unbind("change");
		$("input:checkbox[name=" + this.props.id + "_multiple" + "]").unbind("change");
		$("input:checkbox[name=" + this.props.id + "_multiple_selectall" + "]").unbind("change").attr("checked", null);
		this.setMultipleSelectAll();
		
		// handler single select event
		$("input:radio[name=" + this.props.id + "_single" + "]").change((event) => {
	    _self.onSingleChange(event);
	  });
	  
	  // handler multiple select event
	  $("input:checkbox[name=" + this.props.id + "_multiple" + "]").change((event) => {
	    _self.onMultipleChange(event);
	  });
	  
	  // handler multiple select all event
	  $("input:checkbox[name=" + this.props.id + "_multiple_selectall" + "]").change((event) => {
	    _self.onSelectAll(event);
	  });
	}
	
	/**
	 * Init detail event
	 */
	initDetailEvent(){
		let _self = this, detailRows = [];
		
		$("#" + this.props.id + " tbody").on("click", "tr td.details-control", function() {
			let tr = $(this).closest("tr");
			let idx = $.inArray(tr.attr("id"), detailRows);
			
			if(idx === -1){
				tr.addClass("details");
				detailRows.push(tr.attr("id"));
				
				let colspan = $(tr).children().size();//$(tr).find("td").size();
				$(tr).after(
					"<tr id=" + tr.attr("id") + "_detail" + " style='width:100%;' class='ui-datatable-detail'><td colspan=" + colspan + ">" + 
					_self.getRowDetail(JSON.parse($(tr).attr("data-value"))) + 
					"</td></tr>"
				);
			} else {
				tr.removeClass("details");
				detailRows.splice(idx, 1);
				$("#" + tr.attr("id") + "_detail").remove();
			}
		});
	}
	
	/**
	 * Clear table all tr detail
	 */
	clearDetail(){
		$("#" + this.props.id + " tbody").find("tr").removeClass("details");
		$("#" + this.props.id + " tbody").find("tr.ui-datatable-detail").remove();
	}
	
	getRowDetail(element){
		let {rowDetailRender} = this.props;
		if(typeof rowDetailRender == "function"){
			return rowDetailRender(element);
		}
	}
	
	/**
	 * On select all
	 */
	onSelectAll(event){
		$("input:checkbox[name=" + this.props.id + "_multiple" + "]").each(function(index, element){
			element.checked = event.target.checked ? "checked" : null;
		});
		
		if(this.props.onSelectAll != undefined){
			this.props.onSelectAll(new OnRowSelectEvent(this, event, null, null));
		}
	}
	
	/**
	 * On single change
	 */
	onSingleChange(event){
		this.onRowSelect(event);
	}
	
	/**
	 * On multiple change
	 */
	onMultipleChange(event){
		this.setMultipleSelectAll();
		
		this.onRowSelect(event);
	}
	
	/**
	 * Set multiple select all checkbox
	 */
	setMultipleSelectAll(){
		let selectAllFlag = "checked";
		
		let multiple = $("input:checkbox[name=" + this.props.id + "_multiple" + "]");
		if(multiple && multiple.length > 0){
			multiple.each(function(index, element){
				if(!element.checked){
					selectAllFlag = null;
				};
			});
		} else {
			selectAllFlag = null;
		}
		
		$("input:checkbox[name=" + this.props.id + "_multiple_selectall" + "]").each(function(index, element){
			element.checked = selectAllFlag;
		});
	}
  
  /**
   * On row select
   */
  onRowSelect(event){
		if(this.props.onRowSelect != undefined){
			let tableRow = $(event.target).closest("tr");
			this.props.onRowSelect(new OnRowSelectEvent(this, event, null, JSON.parse($(tableRow).attr("data-value"))));
		}
	}
	
	/**
	 * On sort
	 */
	onSort(event){
    let sortWay = this.state.sortWay == "asc" ? "desc" : "asc";
    this.setState({sortColumn: $(event.target).attr("data-value"), sortWay: sortWay});
    
    this.updateStatus = "Sort";
  }
	
};


/**
 * DataTable component prop types
 */
DataTable.propTypes = $.extend(Data.propTypes, {
	var: React.PropTypes.string,
	
	// datatable event
	onRowSelect: React.PropTypes.func,
	onSelectAll: React.PropTypes.func
}),

/**
 * Get DataTable component default props
 */
DataTable.defaultProps = $.extend(Data.defaultProps, {
	
});
