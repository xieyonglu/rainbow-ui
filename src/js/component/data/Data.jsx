import I18NUtil from "../../util/I18NUtil";
import ELUtil from "../../util/ELUtil";
import Pagination from "../misc/Pagination.jsx";
import i18n from "../../i18n/reactjs-tag.i18n";
import config from "../../component-config";
import Component from "../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2015/09/23
//	
//	author: yonglu.xie
//	
//	description: Data Component Class
//-----------------------------------------------------------------------------------------------
export default class Data extends Component {
	
	constructor(props) {
    super(props);
    
    this.state = {
    	currentPageIndex: 1,
			pageSize: parseInt(this.props.displayLength),
			searchValue: null,
			sortColumn: null,
      sortWay: null, // asc|desc
    };
    this.currentPageIndex = 1;
  }
	
	render(){
		this.initDataComponent();
		
		if(this.props.headerTitle != undefined){
	    return (
	    	<div className={"panel panel-" + this.props.styleClass}>
	    		<div className="panel-heading">
	    			<span className="panel-title">
	    				{this.props.headerTitle}
	    			</span>
	    			
	    			{this.renderPanelRightHeader()}
	    		</div>
	    		
	    		<div className="panel-body">
	    			{this.renderData()}
	    			
	    			{this.renderPagination()}
	    		</div>
	    		
	    		{this.renderPanelFooter()}
	    	</div>
	    );
    } else {
	    return (
	    	<div className={"panel panel-" + this.props.styleClass}>
	    		<div className="panel-body">
	    			{this.renderData()}
	    			
	    			{this.renderPagination()}
	    		</div>
	    	</div>
	    );
    }
	}
	
	/**
	 * Render panel right header
	 */
	renderPanelRightHeader(){
		if(this.props.panelHeader != null && this.props.panelHeader != undefined){
			return (
				<span style={{float: "right"}}>{this.props.panelHeader}</span>
			);
		}
		return null;
	}
	
	/**
	 * Render panel footer
	 */
	renderPanelFooter(){
		if(this.props.panelFooter != null && this.props.panelFooter != undefined){
			return (
				<div className="panel-footer">{this.props.panelFooter}</div>
			);
		}
		return null;
	}
	
	/**
	 * Render data
	 */
	renderData(){return null;}
	
	/**
	 * Render pagination
	 */
	renderPagination(){
		if(this.parseBool(this.props.pageable)){
			return (
				<Pagination pageCount={this.pageCount} currentPageIndex={this.currentPageIndex} onToPage={this.onToPage.bind(this)} />
    	);
    }
  }
  
  renderBeforeData(){
  	if(this.parseBool(this.props.pageable) || this.parseBool(this.props.searchable)){
	    return (
	    	<div className="row">
	    		{this.renderDropDownList()}
	    		
	    		{this.renderSearch()}
	    	</div>
	    );
    }
  }
  
  /**
   * Render data drop down list
   */
  renderDropDownList(){
  	if(this.parseBool(this.props.pageable)){
  		let dropDownArray = [];
	    $.each(this.props.dropDownList, (index, element) => {
	    	let key = element, value = element;
	    	if(element == -1 || element == "All"){
	    		key = -1;
	    		value = i18n.Data.All;
	    	}
	    	
	    	dropDownArray.push(<option value={key}>{value}</option>);
	    });
	    
	    return (
	    	<div className="col-sm-6 col-md-6 col-lg-6">
	    		{I18NUtil.formatObject(i18n.DropDownInfo, <select style={{width: "50px"}} value={this.state.pageSize} onChange={this.onDropDownChange.bind(this)}>{dropDownArray}</select>)}
	    	</div>
	    );
    }
  }
  
  /**
   * Render search
   */
  renderSearch(){
  	if(this.parseBool(this.props.searchable)){
	    return (
	    	<div className="col-sm-6 col-md-6 col-lg-6" style={{textAlign: "right"}}>
	    		{i18n.Search} <input type="text" onChange={this.onSearchData.bind(this)} />
	    	</div>
	    );
    }
  }
	
	/**
	 * Get value
	 */
	getValue(){
		let {value} = this.props;
		return this.isFunction(value) ? value(this) : value;
	}
	
	/**
	 * Get provider
	 */
	getProvider(){
		let {provider} = this.props;
		if(provider != undefined){
			let pageSize = this.state.pageSize;
			//let pageIndex = (this.state.currentPageIndex - 1) * pageSize + 1;
			let pageIndex = (this.currentPageIndex - 1) * pageSize + 1;
			return provider(pageIndex, pageSize);
    }
	}
	
	/**
	 * Get column value
	 */
	getColumnValue(jsonData, name){
		let value = jsonData;
		if(name != undefined){
			/*$.each(name.split("."), function(index, element){
				if(value != undefined){
					value = value[element];
				}
			});
			return value;*/
			return eval("value." + name);
		}
		return name;
	}
	
	/**
	 * Init data component
	 */
	initDataComponent(){
		this.initDataValue();
		
		this.initSort();
	}
	
	/**
	 * Init data value
	 */
	initDataValue(){
		let pageSize = parseInt(this.state.pageSize);
    let pageIndex = parseInt((this.currentPageIndex - 1) * pageSize + 1);
    
		// handler data value
    if(this.props.value != undefined){
    	let value = this.getValue();
    	value = this.initSearchData(value);
    	
    	if(this.parseBool(this.props.pageable)){
    		let pageValue = [];
    		pageSize = (pageSize == -1) ? value.length : pageSize;
	    	for(let i = pageIndex - 1; i < value.length && i < (pageIndex - 1 + pageSize); i++){
					pageValue.push(value[i]);
				}
				
				this.pageValue = pageValue;
	    	this.pageCount = Pagination.getPageCount(value.length, pageSize);
    	} else {
				this.pageValue = value;
	    	this.pageCount = 1;
    	}
    }
    
    // handler data provider
    else {
    	let provider = this.getProvider();
    	
    	if(provider != null && provider != undefined && provider != ""){
	    	this.pageValue = provider.result;
				this.pageCount = Pagination.getPageCount(provider.count, pageSize);
    	}
    }
	}
	
	/**
	 * Init sort
	 */
	initSort(){
		let pageValue = this.pageValue;
		let {sortColumn, sortWay} = this.state;
		
		//var menmers = ['Milo','Teana','Mary','King','Iroity'];
		//menmers.sort();
		//var numbers = [12,23,10,56,7,88,92,49];
		//numbers.sort(
		//	function(x, y){
		//		return (x - y);
		//	}
		//);
		
		if(sortColumn != undefined){
			let sorter = null;
				
			// if no sorter specific in column
			sorter = sorter == null ? (function (a, b) {
				let v1 = eval("a." + sortColumn);
				let v2 = eval("b." + sortColumn);
				
				if (v1 == null) {
					return v2 == null ? 0 : -1;
				} else if (v2 == null){
					return 1;
				} else {
					//if (isNumberValue) {
					// parse to number value
					//    v1 *= 1;
					//    v2 *= 1;
					//}
          if (v1 > v2){
          	return 1;
          } else if (v1 < v2){
          	return -1;
          } else {
          	return 0;
          }
        }
      }) : sorter;
      
      
      if (sortWay == "asc") {
      	pageValue.sort(sorter);
      } else {
      	pageValue.sort(function (a, b) {
	      	return 0 - sorter(a, b);
	      });
    	}
		}
	}
	
	/**
	 * Init search data
	 */
	initSearchData(value){
		if(this.parseBool(this.props.searchable) && this.state.searchValue != undefined){
			let _self = this, columnValue = [], valueArray = [];
			
			// init all column value
			React.Children.forEach(this.props.children, function(child){
				columnValue.push(child.props.value);
    	});
    	
    	$.each(value, function(index, element){
    		$.each(columnValue, function(index2, element2){
    			let val = eval("element." + element2);
    			if(val != null && val != undefined && String(val).indexOf(_self.state.searchValue) != -1){
    				valueArray.push(element);
    				return false;
    			}
    		});
    	});
    	return valueArray;
    }
    return value;
	}
	
	getDisabledStyleClass(){
		if(ELUtil.parseBoolValue(this.props.disabled)){
			return "disabled";
		}
		return null;
	}
	
	/**
	 * On to page
	 */
	onToPage(currentPageIndex){
  	this.setState({currentPageIndex: currentPageIndex});
  	
  	this.updateStatus = "Page";
  	this.currentPageIndex = currentPageIndex;
	}
	
	/**
	 * On drop down change
	 */
	onDropDownChange(event){
		this.setState({currentPageIndex: 1, pageSize: event.target.value});
		
		this.updateStatus = "DropDownChange";
		this.currentPageIndex = 1;
	}
	
	/**
	 * On search data
	 */
	onSearchData(event){
		this.setState({currentPageIndex: 1, searchValue: event.target.value});
		
		this.updateStatus = "Search";
		this.currentPageIndex = 1;
	}
	
};


/**
 * Data component prop types
 */
Data.propTypes = {
	id: React.PropTypes.string,
	value: React.PropTypes.string,
	provider: React.PropTypes.string,
	selectionMode: React.PropTypes.oneOf(["single", "multiple"]),
	displayLength: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	headerTitle: React.PropTypes.string,
	selectState: React.PropTypes.array, //eg: [0, 1, 2, 3]
	dropDownList: React.PropTypes.array,
	styleClass: React.PropTypes.oneOf(["default", "primary", "success", "warning", "danger", "info"]),
	
	disabled: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
	indexable: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
	headerable: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
	detailable: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
	sortable: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
	pageable: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
	searchable: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
	
	panelHeader: React.PropTypes.object,
	panelFooter: React.PropTypes.object,
};

/**
 * Get data component default props
 */
Data.defaultProps = {
	styleClass: config.DEFAULT_STYLE_CLASS,
	displayLength: 10,
	disabled: false,
	indexable: true,
	headerable: false,
	sortable: false,
	pageable: true,
	detailable: false,
	searchable: false,
	selectionMode: null,
	selectState: null,
	dropDownList: config.DEFAULT_DATATABLE_DROPDOWNLIST
};
